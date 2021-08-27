'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

const utils = require('@graphql-tools/utils');
const graphql = require('graphql');
const SkipRedundantNodesTransform_js = require('relay-compiler/lib/transforms/SkipRedundantNodesTransform.js');
const InlineFragmentsTransform_js = require('relay-compiler/lib/transforms/InlineFragmentsTransform.js');
const ApplyFragmentArgumentTransform_js = require('relay-compiler/lib/transforms/ApplyFragmentArgumentTransform.js');
const FlattenTransform_js = require('relay-compiler/lib/transforms/FlattenTransform.js');
const CompilerContext = _interopDefault(require('relay-compiler/lib/core/CompilerContext.js'));
const RelayParser_js = require('relay-compiler/lib/core/RelayParser.js');
const IRPrinter_js = require('relay-compiler/lib/core/IRPrinter.js');
const Schema_js = require('relay-compiler/lib/core/Schema.js');

function optimizeDocuments(schema, documents, options = {}) {
    options = {
        noLocation: true,
        ...options,
    };
    // @TODO way for users to define directives they use, otherwise relay will throw an unknown directive error
    // Maybe we can scan the queries and add them dynamically without users having to do some extra stuff
    // transformASTSchema creates a new schema instance instead of mutating the old one
    const adjustedSchema = Schema_js.create(utils.printSchemaWithDirectives(schema, options));
    const documentAsts = graphql.concatAST(documents);
    const relayDocuments = RelayParser_js.transform(adjustedSchema, documentAsts.definitions);
    const result = [];
    if (options.includeFragments) {
        const fragmentCompilerContext = new CompilerContext(adjustedSchema)
            .addAll(relayDocuments)
            .applyTransforms([
            ApplyFragmentArgumentTransform_js.transform,
            FlattenTransform_js.transformWithOptions({ flattenAbstractTypes: false }),
            SkipRedundantNodesTransform_js.transform,
        ]);
        result.push(...fragmentCompilerContext
            .documents()
            .filter(doc => doc.kind === 'Fragment')
            .map(doc => graphql.parse(IRPrinter_js.print(adjustedSchema, doc), options)));
    }
    const queryCompilerContext = new CompilerContext(adjustedSchema)
        .addAll(relayDocuments)
        .applyTransforms([
        ApplyFragmentArgumentTransform_js.transform,
        InlineFragmentsTransform_js.transform,
        FlattenTransform_js.transformWithOptions({ flattenAbstractTypes: false }),
        SkipRedundantNodesTransform_js.transform,
    ]);
    result.push(...queryCompilerContext.documents().map(doc => graphql.parse(IRPrinter_js.print(adjustedSchema, doc), options)));
    return result;
}

exports.optimizeDocuments = optimizeDocuments;

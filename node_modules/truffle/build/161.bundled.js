#!/usr/bin/env node

exports.id = 161;
exports.ids = [161];
exports.modules = {

/***/ 621504:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Abi = exports.ConstructorEntry = exports.FallbackEntry = exports.ReceiveEntry = exports.FunctionEntry = exports.EventEntry = exports.EventParameter = exports.Parameter = void 0;
const fc = __importStar(__webpack_require__(145794));
const faker_1 = __importDefault(__webpack_require__(285384));
const change_case_1 = __webpack_require__(377159);
const Parameter = () => fc
    .tuple(fc.record({
    name: ParameterName()
}), TypeRecord())
    .map(([{ name }, type]) => (Object.assign({ name }, type)));
exports.Parameter = Parameter;
const EventParameter = () => fc
    .tuple(fc.record({
    name: ParameterName(),
    indexed: fc.boolean()
}), TypeRecord())
    .map(([{ name, indexed }, type]) => (Object.assign({ name, indexed }, type)));
exports.EventParameter = EventParameter;
const EventEntry = () => fc.record({
    type: fc.constant("event"),
    name: EventName(),
    inputs: fc.array(exports.EventParameter(), { maxLength: 10 }).filter(inputs => {
        if (inputs.filter(({ indexed }) => indexed).length > 3) {
            // only up to 3 params can be indexed
            return false;
        }
        // names that are not blank should be unique
        const names = inputs.map(({ name }) => name).filter(name => name !== "");
        return names.length === new Set(names).size;
    }),
    anonymous: fc.boolean()
});
exports.EventEntry = EventEntry;
const FunctionEntry = () => fc
    .tuple(fc.record({
    type: fc.constant("function")
}, { withDeletedKeys: true }), fc.record({
    name: FunctionName(),
    inputs: fc.array(exports.Parameter(), { maxLength: 10 })
}), fc.record({
    outputs: fc.array(exports.Parameter(), { maxLength: 10 })
}, { withDeletedKeys: true }), fc
    .tuple(fc.oneof(fc.constant("pure"), fc.constant("view"), fc.constant("nonpayable"), fc.constant("payable")), fc.boolean(), fc.boolean())
    .map(([stateMutability, includeLegacy, includeModern]) => {
    const payable = stateMutability === "payable";
    const constant = stateMutability === "view" || stateMutability === "pure";
    const modern = { stateMutability };
    const legacy = { payable, constant };
    return includeLegacy && includeModern
        ? Object.assign(Object.assign({}, modern), legacy) : includeModern
        ? modern
        : legacy;
}))
    .map(records => records.reduce((a, b) => (Object.assign(Object.assign({}, a), b)), {}))
    .filter(entry => {
    const { inputs, outputs = [] } = entry;
    // names that are not blank should be unique
    const names = [...inputs, ...outputs]
        .map(({ name }) => name)
        .filter(name => name !== "");
    return names.length === new Set(names).size;
});
exports.FunctionEntry = FunctionEntry;
const ReceiveEntry = () => fc.record({
    type: fc.constant("receive"),
    stateMutability: fc.constant("payable")
});
exports.ReceiveEntry = ReceiveEntry;
const FallbackEntry = () => fc
    .tuple(fc.record({
    type: fc.constant("fallback")
}), fc
    .tuple(fc.oneof(fc.constant("nonpayable"), fc.constant("payable")), fc.boolean(), fc.boolean())
    .map(([stateMutability, includeLegacy, includeModern]) => {
    const payable = stateMutability === "payable";
    const modern = { stateMutability };
    const legacy = { payable };
    return includeLegacy && includeModern
        ? Object.assign(Object.assign({}, modern), legacy) : includeModern
        ? modern
        : legacy;
}))
    .map(([{ type }, mutabilityFields]) => (Object.assign({ type }, mutabilityFields)));
exports.FallbackEntry = FallbackEntry;
const ConstructorEntry = () => fc
    .tuple(fc.record({
    type: fc.constant("constructor"),
    inputs: fc.array(exports.Parameter())
}), fc
    .tuple(fc.oneof(fc.constant("nonpayable"), fc.constant("payable")), fc.boolean(), fc.boolean())
    .map(([stateMutability, includeLegacy, includeModern]) => {
    const payable = stateMutability === "payable";
    const modern = { stateMutability };
    const legacy = { payable };
    return includeLegacy && includeModern
        ? Object.assign(Object.assign({}, modern), legacy) : includeModern
        ? modern
        : legacy;
}))
    .map(([{ type, inputs }, mutabilityFields]) => (Object.assign({ type,
    inputs }, mutabilityFields)));
exports.ConstructorEntry = ConstructorEntry;
const Abi = () => fc
    .tuple(exports.ConstructorEntry(), exports.FallbackEntry(), exports.ReceiveEntry(), fc.array(fc.oneof(exports.FunctionEntry(), exports.EventEntry())))
    .chain(([constructor, fallback, receive, entries]) => fc.shuffledSubarray([constructor, fallback, receive, ...entries]));
exports.Abi = Abi;
var Numerics;
(function (Numerics) {
    // 0 < n <= 32
    // use subtraction so that fast-check treats 32 as simpler than 1
    Numerics.Bytes = () => fc.nat(31).map(k => 32 - k);
    // 0 < n <= 256, 8 | n
    Numerics.Bits = () => Numerics.Bytes().map(k => 8 * k);
    // 0 < n <= 80
    // use fancy math so that fast-check treats 18 as the simplest case
    //
    //     0 ----------------- 79
    //     lines up as:
    //     18 ------ 80, 0 --- 17
    Numerics.DecimalPlaces = () => fc.nat(79).map(k => ((k + 17) % 80) + 1);
    Numerics.Precision = () => fc.tuple(Numerics.Bits(), Numerics.DecimalPlaces());
})(Numerics || (Numerics = {}));
var Primitives;
(function (Primitives) {
    Primitives.Uint = () => Numerics.Bits().map(m => `uint${m}`);
    Primitives.Int = () => Numerics.Bits().map(m => `int${m}`);
    Primitives.Address = () => fc.constant("address");
    Primitives.Bool = () => fc.constant("bool");
    Primitives.Fixed = () => Numerics.Precision().map(([m, n]) => `fixed${m}x${n}`);
    Primitives.Ufixed = () => Numerics.Precision().map(([m, n]) => `ufixed${m}x${n}`);
    Primitives.BytesM = () => Numerics.Bytes().map(m => `bytes${m}`);
    Primitives.Function = () => fc.constant("function");
    Primitives.Bytes = () => fc.constant("bytes");
    Primitives.String = () => fc.constant("string");
    Primitives.Tuple = () => fc.constant("tuple");
})(Primitives || (Primitives = {}));
const Primitive = () => fc.oneof(Primitives.Uint(), Primitives.Int(), Primitives.Address(), Primitives.Bool(), Primitives.Fixed(), Primitives.Ufixed(), Primitives.BytesM(), Primitives.Function(), Primitives.Bytes(), Primitives.String(), Primitives.Tuple());
const Type = fc.memo(n => n === 0
    ? Primitive()
    : // we cap this at 3 so that fast-check doesn't blow the stack
        fc.oneof(Primitive(), ArrayFixed(n > 3 ? 3 : n), ArrayDynamic(n)));
const ArrayFixed = fc.memo(n => fc
    .tuple(Type(n - 1), fc.integer(1, 256))
    .map(([type, length]) => `${type}[${length}]`));
const ArrayDynamic = fc.memo(n => Type(n - 1).map(type => `${type}[]`));
const reservedWords = new Set([
    "Error",
    "Panic",
    "_",
    "abi",
    "abstract",
    "addmod",
    "address",
    "after",
    "alias",
    "anonymous",
    "apply",
    "as",
    "assembly",
    "assert",
    "auto",
    "block",
    "blockhash",
    "bool",
    "break",
    "byte",
    "bytes",
    "calldata",
    "case",
    "catch",
    "constant",
    "constructor",
    "continue",
    "contract",
    "copyof",
    "days",
    "default",
    "define",
    "delete",
    "ecrecover",
    "else",
    "emit",
    "enum",
    "ether",
    "event",
    "external",
    "fallback",
    "false",
    "final",
    "finney",
    "fixed",
    "for",
    "from",
    "function",
    "gasleft",
    "gwei",
    "hours",
    "if",
    "immutable",
    "implements",
    "import",
    "in",
    "indexed",
    "inline",
    "int",
    "interface",
    "internal",
    "is",
    "keccak256",
    "let",
    "library",
    "log0",
    "log1",
    "log2",
    "log3",
    "log4",
    "macro",
    "mapping",
    "match",
    "memory",
    "minutes",
    "modifier",
    "msg",
    "mulmod",
    "mutable",
    "new",
    "now",
    "null",
    "of",
    "override",
    "partial",
    "payable",
    "pragma",
    "private",
    "promise",
    "public",
    "pure",
    "receive",
    "reference",
    "relocatable",
    "require",
    "return",
    "returns",
    "revert",
    "ripemd160",
    "sealed",
    "seconds",
    "selfdestruct",
    "sha256",
    "sha3",
    "sizeof",
    "static",
    "storage",
    "string",
    "struct",
    "suicide",
    "super",
    "supports",
    "switch",
    "szabo",
    "this",
    "throw",
    "true",
    "try",
    "tx",
    "type",
    "typedef",
    "typeof",
    "ufixed",
    "uint",
    "unchecked",
    "using",
    "var",
    "view",
    "virtual",
    "weeks",
    "wei",
    "while",
    "years"
]);
// borrowed from https://runkit.com/dubzzz/faker-to-fast-check
const fakerToArb = (template, transform = change_case_1.camelCase) => {
    return fc
        .integer()
        .noBias()
        .noShrink()
        .map(seed => {
        faker_1.default.seed(seed);
        return transform(faker_1.default.fake(template));
    })
        .filter(word => !reservedWords.has(word));
};
const ParameterName = () => fc.frequency({ arbitrary: fakerToArb("{{hacker.noun}}"), weight: 9 }, { arbitrary: fc.constant(""), weight: 1 });
const EventName = () => fakerToArb("{{hacker.verb}} {{hacker.noun}}", change_case_1.pascalCase);
const FunctionName = () => fakerToArb("{{hacker.verb}} {{hacker.noun}}");
const TypeRecord = () => Type().chain(type => type.startsWith("tuple")
    ? fc.record({
        type: fc.constant(type),
        components: fc
            .array(exports.Parameter().filter(({ name }) => name !== ""), { minLength: 1, maxLength: 5 })
            .filter(items => {
            const names = items
                .map(({ name }) => name)
                .filter(name => name !== "");
            return names.length === new Set(names).size;
        })
    })
    : fc.record({
        type: fc.constant(type)
    }));
//# sourceMappingURL=arbitrary.js.map

/***/ }),

/***/ 446057:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Arbitrary = void 0;
__exportStar(__webpack_require__(407925), exports);
__exportStar(__webpack_require__(833968), exports);
const Arbitrary = __importStar(__webpack_require__(621504));
exports.Arbitrary = Arbitrary;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 833968:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.normalizeEntry = exports.normalize = void 0;
const normalize = (looseAbi) => looseAbi.map(exports.normalizeEntry);
exports.normalize = normalize;
const normalizeEntry = (looseEntry) => {
    if (looseEntry.type === "event" || looseEntry.type === "error") {
        // nothing gets normalized for events or errorsright now
        return looseEntry;
    }
    const entry = Object.assign(Object.assign(Object.assign({}, looseEntry), normalizeStateMutability(looseEntry)), { type: looseEntry.type || "function" });
    if (entry.type === "function") {
        entry.outputs = entry.outputs || [];
    }
    delete entry.payable;
    delete entry.constant;
    return entry;
};
exports.normalizeEntry = normalizeEntry;
const normalizeStateMutability = ({ stateMutability, payable, constant }) => {
    if (stateMutability) {
        return { stateMutability };
    }
    return {
        stateMutability: payable ? "payable" : constant ? "view" : "nonpayable"
    };
};
//# sourceMappingURL=normalize.js.map

/***/ }),

/***/ 407925:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=types.js.map

/***/ }),

/***/ 932588:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getEventAllocations = exports.getCalldataAllocations = exports.abiSizeInfo = exports.getAbiAllocations = void 0;
const debug_1 = __importDefault(__webpack_require__(615158));
const debug = debug_1.default("codec:abi-data:allocate");
const Import = __importStar(__webpack_require__(568363));
const AbiDataUtils = __importStar(__webpack_require__(967914));
const Evm = __importStar(__webpack_require__(111403));
const Common = __importStar(__webpack_require__(969358));
const Ast = __importStar(__webpack_require__(579545));
const Format = __importStar(__webpack_require__(673949));
const lodash_partition_1 = __importDefault(__webpack_require__(246748));
function getAbiAllocations(userDefinedTypes) {
    let allocations = {};
    for (const dataType of Object.values(userDefinedTypes)) {
        if (dataType.typeClass === "struct") {
            try {
                allocations = allocateStruct(dataType, userDefinedTypes, allocations);
            }
            catch (_) {
                //if allocation fails... oh well, allocation fails, we do nothing and just move on :P
                //note: a better way of handling this would probably be to *mark* it
                //as failed rather than throwing an exception as that would lead to less
                //recomputation, but this is simpler and I don't think the recomputation
                //should really be a problem
            }
        }
    }
    return allocations;
}
exports.getAbiAllocations = getAbiAllocations;
function allocateStruct(dataType, userDefinedTypes, existingAllocations) {
    //NOTE: dataType here should be a *stored* type!
    //it is up to the caller to take care of this
    return allocateMembers(dataType.id, dataType.memberTypes, userDefinedTypes, existingAllocations);
}
//note: we will still allocate circular structs, even though they're not allowed in the abi, because it's
//not worth the effort to detect them.  However on mappings or internal functions, we'll vomit (allocate null)
function allocateMembers(parentId, members, userDefinedTypes, existingAllocations, start = 0) {
    let dynamic = false;
    //note that we will mutate the start argument also!
    //don't allocate things that have already been allocated
    if (parentId in existingAllocations) {
        return existingAllocations;
    }
    let allocations = Object.assign({}, existingAllocations); //otherwise, we'll be adding to this, so we better clone
    let memberAllocations = [];
    for (const member of members) {
        let length;
        let dynamicMember;
        ({ size: length, dynamic: dynamicMember, allocations } = abiSizeAndAllocate(member.type, userDefinedTypes, allocations));
        //vomit on illegal types in calldata -- note the short-circuit!
        if (length === undefined) {
            allocations[parentId] = null;
            return allocations;
        }
        let pointer = {
            location: "abi",
            start,
            length
        };
        memberAllocations.push({
            name: member.name,
            type: member.type,
            pointer
        });
        start += length;
        dynamic = dynamic || dynamicMember;
    }
    allocations[parentId] = {
        members: memberAllocations,
        length: dynamic ? Evm.Utils.WORD_SIZE : start,
        dynamic
    };
    return allocations;
}
//first return value is the actual size.
//second return value is whether the type is dynamic
//both will be undefined if type is a mapping or internal function
//third return value is resulting allocations, INCLUDING the ones passed in
function abiSizeAndAllocate(dataType, userDefinedTypes, existingAllocations) {
    switch (dataType.typeClass) {
        case "bool":
        case "address":
        case "contract":
        case "int":
        case "uint":
        case "fixed":
        case "ufixed":
        case "enum":
            return {
                size: Evm.Utils.WORD_SIZE,
                dynamic: false,
                allocations: existingAllocations
            };
        case "string":
            return {
                size: Evm.Utils.WORD_SIZE,
                dynamic: true,
                allocations: existingAllocations
            };
        case "bytes":
            return {
                size: Evm.Utils.WORD_SIZE,
                dynamic: dataType.kind === "dynamic",
                allocations: existingAllocations
            };
        case "mapping":
            return {
                allocations: existingAllocations
            };
        case "function":
            switch (dataType.visibility) {
                case "external":
                    return {
                        size: Evm.Utils.WORD_SIZE,
                        dynamic: false,
                        allocations: existingAllocations
                    };
                case "internal":
                    return {
                        allocations: existingAllocations
                    };
            }
        case "array": {
            switch (dataType.kind) {
                case "dynamic":
                    return {
                        size: Evm.Utils.WORD_SIZE,
                        dynamic: true,
                        allocations: existingAllocations
                    };
                case "static":
                    if (dataType.length.isZero()) {
                        //arrays of length 0 are static regardless of base type
                        return {
                            size: 0,
                            dynamic: false,
                            allocations: existingAllocations
                        };
                    }
                    const { size: baseSize, dynamic, allocations } = abiSizeAndAllocate(dataType.baseType, userDefinedTypes, existingAllocations);
                    return {
                        //WARNING!  The use of toNumber() here may throw an exception!
                        //I'm judging this OK since if you have arrays that large we have bigger problems :P
                        size: dataType.length.toNumber() * baseSize,
                        dynamic,
                        allocations
                    };
            }
        }
        case "struct": {
            let allocations = existingAllocations;
            let allocation = allocations[dataType.id];
            if (allocation === undefined) {
                //if we don't find an allocation, we'll have to do the allocation ourselves
                const storedType = (userDefinedTypes[dataType.id]);
                if (!storedType) {
                    throw new Common.UnknownUserDefinedTypeError(dataType.id, Format.Types.typeString(dataType));
                }
                allocations = allocateStruct(storedType, userDefinedTypes, existingAllocations);
                allocation = allocations[storedType.id];
            }
            //having found our allocation, if it's not null, we can just look up its size and dynamicity
            if (allocation !== null) {
                return {
                    size: allocation.length,
                    dynamic: allocation.dynamic,
                    allocations
                };
            }
            //if it is null, this type doesn't go in the abi
            else {
                return {
                    allocations
                };
            }
        }
        case "tuple": {
            //Warning! Yucky wasteful recomputation here!
            let size = 0;
            let dynamic = false;
            //note that we don't just invoke allocateStruct here!
            //why not? because it has no ID to store the result in!
            //and we can't use a fake like -1 because there might be a recursive call to it,
            //and then the results would overwrite each other
            //I mean, we could do some hashing thing or something, but I think it's easier to just
            //copy the logic in this one case (sorry)
            for (let member of dataType.memberTypes) {
                let { size: memberSize, dynamic: memberDynamic } = abiSizeAndAllocate(member.type, userDefinedTypes, existingAllocations);
                size += memberSize;
                dynamic = dynamic || memberDynamic;
            }
            return { size, dynamic, allocations: existingAllocations };
        }
    }
}
//assumes you've already done allocation! don't use if you haven't!
/**
 * @protected
 */
function abiSizeInfo(dataType, allocations) {
    let { size, dynamic } = abiSizeAndAllocate(dataType, null, allocations);
    //the above line should work fine... as long as allocation is already done!
    //the middle argument, userDefinedTypes, is only needed during allocation
    //again, this function is only for use if allocation is done, so it's safe to pass null here
    return { size, dynamic };
}
exports.abiSizeInfo = abiSizeInfo;
//allocates an external call
//NOTE: returns just a single allocation; assumes primary allocation is already complete!
//NOTE: returns undefined if attempting to allocate a constructor but we don't have the
//bytecode for the constructor
function allocateCalldataAndReturndata(abiEntry, contractNode, referenceDeclarations, userDefinedTypes, abiAllocations, compilationId, compiler, constructorContext, deployedContext) {
    //first: determine the corresponding function node
    //(simultaneously: determine the offset)
    let node = undefined;
    let inputParametersFull;
    let outputParametersFull;
    let inputParametersAbi;
    let outputParametersAbi;
    let offset; //refers to INPUT offset; output offset is always 0
    switch (abiEntry.type) {
        case "constructor":
            if (!constructorContext) {
                return undefined;
            }
            let rawLength = constructorContext.binary.length;
            offset = (rawLength - 2) / 2; //number of bytes in 0x-prefixed bytestring
            //for a constructor, we only want to search the particular contract
            if (contractNode) {
                node = contractNode.nodes.find(functionNode => AbiDataUtils.definitionMatchesAbi(
                //note this needn't actually be a function node, but then it will
                //return false (well, unless it's a getter node!)
                abiEntry, functionNode, referenceDeclarations));
            }
            //if we can't find it, we'll handle this below
            break;
        case "function":
            offset = Evm.Utils.SELECTOR_SIZE;
            //search through base contracts, from most derived (left) to most base (right)
            if (contractNode) {
                const linearizedBaseContracts = contractNode.linearizedBaseContracts;
                debug("linearized: %O", linearizedBaseContracts);
                node = findNodeAndContract(linearizedBaseContracts, referenceDeclarations, functionNode => AbiDataUtils.definitionMatchesAbi(abiEntry, functionNode, referenceDeclarations), contractNode).node; //may be undefined!  that's OK!
            }
            break;
    }
    //now: get the parameters (both full-mode & ABI)
    if (node) {
        switch (node.nodeType) {
            case "FunctionDefinition":
                //normal case
                inputParametersFull = node.parameters.parameters;
                outputParametersFull = node.returnParameters.parameters; //this exists even for constructors!
                break;
            case "VariableDeclaration":
                //getter case
                ({
                    inputs: inputParametersFull,
                    outputs: outputParametersFull
                } = Ast.Utils.getterParameters(node, referenceDeclarations));
                break;
        }
    }
    else {
        inputParametersFull = undefined;
        outputParametersFull = undefined;
    }
    inputParametersAbi = abiEntry.inputs;
    switch (abiEntry.type) {
        case "function":
            outputParametersAbi = abiEntry.outputs;
            break;
        case "constructor":
            //we just leave this empty for constructors
            outputParametersAbi = [];
            break;
    }
    //now: do the allocation!
    let { allocation: abiAllocationInput, mode: inputMode } = allocateDataArguments(inputParametersFull, inputParametersAbi, userDefinedTypes, abiAllocations, compilationId, compiler, offset);
    let { allocation: abiAllocationOutput, mode: outputMode } = allocateDataArguments(outputParametersFull, outputParametersAbi, userDefinedTypes, abiAllocations, compilationId, compiler
    //note no offset
    );
    //finally: transform the allocation appropriately
    let inputArgumentsAllocation = abiAllocationInput.members.map(member => (Object.assign(Object.assign({}, member), { pointer: {
            location: "calldata",
            start: member.pointer.start,
            length: member.pointer.length
        } })));
    let outputArgumentsAllocation = abiAllocationOutput.members.map(member => (Object.assign(Object.assign({}, member), { pointer: {
            location: "returndata",
            start: member.pointer.start,
            length: member.pointer.length
        } })));
    let inputsAllocation = {
        abi: abiEntry,
        offset,
        arguments: inputArgumentsAllocation,
        allocationMode: inputMode
    };
    let outputsAllocation;
    switch (abiEntry.type) {
        case "function":
            outputsAllocation = {
                selector: new Uint8Array(),
                arguments: outputArgumentsAllocation,
                allocationMode: outputMode,
                kind: "return"
            };
            break;
        case "constructor":
            outputsAllocation = constructorOutputAllocation(deployedContext, contractNode, referenceDeclarations, outputMode);
            break;
    }
    return { input: inputsAllocation, output: outputsAllocation };
}
//note: allocateEvent doesn't use this because it needs additional
//handling for indexed parameters (maybe these can be unified in
//the future though?)
function allocateDataArguments(fullModeParameters, abiParameters, userDefinedTypes, abiAllocations, compilationId, compiler, offset = 0) {
    let allocationMode = fullModeParameters ? "full" : "abi"; //can degrade
    let parameterTypes;
    let abiAllocation;
    if (allocationMode === "full") {
        let id = "-1"; //fake ID that doesn't matter
        parameterTypes = fullModeParameters.map(parameter => ({
            name: parameter.name,
            type: Ast.Import.definitionToType(parameter, compilationId, compiler) //if node is defined, compiler had also better be!
        }));
        debug("parameterTypes: %O", parameterTypes);
        //now: perform the allocation!
        try {
            abiAllocation = allocateMembers(id, parameterTypes, userDefinedTypes, abiAllocations, offset)[id];
        }
        catch (_a) {
            //if something goes wrong, switch to ABI mdoe
            allocationMode = "abi";
        }
    }
    if (allocationMode === "abi") {
        //THIS IS DELIBERATELY NOT AN ELSE
        //this is the ABI case.  we end up here EITHER
        //if node doesn't exist, OR if something went wrong
        //during allocation
        let id = "-1"; //fake irrelevant ID
        parameterTypes = abiParameters.map(parameter => ({
            name: parameter.name,
            type: Import.abiParameterToType(parameter)
        }));
        abiAllocation = allocateMembers(id, parameterTypes, userDefinedTypes, abiAllocations, offset)[id];
    }
    return { allocation: abiAllocation, mode: allocationMode };
}
//allocates an event
//NOTE: returns just a single allocation; assumes primary allocation is already complete!
function allocateEvent(abiEntry, contractNode, referenceDeclarations, userDefinedTypes, abiAllocations, compilationId, compiler) {
    let parameterTypes;
    let id;
    //first: determine the corresponding event node
    //search through base contracts, from most derived (right) to most base (left)
    let node = undefined;
    let definedIn = undefined;
    let allocationMode = "full"; //degrade to abi as needed
    debug("allocating ABI: %O", abiEntry);
    if (contractNode) {
        //first: check same contract for the event
        node = contractNode.nodes.find(eventNode => AbiDataUtils.definitionMatchesAbi(
        //note this needn't actually be an event node, but then it will
        //return false
        abiEntry, eventNode, referenceDeclarations));
        //if we found the node, great!  If not...
        if (!node) {
            debug("didn't find node in base contract...");
            //let's search for the node among the base contracts.
            //but if we find it...
            //[note: the following code is overcomplicated; it was used
            //when we were trying to get the actual node, it's overcomplicated
            //now that we're just determining its presence.  oh well]
            let linearizedBaseContractsMinusSelf = contractNode.linearizedBaseContracts.slice();
            linearizedBaseContractsMinusSelf.shift(); //remove self
            debug("checking contracts: %o", linearizedBaseContractsMinusSelf);
            node = findNodeAndContract(linearizedBaseContractsMinusSelf, referenceDeclarations, eventNode => AbiDataUtils.definitionMatchesAbi(
            //note this needn't actually be a event node, but then it will return false
            abiEntry, eventNode, referenceDeclarations)
            //don't pass deriveContractNode here, we're not checking the contract itself
            ).node; //may be undefined! that's OK!
            if (node) {
                //...if we find the node in an ancestor, we
                //deliberately *don't* allocate!  instead such cases
                //will be handled during a later combination step
                debug("bailing out for later handling!");
                debug("ABI: %O", abiEntry);
                return undefined;
            }
        }
    }
    //otherwise, leave node undefined
    if (node) {
        debug("found node");
        //if we found the node, let's also turn it into a type
        definedIn = (Ast.Import.definitionToStoredType(contractNode, compilationId, compiler)); //can skip reference declarations argument here
    }
    else {
        //if no node, have to fall back into ABI mode
        debug("falling back to ABI because no node");
        allocationMode = "abi";
    }
    //now: construct the list of parameter types, attaching indexedness info
    //and overall position (for later reconstruction)
    let indexed;
    let nonIndexed;
    let abiAllocation; //the untransformed allocation for the non-indexed parameters
    if (allocationMode === "full") {
        let id = node.id.toString();
        let parameters = node.parameters.parameters;
        parameterTypes = parameters.map(definition => ({
            //note: if node is defined, compiler had better be defined, too!
            type: Ast.Import.definitionToType(definition, compilationId, compiler),
            name: definition.name,
            indexed: definition.indexed
        }));
        //now: split the list of parameters into indexed and non-indexed
        [indexed, nonIndexed] = lodash_partition_1.default(parameterTypes, (parameter) => parameter.indexed);
        try {
            //now: perform the allocation for the non-indexed parameters!
            abiAllocation = allocateMembers(id, nonIndexed, userDefinedTypes, abiAllocations)[id]; //note the implicit conversion from EventParameterInfo to NameTypePair
        }
        catch (_a) {
            allocationMode = "abi";
        }
    }
    if (allocationMode === "abi") {
        //THIS IS DELIBERATELY NOT AN ELSE
        id = "-1"; //fake irrelevant ID
        parameterTypes = abiEntry.inputs.map(abiParameter => ({
            type: Import.abiParameterToType(abiParameter),
            name: abiParameter.name,
            indexed: abiParameter.indexed
        }));
        //now: split the list of parameters into indexed and non-indexed
        [indexed, nonIndexed] = lodash_partition_1.default(parameterTypes, (parameter) => parameter.indexed);
        //now: perform the allocation for the non-indexed parameters!
        abiAllocation = allocateMembers(id, nonIndexed, userDefinedTypes, abiAllocations)[id]; //note the implicit conversion from EventParameterInfo to NameTypePair
    }
    //now: transform the result appropriately
    const nonIndexedArgumentsAllocation = abiAllocation.members.map(member => (Object.assign(Object.assign({}, member), { pointer: {
            location: "eventdata",
            start: member.pointer.start,
            length: member.pointer.length
        } })));
    //now: allocate the indexed parameters
    const startingTopic = abiEntry.anonymous ? 0 : 1; //if not anonymous, selector takes up topic 0
    const indexedArgumentsAllocation = indexed.map(({ type, name }, position) => ({
        type,
        name,
        pointer: {
            location: "eventtopic",
            topic: startingTopic + position
        }
    }));
    //finally: weave these back together
    let argumentsAllocation = [];
    for (let parameter of parameterTypes) {
        let arrayToGrabFrom = parameter.indexed
            ? indexedArgumentsAllocation
            : nonIndexedArgumentsAllocation;
        argumentsAllocation.push(arrayToGrabFrom.shift()); //note that push and shift both modify!
    }
    //...and return
    return {
        abi: abiEntry,
        contextHash: undefined,
        definedIn,
        arguments: argumentsAllocation,
        allocationMode,
        anonymous: abiEntry.anonymous
    };
}
function getCalldataAllocationsForContract(abi, contractNode, constructorContext, deployedContext, referenceDeclarations, userDefinedTypes, abiAllocations, compilationId, compiler) {
    let allocations = {
        constructorAllocation: undefined,
        //(if it doesn't then it will remain as default)
        functionAllocations: {}
    };
    if (!abi) {
        //if no ABI, can't do much!
        allocations.constructorAllocation = defaultConstructorAllocation(constructorContext, contractNode, referenceDeclarations, deployedContext);
        return allocations;
    }
    for (let abiEntry of abi) {
        if (AbiDataUtils.abiEntryIsObviouslyIllTyped(abiEntry) ||
            AbiDataUtils.abiEntryHasStorageParameters(abiEntry)) {
            //the first of these conditions is a hack workaround for a Solidity bug.
            //the second of these is because... seriously? we're not handling these
            //(at least not for now!) (these only exist prior to Solidity 0.5.6,
            //thankfully)
            continue;
        }
        switch (abiEntry.type) {
            case "constructor":
                allocations.constructorAllocation = allocateCalldataAndReturndata(abiEntry, contractNode, referenceDeclarations, userDefinedTypes, abiAllocations, compilationId, compiler, constructorContext, deployedContext);
                debug("constructor alloc: %O", allocations.constructorAllocation);
                break;
            case "function":
                allocations.functionAllocations[AbiDataUtils.abiSelector(abiEntry)] = allocateCalldataAndReturndata(abiEntry, contractNode, referenceDeclarations, userDefinedTypes, abiAllocations, compilationId, compiler, constructorContext, deployedContext);
                break;
            default:
                //skip over fallback and event
                break;
        }
    }
    if (!allocations.constructorAllocation) {
        //set a default constructor allocation if we haven't allocated one yet
        allocations.constructorAllocation = defaultConstructorAllocation(constructorContext, contractNode, referenceDeclarations, deployedContext);
        debug("default constructor alloc: %O", allocations.constructorAllocation);
    }
    return allocations;
}
function defaultConstructorAllocation(constructorContext, contractNode, referenceDeclarations, deployedContext) {
    if (!constructorContext) {
        return undefined;
    }
    const rawLength = constructorContext.binary.length;
    const offset = (rawLength - 2) / 2; //number of bytes in 0x-prefixed bytestring
    const input = {
        offset,
        abi: AbiDataUtils.DEFAULT_CONSTRUCTOR_ABI,
        arguments: [],
        allocationMode: "full"
    };
    const output = constructorOutputAllocation(deployedContext, contractNode, referenceDeclarations, "full"); //assume full, degrade as necessary
    return { input, output };
}
//note: context should be deployed context!
function constructorOutputAllocation(context, contractNode, referenceDeclarations, allocationMode) {
    if (!context) {
        //just return a default abi mode result
        return {
            selector: new Uint8Array(),
            allocationMode: "abi",
            kind: "bytecode",
            delegatecallGuard: false
        };
    }
    const { immutableReferences, compilationId, compiler, contractKind, binary } = context;
    let immutables;
    if (allocationMode === "full" && immutableReferences) {
        if (contractNode) {
            debug("allocating immutables");
            immutables = [];
            for (const [id, references] of Object.entries(immutableReferences)) {
                if (references.length === 0) {
                    continue; //don't allocate immutables that don't exist
                }
                const astId = parseInt(id);
                //get the corresponding variable node; potentially fail
                const { node: definition, contract: definedIn } = findNodeAndContract(contractNode.linearizedBaseContracts, referenceDeclarations, node => node.id === astId, contractNode);
                if (!definition || definition.nodeType !== "VariableDeclaration") {
                    debug("didn't find definition for %d!", astId);
                    allocationMode = "abi";
                    immutables = undefined;
                    break;
                }
                const definedInClass = (Ast.Import.definitionToStoredType(definedIn, compilationId, compiler)); //can skip reference declarations argument here
                const dataType = Ast.Import.definitionToType(definition, compilationId, compiler);
                immutables.push({
                    name: definition.name,
                    definedIn: definedInClass,
                    type: dataType,
                    pointer: {
                        location: "returndata",
                        start: references[0].start,
                        length: references[0].length
                    }
                });
            }
        }
        else if (Object.entries(immutableReferences).length > 0) {
            //if there are immutables, but no contract mode, go to abi mode
            debug("immutables but no node!");
            allocationMode = "abi";
        }
    }
    else {
        debug("no immutables");
    }
    //now, is there a delegatecall guard?
    let delegatecallGuard = false;
    if (contractKind === "library") {
        //note: I am relying on this being present!
        //(also this part is a bit HACKy)
        const pushAddressInstruction = (0x60 + Evm.Utils.ADDRESS_SIZE - 1).toString(16); //"73"
        const delegateCallGuardString = "0x" + pushAddressInstruction + "..".repeat(Evm.Utils.ADDRESS_SIZE);
        if (binary.startsWith(delegateCallGuardString)) {
            delegatecallGuard = true;
        }
    }
    return {
        selector: new Uint8Array(),
        allocationMode,
        kind: "bytecode",
        immutables,
        delegatecallGuard
    };
}
function getCalldataAllocations(contracts, referenceDeclarations, userDefinedTypes, abiAllocations) {
    let allocations = {
        constructorAllocations: {},
        functionAllocations: {}
    };
    for (let contract of contracts) {
        const contractAllocations = getCalldataAllocationsForContract(contract.abi, contract.contractNode, contract.constructorContext, contract.deployedContext, referenceDeclarations[contract.compilationId], userDefinedTypes, abiAllocations, contract.compilationId, contract.compiler);
        if (contract.constructorContext) {
            allocations.constructorAllocations[contract.constructorContext.context] =
                contractAllocations.constructorAllocation;
        }
        if (contract.deployedContext) {
            allocations.functionAllocations[contract.deployedContext.context] =
                contractAllocations.functionAllocations;
            //set this up under both constructor *and* deployed! this is to handle
            //constructor returndata decoding
            allocations.constructorAllocations[contract.deployedContext.context] =
                contractAllocations.constructorAllocation;
        }
    }
    return allocations;
}
exports.getCalldataAllocations = getCalldataAllocations;
function getEventAllocationsForContract(abi, contractNode, referenceDeclarations, userDefinedTypes, abiAllocations, compilationId, compiler) {
    return abi
        .filter((abiEntry) => abiEntry.type === "event")
        .filter((abiEntry) => !AbiDataUtils.abiEntryIsObviouslyIllTyped(abiEntry)) //hack workaround
        .map((abiEntry) => ({
        selector: AbiDataUtils.abiSelector(abiEntry),
        anonymous: abiEntry.anonymous,
        topics: AbiDataUtils.topicsCount(abiEntry),
        allocation: allocateEvent(abiEntry, contractNode, referenceDeclarations, userDefinedTypes, abiAllocations, compilationId, compiler)
    }));
    //note we do *not* filter out undefined allocations; we need these as placeholders
}
//note: constructor context is ignored by this function; no need to pass it in
//WARNING: this function is full of hacks... sorry
function getEventAllocations(contracts, referenceDeclarations, userDefinedTypes, abiAllocations) {
    //first: do allocations for individual contracts
    let individualAllocations = {};
    let groupedAllocations = {};
    let allocations = {};
    for (let { abi, deployedContext, contractNode, compilationId, compiler } of contracts) {
        if (!deployedContext && !contractNode) {
            //we'll need *one* of these two at least
            continue;
        }
        let contractAllocations = getEventAllocationsForContract(abi, contractNode, referenceDeclarations[compilationId], userDefinedTypes, abiAllocations, compilationId, compiler);
        let key = makeContractKey(deployedContext, contractNode ? contractNode.id : undefined, compilationId);
        if (individualAllocations[key] === undefined) {
            individualAllocations[key] = {};
        }
        for (let allocationTemporary of contractAllocations) {
            //we'll use selector *even for anonymous* here, because it's just
            //for determining what overrides what at this point
            individualAllocations[key][allocationTemporary.selector] = {
                context: deployedContext,
                contractNode,
                allocationTemporary,
                compilationId
            };
        }
    }
    //now: put things together for inheritance
    //note how we always put things in order from most derived to most base
    for (let contextOrId in individualAllocations) {
        groupedAllocations[contextOrId] = {};
        for (let selector in individualAllocations[contextOrId]) {
            let { context, contractNode, allocationTemporary, compilationId } = individualAllocations[contextOrId][selector];
            debug("allocationTemporary: %O", allocationTemporary);
            let allocationsTemporary = allocationTemporary.allocation
                ? [allocationTemporary]
                : []; //filter out undefined allocations
            //first, copy from individual allocations
            groupedAllocations[contextOrId][selector] = {
                context,
                contractNode,
                allocationsTemporary
            };
            //if no contract node, that's all.  if there is...
            if (contractNode) {
                //...we have to do inheritance processing
                debug("contract Id: %d", contractNode.id);
                debug("base contracts: %o", contractNode.linearizedBaseContracts);
                let linearizedBaseContractsMinusSelf = contractNode.linearizedBaseContracts.slice();
                linearizedBaseContractsMinusSelf.shift(); //remove contract itself; only want ancestors
                for (let baseId of linearizedBaseContractsMinusSelf) {
                    debug("checking baseId: %d", baseId);
                    let baseNode = referenceDeclarations[compilationId][baseId];
                    if (!baseNode || baseNode.nodeType !== "ContractDefinition") {
                        debug("failed to find node for baseId: %d", baseId);
                        break; //not a continue!
                        //if we can't find the base node, it's better to stop the loop,
                        //rather than continue to potentially erroneous things
                    }
                    //note: we're not actually going to *use* the baseNode here.
                    //we're just checking for whether we can *find* it
                    //why? because if we couldn't find it, that means that events defined in
                    //base contracts *weren't* skipped earlier, and so we shouldn't now add them in
                    let baseContractInfo = contracts.find(contractAllocationInfo => contractAllocationInfo.compilationId === compilationId &&
                        contractAllocationInfo.contractNode &&
                        contractAllocationInfo.contractNode.id === baseId);
                    if (!baseContractInfo) {
                        //similar to above... this failure case can happen when there are
                        //two contracts with the same name and you attempt to use the
                        //artifacts; say you have contracts A, B, and B', where A inherits
                        //from B, and B and B' have the same name, and B' is the one that
                        //gets the artifact; B will end up in reference declarations and so
                        //get found above, but it won't appear in contracts, causing the
                        //problem here.  Unfortunately I don't know any great way to handle this,
                        //so, uh, we treat it as a failure same as above.
                        debug("failed to find contract info for baseId: %d", baseId);
                        break;
                    }
                    let baseContext = baseContractInfo.deployedContext;
                    let baseKey = makeContractKey(baseContext, baseId, compilationId);
                    if (individualAllocations[baseKey][selector] !== undefined) {
                        let baseAllocation = individualAllocations[baseKey][selector].allocationTemporary;
                        debug("(probably) pushing inherited alloc from baseId: %d", baseId);
                        if (baseAllocation.allocation) {
                            //don't push undefined!
                            groupedAllocations[contextOrId][selector].allocationsTemporary.push(baseAllocation);
                        }
                    }
                }
            }
        }
    }
    //finally: transform into final form & return,
    //filtering out things w/o a context
    for (let contractKey in groupedAllocations) {
        if (!hasContext(contractKey)) {
            continue;
            //(this filters out ones that had no context and therefore were
            //given by ID; we needed these at the previous stage but from
            //here on they're irrelevant)
        }
        let contextHash = contextHashForKey(contractKey);
        for (let selector in groupedAllocations[contextHash]) {
            let { allocationsTemporary, context } = groupedAllocations[contextHash][selector];
            for (let { anonymous, topics, allocation } of allocationsTemporary) {
                let contractKind = context.contractKind; //HACK: this is the wrong context, but libraries can't inherit, so it's OK
                if (contractKind !== "library") {
                    contractKind = "contract"; //round off interfaces to being contracts for our purposes :P
                }
                allocation = Object.assign(Object.assign({}, allocation), { contextHash }); //the allocation's context hash at this point depends on where it was defined, but
                //that's not what we want going in the final allocation table!
                if (allocations[topics] === undefined) {
                    allocations[topics] = {
                        bySelector: {},
                        anonymous: { contract: {}, library: {} }
                    };
                }
                if (!anonymous) {
                    if (allocations[topics].bySelector[selector] === undefined) {
                        allocations[topics].bySelector[selector] = {
                            contract: {},
                            library: {}
                        };
                    }
                    if (allocations[topics].bySelector[selector][contractKind][contextHash] === undefined) {
                        allocations[topics].bySelector[selector][contractKind][contextHash] = [];
                    }
                    allocations[topics].bySelector[selector][contractKind][contextHash].push(allocation);
                }
                else {
                    if (allocations[topics].anonymous[contractKind][contextHash] ===
                        undefined) {
                        allocations[topics].anonymous[contractKind][contextHash] = [];
                    }
                    allocations[topics].anonymous[contractKind][contextHash].push(allocation);
                }
            }
        }
    }
    return allocations;
}
exports.getEventAllocations = getEventAllocations;
//if derivedContractNode is passed, we check that before referenceDeclarations
function findNodeAndContract(linearizedBaseContracts, referenceDeclarations, condition, derivedContractNode) {
    const searchResult = linearizedBaseContracts.reduce((foundNodeAndContract, baseContractId) => {
        if (foundNodeAndContract !== undefined) {
            return foundNodeAndContract; //once we've found something, we don't need to keep looking
        }
        debug("searching contract %d", baseContractId);
        let baseContractNode = derivedContractNode && baseContractId === derivedContractNode.id
            ? derivedContractNode //skip the lookup if we already have the right node! this is to reduce errors from collision
            : referenceDeclarations[baseContractId];
        if (baseContractNode === undefined ||
            baseContractNode.nodeType !== "ContractDefinition") {
            debug("bad contract node!");
            return null; //return null rather than undefined so that this will propagate through
            //(i.e. by returning null here we give up the search)
            //(we don't want to continue due to possibility of grabbing the wrong override)
        }
        const node = baseContractNode.nodes.find(condition); //may be undefined! that's OK!
        if (node) {
            debug("found node: %o", node);
            return {
                node,
                contract: baseContractNode
            };
        }
        else {
            return undefined;
        }
    }, undefined //start with no node found
    );
    return searchResult || { node: undefined, contract: undefined };
}
function makeContractKey(context, id, compilationId) {
    return context ? context.context : id + ":" + compilationId; //HACK!
}
function hasContext(key) {
    return key.startsWith("0x"); //HACK!
}
function contextHashForKey(key) {
    return hasContext(key)
        ? key //HACK!
        : undefined;
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 529327:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.decodeAbiReferenceStatic = exports.decodeAbiReferenceByAddress = exports.decodeAbi = void 0;
const debug_1 = __importDefault(__webpack_require__(615158));
const debug = debug_1.default("codec:abi-data:decode");
const read_1 = __importDefault(__webpack_require__(512252));
const Conversion = __importStar(__webpack_require__(888610));
const Basic = __importStar(__webpack_require__(87023));
const Bytes = __importStar(__webpack_require__(868704));
const Format = __importStar(__webpack_require__(673949));
const Evm = __importStar(__webpack_require__(111403));
const allocate_1 = __webpack_require__(932588);
const errors_1 = __webpack_require__(361304);
function* decodeAbi(dataType, pointer, info, options = {}) {
    if (Format.Types.isReferenceType(dataType) ||
        dataType.typeClass === "tuple") {
        //I don't want tuples to be considered a reference type, but it makes sense
        //to group them for this purpose
        let dynamic;
        try {
            dynamic = allocate_1.abiSizeInfo(dataType, info.allocations.abi).dynamic;
        }
        catch (error) {
            if (options.strictAbiMode) {
                throw new errors_1.StopDecodingError(error.error);
            }
            return {
                //dunno why TS is failing at this inference
                type: dataType,
                kind: "error",
                error: error.error
            };
        }
        if (dynamic) {
            return yield* decodeAbiReferenceByAddress(dataType, pointer, info, options);
        }
        else {
            return yield* decodeAbiReferenceStatic(dataType, pointer, info, options);
        }
    }
    else {
        debug("pointer %o", pointer);
        return yield* Basic.Decode.decodeBasic(dataType, pointer, info, options);
    }
}
exports.decodeAbi = decodeAbi;
function* decodeAbiReferenceByAddress(dataType, pointer, info, options = {}) {
    let { strictAbiMode: strict, abiPointerBase: base, lengthOverride } = options;
    base = base || 0; //in case base was undefined
    const { allocations: { abi: allocations }, state } = info;
    debug("pointer %o", pointer);
    //this variable holds the location we should look to *next*
    //stack pointers point to calldata; other pointers point to same location
    const location = pointer.location === "stack" || pointer.location === "stackliteral"
        ? "calldata"
        : pointer.location;
    if (pointer.location !== "stack" && pointer.location !== "stackliteral") {
        //length overrides are only applicable when you're decoding a pointer
        //from the stack!  otherwise they must be ignored!
        lengthOverride = undefined;
    }
    let rawValue;
    try {
        rawValue = yield* read_1.default(pointer, state);
    }
    catch (error) {
        if (strict) {
            throw new errors_1.StopDecodingError(error.error);
        }
        return {
            //dunno why TS is failing here
            type: dataType,
            kind: "error",
            error: error.error
        };
    }
    let rawValueAsBN = Conversion.toBN(rawValue);
    debug("rawValue: %O", rawValue);
    debug("rawValueAsBN: %O", rawValueAsBN);
    let rawValueAsNumber;
    try {
        rawValueAsNumber = rawValueAsBN.toNumber();
    }
    catch (_) {
        let error = {
            kind: "OverlargePointersNotImplementedError",
            pointerAsBN: rawValueAsBN
        };
        if (strict) {
            throw new errors_1.StopDecodingError(error);
        }
        return {
            //again with the TS failures...
            type: dataType,
            kind: "error",
            error
        };
    }
    let startPosition = rawValueAsNumber + base;
    debug("startPosition %d", startPosition);
    let dynamic;
    let size;
    try {
        ({ dynamic, size } = allocate_1.abiSizeInfo(dataType, allocations));
    }
    catch (error) {
        if (strict) {
            throw new errors_1.StopDecodingError(error.error);
        }
        return {
            //dunno why TS is failing here
            type: dataType,
            kind: "error",
            error: error.error
        };
    }
    if (!dynamic) {
        //this will only come up when called from stack.ts
        let staticPointer = {
            location,
            start: startPosition,
            length: size
        };
        return yield* decodeAbiReferenceStatic(dataType, staticPointer, info, options);
    }
    let length;
    let lengthAsBN;
    let rawLength;
    switch (dataType.typeClass) {
        case "bytes":
        case "string":
            //initial word contains length (unless an override was given)
            if (lengthOverride !== undefined) {
                lengthAsBN = lengthOverride;
                //note in this case we do *not* increment start position;
                //if a length override is given, that means the given start
                //position skips over the length word!
            }
            else {
                try {
                    rawLength = yield* read_1.default({
                        location,
                        start: startPosition,
                        length: Evm.Utils.WORD_SIZE
                    }, state);
                }
                catch (error) {
                    if (strict) {
                        throw new errors_1.StopDecodingError(error.error);
                    }
                    return {
                        //dunno why TS is failing here
                        type: dataType,
                        kind: "error",
                        error: error.error
                    };
                }
                lengthAsBN = Conversion.toBN(rawLength);
                startPosition += Evm.Utils.WORD_SIZE; //increment start position after reading length
                //so it'll be set up to read the data
            }
            if (strict && lengthAsBN.gtn(state[location].length)) {
                //you may notice that the comparison is a bit crude; that's OK, this is
                //just to prevent huge numbers from DOSing us, other errors will still
                //be caught regardless
                throw new errors_1.StopDecodingError({
                    kind: "OverlongArrayOrStringStrictModeError",
                    lengthAsBN,
                    dataLength: state[location].length
                });
            }
            try {
                length = lengthAsBN.toNumber();
            }
            catch (_) {
                //note: if we're in this situation, we can assume we're not in strict mode,
                //as the strict case was handled above
                return {
                    //again with the TS failures...
                    type: dataType,
                    kind: "error",
                    error: {
                        kind: "OverlongArraysAndStringsNotImplementedError",
                        lengthAsBN
                    }
                };
            }
            let childPointer = {
                location,
                start: startPosition,
                length
            };
            return yield* Bytes.Decode.decodeBytes(dataType, childPointer, info, options);
        case "array":
            if (dataType.kind === "static") {
                //static-length array
                lengthAsBN = dataType.length;
                //note we don't increment start position; static arrays don't
                //include a length word!
            }
            else if (lengthOverride !== undefined) {
                debug("override: %o", lengthOverride);
                //dynamic-length array, but with length override
                lengthAsBN = lengthOverride;
                //we don't increment start position; if a length override was
                //given, that means the pointer skipped the length word!
            }
            else {
                //dynamic-length array, read length from data
                //initial word contains array length
                try {
                    rawLength = yield* read_1.default({
                        location,
                        start: startPosition,
                        length: Evm.Utils.WORD_SIZE
                    }, state);
                }
                catch (error) {
                    //error: DecodingError
                    if (strict) {
                        throw new errors_1.StopDecodingError(error.error);
                    }
                    return {
                        type: dataType,
                        kind: "error",
                        error: error.error
                    };
                }
                lengthAsBN = Conversion.toBN(rawLength);
                startPosition += Evm.Utils.WORD_SIZE; //increment startPosition
                //to next word, as first word was used for length
            }
            if (strict && lengthAsBN.gtn(state[location].length)) {
                //you may notice that the comparison is a bit crude; that's OK, this is
                //just to prevent huge numbers from DOSing us, other errors will still
                //be caught regardless
                throw new errors_1.StopDecodingError({
                    kind: "OverlongArraysAndStringsNotImplementedError",
                    lengthAsBN,
                    dataLength: state[location].length
                });
            }
            try {
                length = lengthAsBN.toNumber();
            }
            catch (_) {
                //again, if we get here, we can assume we're not in strict mode
                return {
                    type: dataType,
                    kind: "error",
                    error: {
                        kind: "OverlongArraysAndStringsNotImplementedError",
                        lengthAsBN
                    }
                };
            }
            //note: I've written this fairly generically, but it is worth noting that
            //since this array is of dynamic type, we know that if it's static length
            //then size must be EVM.WORD_SIZE
            let baseSize;
            try {
                baseSize = allocate_1.abiSizeInfo(dataType.baseType, allocations).size;
            }
            catch (error) {
                if (strict) {
                    throw new errors_1.StopDecodingError(error.error);
                }
                return {
                    type: dataType,
                    kind: "error",
                    error: error.error
                };
            }
            let decodedChildren = [];
            for (let index = 0; index < length; index++) {
                decodedChildren.push(yield* decodeAbi(dataType.baseType, {
                    location,
                    start: startPosition + index * baseSize,
                    length: baseSize
                }, info, Object.assign(Object.assign({}, options), { abiPointerBase: startPosition }))); //pointer base is always start of list, never the length
            }
            return {
                type: dataType,
                kind: "value",
                value: decodedChildren
            };
        case "struct":
            return yield* decodeAbiStructByPosition(dataType, location, startPosition, info, options);
        case "tuple":
            return yield* decodeAbiTupleByPosition(dataType, location, startPosition, info, options);
    }
}
exports.decodeAbiReferenceByAddress = decodeAbiReferenceByAddress;
function* decodeAbiReferenceStatic(dataType, pointer, info, options = {}) {
    debug("static");
    debug("pointer %o", pointer);
    const location = pointer.location;
    switch (dataType.typeClass) {
        case "array":
            //we're in the static case, so we know the array must be statically sized
            const lengthAsBN = dataType.length;
            let length;
            try {
                length = lengthAsBN.toNumber();
            }
            catch (_) {
                //note: since this is the static case, we don't bother including the stronger
                //strict-mode guard against getting DOSed by large array sizes, since in this
                //case we're not reading the size from the input; if there's a huge static size
                //array, well, we'll just have to deal with it
                let error = {
                    kind: "OverlongArraysAndStringsNotImplementedError",
                    lengthAsBN
                };
                if (options.strictAbiMode) {
                    throw new errors_1.StopDecodingError(error);
                }
                return {
                    type: dataType,
                    kind: "error",
                    error
                };
            }
            let baseSize;
            try {
                baseSize = allocate_1.abiSizeInfo(dataType.baseType, info.allocations.abi).size;
            }
            catch (error) {
                //error: DecodingError
                if (options.strictAbiMode) {
                    throw new errors_1.StopDecodingError(error.error);
                }
                return {
                    type: dataType,
                    kind: "error",
                    error: error.error
                };
            }
            let decodedChildren = [];
            for (let index = 0; index < length; index++) {
                decodedChildren.push(yield* decodeAbi(dataType.baseType, {
                    location,
                    start: pointer.start + index * baseSize,
                    length: baseSize
                }, info, options));
            }
            return {
                type: dataType,
                kind: "value",
                value: decodedChildren
            };
        case "struct":
            return yield* decodeAbiStructByPosition(dataType, location, pointer.start, info, options);
        case "tuple":
            return yield* decodeAbiTupleByPosition(dataType, location, pointer.start, info, options);
    }
}
exports.decodeAbiReferenceStatic = decodeAbiReferenceStatic;
//note that this function takes the start position as a *number*; it does not take a pointer
function* decodeAbiStructByPosition(dataType, location, startPosition, info, options = {}) {
    const { allocations: { abi: allocations } } = info;
    const typeLocation = location === "calldata" ? "calldata" : null; //other abi locations are not valid type locations
    const typeId = dataType.id;
    const structAllocation = allocations[typeId];
    if (!structAllocation) {
        let error = {
            kind: "UserDefinedTypeNotFoundError",
            type: dataType
        };
        if (options.strictAbiMode || options.allowRetry) {
            throw new errors_1.StopDecodingError(error, true);
            //note that we allow a retry if we couldn't locate the allocation!
        }
        return {
            type: dataType,
            kind: "error",
            error
        };
    }
    let decodedMembers = [];
    for (let index = 0; index < structAllocation.members.length; index++) {
        const memberAllocation = structAllocation.members[index];
        const memberPointer = memberAllocation.pointer;
        const childPointer = {
            location,
            start: startPosition + memberPointer.start,
            length: memberPointer.length
        };
        let memberName = memberAllocation.name;
        let memberType = Format.Types.specifyLocation(memberAllocation.type, typeLocation);
        decodedMembers.push({
            name: memberName,
            value: yield* decodeAbi(memberType, childPointer, info, Object.assign(Object.assign({}, options), { abiPointerBase: startPosition }))
            //note that the base option is only needed in the dynamic case, but we're being indiscriminate
        });
    }
    return {
        type: dataType,
        kind: "value",
        value: decodedMembers
    };
}
//note that this function takes the start position as a *number*; it does not take a pointer
function* decodeAbiTupleByPosition(dataType, location, startPosition, info, options = {}) {
    //WARNING: This case is written in a way that involves a bunch of unnecessary recomputation!
    //I'm writing it this way anyway for simplicity, to avoid rewriting the decoder
    //However it may be worth revisiting this in the future if performance turns out to be a problem
    //(changing this may be pretty hard though)
    let decodedMembers = [];
    let position = startPosition;
    for (const { name, type: memberType } of dataType.memberTypes) {
        const memberSize = allocate_1.abiSizeInfo(memberType, info.allocations.abi).size;
        const childPointer = {
            location,
            start: position,
            length: memberSize
        };
        decodedMembers.push({
            name,
            value: yield* decodeAbi(memberType, childPointer, info, Object.assign(Object.assign({}, options), { abiPointerBase: startPosition }))
            //note that the base option is only needed in the dynamic case, but we're being indiscriminate
        });
        position += memberSize;
    }
    return {
        type: dataType,
        kind: "value",
        value: decodedMembers
    };
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 23894:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.encodeTupleAbi = exports.encodeAbi = void 0;
const debug_1 = __importDefault(__webpack_require__(615158));
const debug = debug_1.default("codec:abi-data:encode");
const Conversion = __importStar(__webpack_require__(888610));
const Basic = __importStar(__webpack_require__(87023));
const Bytes = __importStar(__webpack_require__(868704));
const Evm = __importStar(__webpack_require__(111403));
const allocate_1 = __webpack_require__(932588);
const lodash_sum_1 = __importDefault(__webpack_require__(858364));
//UGH -- it turns out TypeScript can't handle nested tagged unions
//see: https://github.com/microsoft/TypeScript/issues/18758
//so, I'm just going to have to throw in a bunch of type coercions >_>
/**
 * @Category Encoding (low-level)
 */
function encodeAbi(input, allocations) {
    //errors can't be encoded
    if (input.kind === "error") {
        return undefined;
    }
    let bytes;
    //TypeScript can at least infer in the rest of this that we're looking
    //at a value, not an error!  But that's hardly enough...
    switch (input.type.typeClass) {
        case "mapping":
        case "magic":
        case "type":
            //none of these can go in the ABI
            return undefined;
        case "bytes":
            switch (input.type.kind) {
                case "static":
                    return Basic.Encode.encodeBasic(input);
                case "dynamic":
                    bytes = Bytes.Encode.encodeBytes((input));
                    return padAndPrependLength(bytes);
            }
        case "string":
            bytes = Bytes.Encode.encodeBytes(input);
            return padAndPrependLength(bytes);
        case "function": {
            switch (input.type.visibility) {
                case "internal":
                    return undefined; //internal functions can't go in the ABI!
                //Yes, technically we could defer to encodeBasic here, but,
                //c'mon, that's not how the function's supposed to be used
                case "external":
                    return Basic.Encode.encodeBasic(input);
            }
        }
        //now for the serious cases
        case "array": {
            let coercedInput = (input);
            if (coercedInput.reference !== undefined) {
                return undefined; //circular values can't be encoded
            }
            let staticEncoding = encodeTupleAbi(coercedInput.value, allocations);
            switch (input.type.kind) {
                case "static":
                    return staticEncoding;
                case "dynamic":
                    let encoded = new Uint8Array(Evm.Utils.WORD_SIZE + staticEncoding.length); //leave room for length
                    encoded.set(staticEncoding, Evm.Utils.WORD_SIZE); //again, leave room for length beforehand
                    let lengthBytes = Conversion.toBytes(coercedInput.value.length, Evm.Utils.WORD_SIZE);
                    encoded.set(lengthBytes); //and now we set the length
                    return encoded;
            }
        }
        case "struct": {
            let coercedInput = (input);
            if (coercedInput.reference !== undefined) {
                return undefined; //circular values can't be encoded
            }
            return encodeTupleAbi(coercedInput.value.map(({ value }) => value), allocations);
        }
        case "tuple":
            //WARNING: This case is written in a way that involves a bunch of unnecessary recomputation!
            //(That may not be apparent from this one line, but it's true)
            //I'm writing it this way anyway for simplicity, to avoid rewriting the encoder
            //However it may be worth revisiting this in the future if performance turns out to be a problem
            return encodeTupleAbi(input.value.map(({ value }) => value), allocations);
        default:
            return Basic.Encode.encodeBasic(input);
    }
}
exports.encodeAbi = encodeAbi;
/**
 * @Category Encoding (low-level)
 */
function padAndPrependLength(bytes) {
    let length = bytes.length;
    let paddedLength = Evm.Utils.WORD_SIZE * Math.ceil(length / Evm.Utils.WORD_SIZE);
    let encoded = new Uint8Array(Evm.Utils.WORD_SIZE + paddedLength);
    encoded.set(bytes, Evm.Utils.WORD_SIZE); //start 32 in to leave room for the length beforehand
    let lengthBytes = Conversion.toBytes(length, Evm.Utils.WORD_SIZE);
    encoded.set(lengthBytes); //and now we set the length
    return encoded;
}
/**
 * @Category Encoding (low-level)
 */
function encodeTupleAbi(tuple, allocations) {
    let elementEncodings = tuple.map(element => encodeAbi(element, allocations));
    if (elementEncodings.some(element => element === undefined)) {
        return undefined;
    }
    let elementSizeInfo = tuple.map(element => allocate_1.abiSizeInfo(element.type, allocations));
    //heads and tails here are as discussed in the ABI docs;
    //for a static type the head is the encoding and the tail is empty,
    //for a dynamic type the head is the pointer and the tail is the encoding
    let heads = [];
    let tails = [];
    //but first, we need to figure out where the first tail will start,
    //by adding up the sizes of all the heads (we can easily do this in
    //advance via elementSizeInfo, without needing to know the particular
    //values of the heads)
    let startOfNextTail = lodash_sum_1.default(elementSizeInfo.map(elementInfo => elementInfo.size));
    for (let i = 0; i < tuple.length; i++) {
        let head;
        let tail;
        if (!elementSizeInfo[i].dynamic) {
            //static case
            head = elementEncodings[i];
            tail = new Uint8Array(); //empty array
        }
        else {
            //dynamic case
            head = Conversion.toBytes(startOfNextTail, Evm.Utils.WORD_SIZE);
            tail = elementEncodings[i];
        }
        heads.push(head);
        tails.push(tail);
        startOfNextTail += tail.length;
    }
    //finally, we need to concatenate everything together!
    //since we're dealing with Uint8Arrays, we have to do this manually
    let totalSize = startOfNextTail;
    let encoded = new Uint8Array(totalSize);
    let position = 0;
    for (let head of heads) {
        encoded.set(head, position);
        position += head.length;
    }
    for (let tail of tails) {
        encoded.set(tail, position);
        position += tail.length;
    }
    return encoded;
}
exports.encodeTupleAbi = encodeTupleAbi;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 568363:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.abiParameterToType = void 0;
const debug_1 = __importDefault(__webpack_require__(615158));
const debug = debug_1.default("codec:abi-data:import");
const bn_js_1 = __importDefault(__webpack_require__(213550));
function abiParameterToType(abi) {
    let typeName = abi.type;
    let typeHint = abi.internalType;
    //first: is it an array?
    let arrayMatch = typeName.match(/(.*)\[(\d*)\]$/);
    if (arrayMatch) {
        let baseTypeName = arrayMatch[1];
        let lengthAsString = arrayMatch[2]; //may be empty!
        let baseAbi = Object.assign(Object.assign({}, abi), { type: baseTypeName });
        let baseType = abiParameterToType(baseAbi);
        if (lengthAsString === "") {
            return {
                typeClass: "array",
                kind: "dynamic",
                baseType,
                typeHint
            };
        }
        else {
            let length = new bn_js_1.default(lengthAsString);
            return {
                typeClass: "array",
                kind: "static",
                length,
                baseType,
                typeHint
            };
        }
    }
    //otherwise, here are the simple cases
    let typeClass = typeName.match(/^([^0-9]+)/)[1];
    switch (typeClass) {
        case "uint":
        case "int": {
            let bits = typeName.match(/^u?int([0-9]+)/)[1];
            return {
                typeClass,
                bits: parseInt(bits),
                typeHint
            };
        }
        case "bytes":
            let length = typeName.match(/^bytes([0-9]*)/)[1];
            if (length === "") {
                return {
                    typeClass,
                    kind: "dynamic",
                    typeHint
                };
            }
            else {
                return {
                    typeClass,
                    kind: "static",
                    length: parseInt(length),
                    typeHint
                };
            }
        case "address":
            return {
                typeClass,
                kind: "general",
                typeHint
            };
        case "string":
        case "bool":
            return {
                typeClass,
                typeHint
            };
        case "fixed":
        case "ufixed": {
            let [_, bits, places] = typeName.match(/^u?fixed([0-9]+)x([0-9]+)/);
            return {
                typeClass,
                bits: parseInt(bits),
                places: parseInt(places),
                typeHint
            };
        }
        case "function":
            return {
                typeClass,
                visibility: "external",
                kind: "general",
                typeHint
            };
        case "tuple":
            let memberTypes = abi.components.map(component => ({
                name: component.name || undefined,
                type: abiParameterToType(component)
            }));
            return {
                typeClass,
                memberTypes,
                typeHint
            };
    }
}
exports.abiParameterToType = abiParameterToType;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 806494:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Utils = exports.Import = exports.Decode = exports.Encode = exports.Allocate = void 0;
const Allocate = __importStar(__webpack_require__(932588));
exports.Allocate = Allocate;
const Encode = __importStar(__webpack_require__(23894));
exports.Encode = Encode;
const Decode = __importStar(__webpack_require__(529327));
exports.Decode = Decode;
const Import = __importStar(__webpack_require__(568363));
exports.Import = Import;
__exportStar(__webpack_require__(492005), exports);
const Utils = __importStar(__webpack_require__(967914));
exports.Utils = Utils;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 492005:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=types.js.map

/***/ }),

/***/ 967914:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.abiEntryHasStorageParameters = exports.abiEntryIsObviouslyIllTyped = exports.topicsCount = exports.definitionMatchesAbi = exports.abisMatch = exports.abiSelector = exports.abiTupleSignature = exports.abiSignature = exports.abiHasPayableFallback = exports.computeSelectors = exports.DEFAULT_CONSTRUCTOR_ABI = void 0;
const debug_1 = __importDefault(__webpack_require__(615158));
const debug = debug_1.default("codec:abi-data:utils");
// untyped import since no @types/web3-utils exists
const Web3Utils = __webpack_require__(43057);
const Evm = __importStar(__webpack_require__(111403));
const Ast = __importStar(__webpack_require__(579545));
exports.DEFAULT_CONSTRUCTOR_ABI = {
    type: "constructor",
    inputs: [],
    stateMutability: "nonpayable"
};
//note the return value only includes functions!
function computeSelectors(abi) {
    if (abi === undefined) {
        return undefined;
    }
    return Object.assign({}, ...abi
        .filter((abiEntry) => abiEntry.type === "function")
        .map((abiEntry) => ({
        [abiSelector(abiEntry)]: abiEntry
    })));
}
exports.computeSelectors = computeSelectors;
//does this ABI have a payable fallback (or receive) function?
function abiHasPayableFallback(abi) {
    if (abi === undefined) {
        return undefined;
    }
    return abi.some(abiEntry => (abiEntry.type === "fallback" || abiEntry.type === "receive") &&
        abiEntry.stateMutability === "payable");
}
exports.abiHasPayableFallback = abiHasPayableFallback;
//NOTE: this function returns the written out SIGNATURE, not the SELECTOR
function abiSignature(abiEntry) {
    return abiEntry.name + abiTupleSignature(abiEntry.inputs);
}
exports.abiSignature = abiSignature;
function abiTupleSignature(parameters) {
    let components = parameters.map(abiTypeSignature);
    return "(" + components.join(",") + ")";
}
exports.abiTupleSignature = abiTupleSignature;
function abiTypeSignature(parameter) {
    let tupleMatch = parameter.type.match(/tuple(.*)/);
    if (tupleMatch === null) {
        //does not start with "tuple"
        return parameter.type;
    }
    else {
        let tail = tupleMatch[1]; //everything after "tuple"
        let tupleSignature = abiTupleSignature(parameter.components);
        return tupleSignature + tail;
    }
}
function abiSelector(abiEntry) {
    let signature = abiSignature(abiEntry);
    //NOTE: web3's soliditySha3 has a problem if the empty
    //string is passed in.  Fortunately, that should never happen here.
    let hash = Web3Utils.soliditySha3({ type: "string", value: signature });
    switch (abiEntry.type) {
        case "event":
            return hash;
        case "function":
            return hash.slice(0, 2 + 2 * Evm.Utils.SELECTOR_SIZE); //arithmetic to account for hex string
    }
}
exports.abiSelector = abiSelector;
//note: undefined does not match itself :P
function abisMatch(entry1, entry2) {
    //we'll consider two abi entries to match if they have the same
    //type, name (if applicable), and inputs (if applicable).
    //since there's already a signature function, we can just use that.
    if (!entry1 || !entry2) {
        return false;
    }
    if (entry1.type !== entry2.type) {
        return false;
    }
    switch (entry1.type) {
        case "function":
        case "event":
            return (abiSignature(entry1) ===
                abiSignature(entry2));
        case "constructor":
            return (abiTupleSignature(entry1.inputs) ===
                abiTupleSignature(entry2.inputs));
        case "fallback":
        case "receive":
            return true;
    }
}
exports.abisMatch = abisMatch;
function definitionMatchesAbi(abiEntry, definition, referenceDeclarations) {
    try {
        return abisMatch(abiEntry, Ast.Utils.definitionToAbi(definition, referenceDeclarations));
    }
    catch (_) {
        return false; //if an exception occurs, well, that's not a match!
    }
}
exports.definitionMatchesAbi = definitionMatchesAbi;
function topicsCount(abiEntry) {
    let selectorCount = abiEntry.anonymous ? 0 : 1; //if the event is not anonymous, we must account for the selector
    return (abiEntry.inputs.filter(({ indexed }) => indexed).length + selectorCount);
}
exports.topicsCount = topicsCount;
function abiEntryIsObviouslyIllTyped(abiEntry) {
    switch (abiEntry.type) {
        case "fallback":
        case "receive":
            return false;
        case "constructor":
        case "event":
            return abiEntry.inputs.some(abiParameterIsObviouslyIllTyped);
        case "function":
            return (abiEntry.inputs.some(abiParameterIsObviouslyIllTyped) ||
                abiEntry.outputs.some(abiParameterIsObviouslyIllTyped));
    }
}
exports.abiEntryIsObviouslyIllTyped = abiEntryIsObviouslyIllTyped;
function abiParameterIsObviouslyIllTyped(abiParameter) {
    const legalBaseTypeClasses = [
        "uint",
        "int",
        "fixed",
        "ufixed",
        "bool",
        "address",
        "bytes",
        "string",
        "function",
        "tuple"
    ];
    const baseTypeClass = abiParameter.type.match(/^([a-z]*)/)[1];
    const baseTypeClassIsObviouslyWrong = !legalBaseTypeClasses.includes(baseTypeClass);
    if (abiParameter.components) {
        return (abiParameter.components.some(abiParameterIsObviouslyIllTyped) ||
            baseTypeClassIsObviouslyWrong);
    }
    else {
        return baseTypeClassIsObviouslyWrong;
    }
}
function abiEntryHasStorageParameters(abiEntry) {
    const isStorage = (parameter) => parameter.type.endsWith(" storage");
    return (abiEntry.type === "function" &&
        (abiEntry.inputs.some(isStorage) || abiEntry.outputs.some(isStorage)));
    //Note the lack of recursion!  Storage parameters can only occur at
    //top level so there's no need to recurse here
    //(they can also only occur for functions)
}
exports.abiEntryHasStorageParameters = abiEntryHasStorageParameters;
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 721552:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.abifyReturndataDecoding = exports.abifyLogDecoding = exports.abifyCalldataDecoding = exports.abifyResult = exports.abifyType = void 0;
const debug_1 = __importDefault(__webpack_require__(615158));
const debug = debug_1.default("codec:abify");
const Format = __importStar(__webpack_require__(673949));
const Common = __importStar(__webpack_require__(969358));
const Conversion = __importStar(__webpack_require__(888610));
/** @category ABIfication */
function abifyType(dataType, userDefinedTypes) {
    switch (dataType.typeClass) {
        //we only need to specially handle types that don't go in
        //the ABI, or that have some information loss when going
        //in the ABI
        //note that we do need to handle arrays, due to recursion!
        //First: types that do not go in the ABI
        case "mapping":
        case "magic":
            return undefined;
        //Next: address & contract, these can get handled together
        case "address":
        case "contract":
            return {
                typeClass: "address",
                kind: "general",
                typeHint: Format.Types.typeString(dataType)
            };
        case "function":
            switch (dataType.visibility) {
                case "external":
                    return {
                        typeClass: "function",
                        visibility: "external",
                        kind: "general",
                        typeHint: Format.Types.typeString(dataType)
                    };
                case "internal": //these don't go in the ABI
                    return undefined;
            }
            break; //to satisfy TypeScript
        //the complex cases: struct & enum
        case "struct": {
            const fullType = (Format.Types.fullType(dataType, userDefinedTypes));
            if (!fullType) {
                let typeToDisplay = Format.Types.typeString(dataType);
                throw new Common.UnknownUserDefinedTypeError(dataType.id, typeToDisplay);
            }
            const memberTypes = fullType.memberTypes.map(({ name, type: memberType }) => ({
                name,
                type: abifyType(memberType, userDefinedTypes)
            }));
            return {
                typeClass: "tuple",
                typeHint: Format.Types.typeString(fullType),
                memberTypes
            };
        }
        case "enum": {
            const fullType = (Format.Types.fullType(dataType, userDefinedTypes));
            if (!fullType) {
                let typeToDisplay = Format.Types.typeString(dataType);
                throw new Common.UnknownUserDefinedTypeError(dataType.id, typeToDisplay);
            }
            let numOptions = fullType.options.length;
            let bits = 8 * Math.ceil(Math.log2(numOptions) / 8);
            return {
                typeClass: "uint",
                bits,
                typeHint: Format.Types.typeString(fullType)
            };
        }
        //finally: arrays
        case "array":
            return Object.assign(Object.assign({}, dataType), { typeHint: Format.Types.typeString(dataType), baseType: abifyType(dataType.baseType, userDefinedTypes) });
        //default case: just leave as-is
        default:
            return dataType;
    }
}
exports.abifyType = abifyType;
/** @category ABIfication */
function abifyResult(result, userDefinedTypes) {
    switch (result.type.typeClass) {
        case "mapping": //doesn't go in ABI
        case "magic": //doesn't go in ABI
            return undefined;
        case "address":
            //abify the type but leave the value alone
            return Object.assign(Object.assign({}, result), { type: abifyType(result.type, userDefinedTypes) });
        case "contract": {
            let coercedResult = result;
            switch (coercedResult.kind) {
                case "value":
                    return {
                        type: (abifyType(result.type, userDefinedTypes)),
                        kind: "value",
                        value: {
                            asAddress: coercedResult.value.address,
                            rawAsHex: coercedResult.value.rawAddress
                        }
                    };
                case "error":
                    switch (coercedResult.error.kind) {
                        case "ContractPaddingError":
                            return {
                                type: (abifyType(result.type, userDefinedTypes)),
                                kind: "error",
                                error: {
                                    kind: "AddressPaddingError",
                                    paddingType: coercedResult.error.paddingType,
                                    raw: coercedResult.error.raw
                                }
                            };
                        default:
                            //other contract errors are generic errors!
                            //but TS doesn't know this so we coerce
                            return Object.assign(Object.assign({}, coercedResult), { type: (abifyType(result.type, userDefinedTypes)) });
                    }
            }
            break; //to satisfy typescript
        }
        case "function":
            switch (result.type.visibility) {
                case "external": {
                    let coercedResult = result;
                    return Object.assign(Object.assign({}, coercedResult), { type: (abifyType(result.type, userDefinedTypes)) });
                }
                case "internal": //these don't go in the ABI
                    return undefined;
            }
            break; //to satisfy TypeScript
        case "struct": {
            let coercedResult = result;
            switch (coercedResult.kind) {
                case "value":
                    if (coercedResult.reference !== undefined) {
                        return undefined; //no circular values in the ABI!
                    }
                    let abifiedMembers = coercedResult.value.map(({ name, value: member }) => ({
                        name,
                        value: abifyResult(member, userDefinedTypes)
                    }));
                    return {
                        kind: "value",
                        type: (abifyType(result.type, userDefinedTypes)),
                        value: abifiedMembers
                    };
                case "error":
                    return Object.assign(Object.assign({}, coercedResult), { type: (abifyType(result.type, userDefinedTypes)) //note: may throw exception
                     });
            }
        }
        case "enum": {
            //NOTE: this is the one case where errors are converted to non-error values!!
            //(other than recursively, I mean)
            //be aware!
            let coercedResult = result;
            let uintType = (abifyType(result.type, userDefinedTypes)); //may throw exception
            switch (coercedResult.kind) {
                case "value":
                    return {
                        type: uintType,
                        kind: "value",
                        value: {
                            asBN: coercedResult.value.numericAsBN.clone()
                        }
                    };
                case "error":
                    switch (coercedResult.error.kind) {
                        case "EnumOutOfRangeError":
                            return {
                                type: uintType,
                                kind: "value",
                                value: {
                                    asBN: coercedResult.error.rawAsBN.clone()
                                }
                            };
                        case "EnumPaddingError":
                            return {
                                type: uintType,
                                kind: "error",
                                error: {
                                    kind: "UintPaddingError",
                                    paddingType: coercedResult.error.paddingType,
                                    raw: coercedResult.error.raw
                                }
                            };
                        case "EnumNotFoundDecodingError":
                            let numericValue = coercedResult.error.rawAsBN.clone();
                            if (numericValue.bitLength() <= uintType.bits) {
                                return {
                                    type: uintType,
                                    kind: "value",
                                    value: {
                                        asBN: numericValue
                                    }
                                };
                            }
                            else {
                                return {
                                    type: uintType,
                                    kind: "error",
                                    error: {
                                        kind: "UintPaddingError",
                                        paddingType: "left",
                                        raw: Conversion.toHexString(numericValue)
                                    }
                                };
                            }
                        default:
                            return {
                                type: uintType,
                                kind: "error",
                                error: coercedResult.error
                            };
                    }
            }
        }
        case "array": {
            let coercedResult = result;
            switch (coercedResult.kind) {
                case "value":
                    if (coercedResult.reference !== undefined) {
                        return undefined; //no circular values in the ABI!
                    }
                    let abifiedMembers = coercedResult.value.map(member => abifyResult(member, userDefinedTypes));
                    return {
                        kind: "value",
                        type: (abifyType(result.type, userDefinedTypes)),
                        value: abifiedMembers
                    };
                case "error":
                    return Object.assign(Object.assign({}, coercedResult), { type: (abifyType(result.type, userDefinedTypes)) });
            }
        }
        default:
            return result;
    }
}
exports.abifyResult = abifyResult;
/** @category ABIfication */
function abifyCalldataDecoding(decoding, userDefinedTypes) {
    if (decoding.decodingMode === "abi") {
        return decoding;
    }
    switch (decoding.kind) {
        case "function":
        case "constructor":
            return Object.assign(Object.assign({}, decoding), { decodingMode: "abi", arguments: decoding.arguments.map(argument => (Object.assign(Object.assign({}, argument), { value: abifyResult(argument.value, userDefinedTypes) }))) });
        default:
            return Object.assign(Object.assign({}, decoding), { decodingMode: "abi" });
    }
}
exports.abifyCalldataDecoding = abifyCalldataDecoding;
/** @category ABIfication */
function abifyLogDecoding(decoding, userDefinedTypes) {
    if (decoding.decodingMode === "abi") {
        return decoding;
    }
    return Object.assign(Object.assign({}, decoding), { decodingMode: "abi", arguments: decoding.arguments.map(argument => (Object.assign(Object.assign({}, argument), { value: abifyResult(argument.value, userDefinedTypes) }))) });
}
exports.abifyLogDecoding = abifyLogDecoding;
/** @category ABIfication */
function abifyReturndataDecoding(decoding, userDefinedTypes) {
    if (decoding.decodingMode === "abi") {
        return decoding;
    }
    switch (decoding.kind) {
        case "return":
        case "revert":
            return Object.assign(Object.assign({}, decoding), { decodingMode: "abi", arguments: decoding.arguments.map(argument => (Object.assign(Object.assign({}, argument), { value: abifyResult(argument.value, userDefinedTypes) }))) });
        case "bytecode":
            return Object.assign(Object.assign({}, decoding), { decodingMode: "abi", immutables: undefined });
        default:
            return Object.assign(Object.assign({}, decoding), { decodingMode: "abi" });
    }
}
exports.abifyReturndataDecoding = abifyReturndataDecoding;
//# sourceMappingURL=abify.js.map

/***/ }),

/***/ 801452:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.decodeConstant = void 0;
const debug_1 = __importDefault(__webpack_require__(615158));
const debug = debug_1.default("codec:ast:decode");
const read_1 = __importDefault(__webpack_require__(512252));
const Conversion = __importStar(__webpack_require__(888610));
const Basic = __importStar(__webpack_require__(87023));
const Bytes = __importStar(__webpack_require__(868704));
const Evm = __importStar(__webpack_require__(111403));
function* decodeConstant(dataType, pointer, info) {
    debug("pointer %o", pointer);
    //normally, we just dispatch to decodeBasic or decodeBytes.
    //for statically-sized bytes, however, we need to make a special case.
    //you see, decodeBasic expects to find the bytes at the *beginning*
    //of the word, but readDefinition will put them at the *end* of the
    //word.  So we'll have to adjust things ourselves.
    if (dataType.typeClass === "bytes" && dataType.kind === "static") {
        let size = dataType.length;
        let word;
        try {
            word = yield* read_1.default(pointer, info.state);
        }
        catch (error) {
            return {
                type: dataType,
                kind: "error",
                error: error.error
            };
        }
        //not bothering to check padding; shouldn't be necessary
        let bytes = word.slice(Evm.Utils.WORD_SIZE - size);
        return {
            type: dataType,
            kind: "value",
            value: {
                asHex: Conversion.toHexString(bytes)
            }
        }; //we'll skip including a raw value, as that would be meaningless
    }
    //otherwise, as mentioned, just dispatch to decodeBasic or decodeBytes
    debug("not a static bytes");
    if (dataType.typeClass === "bytes" || dataType.typeClass === "string") {
        return yield* Bytes.Decode.decodeBytes(dataType, pointer, info);
    }
    return yield* Basic.Decode.decodeBasic(dataType, pointer, info);
}
exports.decodeConstant = decodeConstant;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 339947:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Decode = exports.Read = void 0;
const Read = __importStar(__webpack_require__(64402));
exports.Read = Read;
const Decode = __importStar(__webpack_require__(801452));
exports.Decode = Decode;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 64402:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.readDefinition = void 0;
const debug_1 = __importDefault(__webpack_require__(615158));
const debug = debug_1.default("codec:ast:read");
const Conversion = __importStar(__webpack_require__(888610));
const Evm = __importStar(__webpack_require__(111403));
const Ast = __importStar(__webpack_require__(579545));
const errors_1 = __webpack_require__(361304);
function readDefinition(pointer) {
    const definition = pointer.definition;
    debug("definition %o", definition);
    switch (Ast.Utils.typeClass(definition)) {
        case "rational":
            let numericalValue = Ast.Utils.rationalValue(definition);
            return Conversion.toBytes(numericalValue, Evm.Utils.WORD_SIZE);
        //you may be wondering, why do we not just use definition.value here,
        //like we do below? answer: because if this isn't a literal, that may not
        //exist
        case "stringliteral":
            return Conversion.toBytes(definition.hexValue);
        default:
            //unfortunately, other types of constants are just too complicated to
            //handle right now.  sorry.
            debug("unsupported constant definition type");
            throw new errors_1.DecodingError({
                kind: "UnsupportedConstantError",
                definition
            });
    }
}
exports.readDefinition = readDefinition;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 437969:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.definitionToStoredType = exports.definitionToType = void 0;
const debug_1 = __importDefault(__webpack_require__(615158));
const debug = debug_1.default("codec:ast:import");
const bn_js_1 = __importDefault(__webpack_require__(213550));
const Compiler = __importStar(__webpack_require__(411619));
const Utils = __importStar(__webpack_require__(800190));
const import_1 = __webpack_require__(242444);
//NOTE: the following function will *not* work for arbitrary nodes! It will,
//however, work well enough for what we need.  I.e., it will:
//1. work when given the actual variable definition as the node,
//2. work when given an elementary type as the node,
//3. work when given a user-defined type as the node,
//4. produce something of the correct size in all cases.
//Use beyond that is at your own risk!
//NOTE: set forceLocation to *null* to force no location. leave it undefined
//to not force a location.
function definitionToType(definition, compilationId, compiler, forceLocation) {
    let typeClass = Utils.typeClass(definition);
    let typeHint = Utils.typeStringWithoutLocation(definition);
    switch (typeClass) {
        case "bool":
            return {
                typeClass,
                typeHint
            };
        case "address": {
            switch (Compiler.Utils.solidityFamily(compiler)) {
                case "pre-0.5.0":
                    return {
                        typeClass,
                        kind: "general",
                        typeHint
                    };
                case "0.5.x":
                    return {
                        typeClass,
                        kind: "specific",
                        payable: Utils.typeIdentifier(definition) === "t_address_payable"
                    };
            }
            break; //to satisfy typescript
        }
        case "uint": {
            let bytes = Utils.specifiedSize(definition);
            return {
                typeClass,
                bits: bytes * 8,
                typeHint
            };
        }
        case "int": {
            //typeScript won't let me group these for some reason
            let bytes = Utils.specifiedSize(definition);
            return {
                typeClass,
                bits: bytes * 8,
                typeHint
            };
        }
        case "fixed": {
            //typeScript won't let me group these for some reason
            let bytes = Utils.specifiedSize(definition);
            let places = Utils.decimalPlaces(definition);
            return {
                typeClass,
                bits: bytes * 8,
                places,
                typeHint
            };
        }
        case "ufixed": {
            let bytes = Utils.specifiedSize(definition);
            let places = Utils.decimalPlaces(definition);
            return {
                typeClass,
                bits: bytes * 8,
                places,
                typeHint
            };
        }
        case "string": {
            if (forceLocation === null) {
                return {
                    typeClass,
                    typeHint
                };
            }
            let location = forceLocation || Utils.referenceType(definition);
            return {
                typeClass,
                location,
                typeHint
            };
        }
        case "bytes": {
            let length = Utils.specifiedSize(definition);
            if (length !== null) {
                return {
                    typeClass,
                    kind: "static",
                    length,
                    typeHint
                };
            }
            else {
                if (forceLocation === null) {
                    return {
                        typeClass,
                        kind: "dynamic",
                        typeHint
                    };
                }
                let location = forceLocation || Utils.referenceType(definition);
                return {
                    typeClass,
                    kind: "dynamic",
                    location,
                    typeHint
                };
            }
        }
        case "array": {
            let baseDefinition = Utils.baseDefinition(definition);
            let baseType = definitionToType(baseDefinition, compilationId, compiler, forceLocation);
            let location = forceLocation || Utils.referenceType(definition);
            if (Utils.isDynamicArray(definition)) {
                if (forceLocation !== null) {
                    return {
                        typeClass,
                        baseType,
                        kind: "dynamic",
                        location,
                        typeHint
                    };
                }
                else {
                    return {
                        typeClass,
                        baseType,
                        kind: "dynamic",
                        typeHint
                    };
                }
            }
            else {
                let length = new bn_js_1.default(Utils.staticLengthAsString(definition));
                if (forceLocation !== null) {
                    return {
                        typeClass,
                        baseType,
                        kind: "static",
                        length,
                        location,
                        typeHint
                    };
                }
                else {
                    return {
                        typeClass,
                        baseType,
                        kind: "static",
                        length,
                        typeHint
                    };
                }
            }
        }
        case "mapping": {
            let keyDefinition = Utils.keyDefinition(definition);
            //note that we can skip the scopes argument here! that's only needed when
            //a general node, rather than a declaration, is being passed in
            let keyType = (definitionToType(keyDefinition, compilationId, compiler, null));
            //suppress the location on the key type (it'll be given as memory but
            //this is meaningless)
            //also, we have to tell TypeScript ourselves that this will be an elementary
            //type; it has no way of knowing that
            debug("definition: %O", definition);
            let valueDefinition = Utils.valueDefinition(definition);
            let valueType = definitionToType(valueDefinition, compilationId, compiler, forceLocation);
            if (forceLocation === null) {
                return {
                    typeClass,
                    keyType,
                    valueType
                };
            }
            return {
                typeClass,
                keyType,
                valueType,
                location: "storage"
            };
        }
        case "function": {
            //WARNING! This case will not work unless given the actual
            //definition!  It should return something *roughly* usable, though.
            let visibility = Utils.visibility(definition); //undefined if bad node
            let mutability = Utils.mutability(definition); //undefined if bad node
            let [inputParameters, outputParameters] = Utils.parameters(definition) || [[], []]; //HACK
            //note: don't force a location on these! use the listed location!
            let inputParameterTypes = inputParameters.map(parameter => definitionToType(parameter, compilationId, compiler));
            let outputParameterTypes = outputParameters.map(parameter => definitionToType(parameter, compilationId, compiler));
            switch (visibility) {
                case "internal":
                    return {
                        typeClass,
                        visibility,
                        mutability,
                        inputParameterTypes,
                        outputParameterTypes
                    };
                case "external":
                    return {
                        typeClass,
                        visibility,
                        kind: "specific",
                        mutability,
                        inputParameterTypes,
                        outputParameterTypes
                    };
            }
            break; //to satisfy typescript
        }
        case "struct": {
            let id = import_1.makeTypeId(Utils.typeId(definition), compilationId);
            let qualifiedName = Utils.typeStringWithoutLocation(definition).match(/struct (.*)/)[1];
            let definingContractName;
            let typeName;
            if (qualifiedName.includes(".")) {
                [definingContractName, typeName] = qualifiedName.split(".");
            }
            else {
                typeName = qualifiedName;
                //leave definingContractName undefined
            }
            if (forceLocation === null) {
                if (definingContractName) {
                    return {
                        typeClass,
                        kind: "local",
                        id,
                        typeName,
                        definingContractName
                    };
                }
                else {
                    return {
                        typeClass,
                        kind: "global",
                        id,
                        typeName
                    };
                }
            }
            let location = forceLocation || Utils.referenceType(definition);
            if (definingContractName) {
                return {
                    typeClass,
                    kind: "local",
                    id,
                    typeName,
                    definingContractName,
                    location
                };
            }
            else {
                return {
                    typeClass,
                    kind: "global",
                    id,
                    typeName,
                    location
                };
            }
        }
        case "enum": {
            let id = import_1.makeTypeId(Utils.typeId(definition), compilationId);
            let qualifiedName = Utils.typeStringWithoutLocation(definition).match(/enum (.*)/)[1];
            let definingContractName;
            let typeName;
            if (qualifiedName.includes(".")) {
                [definingContractName, typeName] = qualifiedName.split(".");
            }
            else {
                typeName = qualifiedName;
                //leave definingContractName undefined
            }
            if (definingContractName) {
                return {
                    typeClass,
                    kind: "local",
                    id,
                    typeName,
                    definingContractName
                };
            }
            else {
                return {
                    typeClass,
                    kind: "global",
                    id,
                    typeName
                };
            }
        }
        case "contract": {
            let id = import_1.makeTypeId(Utils.typeId(definition), compilationId);
            let typeName = Utils.typeStringWithoutLocation(definition).match(/(contract|library|interface) (.*)/)[2]; //note: we use the type string rather than the type identifier
            //in order to avoid having to deal with the underscore problem
            let contractKind = Utils.contractKind(definition);
            return {
                typeClass,
                kind: "native",
                id,
                typeName,
                contractKind
            };
        }
        case "magic": {
            let typeIdentifier = Utils.typeIdentifier(definition);
            let variable = (typeIdentifier.match(/^t_magic_(.*)$/)[1]);
            return {
                typeClass,
                variable
            };
        }
    }
}
exports.definitionToType = definitionToType;
//whereas the above takes variable definitions, this takes the actual type
//definition
function definitionToStoredType(definition, compilationId, compiler, referenceDeclarations) {
    switch (definition.nodeType) {
        case "StructDefinition": {
            let id = import_1.makeTypeId(definition.id, compilationId);
            let definingContractName;
            let typeName;
            if (definition.canonicalName.includes(".")) {
                [definingContractName, typeName] = definition.canonicalName.split(".");
            }
            else {
                typeName = definition.canonicalName;
                //leave definingContractName undefined
            }
            let memberTypes = definition.members.map(member => ({
                name: member.name,
                type: definitionToType(member, compilationId, compiler, null)
            }));
            let definingContract;
            if (referenceDeclarations) {
                let contractDefinition = Object.values(referenceDeclarations).find(node => node.nodeType === "ContractDefinition" &&
                    node.nodes.some((subNode) => import_1.makeTypeId(subNode.id, compilationId) === id));
                if (contractDefinition) {
                    definingContract = (definitionToStoredType(contractDefinition, compilationId, compiler)); //can skip reference declarations
                }
            }
            if (definingContract) {
                return {
                    typeClass: "struct",
                    kind: "local",
                    id,
                    typeName,
                    definingContractName,
                    definingContract,
                    memberTypes
                };
            }
            else {
                return {
                    typeClass: "struct",
                    kind: "global",
                    id,
                    typeName,
                    memberTypes
                };
            }
        }
        case "EnumDefinition": {
            let id = import_1.makeTypeId(definition.id, compilationId);
            let definingContractName;
            let typeName;
            debug("typeName: %s", typeName);
            if (definition.canonicalName.includes(".")) {
                [definingContractName, typeName] = definition.canonicalName.split(".");
            }
            else {
                typeName = definition.canonicalName;
                //leave definingContractName undefined
            }
            let options = definition.members.map(member => member.name);
            let definingContract;
            if (referenceDeclarations) {
                let contractDefinition = Object.values(referenceDeclarations).find(node => node.nodeType === "ContractDefinition" &&
                    node.nodes.some((subNode) => import_1.makeTypeId(subNode.id, compilationId) === id));
                if (contractDefinition) {
                    definingContract = (definitionToStoredType(contractDefinition, compilationId, compiler)); //can skip reference declarations
                    debug("contractDefinition: %o", contractDefinition);
                    debug("definingContract: %o", definingContract);
                }
            }
            if (definingContract) {
                return {
                    typeClass: "enum",
                    kind: "local",
                    id,
                    typeName,
                    definingContractName,
                    definingContract,
                    options
                };
            }
            else {
                return {
                    typeClass: "enum",
                    kind: "global",
                    id,
                    typeName,
                    options
                };
            }
        }
        case "ContractDefinition": {
            let id = import_1.makeTypeId(definition.id, compilationId);
            let typeName = definition.name;
            let contractKind = definition.contractKind;
            let payable = Utils.isContractPayable(definition);
            return {
                typeClass: "contract",
                kind: "native",
                id,
                typeName,
                contractKind,
                payable
            };
        }
    }
}
exports.definitionToStoredType = definitionToStoredType;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 579545:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Import = exports.Utils = void 0;
__exportStar(__webpack_require__(990651), exports);
const Utils = __importStar(__webpack_require__(800190));
exports.Utils = Utils;
const Import = __importStar(__webpack_require__(437969));
exports.Import = Import;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 990651:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=types.js.map

/***/ }),

/***/ 800190:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getterParameters = exports.definitionToAbi = exports.isContractPayable = exports.mutability = exports.functionKind = exports.parameters = exports.valueDefinition = exports.keyDefinition = exports.baseDefinition = exports.rationalValue = exports.regularizeTypeIdentifier = exports.spliceLocation = exports.isSimpleConstant = exports.stackSize = exports.contractKind = exports.referenceType = exports.isReference = exports.isEnum = exports.isMapping = exports.isStruct = exports.staticLengthAsString = exports.staticLength = exports.isDynamicArray = exports.isArray = exports.decimalPlaces = exports.specifiedSize = exports.visibility = exports.typeId = exports.typeClassLongForm = exports.typeClass = exports.typeStringWithoutLocation = exports.typeString = exports.typeIdentifier = void 0;
const debug_1 = __importDefault(__webpack_require__(615158));
const debug = debug_1.default("codec:ast:utils");
const Common = __importStar(__webpack_require__(969358));
const bn_js_1 = __importDefault(__webpack_require__(213550));
const lodash_clonedeep_1 = __importDefault(__webpack_require__(483465));
/** @category Definition Reading */
function typeIdentifier(definition) {
    return definition.typeDescriptions.typeIdentifier;
}
exports.typeIdentifier = typeIdentifier;
/** @category Definition Reading */
function typeString(definition) {
    return definition.typeDescriptions.typeString;
}
exports.typeString = typeString;
/**
 * Returns the type string, but with location (if any) stripped off the end
 * @category Definition Reading
 */
function typeStringWithoutLocation(definition) {
    if (definition.nodeType === "YulTypedName") {
        //for handling Yul variables
        return "bytes32";
    }
    return typeString(definition).replace(/ (storage|memory|calldata)( slice)?$/, "");
}
exports.typeStringWithoutLocation = typeStringWithoutLocation;
/**
 * returns basic type class for a variable definition node
 * e.g.:
 *  `t_uint256` becomes `uint`
 *  `t_struct$_Thing_$20_memory_ptr` becomes `struct`
 * @category Definition Reading
 */
function typeClass(definition) {
    if (definition.nodeType === "YulTypedName") {
        //for handling Yul variables
        return "bytes";
    }
    return typeIdentifier(definition).match(/t_([^$_0-9]+)/)[1];
}
exports.typeClass = typeClass;
/**
 * similar to typeClass, but includes any numeric qualifiers
 * e.g.:
 * `t_uint256` becomes `uint256`
 * @category Definition Reading
 */
function typeClassLongForm(definition) {
    return typeIdentifier(definition).match(/t_([^$_]+)/)[1];
}
exports.typeClassLongForm = typeClassLongForm;
/**
 * for user-defined types -- structs, enums, contracts
 * often you can get these from referencedDeclaration, but not
 * always
 * @category Definition Reading
 */
function typeId(definition) {
    debug("definition %O", definition);
    return parseInt(typeIdentifier(definition).match(/\$(\d+)(_(storage|memory|calldata)(_ptr(_slice)?)?)?$/)[1]);
}
exports.typeId = typeId;
/**
 * For function types; returns internal or external
 * (not for use on other types! will cause an error!)
 * should only return "internal" or "external"
 * @category Definition Reading
 */
function visibility(definition) {
    return ((definition.typeName
        ? definition.typeName.visibility
        : definition.visibility));
}
exports.visibility = visibility;
/**
 * e.g. uint48 -> 6
 * @return size in bytes for explicit type size, or `null` if not stated
 * @category Definition Reading
 */
function specifiedSize(definition) {
    if (definition.nodeType === "YulTypedName") {
        return 32; //for handling Yul variables
    }
    let specified = typeIdentifier(definition).match(/t_[a-z]+([0-9]+)/);
    if (!specified) {
        return null;
    }
    let num = parseInt(specified[1]);
    switch (typeClass(definition)) {
        case "int":
        case "uint":
        case "fixed":
        case "ufixed":
            return num / 8;
        case "bytes":
            return num;
        default:
            debug("Unknown type for size specification: %s", typeIdentifier(definition));
    }
}
exports.specifiedSize = specifiedSize;
/**
 * for fixed-point types, obviously
 * @category Definition Reading
 */
function decimalPlaces(definition) {
    return parseInt(typeIdentifier(definition).match(/t_[a-z]+[0-9]+x([0-9]+)/)[1]);
}
exports.decimalPlaces = decimalPlaces;
/** @category Definition Reading */
function isArray(definition) {
    return typeIdentifier(definition).match(/^t_array/) != null;
}
exports.isArray = isArray;
/** @category Definition Reading */
function isDynamicArray(definition) {
    return (isArray(definition) &&
        //NOTE: we do this by parsing the type identifier, rather than by just
        //checking the length field, because we might be using this on a faked-up
        //definition
        typeIdentifier(definition).match(/\$dyn_(storage|memory|calldata)(_ptr(_slice)?)?$/) != null);
}
exports.isDynamicArray = isDynamicArray;
/**
 * length of a statically sized array -- please only use for arrays
 * already verified to be static!
 * @category Definition Reading
 */
function staticLength(definition) {
    //NOTE: we do this by parsing the type identifier, rather than by just
    //checking the length field, because we might be using this on a faked-up
    //definition
    return parseInt(staticLengthAsString(definition));
}
exports.staticLength = staticLength;
/**
 * see staticLength for explanation
 * @category Definition Reading
 */
function staticLengthAsString(definition) {
    return typeIdentifier(definition).match(/\$(\d+)_(storage|memory|calldata)(_ptr(_slice)?)?$/)[1];
}
exports.staticLengthAsString = staticLengthAsString;
/** @category Definition Reading */
function isStruct(definition) {
    return typeIdentifier(definition).match(/^t_struct/) != null;
}
exports.isStruct = isStruct;
/** @category Definition Reading */
function isMapping(definition) {
    return typeIdentifier(definition).match(/^t_mapping/) != null;
}
exports.isMapping = isMapping;
/** @category Definition Reading */
function isEnum(definition) {
    return typeIdentifier(definition).match(/^t_enum/) != null;
}
exports.isEnum = isEnum;
/** @category Definition Reading */
function isReference(definition) {
    return (typeIdentifier(definition).match(/_(memory|storage|calldata)(_ptr(_slice)?)?$/) != null);
}
exports.isReference = isReference;
/**
 * note: only use this on things already verified to be references
 * @category Definition Reading
 */
function referenceType(definition) {
    return typeIdentifier(definition).match(/_([^_]+)(_ptr(_slice)?)?$/)[1];
}
exports.referenceType = referenceType;
/**
 * only for contract types, obviously! will yield nonsense otherwise!
 * @category Definition Reading
 */
function contractKind(definition) {
    return typeString(definition).split(" ")[0];
}
exports.contractKind = contractKind;
/**
 * stack size, in words, of a given type
 * @category Definition Reading
 */
function stackSize(definition) {
    if (typeClass(definition) === "function" &&
        visibility(definition) === "external") {
        return 2;
    }
    if (isReference(definition) && referenceType(definition) === "calldata") {
        if (typeClass(definition) === "string" ||
            typeClass(definition) === "bytes") {
            return 2;
        }
        if (isDynamicArray(definition)) {
            return 2;
        }
    }
    return 1;
}
exports.stackSize = stackSize;
/** @category Definition Reading */
function isSimpleConstant(definition) {
    const types = ["stringliteral", "rational"];
    return types.includes(typeClass(definition));
}
exports.isSimpleConstant = isSimpleConstant;
/**
 * definition: a storage reference definition
 * location: the location you want it to refer to instead
 * @category Definition Reading
 */
function spliceLocation(definition, location) {
    debug("definition %O", definition);
    return Object.assign(Object.assign({}, definition), { typeDescriptions: Object.assign(Object.assign({}, definition.typeDescriptions), { typeIdentifier: definition.typeDescriptions.typeIdentifier.replace(/_(storage|memory|calldata)(?=((_slice)?_ptr)?$)/, "_" + location) }) });
}
exports.spliceLocation = spliceLocation;
/**
 * adds "_ptr" on to the end of type identifiers that might need it; note that
 * this operates on identifiers, not definitions
 * @category Definition Reading
 */
function regularizeTypeIdentifier(identifier) {
    return identifier.replace(/(_(storage|memory|calldata))((_slice)?_ptr)?$/, "$1_ptr" //this used to use lookbehind for clarity, but Firefox...
    //(see: https://github.com/trufflesuite/truffle/issues/3068 )
    );
}
exports.regularizeTypeIdentifier = regularizeTypeIdentifier;
/**
 * extract the actual numerical value from a node of type rational.
 * currently assumes result will be integer (currently returns BN)
 * @category Definition Reading
 */
function rationalValue(definition) {
    let identifier = typeIdentifier(definition);
    let absoluteValue = identifier.match(/_(\d+)_by_1$/)[1];
    let isNegative = identifier.match(/_minus_/) != null;
    return isNegative ? new bn_js_1.default(absoluteValue).neg() : new bn_js_1.default(absoluteValue);
}
exports.rationalValue = rationalValue;
/** @category Definition Reading */
function baseDefinition(definition) {
    if (definition.typeName && definition.typeName.baseType) {
        return definition.typeName.baseType;
    }
    if (definition.baseType) {
        return definition.baseType;
    }
    //otherwise, we'll have to spoof it up ourselves
    let baseIdentifier = typeIdentifier(definition).match(/^t_array\$_(.*)_\$/)[1];
    //greedy match to extract everything from first to last dollar sign
    // HACK - internal types for memory or storage also seem to be pointers
    baseIdentifier = regularizeTypeIdentifier(baseIdentifier);
    // another HACK - we get away with it because we're only using that one property
    let result = lodash_clonedeep_1.default(definition);
    result.typeDescriptions.typeIdentifier = baseIdentifier;
    return result;
    //WARNING -- these hacks do *not* correctly handle all cases!
    //they do, however, handle the cases we currently need.
}
exports.baseDefinition = baseDefinition;
/**
 * for use for mappings and arrays only!
 * for arrays, fakes up a uint definition
 * @category Definition Reading
 */
function keyDefinition(definition, scopes) {
    let result;
    switch (typeClass(definition)) {
        case "mapping":
            //first: is there a key type already there? if so just use that
            if (definition.keyType) {
                return definition.keyType;
            }
            if (definition.typeName && definition.typeName.keyType) {
                return definition.typeName.keyType;
            }
            //otherwise: is there a referencedDeclaration? if so try using that
            let baseDeclarationId = definition.referencedDeclaration;
            debug("baseDeclarationId %d", baseDeclarationId);
            //if there's a referencedDeclaration, we'll use that
            if (baseDeclarationId !== undefined) {
                let baseDeclaration = scopes[baseDeclarationId].definition;
                return baseDeclaration.keyType || baseDeclaration.typeName.keyType;
            }
            //otherwise, we'll need to perform some hackery, similarly to in baseDefinition;
            //we'll have to spoof it up ourselves
            let keyIdentifier = typeIdentifier(definition).match(/^t_mapping\$_(.*?)_\$_/)[1];
            //use *non*-greedy match; note that if the key type could include
            //the sequence "_$_", this could cause a problem, but they can't; the only
            //valid key types that include dollar signs at all are user-defined types,
            //which contain both "$_" and "_$" but never "_$_".
            // HACK - internal types for memory or storage also seem to be pointers
            keyIdentifier = regularizeTypeIdentifier(keyIdentifier);
            let keyString = typeString(definition).match(/mapping\((.*?) => .*\)( storage)?$/)[1];
            //use *non*-greedy match; note that if the key type could include
            //"=>", this could cause a problem, but mappings are not allowed as key
            //types, so this can't come up
            // another HACK - we get away with it because we're only using that one property
            result = lodash_clonedeep_1.default(definition);
            result.typeDescriptions = {
                typeIdentifier: keyIdentifier,
                typeString: keyString
            };
            return result;
        case "array":
            //HACK -- again we should get away with it because for a uint256 we don't
            //really need to inspect the other properties
            result = lodash_clonedeep_1.default(definition);
            result.typeDescriptions = {
                typeIdentifier: "t_uint256",
                typeString: "uint256"
            };
            return result;
        default:
            debug("unrecognized index access!");
    }
}
exports.keyDefinition = keyDefinition;
/**
 * for use for mappings only!
 * @category Definition Reading
 */
function valueDefinition(definition, scopes) {
    let result;
    //first: is there a value type already there? if so just use that
    if (definition.valueType) {
        return definition.valueType;
    }
    if (definition.typeName && definition.typeName.valueType) {
        return definition.typeName.valueType;
    }
    //otherwise: is there a referencedDeclaration? if so try using that
    let baseDeclarationId = definition.referencedDeclaration;
    debug("baseDeclarationId %d", baseDeclarationId);
    //if there's a referencedDeclaration, we'll use that
    if (baseDeclarationId !== undefined) {
        let baseDeclaration = scopes[baseDeclarationId].definition;
        return baseDeclaration.valueType || baseDeclaration.typeName.valueType;
    }
    //otherwise, we'll need to perform some hackery, similarly to in keyDefinition;
    //we'll have to spoof it up ourselves
    let valueIdentifier = typeIdentifier(definition).match(/^t_mapping\$_.*?_\$_(.*)_\$/)[1];
    //use *non*-greedy match on the key; note that if the key type could include
    //the sequence "_$_", this could cause a problem, but they can't; the only
    //valid key types that include dollar signs at all are user-defined types,
    //which contain both "$_" and "_$" but never "_$_".
    // HACK - internal types for memory or storage also seem to be pointers
    valueIdentifier = regularizeTypeIdentifier(valueIdentifier);
    let valueString = typeString(definition).match(/mapping\(.*? => (.*)\)( storage)?$/)[1];
    //use *non*-greedy match; note that if the key type could include
    //"=>", this could cause a problem, but mappings are not allowed as key
    //types, so this can't come up
    // another HACK - we get away with it because we're only using that one property
    result = lodash_clonedeep_1.default(definition);
    result.typeDescriptions = {
        typeIdentifier: valueIdentifier,
        typeString: valueString
    };
    return result;
}
exports.valueDefinition = valueDefinition;
/**
 * returns input parameters, then output parameters
 * NOTE: ONLY FOR VARIABLE DECLARATIONS OF FUNCTION TYPE
 * NOT FOR FUNCTION DEFINITIONS
 * @category Definition Reading
 */
function parameters(definition) {
    let typeObject = definition.typeName || definition;
    if (typeObject.parameterTypes && typeObject.returnParameterTypes) {
        return [
            typeObject.parameterTypes.parameters,
            typeObject.returnParameterTypes.parameters
        ];
    }
    else {
        return undefined;
    }
}
exports.parameters = parameters;
/**
 * compatibility function, since pre-0.5.0 functions don't have node.kind
 * returns undefined if you don't put in a function node
 * @category Definition Reading
 */
function functionKind(node) {
    if (node.nodeType !== "FunctionDefinition") {
        return undefined;
    }
    if (node.kind !== undefined) {
        //if we're dealing with 0.5.x, we can just read node.kind
        return node.kind;
    }
    //otherwise, we need this little shim
    if (node.isConstructor) {
        return "constructor";
    }
    return node.name === "" ? "fallback" : "function";
}
exports.functionKind = functionKind;
/**
 * similar compatibility function for mutability for pre-0.4.16 versions
 * returns undefined if you don't give it a FunctionDefinition or
 * VariableDeclaration
 * @category Definition Reading
 */
function mutability(node) {
    node = node.typeName || node;
    if (node.nodeType !== "FunctionDefinition" &&
        node.nodeType !== "FunctionTypeName") {
        return undefined;
    }
    if (node.stateMutability !== undefined) {
        //if we're dealing with 0.4.16 or later, we can just read node.stateMutability
        return node.stateMutability;
    }
    //otherwise, we need this little shim
    if (node.payable) {
        return "payable";
    }
    if (node.constant) {
        //yes, it means "view" even if you're looking at a variable declaration!
        //old Solidity was weird!
        return "view";
    }
    return "nonpayable";
}
exports.mutability = mutability;
/**
 * takes a contract definition and asks, does it have a payable fallback
 * function?
 * @category Definition Reading
 */
function isContractPayable(definition) {
    return definition.nodes.some(node => node.nodeType === "FunctionDefinition" &&
        (functionKind(node) === "fallback" || functionKind(node) === "receive") &&
        mutability(node) === "payable");
}
exports.isContractPayable = isContractPayable;
/**
 * the main function. just does some dispatch.
 * returns undefined on bad input
 */
function definitionToAbi(node, referenceDeclarations) {
    switch (node.nodeType) {
        case "FunctionDefinition":
            if (node.visibility === "public" || node.visibility === "external") {
                return functionDefinitionToAbi(node, referenceDeclarations);
            }
            else {
                return undefined;
            }
        case "EventDefinition":
            return eventDefinitionToAbi(node, referenceDeclarations);
        case "VariableDeclaration":
            if (node.visibility === "public") {
                return getterDefinitionToAbi(node, referenceDeclarations);
            }
            else {
                return undefined;
            }
        default:
            return undefined;
    }
}
exports.definitionToAbi = definitionToAbi;
//note: not for FunctionTypeNames or VariableDeclarations
function functionDefinitionToAbi(node, referenceDeclarations) {
    let kind = functionKind(node);
    let stateMutability = mutability(node);
    let payable = stateMutability === "payable";
    let inputs;
    switch (kind) {
        case "function":
            let name = node.name;
            let outputs = parametersToAbi(node.returnParameters.parameters, referenceDeclarations);
            inputs = parametersToAbi(node.parameters.parameters, referenceDeclarations);
            return {
                type: "function",
                name,
                inputs,
                outputs,
                stateMutability
            };
        case "constructor":
            inputs = parametersToAbi(node.parameters.parameters, referenceDeclarations);
            //note: need to coerce because of mutability restrictions
            return {
                type: "constructor",
                inputs,
                stateMutability,
                payable
            };
        case "fallback":
            //note: need to coerce because of mutability restrictions
            return {
                type: "fallback",
                stateMutability,
                payable
            };
        case "receive":
            //note: need to coerce because of mutability restrictions
            return {
                type: "receive",
                stateMutability,
                payable
            };
    }
}
function eventDefinitionToAbi(node, referenceDeclarations) {
    let inputs = parametersToAbi(node.parameters.parameters, referenceDeclarations);
    let name = node.name;
    let anonymous = node.anonymous;
    return {
        type: "event",
        inputs,
        name,
        anonymous
    };
}
function parametersToAbi(nodes, referenceDeclarations) {
    return nodes.map(node => parameterToAbi(node, referenceDeclarations));
}
//NOTE: This function is only for types that could potentially go in the ABI!
//(otherwise it could, say, loop infinitely)
//currently it will only ever be called on those because it's only called from
//definitionToAbi, which filters out any definitions that are not for
//this that *actually* go in the ABI
//if you want to expand it to handle those (by throwing an exception, say),
//you'll need to give it a way to detect circularities
function parameterToAbi(node, referenceDeclarations) {
    let name = node.name; //may be the empty string... or even undefined for a base type
    let components;
    let internalType = typeStringWithoutLocation(node);
    //is this an array? if so use separate logic
    if (typeClass(node) === "array") {
        let baseType = node.typeName ? node.typeName.baseType : node.baseType;
        let baseAbi = parameterToAbi(baseType, referenceDeclarations);
        let arraySuffix = isDynamicArray(node) ? `[]` : `[${staticLength(node)}]`;
        const parameter = {
            name,
            type: baseAbi.type + arraySuffix,
            components: baseAbi.components,
            internalType
        };
        if ("indexed" in node) {
            return Object.assign(Object.assign({}, parameter), { indexed: node.indexed });
        }
        else {
            return parameter;
        }
    }
    let abiTypeString = toAbiType(node, referenceDeclarations);
    //otherwise... is it a struct? if so we need to populate components
    if (typeClass(node) === "struct") {
        let id = typeId(node);
        let referenceDeclaration = referenceDeclarations[id];
        if (referenceDeclaration === undefined) {
            let typeToDisplay = typeString(node);
            throw new Common.UnknownUserDefinedTypeError(id.toString(), typeToDisplay);
        }
        components = parametersToAbi(referenceDeclaration.members, referenceDeclarations);
    }
    const parameter = {
        name,
        type: abiTypeString,
        components,
        internalType
    };
    if ("indexed" in node) {
        return Object.assign(Object.assign({}, parameter), { indexed: node.indexed });
    }
    else {
        return parameter;
    }
}
//note: this is only meant for non-array types that can go in the ABI
//it returns how that type is notated in the ABI -- just the string,
//to be clear, not components of tuples
//again, NOT FOR ARRAYS
function toAbiType(node, referenceDeclarations) {
    let basicType = typeClassLongForm(node); //get that whole first segment!
    switch (basicType) {
        case "contract":
            return "address";
        case "struct":
            return "tuple"; //the more detailed checking will be handled elsewhere
        case "enum":
            let referenceId = typeId(node);
            let referenceDeclaration = referenceDeclarations[referenceId];
            if (referenceDeclaration === undefined) {
                let typeToDisplay = typeString(node);
                throw new Common.UnknownUserDefinedTypeError(referenceId.toString(), typeToDisplay);
            }
            let numOptions = referenceDeclaration.members.length;
            let bits = 8 * Math.ceil(Math.log2(numOptions) / 8);
            return `uint${bits}`;
        default:
            return basicType;
        //note that: int/uint/fixed/ufixed/bytes will have their size and such left on;
        //address will have "payable" left off;
        //external functions will be reduced to "function" (and internal functions shouldn't
        //be passed in!)
        //(mappings shouldn't be passed in either obviously)
        //(nor arrays :P )
    }
}
function getterDefinitionToAbi(node, referenceDeclarations) {
    debug("getter node: %O", node);
    let name = node.name;
    let { inputs, outputs } = getterParameters(node, referenceDeclarations);
    let inputsAbi = parametersToAbi(inputs, referenceDeclarations);
    let outputsAbi = parametersToAbi(outputs, referenceDeclarations);
    return {
        type: "function",
        name,
        inputs: inputsAbi,
        outputs: outputsAbi,
        stateMutability: "view"
    };
}
//how getter parameters work:
//INPUT:
//types other than arrays and mappings take no input.
//array getters take uint256 input. mapping getters take input of their key type.
//if arrays, mappings, stacked, then takes multiple inputs, in order from outside
//to in.
//These parameters are unnamed.
//OUTPUT:
//if base type (beneath mappings & arrays) is not a struct, returns that.
//(This return parameter has no name -- it is *not* named for the variable!)
//if it is a struct, returns multiple outputs, one for each member of the struct,
//*except* arrays and mappings.  (And they have names, the names of the members.)
//important note: inner structs within a struct are just returned, not
//partially destructured like the outermost struct!  Yes, this is confusing.
function getterParameters(node, referenceDeclarations) {
    let baseNode = node.typeName || node;
    let inputs = [];
    while (typeClass(baseNode) === "array" || typeClass(baseNode) === "mapping") {
        let keyNode = keyDefinition(baseNode); //note: if baseNode is an array, this spoofs up a uint256 definition
        inputs.push(Object.assign(Object.assign({}, keyNode), { name: "" })); //again, getter input params have no name
        switch (typeClass(baseNode)) {
            case "array":
                baseNode = baseNode.baseType;
                break;
            case "mapping":
                baseNode = baseNode.valueType;
                break;
        }
    }
    //at this point, baseNode should hold the base type
    //now we face the question: is it a struct?
    if (typeClass(baseNode) === "struct") {
        let id = typeId(baseNode);
        let referenceDeclaration = referenceDeclarations[id];
        if (referenceDeclaration === undefined) {
            let typeToDisplay = typeString(baseNode);
            throw new Common.UnknownUserDefinedTypeError(id.toString(), typeToDisplay);
        }
        let outputs = referenceDeclaration.members.filter(member => typeClass(member) !== "array" && typeClass(member) !== "mapping");
        return { inputs, outputs }; //no need to wash name!
    }
    else {
        //only one output; it's just the base node, with its name washed
        return { inputs, outputs: [Object.assign(Object.assign({}, baseNode), { name: "" })] };
    }
}
exports.getterParameters = getterParameters;
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 789638:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.byteLength = void 0;
const debug_1 = __importDefault(__webpack_require__(615158));
const debug = debug_1.default("codec:basic:allocate");
const Common = __importStar(__webpack_require__(969358));
const Evm = __importStar(__webpack_require__(111403));
const Format = __importStar(__webpack_require__(673949));
//only for direct types!
function byteLength(dataType, userDefinedTypes) {
    switch (dataType.typeClass) {
        case "bool":
            return 1;
        case "address":
        case "contract":
            return Evm.Utils.ADDRESS_SIZE;
        case "int":
        case "uint":
        case "fixed":
        case "ufixed":
            return dataType.bits / 8;
        case "function":
            switch (dataType.visibility) {
                case "internal":
                    return Evm.Utils.PC_SIZE * 2;
                case "external":
                    return Evm.Utils.ADDRESS_SIZE + Evm.Utils.SELECTOR_SIZE;
            }
        case "bytes": //we assume we're in the static case
            return dataType.length;
        case "enum": //the only complex case!
            const storedType = userDefinedTypes[dataType.id];
            if (!storedType.options) {
                throw new Common.UnknownUserDefinedTypeError(dataType.id, Format.Types.typeString(dataType));
            }
            const numValues = storedType.options.length;
            return Math.ceil(Math.log2(numValues) / 8);
    }
}
exports.byteLength = byteLength;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 786425:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.checkPaddingLeft = exports.decodeInternalFunction = exports.decodeExternalFunction = exports.decodeContract = exports.decodeBasic = void 0;
const debug_1 = __importDefault(__webpack_require__(615158));
const debug = debug_1.default("codec:basic:decode");
const read_1 = __importDefault(__webpack_require__(512252));
const Conversion = __importStar(__webpack_require__(888610));
const Format = __importStar(__webpack_require__(673949));
const Contexts = __importStar(__webpack_require__(420692));
const Evm = __importStar(__webpack_require__(111403));
const errors_1 = __webpack_require__(361304);
const allocate_1 = __webpack_require__(789638);
function* decodeBasic(dataType, pointer, info, options = {}) {
    const { state } = info;
    const { strictAbiMode: strict } = options; //if this is undefined it'll still be falsy so it's OK
    const paddingMode = options.paddingMode || "default";
    let bytes;
    let rawBytes;
    try {
        bytes = yield* read_1.default(pointer, state);
    }
    catch (error) {
        //error: DecodingError
        debug("segfault, pointer %o, state: %O", pointer, state);
        if (strict) {
            throw new errors_1.StopDecodingError(error.error);
        }
        return {
            //no idea why TS is failing here
            type: dataType,
            kind: "error",
            error: error.error
        };
    }
    rawBytes = bytes;
    debug("type %O", dataType);
    debug("pointer %o", pointer);
    switch (dataType.typeClass) {
        case "bool": {
            if (!checkPadding(bytes, dataType, paddingMode)) {
                let error = {
                    kind: "BoolPaddingError",
                    paddingType: getPaddingType(dataType, paddingMode),
                    raw: Conversion.toHexString(bytes)
                };
                if (strict) {
                    throw new errors_1.StopDecodingError(error);
                }
                return {
                    type: dataType,
                    kind: "error",
                    error
                };
            }
            bytes = removePadding(bytes, dataType, paddingMode);
            //note: the use of the BN is a little silly here,
            //but, kind of stuck with it for now
            const numeric = Conversion.toBN(bytes);
            if (numeric.eqn(0)) {
                return {
                    type: dataType,
                    kind: "value",
                    value: { asBoolean: false }
                };
            }
            else if (numeric.eqn(1)) {
                return {
                    type: dataType,
                    kind: "value",
                    value: { asBoolean: true }
                };
            }
            else {
                let error = {
                    kind: "BoolOutOfRangeError",
                    rawAsBN: numeric
                };
                if (strict) {
                    throw new errors_1.StopDecodingError(error);
                }
                return {
                    type: dataType,
                    kind: "error",
                    error
                };
            }
        }
        case "uint":
            //first, check padding (if needed)
            if (!checkPadding(bytes, dataType, paddingMode)) {
                let error = {
                    kind: "UintPaddingError",
                    paddingType: getPaddingType(dataType, paddingMode),
                    raw: Conversion.toHexString(bytes)
                };
                if (strict) {
                    throw new errors_1.StopDecodingError(error);
                }
                return {
                    type: dataType,
                    kind: "error",
                    error
                };
            }
            //now, truncate to appropriate length
            bytes = removePadding(bytes, dataType, paddingMode);
            return {
                type: dataType,
                kind: "value",
                value: {
                    asBN: Conversion.toBN(bytes),
                    rawAsBN: Conversion.toBN(rawBytes)
                }
            };
        case "int":
            //first, check padding (if needed)
            if (!checkPadding(bytes, dataType, paddingMode)) {
                let error = {
                    kind: "IntPaddingError",
                    paddingType: getPaddingType(dataType, paddingMode),
                    raw: Conversion.toHexString(bytes)
                };
                if (strict) {
                    throw new errors_1.StopDecodingError(error);
                }
                return {
                    type: dataType,
                    kind: "error",
                    error
                };
            }
            //now, truncate to appropriate length (keeping the bytes on the right)
            bytes = removePadding(bytes, dataType, paddingMode);
            return {
                type: dataType,
                kind: "value",
                value: {
                    asBN: Conversion.toSignedBN(bytes),
                    rawAsBN: Conversion.toSignedBN(rawBytes)
                }
            };
        case "address":
            if (!checkPadding(bytes, dataType, paddingMode)) {
                let error = {
                    kind: "AddressPaddingError",
                    paddingType: getPaddingType(dataType, paddingMode),
                    raw: Conversion.toHexString(bytes)
                };
                if (strict) {
                    throw new errors_1.StopDecodingError(error);
                }
                return {
                    type: dataType,
                    kind: "error",
                    error
                };
            }
            bytes = removePadding(bytes, dataType, paddingMode);
            return {
                type: dataType,
                kind: "value",
                value: {
                    asAddress: Evm.Utils.toAddress(bytes),
                    rawAsHex: Conversion.toHexString(rawBytes)
                }
            };
        case "contract":
            if (!checkPadding(bytes, dataType, paddingMode)) {
                let error = {
                    kind: "ContractPaddingError",
                    paddingType: getPaddingType(dataType, paddingMode),
                    raw: Conversion.toHexString(bytes)
                };
                if (strict) {
                    throw new errors_1.StopDecodingError(error);
                }
                return {
                    type: dataType,
                    kind: "error",
                    error
                };
            }
            bytes = removePadding(bytes, dataType, paddingMode);
            const fullType = (Format.Types.fullType(dataType, info.userDefinedTypes));
            const contractValueInfo = yield* decodeContract(bytes, info);
            return {
                type: fullType,
                kind: "value",
                value: contractValueInfo
            };
        case "bytes":
            //NOTE: we assume this is a *static* bytestring,
            //because this is decodeBasic! dynamic ones should
            //go to decodeBytes!
            let coercedDataType = dataType;
            //first, check padding (if needed)
            if (!checkPadding(bytes, dataType, paddingMode)) {
                let error = {
                    kind: "BytesPaddingError",
                    paddingType: getPaddingType(dataType, paddingMode),
                    raw: Conversion.toHexString(bytes)
                };
                if (strict) {
                    throw new errors_1.StopDecodingError(error);
                }
                return {
                    type: coercedDataType,
                    kind: "error",
                    error
                };
            }
            //now, truncate to appropriate length
            bytes = removePadding(bytes, dataType, paddingMode);
            return {
                type: coercedDataType,
                kind: "value",
                value: {
                    asHex: Conversion.toHexString(bytes),
                    rawAsHex: Conversion.toHexString(rawBytes)
                }
            };
        case "function":
            switch (dataType.visibility) {
                case "external":
                    if (!checkPadding(bytes, dataType, paddingMode)) {
                        let error = {
                            kind: "FunctionExternalNonStackPaddingError",
                            paddingType: getPaddingType(dataType, paddingMode),
                            raw: Conversion.toHexString(bytes)
                        };
                        if (strict) {
                            throw new errors_1.StopDecodingError(error);
                        }
                        return {
                            type: dataType,
                            kind: "error",
                            error
                        };
                    }
                    bytes = removePadding(bytes, dataType, paddingMode);
                    const address = bytes.slice(0, Evm.Utils.ADDRESS_SIZE);
                    const selector = bytes.slice(Evm.Utils.ADDRESS_SIZE, Evm.Utils.ADDRESS_SIZE + Evm.Utils.SELECTOR_SIZE);
                    return {
                        type: dataType,
                        kind: "value",
                        value: yield* decodeExternalFunction(address, selector, info)
                    };
                case "internal":
                    if (strict) {
                        //internal functions don't go in the ABI!
                        //this should never happen, but just to be sure...
                        throw new errors_1.StopDecodingError({
                            kind: "InternalFunctionInABIError"
                        });
                    }
                    if (!checkPadding(bytes, dataType, paddingMode)) {
                        return {
                            type: dataType,
                            kind: "error",
                            error: {
                                kind: "FunctionInternalPaddingError",
                                paddingType: getPaddingType(dataType, paddingMode),
                                raw: Conversion.toHexString(bytes)
                            }
                        };
                    }
                    bytes = removePadding(bytes, dataType, paddingMode);
                    const deployedPc = bytes.slice(-Evm.Utils.PC_SIZE);
                    const constructorPc = bytes.slice(-Evm.Utils.PC_SIZE * 2, -Evm.Utils.PC_SIZE);
                    return decodeInternalFunction(dataType, deployedPc, constructorPc, info);
            }
            break; //to satisfy TypeScript
        case "enum": {
            let numeric = Conversion.toBN(bytes);
            const fullType = (Format.Types.fullType(dataType, info.userDefinedTypes));
            if (!fullType.options) {
                let error = {
                    kind: "EnumNotFoundDecodingError",
                    type: fullType,
                    rawAsBN: numeric
                };
                if (strict || options.allowRetry) {
                    throw new errors_1.StopDecodingError(error, true);
                    //note that we allow a retry if we couldn't locate the enum type!
                }
                return {
                    type: fullType,
                    kind: "error",
                    error
                };
            }
            //note: I'm doing the padding checks a little more manually on this one
            //so that we can have the right type of error
            const numOptions = fullType.options.length;
            const numBytes = Math.ceil(Math.log2(numOptions) / 8);
            const paddingType = getPaddingType(dataType, paddingMode);
            if (!checkPaddingDirect(bytes, numBytes, paddingType)) {
                let error = {
                    kind: "EnumPaddingError",
                    type: fullType,
                    paddingType,
                    raw: Conversion.toHexString(bytes)
                };
                if (strict) {
                    throw new errors_1.StopDecodingError(error);
                }
                return {
                    type: dataType,
                    kind: "error",
                    error
                };
            }
            bytes = removePaddingDirect(bytes, numBytes, paddingType);
            numeric = Conversion.toBN(bytes); //alter numeric!
            if (numeric.ltn(numOptions)) {
                const name = fullType.options[numeric.toNumber()];
                //NOTE: despite the use of toNumber(), I'm NOT catching exceptions here and returning an
                //error value like elsewhere; I'm just letting this one fail.  Why?  Because if we have
                //an enum with that many options in the first place, we have bigger problems!
                return {
                    type: fullType,
                    kind: "value",
                    value: {
                        name,
                        numericAsBN: numeric
                    }
                };
            }
            else {
                let error = {
                    kind: "EnumOutOfRangeError",
                    type: fullType,
                    rawAsBN: numeric
                };
                if (strict) {
                    //note:
                    //if the enum is merely out of range rather than out of the ABI range,
                    //we do NOT throw an error here!  instead we simply return an error value,
                    //which we normally avoid doing in strict mode.  (the error will be caught
                    //later at the re-encoding step instead.)  why?  because we might be running
                    //in ABI mode, so we may need to abify this "value" rather than just throwing
                    //it out.
                    throw new errors_1.StopDecodingError(error);
                    //note that we do NOT allow a retry here!
                    //if we *can* find the enum type but the value is out of range,
                    //we *know* that it is invalid!
                }
                return {
                    type: fullType,
                    kind: "error",
                    error
                };
            }
        }
        case "fixed": {
            //first, check padding (if needed)
            if (!checkPadding(bytes, dataType, paddingMode)) {
                let error = {
                    kind: "FixedPaddingError",
                    paddingType: getPaddingType(dataType, paddingMode),
                    raw: Conversion.toHexString(bytes)
                };
                if (strict) {
                    throw new errors_1.StopDecodingError(error);
                }
                return {
                    type: dataType,
                    kind: "error",
                    error
                };
            }
            //now, truncate to appropriate length (keeping the bytes on the right)
            bytes = removePadding(bytes, dataType, paddingMode);
            let asBN = Conversion.toSignedBN(bytes);
            let rawAsBN = Conversion.toSignedBN(rawBytes);
            let asBig = Conversion.shiftBigDown(Conversion.toBig(asBN), dataType.places);
            let rawAsBig = Conversion.shiftBigDown(Conversion.toBig(rawAsBN), dataType.places);
            return {
                type: dataType,
                kind: "value",
                value: {
                    asBig,
                    rawAsBig
                }
            };
        }
        case "ufixed": {
            //first, check padding (if needed)
            if (!checkPadding(bytes, dataType, paddingMode)) {
                let error = {
                    kind: "UfixedPaddingError",
                    paddingType: getPaddingType(dataType, paddingMode),
                    raw: Conversion.toHexString(bytes)
                };
                if (strict) {
                    throw new errors_1.StopDecodingError(error);
                }
                return {
                    type: dataType,
                    kind: "error",
                    error
                };
            }
            //now, truncate to appropriate length (keeping the bytes on the right)
            bytes = removePadding(bytes, dataType, paddingMode);
            let asBN = Conversion.toBN(bytes);
            let rawAsBN = Conversion.toBN(rawBytes);
            let asBig = Conversion.shiftBigDown(Conversion.toBig(asBN), dataType.places);
            let rawAsBig = Conversion.shiftBigDown(Conversion.toBig(rawAsBN), dataType.places);
            return {
                type: dataType,
                kind: "value",
                value: {
                    asBig,
                    rawAsBig
                }
            };
        }
    }
}
exports.decodeBasic = decodeBasic;
//NOTE that this function returns a ContractValueInfo, not a ContractResult
function* decodeContract(addressBytes, info) {
    return (yield* decodeContractAndContext(addressBytes, info)).contractInfo;
}
exports.decodeContract = decodeContract;
function* decodeContractAndContext(addressBytes, info) {
    let address = Evm.Utils.toAddress(addressBytes);
    let rawAddress = Conversion.toHexString(addressBytes);
    let codeBytes = yield {
        type: "code",
        address
    };
    let code = Conversion.toHexString(codeBytes);
    let context = Contexts.Utils.findDecoderContext(info.contexts, code);
    if (context !== null) {
        return {
            context,
            contractInfo: {
                kind: "known",
                address,
                rawAddress,
                class: Contexts.Import.contextToType(context)
            }
        };
    }
    else {
        return {
            context,
            contractInfo: {
                kind: "unknown",
                address,
                rawAddress
            }
        };
    }
}
//note: address can have extra zeroes on the left like elsewhere, but selector should be exactly 4 bytes
//NOTE this again returns a FunctionExternalValueInfo, not a FunctionExternalResult
function* decodeExternalFunction(addressBytes, selectorBytes, info) {
    let { contractInfo: contract, context } = yield* decodeContractAndContext(addressBytes, info);
    let selector = Conversion.toHexString(selectorBytes);
    if (contract.kind === "unknown") {
        return {
            kind: "unknown",
            contract,
            selector
        };
    }
    let abiEntry = context.abi !== undefined ? context.abi[selector] : undefined;
    if (abiEntry === undefined) {
        return {
            kind: "invalid",
            contract,
            selector
        };
    }
    return {
        kind: "known",
        contract,
        selector,
        abi: abiEntry
    };
}
exports.decodeExternalFunction = decodeExternalFunction;
//this one works a bit differently -- in order to handle errors, it *does* return a FunctionInternalResult
//also note, I haven't put the same sort of error-handling in this one since it's only intended to run with full info (for now, anyway)
function decodeInternalFunction(dataType, deployedPcBytes, constructorPcBytes, info) {
    let deployedPc = Conversion.toBN(deployedPcBytes).toNumber();
    let constructorPc = Conversion.toBN(constructorPcBytes).toNumber();
    let context = Contexts.Import.contextToType(info.currentContext);
    //before anything else: do we even have an internal functions table?
    //if not, we'll just return the info we have without really attemting to decode
    if (!info.internalFunctionsTable) {
        return {
            type: dataType,
            kind: "value",
            value: {
                kind: "unknown",
                context,
                deployedProgramCounter: deployedPc,
                constructorProgramCounter: constructorPc
            }
        };
    }
    //also before we continue: is the PC zero? if so let's just return that
    if (deployedPc === 0 && constructorPc === 0) {
        return {
            type: dataType,
            kind: "value",
            value: {
                kind: "exception",
                context,
                deployedProgramCounter: deployedPc,
                constructorProgramCounter: constructorPc
            }
        };
    }
    //another check: is only the deployed PC zero?
    if (deployedPc === 0 && constructorPc !== 0) {
        return {
            type: dataType,
            kind: "error",
            error: {
                kind: "MalformedInternalFunctionError",
                context,
                deployedProgramCounter: 0,
                constructorProgramCounter: constructorPc
            }
        };
    }
    //one last pre-check: is this a deployed-format pointer in a constructor?
    if (info.currentContext.isConstructor && constructorPc === 0) {
        return {
            type: dataType,
            kind: "error",
            error: {
                kind: "DeployedFunctionInConstructorError",
                context,
                deployedProgramCounter: deployedPc,
                constructorProgramCounter: 0
            }
        };
    }
    //otherwise, we get our function
    let pc = info.currentContext.isConstructor ? constructorPc : deployedPc;
    let functionEntry = info.internalFunctionsTable[pc];
    if (!functionEntry) {
        //if it's not zero and there's no entry... error!
        return {
            type: dataType,
            kind: "error",
            error: {
                kind: "NoSuchInternalFunctionError",
                context,
                deployedProgramCounter: deployedPc,
                constructorProgramCounter: constructorPc
            }
        };
    }
    if (functionEntry.isDesignatedInvalid) {
        return {
            type: dataType,
            kind: "value",
            value: {
                kind: "exception",
                context,
                deployedProgramCounter: deployedPc,
                constructorProgramCounter: constructorPc
            }
        };
    }
    let name = functionEntry.name;
    let mutability = functionEntry.mutability;
    let definedIn = Evm.Import.functionTableEntryToType(functionEntry); //may be null
    let id = Evm.Import.makeInternalFunctionId(functionEntry);
    return {
        type: dataType,
        kind: "value",
        value: {
            kind: "function",
            context,
            deployedProgramCounter: deployedPc,
            constructorProgramCounter: constructorPc,
            name,
            id,
            definedIn,
            mutability
        }
    };
}
exports.decodeInternalFunction = decodeInternalFunction;
function checkPadding(bytes, dataType, paddingMode, userDefinedTypes) {
    const length = allocate_1.byteLength(dataType, userDefinedTypes);
    let paddingType = getPaddingType(dataType, paddingMode);
    if (paddingMode === "permissive") {
        switch (dataType.typeClass) {
            case "bool":
            case "enum":
            case "function":
                //these three types are checked even in permissive mode
                return checkPaddingDirect(bytes, length, paddingType);
            default:
                return true;
        }
    }
    else {
        return checkPaddingDirect(bytes, length, paddingType);
    }
}
function removePadding(bytes, dataType, paddingMode, userDefinedTypes) {
    const length = allocate_1.byteLength(dataType, userDefinedTypes);
    const paddingType = getPaddingType(dataType, paddingMode);
    return removePaddingDirect(bytes, length, paddingType);
}
function removePaddingDirect(bytes, length, paddingType) {
    switch (paddingType) {
        case "left":
        case "signed":
            return bytes.slice(-length);
        case "right":
            return bytes.slice(0, length);
    }
}
function checkPaddingDirect(bytes, length, paddingType) {
    switch (paddingType) {
        case "left":
            return checkPaddingLeft(bytes, length);
        case "right":
            return checkPaddingRight(bytes, length);
        case "signed":
            return checkPaddingSigned(bytes, length);
    }
}
function getPaddingType(dataType, paddingMode) {
    switch (paddingMode) {
        case "right":
            return "right";
        case "default":
        case "permissive":
            return defaultPaddingType(dataType);
        case "zero":
            let defaultType = defaultPaddingType(dataType);
            return defaultType === "signed" ? "left" : defaultType;
    }
}
function defaultPaddingType(dataType) {
    switch (dataType.typeClass) {
        case "bytes":
            return "right";
        case "int":
        case "fixed":
            return "signed";
        case "function":
            if (dataType.visibility === "external") {
                return "right";
            }
        //otherwise, fall through to default
        default:
            return "left";
    }
}
function checkPaddingRight(bytes, length) {
    let padding = bytes.slice(length); //cut off the first length bytes
    return padding.every(paddingByte => paddingByte === 0);
}
//exporting this one for use in stack.ts
function checkPaddingLeft(bytes, length) {
    let padding = bytes.slice(0, -length); //cut off the last length bytes
    return padding.every(paddingByte => paddingByte === 0);
}
exports.checkPaddingLeft = checkPaddingLeft;
function checkPaddingSigned(bytes, length) {
    let padding = bytes.slice(0, -length); //padding is all but the last length bytes
    let value = bytes.slice(-length); //meanwhile the actual value is those last length bytes
    let signByte = value[0] & 0x80 ? 0xff : 0x00;
    return padding.every(paddingByte => paddingByte === signByte);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 193699:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.encodeBasic = void 0;
const Conversion = __importStar(__webpack_require__(888610));
const Evm = __importStar(__webpack_require__(111403));
//UGH -- it turns out TypeScript can't handle nested tagged unions
//see: https://github.com/microsoft/TypeScript/issues/18758
//so, I'm just going to have to throw in a bunch of type coercions >_>
/**
 * Handles encoding of basic types; yes the input type is broader than
 * it should be but it's hard to fix this without causing other problems,
 * sorry!
 * @Category Encoding (low-level)
 */
function encodeBasic(input) {
    let bytes;
    switch (input.type.typeClass) {
        case "uint":
        case "int":
            return Conversion.toBytes(input.value.asBN, Evm.Utils.WORD_SIZE);
        case "enum":
            return Conversion.toBytes(input.value.numericAsBN, Evm.Utils.WORD_SIZE);
        case "bool": {
            bytes = new Uint8Array(Evm.Utils.WORD_SIZE); //is initialized to zeroes
            if (input.value.asBoolean) {
                bytes[Evm.Utils.WORD_SIZE - 1] = 1;
            }
            return bytes;
        }
        case "bytes":
            switch (input.type.kind) {
                //deliberately not handling dynamic case!
                case "static":
                    bytes = Conversion.toBytes(input.value.asHex);
                    let padded = new Uint8Array(Evm.Utils.WORD_SIZE); //initialized to zeroes
                    padded.set(bytes);
                    return padded;
            }
        case "address":
            return Conversion.toBytes(input.value.asAddress, Evm.Utils.WORD_SIZE);
        case "contract":
            return Conversion.toBytes(input.value.address, Evm.Utils.WORD_SIZE);
        case "function": {
            switch (input.type.visibility) {
                //for our purposes here, we will NOT count internal functions as a
                //basic type!  so no handling of internal case
                case "external":
                    let coercedInput = input;
                    let encoded = new Uint8Array(Evm.Utils.WORD_SIZE); //starts filled w/0s
                    let addressBytes = Conversion.toBytes(coercedInput.value.contract.address); //should already be correct length
                    let selectorBytes = Conversion.toBytes(coercedInput.value.selector); //should already be correct length
                    encoded.set(addressBytes);
                    encoded.set(selectorBytes, Evm.Utils.ADDRESS_SIZE); //set it after the address
                    return encoded;
            }
            break; //to satisfy TS
        }
        case "fixed":
        case "ufixed":
            let bigValue = (input).value.asBig;
            let shiftedValue = Conversion.shiftBigUp(bigValue, input.type.places);
            return Conversion.toBytes(shiftedValue, Evm.Utils.WORD_SIZE);
    }
}
exports.encodeBasic = encodeBasic;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 87023:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Allocate = exports.Encode = exports.Decode = void 0;
const Decode = __importStar(__webpack_require__(786425));
exports.Decode = Decode;
const Encode = __importStar(__webpack_require__(193699));
exports.Encode = Encode;
const Allocate = __importStar(__webpack_require__(789638));
exports.Allocate = Allocate;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 464631:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.decodeString = exports.decodeBytes = void 0;
const debug_1 = __importDefault(__webpack_require__(615158));
const debug = debug_1.default("codec:bytes:decode");
const read_1 = __importDefault(__webpack_require__(512252));
const Conversion = __importStar(__webpack_require__(888610));
const errors_1 = __webpack_require__(361304);
const utf8_1 = __importDefault(__webpack_require__(957458));
function* decodeBytes(dataType, pointer, info, options = {}) {
    const { state } = info;
    const { strictAbiMode: strict } = options; //if this is undefined it'll still be falsy so OK
    let bytes;
    try {
        bytes = yield* read_1.default(pointer, state);
    }
    catch (error) {
        //error: DecodingError
        debug("segfault, pointer %o, state: %O", pointer, state);
        if (strict) {
            throw new errors_1.StopDecodingError(error.error);
        }
        return {
            //no idea why TS is failing here
            type: dataType,
            kind: "error",
            error: error.error
        };
    }
    debug("type %O", dataType);
    debug("pointer %o", pointer);
    //note: this function does not check padding
    switch (dataType.typeClass) {
        case "bytes":
            //we assume this is a dynamic bytestring!
            //static ones should go to decodeBasic!
            return {
                type: dataType,
                kind: "value",
                value: {
                    asHex: Conversion.toHexString(bytes)
                }
            };
        case "string":
            return {
                type: dataType,
                kind: "value",
                value: decodeString(bytes)
            };
    }
}
exports.decodeBytes = decodeBytes;
function decodeString(bytes) {
    //the following line takes our UTF-8 string... and interprets each byte
    //as a UTF-16 bytepair.  Yikes!  Fortunately, we have a library to repair that.
    let badlyEncodedString = String.fromCharCode.apply(undefined, bytes);
    try {
        //this will throw an error if we have malformed UTF-8
        let correctlyEncodedString = utf8_1.default.decode(badlyEncodedString);
        //NOTE: we don't use node's builtin Buffer class to do the UTF-8 decoding
        //here, because that handles malformed UTF-8 by means of replacement characters
        //(U+FFFD).  That loses information.  So we use the utf8 package instead,
        //and... well, see the catch block below.
        return {
            kind: "valid",
            asString: correctlyEncodedString
        };
    }
    catch (_) {
        //we're going to ignore the precise error and just assume it's because
        //the string was malformed (what else could it be?)
        let hexString = Conversion.toHexString(bytes);
        return {
            kind: "malformed",
            asHex: hexString
        };
    }
}
exports.decodeString = decodeString;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 264051:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.encodeBytes = void 0;
const Conversion = __importStar(__webpack_require__(888610));
const utf8_1 = __importDefault(__webpack_require__(957458));
//UGH -- it turns out TypeScript can't handle nested tagged unions
//see: https://github.com/microsoft/TypeScript/issues/18758
//so, I'm just going to have to throw in a bunch of type coercions >_>
/**
 * Encodes without padding, length, etc!
 *
 * @Category Encoding (low-level)
 */
function encodeBytes(input) {
    switch (input.type.typeClass) {
        case "bytes":
            return Conversion.toBytes(input.value.asHex);
        case "string": {
            let coercedInput = (input);
            switch (coercedInput.value.kind) {
                case "valid":
                    return stringToBytes(coercedInput.value.asString);
                case "malformed":
                    return Conversion.toBytes(coercedInput.value.asHex);
            }
        }
    }
}
exports.encodeBytes = encodeBytes;
/**
 * @Category Encoding (low-level)
 */
function stringToBytes(input) {
    input = utf8_1.default.encode(input);
    let bytes = new Uint8Array(input.length);
    for (let i = 0; i < input.length; i++) {
        bytes[i] = input.charCodeAt(i);
    }
    return bytes;
    //NOTE: this will throw an error if the string contained malformed UTF-16!
    //but, well, it shouldn't contain that...
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 868704:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Encode = exports.Decode = exports.Read = void 0;
const Read = __importStar(__webpack_require__(756626));
exports.Read = Read;
const Decode = __importStar(__webpack_require__(464631));
exports.Decode = Decode;
const Encode = __importStar(__webpack_require__(264051));
exports.Encode = Encode;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 756626:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.readBytes = exports.readCode = void 0;
const Evm = __importStar(__webpack_require__(111403));
const errors_1 = __webpack_require__(361304);
function* readCode(pointer, state) {
    let code = state.code;
    if (!code) {
        code = yield {
            type: "code",
            address: Evm.Utils.toAddress(state.specials.this)
        };
    }
    return readBytes(pointer, Object.assign(Object.assign({}, state), { code }));
}
exports.readCode = readCode;
function readBytes(pointer, state) {
    let sourceBytes = state[pointer.location];
    const { start: offset, length } = pointer;
    if (!Number.isSafeInteger(offset + length)) {
        throw new errors_1.DecodingError({
            kind: "ReadErrorBytes",
            location: pointer.location,
            start: offset,
            length
        });
    }
    // grab `length` bytes no matter what, here fill this array
    var bytes = new Uint8Array(length);
    bytes.fill(0); //fill it wil zeroes to start
    //if the start is beyond the end of the source, just return those 0s
    if (offset >= sourceBytes.length) {
        return bytes;
    }
    // if we're reading past the end of the source, truncate the length to read
    let excess = offset + length - sourceBytes.length;
    let readLength;
    if (excess > 0) {
        readLength = sourceBytes.length - offset;
    }
    else {
        readLength = length;
    }
    //get the (truncated) bytes
    let existing = new Uint8Array(sourceBytes.buffer, offset, readLength);
    //copy it into our buffer
    bytes.set(existing);
    return bytes;
}
exports.readBytes = readBytes;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 969358:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(650143), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 650143:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UnknownUserDefinedTypeError = void 0;
/**
 * This error indicates that the decoder was unable to locate a user-defined
 * type (struct, enum, or contract type) via its ID.  Unfortunately, we can't
 * always avoid this at the moment; we're hoping to make this more robust in
 * the future with Truffle DB.  In the meantime, it is at least worth noting that
 * you should not encounter this error if your entire project was written in
 * Solidity and all compiled at once.  Sorry.
 *
 * @Category Errors
 */
class UnknownUserDefinedTypeError extends Error {
    constructor(id, typeString) {
        const message = `Cannot locate definition for ${typeString} (ID ${id})`;
        super(message);
        this.name = "UnknownUserDefinedTypeError";
        this.id = id;
        this.typeString = typeString;
    }
}
exports.UnknownUserDefinedTypeError = UnknownUserDefinedTypeError;
//# sourceMappingURL=types.js.map

/***/ }),

/***/ 507405:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Utils = void 0;
__exportStar(__webpack_require__(109223), exports);
const Utils = __importStar(__webpack_require__(517999));
exports.Utils = Utils;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 109223:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=types.js.map

/***/ }),

/***/ 517999:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getContractNode = exports.shimContracts = exports.shimArtifacts = exports.shimCompilations = void 0;
const debug_1 = __importDefault(__webpack_require__(615158));
const debug = debug_1.default("codec:compilations:utils");
function shimCompilations(inputCompilations, shimmedCompilationIdPrefix = "shimmedcompilation", externalSolidity = false) {
    return inputCompilations.map(({ contracts, sourceIndexes }, compilationIndex) => shimContracts(contracts, sourceIndexes, `${shimmedCompilationIdPrefix}Number(${compilationIndex})`, externalSolidity));
}
exports.shimCompilations = shimCompilations;
/**
 * wrapper around shimArtifactsToCompilation that just returns
 * the result in a one-element array (keeping the old name
 * shimArtifacts for compatibility)
 */
function shimArtifacts(artifacts, files, shimmedCompilationId = "shimmedcompilation", externalSolidity = false) {
    return [
        shimContracts(artifacts, files, shimmedCompilationId, externalSolidity)
    ];
}
exports.shimArtifacts = shimArtifacts;
/**
 * shims a bunch of contracts ("artifacts", though not necessarily)
 * to a compilation.  usually used via one of the above two functions.
 */
function shimContracts(artifacts, files, shimmedCompilationId = "shimmedcompilation", externalSolidity = false) {
    let contracts = [];
    let sources = [];
    let unreliableSourceOrder = false;
    for (let artifact of artifacts) {
        let { contractName, bytecode, sourceMap, deployedBytecode, deployedSourceMap, immutableReferences, sourcePath, source, ast, abi, compiler, generatedSources, deployedGeneratedSources } = artifact;
        if (artifact.contract_name) {
            //just in case
            contractName = artifact.contract_name;
            //dunno what's up w/ the type of contract_name, but it needs coercing
        }
        debug("contractName: %s", contractName);
        let sourceObject = {
            sourcePath,
            source,
            ast: ast,
            compiler
        };
        //ast needs to be coerced because schema doesn't quite match our types here...
        let contractObject = {
            contractName,
            bytecode,
            sourceMap,
            deployedBytecode,
            deployedSourceMap,
            immutableReferences,
            abi,
            compiler
        };
        //if files was passed, trust that to determine the source index
        if (files) {
            const index = files.indexOf(sourcePath);
            debug("sourcePath: %s", sourceObject.sourcePath);
            debug("given index: %d", index);
            debug("sources: %o", sources.map(source => source.sourcePath));
            sources[index] = sourceObject;
            sourceObject.id = index.toString(); //HACK
            contractObject.primarySourceId = index.toString();
            //note: we never set the unreliableSourceOrder flag in this branch;
            //we just trust files.  If files is bad, then, uh, too bad.
        }
        else {
            //if files *wasn't* passed, attempt to determine it from the ast
            let index = sourceIndexForAst(sourceObject.ast); //sourceObject.ast for typing reasons
            ({ index, unreliableSourceOrder } = getIndexToAddAt(sourceObject, index, sources, unreliableSourceOrder));
            if (index !== null) {
                sources[index] = Object.assign(Object.assign({}, sourceObject), { id: index.toString() });
                contractObject.primarySourceId = index.toString();
            }
        }
        //now: add internal sources
        for (let { ast, contents, id: index, name } of [
            ...(generatedSources || []),
            ...(deployedGeneratedSources || [])
        ]) {
            const generatedSourceObject = {
                sourcePath: name,
                source: contents,
                ast: ast,
                compiler,
                internal: true
            };
            ({ index, unreliableSourceOrder } = getIndexToAddAt(generatedSourceObject, index, sources, unreliableSourceOrder));
            if (index !== null) {
                sources[index] = Object.assign(Object.assign({}, generatedSourceObject), { id: index.toString() });
            }
        }
        contracts.push(contractObject);
    }
    let compiler;
    if (!unreliableSourceOrder && contracts.length > 0) {
        //if things were actually compiled together, we should just be able
        //to pick an arbitrary one
        compiler = contracts[0].compiler;
    }
    return {
        id: shimmedCompilationId,
        unreliableSourceOrder,
        sources,
        contracts,
        compiler,
        externalSolidity
    };
}
exports.shimContracts = shimContracts;
function sourceIndexForAst(ast) {
    if (!ast) {
        return undefined;
    }
    return parseInt(ast.src.split(":")[2]);
    //src is given as start:length:file.
    //we want just the file.
}
function getContractNode(contract, compilation) {
    const { contractName, sourceMap, deployedSourceMap, primarySourceId } = contract;
    const { unreliableSourceOrder, sources } = compilation;
    let sourcesToCheck;
    //we will attempt to locate the primary source;
    //if we can't find it, we'll just check every source in this
    //compilation.
    if (primarySourceId !== undefined) {
        sourcesToCheck = [
            sources.find(source => source && source.id === primarySourceId)
        ];
    }
    else if (!unreliableSourceOrder && (deployedSourceMap || sourceMap)) {
        let sourceId = extractPrimarySource(deployedSourceMap || sourceMap);
        sourcesToCheck = [sources[sourceId]];
    }
    else {
        //WARNING: if we end up in this case, we could get the wrong contract!
        //(but we shouldn't end up here)
        sourcesToCheck = sources;
    }
    return sourcesToCheck.reduce((foundNode, source) => {
        if (foundNode || !source) {
            return foundNode;
        }
        if (!source.ast || source.ast.nodeType !== "SourceUnit") {
            //don't search Yul sources!
            return undefined;
        }
        return source.ast.nodes.find(node => node.nodeType === "ContractDefinition" && node.name === contractName);
    }, undefined);
}
exports.getContractNode = getContractNode;
/**
 * extract the primary source from a source map
 * (i.e., the source for the first instruction, found
 * between the second and third colons)
 * (this is something of a HACK)
 * NOTE: duplicated from debugger, sorry
 */
function extractPrimarySource(sourceMap) {
    return parseInt(sourceMap.match(/^[^:]+:[^:]+:([^:]+):/)[1]);
}
function getIndexToAddAt(sourceObject, index, sources, unreliableSourceOrder) {
    //first: is this already there? only add it if it's not.
    //(we determine this by sourcePath if present, and the actual source
    //contents if not)
    debug("sourcePath: %s", sourceObject.sourcePath);
    debug("given index: %d", index);
    debug("sources: %o", sources.map(source => source.sourcePath));
    if (sources.every(existingSource => existingSource.sourcePath !== sourceObject.sourcePath ||
        ((!sourceObject.sourcePath || sourceObject.internal) &&
            (!existingSource.sourcePath || existingSource.internal) &&
            existingSource.source !== sourceObject.source))) {
        if (unreliableSourceOrder || index === undefined || index in sources) {
            //if we can't add it at the correct spot, set the
            //unreliable source order flag
            debug("collision!");
            unreliableSourceOrder = true;
        }
        //otherwise, just leave things alone
        if (unreliableSourceOrder) {
            //in case of unreliable source order, we'll ignore what indices
            //things are *supposed* to have and just append things to the end
            index = sources.length;
        }
        return {
            index,
            unreliableSourceOrder
        };
    }
    else {
        //return index: null indicates don't add this because it's
        //already present
        debug("already present, not adding");
        return {
            index: null,
            unreliableSourceOrder
        };
    }
}
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 411619:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Utils = void 0;
__exportStar(__webpack_require__(206313), exports);
const Utils = __importStar(__webpack_require__(402417));
exports.Utils = Utils;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 206313:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=types.js.map

/***/ }),

/***/ 402417:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.solidityFamily = void 0;
const debug_1 = __importDefault(__webpack_require__(615158));
const debug = debug_1.default("codec:compiler:utils");
const semver_1 = __importDefault(__webpack_require__(228472));
function solidityFamily(compiler) {
    if (!compiler || compiler.name !== "solc") {
        return "unknown";
    }
    if (semver_1.default.satisfies(compiler.version, "~0.5 || >=0.5.0", {
        includePrerelease: true
    })) {
        //what's with this weird-looking condition?  Well, I want to be sure to include
        //prerelease versions of 0.5.0.  But isn't that what the includePrerelease option
        //does?  No!  That just makes it so that prerelease versions can be included at
        //all; without that, all prereleases of *any* version of Solidity can be excluded.
        //A prerelease version of 0.5.0 still wouldn't satisfy >=0.5.0, so I added in ~0.5
        //as well, which they do satisfy.
        return "0.5.x";
    }
    else {
        return "pre-0.5.0";
    }
}
exports.solidityFamily = solidityFamily;
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 242444:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.makeTypeId = exports.contextToType = void 0;
function contextToType(context) {
    if (context.contractId !== undefined) {
        return {
            typeClass: "contract",
            kind: "native",
            id: makeTypeId(context.contractId, context.compilationId),
            typeName: context.contractName,
            contractKind: context.contractKind,
            payable: context.payable
        };
    }
    else {
        return {
            typeClass: "contract",
            kind: "foreign",
            typeName: context.contractName,
            contractKind: context.contractKind,
            payable: context.payable
        };
    }
}
exports.contextToType = contextToType;
//NOTE: I am exporting this for use in other import functions, but please don't
//use this elsewhere!
//If you have to make a type ID, instead make the type and then
//take its ID.
function makeTypeId(astId, compilationId) {
    return `${compilationId}:${astId}`;
}
exports.makeTypeId = makeTypeId;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 420692:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Utils = exports.Import = void 0;
__exportStar(__webpack_require__(329340), exports);
const Import = __importStar(__webpack_require__(242444));
exports.Import = Import;
const Utils = __importStar(__webpack_require__(280611));
exports.Utils = Utils;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 329340:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=types.js.map

/***/ }),

/***/ 280611:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.normalizeContexts = exports.matchContext = exports.findDebuggerContext = exports.findDecoderContext = void 0;
const debug_1 = __importDefault(__webpack_require__(615158));
const debug = debug_1.default("codec:contexts:utils");
const Evm = __importStar(__webpack_require__(111403));
const lodash_escaperegexp_1 = __importDefault(__webpack_require__(91658));
const cbor = __webpack_require__(677756); //importing this untyped, sorry!
//I split these next two apart because the type system was giving me trouble
function findDecoderContext(contexts, binary) {
    let context = Object.values(contexts).find(context => matchContext(context, binary));
    return context !== undefined ? context : null;
}
exports.findDecoderContext = findDecoderContext;
function findDebuggerContext(contexts, binary) {
    let context = Object.values(contexts).find(context => matchContext(context, binary));
    return context !== undefined ? context.context : null;
}
exports.findDebuggerContext = findDebuggerContext;
function matchContext(context, givenBinary) {
    let { binary, isConstructor } = context;
    let lengthDifference = givenBinary.length - binary.length;
    //first: if it's not a constructor, they'd better be equal in length.
    //if it is a constructor, the given binary must be at least as long,
    //and the difference must be a multiple of 64
    if ((!isConstructor && lengthDifference !== 0) ||
        lengthDifference < 0 ||
        lengthDifference % (2 * Evm.Utils.WORD_SIZE) !== 0) {
        return false;
    }
    for (let i = 0; i < binary.length; i++) {
        //note: using strings like arrays is kind of dangerous in general in JS,
        //but everything here is ASCII so it's fine
        //note that we need to compare case-insensitive, since Solidity will
        //put addresses in checksum case in the compiled source
        //(we don't actually need that second toLowerCase(), but whatever)
        if (binary[i] !== "." &&
            binary[i].toLowerCase() !== givenBinary[i].toLowerCase()) {
            return false;
        }
    }
    return true;
}
exports.matchContext = matchContext;
function normalizeContexts(contexts) {
    //unfortunately, due to our current link references format, we can't
    //really use the binary from the artifact directly -- neither for purposes
    //of matching, nor for purposes of decoding internal functions.  So, we
    //need to perform this normalization step on our contexts before using
    //them.  Once we have truffle-db, this step should largely go away.
    debug("normalizing contexts");
    //first, let's clone the input
    //(let's do a 2-deep clone because we'll be altering binary)
    let newContexts = Object.assign({}, ...Object.entries(contexts).map(([contextHash, context]) => ({
        [contextHash]: Object.assign({}, context)
    })));
    debug("contexts cloned");
    //next, we get all the library names and sort them descending by length.
    //We're going to want to go in descending order of length so that we
    //don't run into problems when one name is a substring of another.
    //For simplicity, we'll exclude names of length <38, because we can
    //handle these with our more general check for link references at the end
    const fillerLength = 2 * Evm.Utils.ADDRESS_SIZE;
    let names = Object.values(newContexts)
        .filter(context => context.contractKind === "library")
        .map(context => context.contractName)
        .filter(name => name.length >= fillerLength - 3)
        //the -3 is for 2 leading underscores and 1 trailing
        .sort((name1, name2) => name2.length - name1.length);
    debug("names sorted");
    //now, we need to turn all these names into regular expressions, because,
    //unfortunately, str.replace() will only replace all if you use a /g regexp;
    //note that because names may contain '$', we need to escape them
    //(also we prepend "__" because that's the placeholder format)
    let regexps = names.map(name => new RegExp(lodash_escaperegexp_1.default("__" + name), "g"));
    debug("regexps prepared");
    //having done so, we can do the replace for these names!
    const replacement = ".".repeat(fillerLength);
    for (let regexp of regexps) {
        for (let context of Object.values(newContexts)) {
            context.binary = context.binary.replace(regexp, replacement);
        }
    }
    debug("long replacements complete");
    //now we can do a generic replace that will catch all names of length
    //<40, while also catching the Solidity compiler's link reference format
    //as well as Truffle's.  Hooray!
    const genericRegexp = new RegExp("_.{" + (fillerLength - 2) + "}_", "g");
    //we're constructing the regexp /_.{38}_/g, but I didn't want to use a
    //literal 38 :P
    for (let context of Object.values(newContexts)) {
        context.binary = context.binary.replace(genericRegexp, replacement);
    }
    debug("short replacements complete");
    //now we must handle the delegatecall guard -- libraries' deployedBytecode will include
    //0s in place of their own address instead of a link reference at the
    //beginning, so we need to account for that too
    const pushAddressInstruction = (0x60 + Evm.Utils.ADDRESS_SIZE - 1).toString(16); //"73"
    for (let context of Object.values(newContexts)) {
        if (context.contractKind === "library" && !context.isConstructor) {
            context.binary = context.binary.replace("0x" + pushAddressInstruction + "00".repeat(Evm.Utils.ADDRESS_SIZE), "0x" + pushAddressInstruction + replacement);
        }
    }
    debug("extra library replacements complete");
    //now let's handle immutable references
    //(these are much nicer than link references due to not having to deal with the old format)
    for (let context of Object.values(newContexts)) {
        if (context.immutableReferences) {
            for (let variable of Object.values(context.immutableReferences)) {
                for (let { start, length } of (variable)) {
                    //Goddammit TS
                    let lowerStringIndex = 2 + 2 * start;
                    let upperStringIndex = 2 + 2 * (start + length);
                    context.binary =
                        context.binary.slice(0, lowerStringIndex) +
                            "..".repeat(length) +
                            context.binary.slice(upperStringIndex);
                }
            }
        }
    }
    debug("immutables complete");
    //one last step: if externalSolidity is set, we'll allow the CBOR to vary,
    //aside from the length (note: ideally here we would *only* dot-out the
    //metadata hash part of the CBOR, but, well, it's not worth the trouble
    //to detect that; doing that could potentially get pretty involved)
    //NOTE: this will cause a problem with Solidity versions 0.4.6 and earlier,
    //but it's not worth the trouble to detect that either, because we really
    //don't support Solidity versions that old
    //note that the externalSolidity option should *only* be set for Solidity contracts!
    const externalCborInfo = Object.values(newContexts)
        .filter(context => context.externalSolidity)
        .map(context => extractCborInfo(context.binary))
        .filter(cborSegment => cborSegment !== null && isCborWithHash(cborSegment.cbor));
    const cborRegexps = externalCborInfo.map(cborInfo => ({
        input: new RegExp(cborInfo.cborSegment, "g"),
        output: "..".repeat(cborInfo.cborLength) + cborInfo.cborLengthHex
    }));
    //HACK: we will replace *every* occurrence of *every* external CBOR occurring in
    //*every* external Solidity context, in order to cover created contracts
    //(including if there are multiple or recursive ones)
    for (let context of Object.values(newContexts)) {
        if (context.externalSolidity) {
            for (let { input, output } of cborRegexps) {
                context.binary = context.binary.replace(input, output);
            }
        }
    }
    debug("external wildcards complete");
    //finally, return this mess!
    return newContexts;
}
exports.normalizeContexts = normalizeContexts;
function extractCborInfo(binary) {
    const lastTwoBytes = binary.slice(2).slice(-2 * 2); //2 bytes * 2 for hex
    //the slice(2) there may seem unnecessary; it's to handle the possibility that the contract
    //has less than two bytes in its bytecode (that won't happen with Solidity, but let's be
    //certain)
    if (lastTwoBytes.length < 2 * 2) {
        return null; //don't try to handle this case!
    }
    const cborLength = parseInt(lastTwoBytes, 16);
    const cborEnd = binary.length - 2 * 2;
    const cborStart = cborEnd - cborLength * 2;
    //sanity check
    if (cborStart < 2) {
        //"0x"
        return null; //don't try to handle this case!
    }
    const cbor = binary.slice(cborStart, cborEnd);
    return {
        cborStart,
        cborLength,
        cborEnd,
        cborLengthHex: lastTwoBytes,
        cbor,
        cborSegment: cbor + lastTwoBytes
    };
}
function isCborWithHash(encoded) {
    debug("checking cbor");
    let decodedMultiple;
    try {
        decodedMultiple = cbor.decodeAll(encoded);
    }
    catch (_) {
        debug("invalid cbor!");
        return false;
    }
    debug("all decoded: %O", decodedMultiple);
    if (decodedMultiple.length !== 1) {
        return false;
    }
    let decoded = decodedMultiple[0];
    if (typeof decoded !== "object") {
        return false;
    }
    //borc sometimes returns maps and sometimes objects,
    //so let's make things consistent by converting to a map
    if (!(decoded instanceof Map)) {
        decoded = new Map(Object.entries(decoded));
    }
    const hashKeys = ["bzzr0", "bzzr1", "ipfs"];
    return hashKeys.some(key => decoded.has(key));
}
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 888610:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.cleanBool = exports.countDecimalPlaces = exports.shiftBigDown = exports.shiftBigUp = exports.toBytes = exports.toHexString = exports.toBig = exports.toSignedBN = exports.toBN = void 0;
const debug_1 = __importDefault(__webpack_require__(615158));
const debug = debug_1.default("codec:conversion");
const bn_js_1 = __importDefault(__webpack_require__(213550));
const big_js_1 = __importDefault(__webpack_require__(351888));
/**
 * @param bytes - undefined | string | number | BN | Uint8Array | Big
 * @return {BN}
 */
function toBN(bytes) {
    if (bytes === undefined) {
        return undefined;
    }
    else if (typeof bytes == "string") {
        return new bn_js_1.default(bytes, 16);
    }
    else if (typeof bytes == "number" || bn_js_1.default.isBN(bytes)) {
        return new bn_js_1.default(bytes);
    }
    else if (bytes instanceof big_js_1.default) {
        return new bn_js_1.default(bytes.toFixed()); //warning, better hope input is integer!
        //note: going through string may seem silly but it's actually not terrible here,
        //since BN is binary-based and Big is decimal-based
        //[toFixed is like toString except it guarantees scientific notation is not used]
    }
    else if (typeof bytes.reduce === "function") {
        return bytes.reduce((num, byte) => num.shln(8).addn(byte), new bn_js_1.default(0));
    }
}
exports.toBN = toBN;
/**
 * @param bytes - Uint8Array
 * @return {BN}
 */
function toSignedBN(bytes) {
    if (bytes[0] < 0x80) {
        // if first bit is 0
        return toBN(bytes);
    }
    else {
        return toBN(bytes.map(b => 0xff - b))
            .addn(1)
            .neg();
    }
}
exports.toSignedBN = toSignedBN;
function toBig(value) {
    //note: going through string may seem silly but it's actually not terrible here,
    //since BN (& number) is binary-based and Big is decimal-based
    return new big_js_1.default(value.toString());
}
exports.toBig = toBig;
/**
 * @param bytes - Uint8Array | BN
 * @param padLength - number - minimum desired byte length (left-pad with zeroes)
 * @return {string}
 */
function toHexString(bytes, padLength = 0) {
    if (bn_js_1.default.isBN(bytes)) {
        bytes = toBytes(bytes);
    }
    const pad = (s) => `${"00".slice(0, 2 - s.length)}${s}`;
    //                                          0  1  2  3  4
    //                                 0  1  2  3  4  5  6  7
    // bytes.length:        5  -  0x(          e5 c2 aa 09 11 )
    // length (preferred):  8  -  0x( 00 00 00 e5 c2 aa 09 11 )
    //                                `--.---'
    //                                     offset 3
    if (bytes.length < padLength) {
        let prior = bytes;
        bytes = new Uint8Array(padLength);
        bytes.set(prior, padLength - prior.length);
    }
    debug("bytes: %o", bytes);
    let string = bytes.reduce((str, byte) => `${str}${pad(byte.toString(16))}`, "");
    return `0x${string}`;
}
exports.toHexString = toHexString;
function toBytes(data, length = 0) {
    //note that length is a minimum output length
    //strings will be 0-padded on left
    //numbers/BNs will be sign-padded on left
    //NOTE: if a number/BN is passed in that is too big for the given length,
    //you will get an error!
    //(note that strings passed in should be hex strings; this is not for converting
    //generic strings to hex)
    if (typeof data === "string") {
        let hex = data; //renaming for clarity
        if (hex.startsWith("0x")) {
            hex = hex.slice(2);
        }
        if (hex === "") {
            //this special case is necessary because the match below will return null,
            //not an empty array, when given an empty string
            return new Uint8Array(0);
        }
        if (hex.length % 2 == 1) {
            hex = `0${hex}`;
        }
        let bytes = new Uint8Array(hex.match(/.{2}/g).map(byte => parseInt(byte, 16)));
        if (bytes.length < length) {
            let prior = bytes;
            bytes = new Uint8Array(length);
            bytes.set(prior, length - prior.length);
        }
        return bytes;
    }
    else {
        // BN/Big/number case
        if (typeof data === "number") {
            data = new bn_js_1.default(data);
        }
        else if (data instanceof big_js_1.default) {
            //note: going through string may seem silly but it's actually not terrible here,
            //since BN is binary-based and Big is decimal-based
            data = new bn_js_1.default(data.toFixed());
            //[toFixed is like toString except it guarantees scientific notation is not used]
        }
        //note that the argument for toTwos is given in bits
        return data.toTwos(length * 8).toArrayLike(Uint8Array, "be", length);
        //big-endian
    }
}
exports.toBytes = toBytes;
//computes value * 10**decimalPlaces
function shiftBigUp(value, decimalPlaces) {
    let newValue = new big_js_1.default(value);
    newValue.e += decimalPlaces;
    return newValue;
}
exports.shiftBigUp = shiftBigUp;
//computes value * 10**-decimalPlaces
function shiftBigDown(value, decimalPlaces) {
    let newValue = new big_js_1.default(value);
    newValue.e -= decimalPlaces;
    return newValue;
}
exports.shiftBigDown = shiftBigDown;
//we don't need this yet, but we will eventually
function countDecimalPlaces(value) {
    return Math.max(0, value.c.length - value.e - 1);
}
exports.countDecimalPlaces = countDecimalPlaces;
//converts out of range booleans to true; something of a HACK
//NOTE: does NOT do this recursively inside structs, arrays, etc!
//I mean, those aren't elementary and therefore aren't in the domain
//anyway, but still
function cleanBool(result) {
    switch (result.kind) {
        case "value":
            return result;
        case "error":
            switch (result.error.kind) {
                case "BoolOutOfRangeError":
                    //return true
                    return {
                        type: result.type,
                        kind: "value",
                        value: {
                            asBoolean: true
                        }
                    };
                default:
                    return result;
            }
    }
}
exports.cleanBool = cleanBool;
//# sourceMappingURL=conversion.js.map

/***/ }),

/***/ 889854:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.decodeRevert = exports.decodeReturndata = exports.decodeEvent = exports.decodeCalldata = exports.decodeVariable = void 0;
const debug_1 = __importDefault(__webpack_require__(615158));
const debug = debug_1.default("codec:core");
const Ast = __importStar(__webpack_require__(579545));
const AbiData = __importStar(__webpack_require__(806494));
const Topic = __importStar(__webpack_require__(142274));
const Evm = __importStar(__webpack_require__(111403));
const Contexts = __importStar(__webpack_require__(420692));
const abify_1 = __webpack_require__(721552);
const Conversion = __importStar(__webpack_require__(888610));
const errors_1 = __webpack_require__(361304);
const read_1 = __importDefault(__webpack_require__(512252));
const decode_1 = __importDefault(__webpack_require__(697708));
// untyped import since no @types/web3-utils exists
const Web3Utils = __webpack_require__(43057);
/**
 * @Category Decoding
 */
function* decodeVariable(definition, pointer, info, compilationId) {
    let compiler = info.currentContext.compiler;
    let dataType = Ast.Import.definitionToType(definition, compilationId, compiler);
    return yield* decode_1.default(dataType, pointer, info); //no need to pass an offset
}
exports.decodeVariable = decodeVariable;
/**
 * @Category Decoding
 */
function* decodeCalldata(info, isConstructor //ignored if context! trust context instead if have
) {
    const context = info.currentContext;
    if (context === null) {
        //if we don't know the contract ID, we can't decode
        if (isConstructor) {
            return {
                kind: "create",
                decodingMode: "full",
                bytecode: Conversion.toHexString(info.state.calldata)
            };
        }
        else {
            return {
                kind: "unknown",
                decodingMode: "full",
                data: Conversion.toHexString(info.state.calldata)
            };
        }
    }
    const contextHash = context.context;
    const contractType = Contexts.Import.contextToType(context);
    isConstructor = context.isConstructor;
    const allocations = info.allocations.calldata;
    let allocation;
    let selector;
    //first: is this a creation call?
    if (isConstructor) {
        allocation = allocations.constructorAllocations[contextHash].input;
    }
    else {
        //skipping any error-handling on this read, as a calldata read can't throw anyway
        let rawSelector = yield* read_1.default({
            location: "calldata",
            start: 0,
            length: Evm.Utils.SELECTOR_SIZE
        }, info.state);
        selector = Conversion.toHexString(rawSelector);
        allocation = (allocations.functionAllocations[contextHash][selector] || {
            input: undefined
        }).input;
    }
    if (allocation === undefined) {
        let abiEntry = null;
        if (info.state.calldata.length === 0) {
            //to hell with reads, let's just be direct
            abiEntry = context.fallbackAbi.receive || context.fallbackAbi.fallback;
        }
        else {
            abiEntry = context.fallbackAbi.fallback;
        }
        return {
            kind: "message",
            class: contractType,
            abi: abiEntry,
            data: Conversion.toHexString(info.state.calldata),
            decodingMode: "full"
        };
    }
    let decodingMode = allocation.allocationMode; //starts out this way, degrades to ABI if necessary
    debug("calldata decoding mode: %s", decodingMode);
    //you can't map with a generator, so we have to do this map manually
    let decodedArguments = [];
    for (const argumentAllocation of allocation.arguments) {
        let value;
        let dataType = decodingMode === "full"
            ? argumentAllocation.type
            : abify_1.abifyType(argumentAllocation.type, info.userDefinedTypes);
        try {
            value = yield* decode_1.default(dataType, argumentAllocation.pointer, info, {
                abiPointerBase: allocation.offset,
                allowRetry: decodingMode === "full"
            });
        }
        catch (error) {
            if (error instanceof errors_1.StopDecodingError &&
                error.allowRetry &&
                decodingMode === "full") {
                debug("problem! retrying as ABI");
                debug("error: %O", error);
                //if a retry happens, we've got to do several things in order to switch to ABI mode:
                //1. mark that we're switching to ABI mode;
                decodingMode = "abi";
                //2. abify all previously decoded values;
                decodedArguments = decodedArguments.map(argumentDecoding => (Object.assign(Object.assign({}, argumentDecoding), { value: abify_1.abifyResult(argumentDecoding.value, info.userDefinedTypes) })));
                //3. retry this particular decode in ABI mode.
                //(no try/catch on this one because we can't actually handle errors here!
                //not that they should be occurring)
                value = yield* decode_1.default(abify_1.abifyType(argumentAllocation.type, info.userDefinedTypes), //type is now abified!
                argumentAllocation.pointer, info, {
                    abiPointerBase: allocation.offset
                });
                //4. the remaining parameters will then automatically be decoded in ABI mode due to (1),
                //so we don't need to do anything special there.
            }
            else {
                //we shouldn't be getting other exceptions, but if we do, we don't know
                //how to handle them, so uhhhh just rethrow I guess??
                throw error;
            }
        }
        const name = argumentAllocation.name;
        decodedArguments.push(name //deliberate general falsiness test
            ? { name, value }
            : { value });
    }
    if (isConstructor) {
        return {
            kind: "constructor",
            class: contractType,
            arguments: decodedArguments,
            abi: allocation.abi,
            bytecode: Conversion.toHexString(info.state.calldata.slice(0, allocation.offset)),
            decodingMode
        };
    }
    else {
        return {
            kind: "function",
            class: contractType,
            abi: allocation.abi,
            arguments: decodedArguments,
            selector,
            decodingMode
        };
    }
}
exports.decodeCalldata = decodeCalldata;
//note: this will likely change in the future to take options rather than targetName, but I'm
//leaving it alone for now, as I'm not sure what form those options will take
//(and this is something we're a bit more OK with breaking since it's primarily
//for internal use :) )
/**
 * @Category Decoding
 */
function* decodeEvent(info, address, targetName) {
    const allocations = info.allocations.event;
    let rawSelector;
    let selector;
    let contractAllocations; //for non-anonymous events
    let libraryAllocations; //similar
    let contractAnonymousAllocations;
    let libraryAnonymousAllocations;
    const topicsCount = info.state.eventtopics.length;
    //yeah, it's not great to read directly from the state like this (bypassing read), but what are you gonna do?
    if (allocations[topicsCount]) {
        if (topicsCount > 0) {
            rawSelector = yield* read_1.default({
                location: "eventtopic",
                topic: 0
            }, info.state);
            selector = Conversion.toHexString(rawSelector);
            if (allocations[topicsCount].bySelector[selector]) {
                ({
                    contract: contractAllocations,
                    library: libraryAllocations
                } = allocations[topicsCount].bySelector[selector]);
            }
            else {
                debug("no allocations for that selector!");
                contractAllocations = {};
                libraryAllocations = {};
            }
        }
        else {
            //if we don't have a selector, it means we don't have any non-anonymous events
            contractAllocations = {};
            libraryAllocations = {};
        }
        //now: let's get our allocations for anonymous events
        ({
            contract: contractAnonymousAllocations,
            library: libraryAnonymousAllocations
        } = allocations[topicsCount].anonymous);
    }
    else {
        //if there's not even an allocation for the topics count, we can't
        //decode; we could do this the honest way of setting all four allocation
        //objects to {}, but let's just short circuit
        debug("no allocations for that topic count!");
        return [];
    }
    //now: what contract are we (probably) dealing with? let's get its code to find out
    const codeBytes = yield {
        type: "code",
        address
    };
    const codeAsHex = Conversion.toHexString(codeBytes);
    const contractContext = Contexts.Utils.findDecoderContext(info.contexts, codeAsHex);
    let possibleContractAllocations; //excludes anonymous events
    let possibleContractAnonymousAllocations;
    if (contractContext) {
        //if we found the contract, maybe it's from that contract
        const contextHash = contractContext.context;
        const contractAllocation = contractAllocations[contextHash];
        const contractAnonymousAllocation = contractAnonymousAllocations[contextHash];
        possibleContractAllocations = contractAllocation || [];
        possibleContractAnonymousAllocations = contractAnonymousAllocation || [];
    }
    else {
        //if we couldn't determine the contract, well, we have to assume it's from a library
        debug("couldn't find context");
        possibleContractAllocations = [];
        possibleContractAnonymousAllocations = [];
    }
    //now we get all the library allocations!
    const possibleLibraryAllocations = [].concat(...Object.values(libraryAllocations));
    const possibleLibraryAnonymousAllocations = [].concat(...Object.values(libraryAnonymousAllocations));
    //now we put it all together!
    const possibleAllocations = possibleContractAllocations.concat(possibleLibraryAllocations);
    const possibleAnonymousAllocations = possibleContractAnonymousAllocations.concat(possibleLibraryAnonymousAllocations);
    const possibleAllocationsTotal = possibleAllocations.concat(possibleAnonymousAllocations);
    let decodings = [];
    allocationAttempts: for (const allocation of possibleAllocationsTotal) {
        //first: do a name check so we can skip decoding if name is wrong
        debug("trying allocation: %O", allocation);
        if (targetName !== undefined && allocation.abi.name !== targetName) {
            continue;
        }
        let decodingMode = allocation.allocationMode; //starts out here; degrades to abi if necessary
        const contextHash = allocation.contextHash;
        const attemptContext = info.contexts[contextHash];
        const emittingContractType = Contexts.Import.contextToType(attemptContext);
        const contractType = allocation.definedIn;
        //you can't map with a generator, so we have to do this map manually
        let decodedArguments = [];
        for (const argumentAllocation of allocation.arguments) {
            let value;
            //if in full mode, use the allocation's listed data type.
            //if in ABI mode, abify it before use.
            let dataType = decodingMode === "full"
                ? argumentAllocation.type
                : abify_1.abifyType(argumentAllocation.type, info.userDefinedTypes);
            try {
                value = yield* decode_1.default(dataType, argumentAllocation.pointer, info, {
                    strictAbiMode: true,
                    allowRetry: decodingMode === "full" //this option is unnecessary but including for clarity
                });
            }
            catch (error) {
                if (error instanceof errors_1.StopDecodingError &&
                    error.allowRetry &&
                    decodingMode === "full") {
                    //if a retry happens, we've got to do several things in order to switch to ABI mode:
                    //1. mark that we're switching to ABI mode;
                    decodingMode = "abi";
                    //2. abify all previously decoded values;
                    decodedArguments = decodedArguments.map(argumentDecoding => (Object.assign(Object.assign({}, argumentDecoding), { value: abify_1.abifyResult(argumentDecoding.value, info.userDefinedTypes) })));
                    //3. retry this particular decode in ABI mode.
                    try {
                        value = yield* decode_1.default(abify_1.abifyType(argumentAllocation.type, info.userDefinedTypes), //type is now abified!
                        argumentAllocation.pointer, info, {
                            strictAbiMode: true //turns on STRICT MODE to cause more errors to be thrown
                            //retries no longer allowed, not that this has an effect
                        });
                    }
                    catch (_) {
                        //if an error occurred on the retry, this isn't a valid decoding!
                        debug("rejected due to exception on retry");
                        continue allocationAttempts;
                    }
                    //4. the remaining parameters will then automatically be decoded in ABI mode due to (1),
                    //so we don't need to do anything special there.
                }
                else {
                    //if any other sort of error occurred, this isn't a valid decoding!
                    debug("rejected due to exception on first try: %O", error);
                    continue allocationAttempts;
                }
            }
            const name = argumentAllocation.name;
            const indexed = argumentAllocation.pointer.location === "eventtopic";
            decodedArguments.push(name //deliberate general falsiness test
                ? { name, indexed, value }
                : { indexed, value });
        }
        //OK, so, having decoded the result, the question is: does it reencode to the original?
        //first, we have to filter out the indexed arguments, and also get rid of the name information
        const nonIndexedValues = decodedArguments
            .filter(argument => !argument.indexed)
            .map(argument => argument.value);
        //now, we can encode!
        const reEncodedData = AbiData.Encode.encodeTupleAbi(nonIndexedValues, info.allocations.abi);
        const encodedData = info.state.eventdata; //again, not great to read this directly, but oh well
        //are they equal?
        if (!Evm.Utils.equalData(reEncodedData, encodedData)) {
            //if not, this allocation doesn't work
            debug("rejected due to [non-indexed] mismatch");
            continue;
        }
        //one last check -- let's check that the indexed arguments match up, too
        const indexedValues = decodedArguments
            .filter(argument => argument.indexed)
            .map(argument => argument.value);
        const reEncodedTopics = indexedValues.map(Topic.Encode.encodeTopic);
        const encodedTopics = info.state.eventtopics;
        //now: do *these* match?
        const selectorAdjustment = allocation.anonymous ? 0 : 1;
        for (let i = 0; i < reEncodedTopics.length; i++) {
            if (!Evm.Utils.equalData(reEncodedTopics[i], encodedTopics[i + selectorAdjustment])) {
                debug("rejected due to indexed mismatch");
                continue allocationAttempts;
            }
        }
        //if we've made it here, the allocation works!  hooray!
        debug("allocation accepted!");
        if (allocation.abi.anonymous) {
            decodings.push({
                kind: "anonymous",
                definedIn: contractType,
                class: emittingContractType,
                abi: allocation.abi,
                arguments: decodedArguments,
                decodingMode
            });
        }
        else {
            decodings.push({
                kind: "event",
                definedIn: contractType,
                class: emittingContractType,
                abi: allocation.abi,
                arguments: decodedArguments,
                selector,
                decodingMode
            });
        }
    }
    return decodings;
}
exports.decodeEvent = decodeEvent;
const errorSelector = Conversion.toBytes(Web3Utils.soliditySha3({
    type: "string",
    value: "Error(string)"
})).subarray(0, Evm.Utils.SELECTOR_SIZE);
const defaultReturnAllocations = [
    {
        kind: "revert",
        allocationMode: "full",
        selector: errorSelector,
        arguments: [
            {
                name: "",
                pointer: {
                    location: "returndata",
                    start: errorSelector.length,
                    length: Evm.Utils.WORD_SIZE
                },
                type: {
                    typeClass: "string",
                    typeHint: "string"
                }
            }
        ]
    },
    {
        kind: "failure",
        allocationMode: "full",
        selector: new Uint8Array(),
        arguments: []
    },
    {
        kind: "selfdestruct",
        allocationMode: "full",
        selector: new Uint8Array(),
        arguments: []
    }
];
/**
 * If there are multiple possibilities, they're always returned in
 * the order: return, revert, failure, empty, bytecode, unknownbytecode
 * @Category Decoding
 */
function* decodeReturndata(info, successAllocation, //null here must be explicit
status //you can pass this to indicate that you know the status
) {
    let possibleAllocations;
    if (successAllocation === null) {
        possibleAllocations = defaultReturnAllocations;
    }
    else {
        switch (successAllocation.kind) {
            case "return":
                possibleAllocations = [successAllocation, ...defaultReturnAllocations];
                break;
            case "bytecode":
                possibleAllocations = [...defaultReturnAllocations, successAllocation];
                break;
            //Other cases shouldn't happen so I'm leaving them to cause errors!
        }
    }
    let decodings = [];
    allocationAttempts: for (const allocation of possibleAllocations) {
        debug("trying allocation: %O", allocation);
        //before we attempt to use this allocation, we check: does the selector match?
        let encodedData = info.state.returndata; //again, not great to read this directly, but oh well
        const encodedPrefix = encodedData.subarray(0, allocation.selector.length);
        if (!Evm.Utils.equalData(encodedPrefix, allocation.selector)) {
            continue;
        }
        encodedData = encodedData.subarray(allocation.selector.length); //slice off the selector for later
        //also we check, does the status match?
        if (status !== undefined) {
            const successKinds = ["return", "selfdestruct", "bytecode"];
            const failKinds = ["failure", "revert"];
            if (status) {
                if (!successKinds.includes(allocation.kind)) {
                    continue;
                }
            }
            else {
                if (!failKinds.includes(allocation.kind)) {
                    continue;
                }
            }
        }
        if (allocation.kind === "bytecode") {
            //bytecode is special and can't really be integrated with the other cases.
            //so it gets its own function.
            const decoding = yield* decodeBytecode(info);
            if (decoding) {
                decodings.push(decoding);
            }
            continue;
        }
        let decodingMode = allocation.allocationMode; //starts out here; degrades to abi if necessary
        //you can't map with a generator, so we have to do this map manually
        let decodedArguments = [];
        for (const argumentAllocation of allocation.arguments) {
            let value;
            //if in full mode, use the allocation's listed data type.
            //if in ABI mode, abify it before use.
            let dataType = decodingMode === "full"
                ? argumentAllocation.type
                : abify_1.abifyType(argumentAllocation.type, info.userDefinedTypes);
            //now, let's decode!
            try {
                value = yield* decode_1.default(dataType, argumentAllocation.pointer, info, {
                    abiPointerBase: allocation.selector.length,
                    strictAbiMode: true,
                    allowRetry: decodingMode === "full" //this option is unnecessary but including for clarity
                });
                debug("value on first try: %O", value);
            }
            catch (error) {
                if (error instanceof errors_1.StopDecodingError &&
                    error.allowRetry &&
                    decodingMode === "full") {
                    debug("retry!");
                    //if a retry happens, we've got to do several things in order to switch to ABI mode:
                    //1. mark that we're switching to ABI mode;
                    decodingMode = "abi";
                    //2. abify all previously decoded values;
                    decodedArguments = decodedArguments.map(argumentDecoding => (Object.assign(Object.assign({}, argumentDecoding), { value: abify_1.abifyResult(argumentDecoding.value, info.userDefinedTypes) })));
                    //3. retry this particular decode in ABI mode.
                    try {
                        value = yield* decode_1.default(abify_1.abifyType(argumentAllocation.type, info.userDefinedTypes), //type is now abified!
                        argumentAllocation.pointer, info, {
                            abiPointerBase: allocation.selector.length,
                            strictAbiMode: true //turns on STRICT MODE to cause more errors to be thrown
                            //retries no longer allowed, not that this has an effect
                        });
                        debug("value on retry: %O", value);
                    }
                    catch (_) {
                        //if an error occurred on the retry, this isn't a valid decoding!
                        debug("rejected due to exception on retry");
                        continue allocationAttempts;
                    }
                    //4. the remaining parameters will then automatically be decoded in ABI mode due to (1),
                    //so we don't need to do anything special there.
                }
                else {
                    //if any other sort of error occurred, this isn't a valid decoding!
                    debug("rejected due to exception on first try: %O", error);
                    continue allocationAttempts;
                }
            }
            const name = argumentAllocation.name;
            decodedArguments.push(name //deliberate general falsiness test
                ? { name, value }
                : { value });
        }
        //OK, so, having decoded the result, the question is: does it reencode to the original?
        //first, we have to filter out the indexed arguments, and also get rid of the name information
        debug("decodedArguments: %O", decodedArguments);
        const decodedArgumentValues = decodedArguments.map(argument => argument.value);
        const reEncodedData = AbiData.Encode.encodeTupleAbi(decodedArgumentValues, info.allocations.abi);
        //are they equal? note the selector has been stripped off encodedData!
        if (!Evm.Utils.equalData(reEncodedData, encodedData)) {
            //if not, this allocation doesn't work
            debug("rejected due to mismatch");
            continue;
        }
        //if we've made it here, the allocation works!  hooray!
        debug("allocation accepted!");
        let decoding;
        let kind = allocation.kind;
        switch (kind) {
            case "return":
                decoding = {
                    kind,
                    status: true,
                    arguments: decodedArguments,
                    decodingMode
                };
                break;
            case "revert":
                decoding = {
                    kind,
                    status: false,
                    arguments: decodedArguments,
                    decodingMode
                };
                break;
            case "selfdestruct":
                decoding = {
                    kind,
                    status: true,
                    decodingMode
                };
                break;
            case "failure":
                decoding = {
                    kind,
                    status: false,
                    decodingMode
                };
                break;
        }
        decodings.push(decoding);
    }
    return decodings;
}
exports.decodeReturndata = decodeReturndata;
//note: requires the bytecode to be in returndata, not code
function* decodeBytecode(info) {
    let decodingMode = "full"; //as always, degrade as necessary
    const bytecode = Conversion.toHexString(info.state.returndata);
    const context = Contexts.Utils.findDecoderContext(info.contexts, bytecode);
    if (!context) {
        return {
            kind: "unknownbytecode",
            status: true,
            decodingMode: "full",
            bytecode
        };
    }
    const contractType = Contexts.Import.contextToType(context);
    //now: ignore original allocation (which we didn't even pass :) )
    //and lookup allocation by context
    const allocation = (info.allocations.calldata.constructorAllocations[context.context].output);
    debug("bytecode allocation: %O", allocation);
    //now: add immutables if applicable
    let immutables;
    if (allocation.immutables) {
        immutables = [];
        //NOTE: if we're in here, we can assume decodingMode === "full"
        for (const variable of allocation.immutables) {
            const dataType = variable.type; //we don't conditioning on decodingMode here because we know it
            let value;
            try {
                value = yield* decode_1.default(dataType, variable.pointer, info, {
                    allowRetry: true,
                    strictAbiMode: true,
                    paddingMode: "zero" //force zero-padding!
                });
            }
            catch (error) {
                if (error instanceof errors_1.StopDecodingError && error.allowRetry) {
                    //we "retry" by... not bothering with immutables :P
                    //(but we do set the mode to ABI)
                    decodingMode = "abi";
                    immutables = undefined;
                    break;
                }
                else {
                    //otherwise, this isn't a valid decoding I guess
                    return null;
                }
            }
            immutables.push({
                name: variable.name,
                class: variable.definedIn,
                value
            });
        }
    }
    let decoding = {
        kind: "bytecode",
        status: true,
        decodingMode,
        bytecode,
        immutables,
        class: contractType
    };
    //finally: add address if applicable
    if (allocation.delegatecallGuard) {
        decoding.address = Web3Utils.toChecksumAddress(bytecode.slice(4, 4 + 2 * Evm.Utils.ADDRESS_SIZE) //4 = "0x73".length
        );
    }
    return decoding;
}
/**
 * Decodes the return data from a failed call.
 *
 * @param returndata The returned data, as a Uint8Array.
 * @return An array of possible decodings.  At the moment it's
 *   impossible for there to be more than one.  (If the call didn't actually
 *   fail, or failed in a nonstandard way, you may get no decodings at all, though!)
 *
 *   Decodings can either be decodings of revert messages, or decodings
 *   indicating that there was no revert message.  If somehow both were to be
 *   possible, they'd go in that order, although as mentioned, there (at least
 *   currently) isn't any way for that to occur.
 * @Category Decoding convenience
 */
function decodeRevert(returndata) {
    //coercing because TS doesn't know it'll finish in one go
    return decodeReturndata({
        allocations: {},
        state: {
            storage: {},
            returndata
        }
    }, null, false).next().value;
}
exports.decodeRevert = decodeRevert;
//# sourceMappingURL=core.js.map

/***/ }),

/***/ 697708:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const debug_1 = __importDefault(__webpack_require__(615158));
const debug = debug_1.default("codec:decode");
const AstConstant = __importStar(__webpack_require__(339947));
const AbiData = __importStar(__webpack_require__(806494));
const Format = __importStar(__webpack_require__(673949));
const Basic = __importStar(__webpack_require__(87023));
const Memory = __importStar(__webpack_require__(716970));
const Special = __importStar(__webpack_require__(833723));
const Stack = __importStar(__webpack_require__(215143));
const Storage = __importStar(__webpack_require__(248271));
const Topic = __importStar(__webpack_require__(142274));
function* decode(dataType, pointer, info, options = {}) {
    return Format.Utils.Circularity.tie(yield* decodeDispatch(dataType, pointer, info, options));
}
exports.default = decode;
function* decodeDispatch(dataType, pointer, info, options = {}) {
    debug("type %O", dataType);
    debug("pointer %O", pointer);
    switch (pointer.location) {
        case "storage":
            return yield* Storage.Decode.decodeStorage(dataType, pointer, info);
        case "stack":
            return yield* Stack.Decode.decodeStack(dataType, pointer, info);
        case "stackliteral":
            return yield* Stack.Decode.decodeLiteral(dataType, pointer, info);
        case "definition":
            return yield* AstConstant.Decode.decodeConstant(dataType, pointer, info);
        case "special":
            return yield* Special.Decode.decodeSpecial(dataType, pointer, info);
        case "calldata":
        case "eventdata":
        case "returndata":
            return yield* AbiData.Decode.decodeAbi(dataType, pointer, info, options);
        case "eventtopic":
            return yield* Topic.Decode.decodeTopic(dataType, pointer, info, options);
        case "code":
        case "nowhere":
            //currently only basic types can go in code, so we'll dispatch directly to decodeBasic
            //(if it's a nowhere pointer, this will return an error result, of course)
            //also: we force zero-padding!
            return yield* Basic.Decode.decodeBasic(dataType, pointer, info, Object.assign(Object.assign({}, options), { paddingMode: "zero" }));
        case "memory":
            //this case -- decoding something that resides *directly* in memory,
            //rather than located via a pointer -- only comes up when decoding immutables
            //in a constructor.  thus, we turn on the forceRightPadding option.
            return yield* Memory.Decode.decodeMemory(dataType, pointer, info, Object.assign(Object.assign({}, options), { paddingMode: "right" }));
    }
}
//# sourceMappingURL=decode.js.map

/***/ }),

/***/ 361304:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StopDecodingError = exports.DecodingError = void 0;
const Format = __importStar(__webpack_require__(673949));
//For when we need to throw an error, here's a wrapper class that extends Error.
//Apologies about the confusing name, but I wanted something that would make
//sense should it not be caught and thus accidentally exposed to the outside.
/**
 * @hidden
 */
class DecodingError extends Error {
    constructor(error) {
        super(Format.Utils.Exception.message(error));
        this.error = error;
        this.name = "DecodingError";
    }
}
exports.DecodingError = DecodingError;
//used to stop decoding; like DecodingError, but used in contexts
//where I don't expect it to be caught
//NOTE: currently we don't actually check the type of a thrown error,
//we just rely on context.  still, I think it makes sense to be a separate
//type.
/**
 * @hidden
 */
class StopDecodingError extends Error {
    //when decoding in full mode, we allow an ABI-mode retry.  (if we were already in
    //ABI mode, we give up.)
    constructor(error, allowRetry) {
        const message = `Stopping decoding: ${error.kind}`; //sorry about the bare-bones message,
        //but again, users shouldn't actually see this, so I think this should suffice for now
        super(message);
        this.error = error;
        this.allowRetry = Boolean(allowRetry);
    }
}
exports.StopDecodingError = StopDecodingError;
//# sourceMappingURL=errors.js.map

/***/ }),

/***/ 23931:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.makeInternalFunctionId = exports.functionTableEntryToType = void 0;
const import_1 = __webpack_require__(242444);
//creates a type object for the contract the function was defined in
function functionTableEntryToType(functionEntry) {
    if (functionEntry.contractNode === null) {
        //for free functions
        return null;
    }
    return {
        typeClass: "contract",
        kind: "native",
        id: import_1.makeTypeId(functionEntry.contractId, functionEntry.compilationId),
        typeName: functionEntry.contractName,
        contractKind: functionEntry.contractKind,
        payable: functionEntry.contractPayable
    };
}
exports.functionTableEntryToType = functionTableEntryToType;
function makeInternalFunctionId(functionEntry) {
    return `${functionEntry.compilationId}:${functionEntry.id}`;
}
exports.makeInternalFunctionId = makeInternalFunctionId;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 111403:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Import = exports.Utils = void 0;
__exportStar(__webpack_require__(703882), exports);
const Utils = __importStar(__webpack_require__(140178));
exports.Utils = Utils;
const Import = __importStar(__webpack_require__(23931));
exports.Import = Import;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 703882:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=types.js.map

/***/ }),

/***/ 140178:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.toAddress = exports.equalData = exports.keccak256 = exports.ZERO_ADDRESS = exports.MAX_WORD = exports.PC_SIZE = exports.SELECTOR_SIZE = exports.ADDRESS_SIZE = exports.WORD_SIZE = void 0;
const debug_1 = __importDefault(__webpack_require__(615158));
const debug = debug_1.default("codec:evm:utils");
const bn_js_1 = __importDefault(__webpack_require__(213550));
// untyped import since no @types/web3-utils exists
const Web3Utils = __webpack_require__(43057);
const Conversion = __importStar(__webpack_require__(888610));
exports.WORD_SIZE = 0x20;
exports.ADDRESS_SIZE = 20;
exports.SELECTOR_SIZE = 4; //function selectors, not event selectors
exports.PC_SIZE = 4;
exports.MAX_WORD = new bn_js_1.default(-1).toTwos(exports.WORD_SIZE * 8);
exports.ZERO_ADDRESS = "0x" + "00".repeat(exports.ADDRESS_SIZE);
//beware of using this for generic strings! (it's fine for bytestrings, or
//strings representing numbers) if you want to use this on a generic string,
//you should pass in {type: "string", value: theString} instead of the string
//itself.
//(maybe I should add a rawKeccak256 function, using sha3 instead of
//soliditysha3?  not seeing the need atm though)
function keccak256(...args) {
    // debug("args %o", args);
    const rawSha = Web3Utils.soliditySha3(...args);
    debug("rawSha %o", rawSha);
    let sha;
    if (rawSha === null) {
        sha = ""; //HACK, I guess?
    }
    else {
        sha = rawSha.replace(/0x/, "");
    }
    return Conversion.toBN(sha);
}
exports.keccak256 = keccak256;
//checks if two bytearrays (which may be undefined) are equal.
//does not consider undefined to be equal to itself.
function equalData(bytes1, bytes2) {
    if (!bytes1 || !bytes2) {
        return false;
    }
    if (bytes1.length !== bytes2.length) {
        return false;
    }
    for (let i = 0; i < bytes1.length; i++) {
        if (bytes1[i] !== bytes2[i]) {
            return false;
        }
    }
    return true;
}
exports.equalData = equalData;
function toAddress(bytes) {
    if (typeof bytes === "string") {
        //in this case, we can do some simple string manipulation and
        //then pass to web3
        let hex = bytes; //just renaming for clarity
        if (hex.startsWith("0x")) {
            hex = hex.slice(2);
        }
        if (hex.length < 2 * exports.ADDRESS_SIZE) {
            hex = hex.padStart(2 * exports.ADDRESS_SIZE, "0");
        }
        if (hex.length > 2 * exports.ADDRESS_SIZE) {
            hex = "0x" + hex.slice(hex.length - 2 * exports.ADDRESS_SIZE);
        }
        return Web3Utils.toChecksumAddress(hex);
    }
    //otherwise, we're in the Uint8Array case, which we can't fully handle ourself
    //truncate *on left* to 20 bytes
    if (bytes.length > exports.ADDRESS_SIZE) {
        bytes = bytes.slice(bytes.length - exports.ADDRESS_SIZE, bytes.length);
    }
    //now, convert to hex string and apply checksum case that second argument
    //(which ensures it's padded to 20 bytes) shouldn't actually ever be
    //needed, but I'll be safe and include it
    return Web3Utils.toChecksumAddress(Conversion.toHexString(bytes, exports.ADDRESS_SIZE));
}
exports.toAddress = toAddress;
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 130589:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Errors = exports.Values = exports.Types = void 0;
const Types = __importStar(__webpack_require__(891153));
exports.Types = Types;
const Values = __importStar(__webpack_require__(150435));
exports.Values = Values;
const Errors = __importStar(__webpack_require__(686247));
exports.Errors = Errors;
//# sourceMappingURL=common.js.map

/***/ }),

/***/ 459743:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=elementary.js.map

/***/ }),

/***/ 686247:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const debug_1 = __importDefault(__webpack_require__(615158));
const debug = debug_1.default("codec:format:errors");
//# sourceMappingURL=errors.js.map

/***/ }),

/***/ 673949:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Utils = exports.Errors = exports.Values = exports.Types = void 0;
const common_1 = __webpack_require__(130589);
Object.defineProperty(exports, "Types", ({ enumerable: true, get: function () { return common_1.Types; } }));
Object.defineProperty(exports, "Values", ({ enumerable: true, get: function () { return common_1.Values; } }));
Object.defineProperty(exports, "Errors", ({ enumerable: true, get: function () { return common_1.Errors; } }));
const Utils = __importStar(__webpack_require__(677204));
exports.Utils = Utils;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 891153:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isContractDefinedType = exports.typeStringWithoutLocation = exports.typeString = exports.specifyLocation = exports.fullType = exports.isReferenceType = void 0;
const debug_1 = __importDefault(__webpack_require__(615158));
const debug = debug_1.default("codec:format:types");
function isUserDefinedType(anyType) {
    const userDefinedTypes = ["contract", "enum", "struct"];
    return userDefinedTypes.includes(anyType.typeClass);
}
function isReferenceType(anyType) {
    const alwaysReferenceTypes = ["array", "mapping", "struct", "string"];
    if (alwaysReferenceTypes.includes(anyType.typeClass)) {
        return true;
    }
    else if (anyType.typeClass === "bytes") {
        return anyType.kind === "dynamic";
    }
    else {
        return false;
    }
}
exports.isReferenceType = isReferenceType;
//one could define a counterpart function that stripped all unnecessary information
//from the type object, but at the moment I see no need for that
function fullType(basicType, userDefinedTypes) {
    if (!isUserDefinedType(basicType)) {
        return basicType;
    }
    let id = basicType.id;
    let storedType = userDefinedTypes[id];
    if (!storedType) {
        return basicType;
    }
    let returnType = Object.assign(Object.assign({}, basicType), storedType);
    if (isReferenceType(basicType) && basicType.location !== undefined) {
        returnType = specifyLocation(returnType, basicType.location);
    }
    return returnType;
}
exports.fullType = fullType;
//the location argument here always forces, so passing undefined *will* force undefined
function specifyLocation(dataType, location) {
    if (isReferenceType(dataType)) {
        switch (dataType.typeClass) {
            case "string":
            case "bytes":
                return Object.assign(Object.assign({}, dataType), { location });
            case "array":
                return Object.assign(Object.assign({}, dataType), { location, baseType: specifyLocation(dataType.baseType, location) });
            case "mapping":
                let newLocation = location === "storage" ? "storage" : undefined;
                return Object.assign(Object.assign({}, dataType), { location: newLocation, valueType: specifyLocation(dataType.valueType, newLocation) });
            case "struct":
                let returnType = Object.assign(Object.assign({}, dataType), { location });
                if (returnType.memberTypes) {
                    returnType.memberTypes = returnType.memberTypes.map(({ name: memberName, type: memberType }) => ({
                        name: memberName,
                        type: specifyLocation(memberType, location)
                    }));
                }
                return returnType;
        }
    }
    else {
        return dataType;
    }
}
exports.specifyLocation = specifyLocation;
//NOTE: the following two functions might not be exactly right for weird internal stuff,
//or for ABI-only stuff.  (E.g. for internal stuff sometimes it records whether things
//are pointers or not??  we don't track that so we can't recreate that)
//But what can you do.
function typeString(dataType) {
    let baseString = typeStringWithoutLocation(dataType);
    if (isReferenceType(dataType) && dataType.location) {
        return baseString + " " + dataType.location;
    }
    else {
        return baseString;
    }
}
exports.typeString = typeString;
function typeStringWithoutLocation(dataType) {
    switch (dataType.typeClass) {
        case "uint":
            return dataType.typeHint || `uint${dataType.bits}`;
        case "int":
            return dataType.typeHint || `int${dataType.bits}`;
        case "bool":
            return dataType.typeHint || "bool";
        case "bytes":
            if (dataType.typeHint) {
                return dataType.typeHint;
            }
            switch (dataType.kind) {
                case "dynamic":
                    return "bytes";
                case "static":
                    return `bytes${dataType.length}`;
            }
        case "address":
            switch (dataType.kind) {
                case "general":
                    return dataType.typeHint || "address"; //I guess?
                case "specific":
                    return dataType.payable ? "address payable" : "address";
            }
        case "string":
            return dataType.typeHint || "string";
        case "fixed":
            return dataType.typeHint || `fixed${dataType.bits}x${dataType.places}`;
        case "ufixed":
            return dataType.typeHint || `ufixed${dataType.bits}x${dataType.places}`;
        case "array":
            if (dataType.typeHint) {
                return dataType.typeHint;
            }
            switch (dataType.kind) {
                case "dynamic":
                    return `${typeStringWithoutLocation(dataType.baseType)}[]`;
                case "static":
                    return `${typeStringWithoutLocation(dataType.baseType)}[${dataType.length}]`;
            }
        case "mapping":
            return `mapping(${typeStringWithoutLocation(dataType.keyType)} => ${typeStringWithoutLocation(dataType.valueType)})`;
        case "struct":
        case "enum":
            //combining these cases for simplicity
            switch (dataType.kind) {
                case "local":
                    return `${dataType.typeClass} ${dataType.definingContractName}.${dataType.typeName}`;
                case "global":
                    return `${dataType.typeClass} ${dataType.typeName}`;
            }
        case "tuple":
            return (dataType.typeHint ||
                "tuple(" +
                    dataType.memberTypes
                        .map(memberType => typeString(memberType.type))
                        .join(",") +
                    ")"); //note that we do include location and do not put spaces
        case "contract":
            return dataType.contractKind + " " + dataType.typeName;
        case "magic":
            //no, this is not transposed!
            const variableNames = {
                message: "msg",
                transaction: "tx",
                block: "block"
            };
            return variableNames[dataType.variable];
        case "type":
            return `type(${typeString(dataType.type)})`;
        case "function":
            let visibilityString;
            switch (dataType.visibility) {
                case "external":
                    if (dataType.kind === "general") {
                        if (dataType.typeHint) {
                            return dataType.typeHint;
                        }
                        else {
                            return "function external"; //I guess???
                        }
                    }
                    visibilityString = " external"; //note the deliberate space!
                    break;
                case "internal":
                    visibilityString = "";
                    break;
            }
            let mutabilityString = dataType.mutability === "nonpayable" ? "" : " " + dataType.mutability; //again, note the deliberate space
            let inputList = dataType.inputParameterTypes.map(typeString).join(","); //note that we do include location, and do not put spaces
            let outputList = dataType.outputParameterTypes.map(typeString).join(",");
            let inputString = `function(${inputList})`;
            let outputString = outputList === "" ? "" : ` returns (${outputList})`; //again, note the deliberate space
            return inputString + mutabilityString + visibilityString + outputString;
    }
}
exports.typeStringWithoutLocation = typeStringWithoutLocation;
function isContractDefinedType(anyType) {
    const contractDefinedTypes = ["enum", "struct"];
    return contractDefinedTypes.includes(anyType.typeClass);
}
exports.isContractDefinedType = isContractDefinedType;
//# sourceMappingURL=types.js.map

/***/ }),

/***/ 828416:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.tie = void 0;
const debug_1 = __importDefault(__webpack_require__(615158));
const debug = debug_1.default("codec:format:utils:circularity");
function tie(untied) {
    return tieWithTable(untied, []);
}
exports.tie = tie;
function tieWithTable(untied, seenSoFar) {
    if (untied.kind === "error") {
        return untied;
    }
    let reference;
    switch (untied.type.typeClass) {
        case "array":
            let untiedAsArray = untied; //dammit TS
            reference = untiedAsArray.reference;
            if (reference === undefined) {
                //we need to do some pointer stuff here, so let's first create our new
                //object we'll be pointing to
                //[we don't want to alter the original accidentally so let's clone a bit]
                let tied = Object.assign(Object.assign({}, untiedAsArray), { value: [...untiedAsArray.value] });
                //now, we can't use a map here, or we'll screw things up!
                //we want to *mutate* value, not replace it with a new object
                for (let index in tied.value) {
                    tied.value[index] = tieWithTable(tied.value[index], [
                        tied,
                        ...seenSoFar
                    ]);
                }
                return tied;
            }
            else {
                return Object.assign(Object.assign({}, seenSoFar[reference - 1]), { reference });
            }
        case "struct":
            let untiedAsStruct = untied; //dammit TS
            reference = untiedAsStruct.reference;
            if (reference === undefined) {
                //we need to do some pointer stuff here, so let's first create our new
                //object we'll be pointing to
                //[we don't want to alter the original accidentally so let's clone a bit]
                let tied = Object.assign(Object.assign({}, untiedAsStruct), { value: untiedAsStruct.value.map(component => (Object.assign({}, component))) });
                //now, we can't use a map here, or we'll screw things up!
                //we want to *mutate* value, not replace it with a new object
                for (let index in tied.value) {
                    tied.value[index] = Object.assign(Object.assign({}, tied.value[index]), { value: tieWithTable(tied.value[index].value, [tied, ...seenSoFar]) });
                }
                return tied;
            }
            else {
                return Object.assign(Object.assign({}, seenSoFar[reference - 1]), { reference });
            }
        case "tuple": //currently there are no memory tuples, but may as well
            //can't be circular, just recurse
            //note we can just recurse with a straight tie here; don't need tieWithTable
            let untiedAsTuple = untied; //dammit TS
            //we need to do some pointer stuff here, so let's first create our new
            //object we'll be pointing to
            let tied = Object.assign({}, untiedAsTuple);
            tied.value = tied.value.map(component => (Object.assign(Object.assign({}, component), { value: tie(component.value) })));
            return tied;
        default:
            //other types either:
            //1. aren't containers and so need no recursion
            //2. are containers but can't go in or contain memory things
            //and so still need no recursion
            //(or, in the case of mappings, can't contain *nontrivial* memory
            //things)
            return untied;
    }
}
//# sourceMappingURL=circularity.js.map

/***/ }),

/***/ 750708:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.message = void 0;
const debug_1 = __importDefault(__webpack_require__(615158));
const debug = debug_1.default("codec:format:utils:exception");
const Format = __importStar(__webpack_require__(130589));
const Ast = __importStar(__webpack_require__(579545));
//this function gives an error message
//for those errors that are meant to possibly
//be wrapped in a DecodingError and thrown
function message(error) {
    switch (error.kind) {
        case "UserDefinedTypeNotFoundError":
            let typeName = Format.Types.isContractDefinedType(error.type)
                ? error.type.definingContractName + "." + error.type.typeName
                : error.type.typeName;
            return `Unknown ${error.type.typeClass} type ${typeName} of id ${error.type.id}`;
        case "UnsupportedConstantError":
            return `Unsupported constant type ${Ast.Utils.typeClass(error.definition)}`;
        case "UnusedImmutableError":
            return "Cannot read unused immutable";
        case "ReadErrorStack":
            return `Can't read stack from position ${error.from} to ${error.to}`;
        case "ReadErrorBytes":
            return `Can't read ${error.length} bytes from ${error.location} starting at ${error.start}`;
        case "ReadErrorStorage":
            if (error.range.length) {
                return `Can't read ${error.range.length} bytes from storage starting at index ${error.range.from.index} in ${slotAddressPrintout(error.range.from.slot)}`;
            }
            else {
                return `Can't read storage from index ${error.range.from.index} in ${slotAddressPrintout(error.range.from.slot)} to index ${error.range.to.index} in ${slotAddressPrintout(error.range.to.slot)}`;
            }
    }
}
exports.message = message;
function slotAddressPrintout(slot) {
    if (slot.key !== undefined && slot.path !== undefined) {
        // mapping reference
        let { type: keyEncoding, value: keyValue } = keyInfoForPrinting(slot.key);
        return ("keccak(" +
            keyValue +
            " as " +
            keyEncoding +
            ", " +
            slotAddressPrintout(slot.path) +
            ") + " +
            slot.offset.toString());
    }
    else if (slot.path !== undefined) {
        const pathAddressPrintout = slotAddressPrintout(slot.path);
        return slot.hashPath
            ? "keccak(" + pathAddressPrintout + ")" + slot.offset.toString()
            : pathAddressPrintout + slot.offset.toString();
    }
    else {
        return slot.offset.toString();
    }
}
//this is like the old toSoliditySha3Input, but for debugging purposes ONLY
//it will NOT produce correct input to soliditySha3
//please use mappingKeyAsHex instead if you wish to encode a mapping key.
function keyInfoForPrinting(input) {
    switch (input.type.typeClass) {
        case "uint":
            return {
                type: "uint",
                value: input.value.asBN.toString()
            };
        case "int":
            return {
                type: "int",
                value: input.value.asBN.toString()
            };
        case "fixed":
            return {
                type: `fixed256x${input.type.places}`,
                value: input.value.asBig.toString()
            };
        case "ufixed":
            return {
                type: `ufixed256x${input.type.places}`,
                value: input.value.asBig.toString()
            };
        case "bool":
            //this is the case that won't work as valid input to soliditySha3 :)
            return {
                type: "uint",
                value: input.value.asBoolean.toString()
            };
        case "bytes":
            switch (input.type.kind) {
                case "static":
                    return {
                        type: "bytes32",
                        value: input.value.asHex
                    };
                case "dynamic":
                    return {
                        type: "bytes",
                        value: input.value.asHex
                    };
            }
        case "address":
            return {
                type: "address",
                value: input.value.asAddress
            };
        case "string":
            let coercedInput = (input);
            switch (coercedInput.value.kind) {
                case "valid":
                    return {
                        type: "string",
                        value: coercedInput.value.asString
                    };
                case "malformed":
                    return {
                        type: "bytes",
                        value: coercedInput.value.asHex
                    };
            }
        //fixed and ufixed are skipped for now
    }
}
//# sourceMappingURL=exception.js.map

/***/ }),

/***/ 677204:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Circularity = exports.Inspect = exports.Exception = void 0;
const Exception = __importStar(__webpack_require__(750708));
exports.Exception = Exception;
const Inspect = __importStar(__webpack_require__(997334));
exports.Inspect = Inspect;
const Circularity = __importStar(__webpack_require__(828416));
exports.Circularity = Circularity;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 997334:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.nativize = exports.nativizeVariables = exports.ResultInspector = void 0;
const debug_1 = __importDefault(__webpack_require__(615158));
const debug = debug_1.default("codec:format:utils:inspect");
const util_1 = __importDefault(__webpack_require__(431669));
const Exception = __importStar(__webpack_require__(750708));
//HACK -- inspect options are ridiculous, I swear >_>
function cleanStylize(options) {
    return Object.assign({}, ...Object.entries(options).map(([key, value]) => key === "stylize" ? {} : { [key]: value }));
}
/**
 * This class is meant to be used with Node's
 * [util.inspect()](https://nodejs.org/api/util.html#util_util_inspect_object_options)
 * function.  Given a [[Format.Values.Result]] `value`, one can use
 * `new ResultInspector(value)` to create a ResultInspector for that value,
 * which can be used with util.inspect() to create a human-readable string
 * representing the value.
 *
 * @example
 * Suppose `value` is a Result.  In Node, the following would print to the
 * console a human-readable representation of `value`, with colors enabled,
 * no maximum depth, and no maximum array length, and lines (usually) no
 * longer than 80 characters:
 * ```javascript
 * console.log(
 *   util.inspect(
 *     new ResultInspector(value),
 *     {
 *       colors: true,
 *       depth: null,
 *       maxArrayLength: null,
 *       breakLength: 80
 *     }
 *   )
 * );
 * ```
 * Of course, there are many other ways to use util.inspect; see Node's
 * documentation, linked above, for more.
 */
class ResultInspector {
    constructor(result) {
        this.result = result;
    }
    [util_1.default.inspect.custom](depth, options) {
        switch (this.result.kind) {
            case "value":
                switch (this.result.type.typeClass) {
                    case "uint":
                    case "int":
                        return options.stylize((this.result).value.asBN.toString(), "number");
                    case "fixed":
                    case "ufixed":
                        //note: because this is just for display, we don't bother adjusting the magic values Big.NE or Big.PE;
                        //we'll trust those to their defaults
                        return options.stylize((this.result).value.asBig.toString(), "number");
                    case "bool":
                        return util_1.default.inspect(this.result.value.asBoolean, options);
                    case "bytes":
                        let hex = this.result.value.asHex;
                        switch (this.result.type.kind) {
                            case "static":
                                return options.stylize(hex, "number");
                            case "dynamic":
                                return options.stylize(`hex'${hex.slice(2)}'`, "string");
                        }
                    case "address":
                        return options.stylize(this.result.value.asAddress, "number");
                    case "string": {
                        let coercedResult = this.result;
                        switch (coercedResult.value.kind) {
                            case "valid":
                                return util_1.default.inspect(coercedResult.value.asString, options);
                            case "malformed":
                                //note: this will turn malformed utf-8 into replacement characters (U+FFFD)
                                //note we need to cut off the 0x prefix
                                return util_1.default.inspect(Buffer.from(coercedResult.value.asHex.slice(2), "hex").toString());
                        }
                    }
                    case "array": {
                        let coercedResult = this.result;
                        if (coercedResult.reference !== undefined) {
                            return formatCircular(coercedResult.reference, options);
                        }
                        return util_1.default.inspect(coercedResult.value.map(element => new ResultInspector(element)), options);
                    }
                    case "mapping":
                        return util_1.default.inspect(new Map((this.result).value.map(({ key, value }) => [
                            new ResultInspector(key),
                            new ResultInspector(value)
                        ])), options);
                    case "struct": {
                        let coercedResult = this.result;
                        if (coercedResult.reference !== undefined) {
                            return formatCircular(coercedResult.reference, options);
                        }
                        return util_1.default.inspect(Object.assign({}, ...coercedResult.value.map(({ name, value }) => ({
                            [name]: new ResultInspector(value)
                        }))), options);
                    }
                    case "tuple": {
                        let coercedResult = this.result;
                        //if everything is named, do same as with struct.
                        //if not, just do an array.
                        //(good behavior in the mixed case is hard, unfortunately)
                        if (coercedResult.value.every(({ name }) => name)) {
                            return util_1.default.inspect(Object.assign({}, ...coercedResult.value.map(({ name, value }) => ({
                                [name]: new ResultInspector(value)
                            }))), options);
                        }
                        else {
                            return util_1.default.inspect(coercedResult.value.map(({ value }) => new ResultInspector(value)), options);
                        }
                    }
                    case "type": {
                        switch (this.result.type.type.typeClass) {
                            case "contract":
                                //same as struct case but w/o circularity check
                                return util_1.default.inspect(Object.assign({}, ...this.result.value.map(({ name, value }) => ({
                                    [name]: new ResultInspector(value)
                                }))), options);
                            case "enum": {
                                return enumTypeName(this.result.type.type);
                            }
                        }
                    }
                    case "magic":
                        return util_1.default.inspect(Object.assign({}, ...Object.entries(this.result.value).map(([key, value]) => ({ [key]: new ResultInspector(value) }))), options);
                    case "enum": {
                        return enumFullName(this.result); //not stylized
                    }
                    case "contract": {
                        return util_1.default.inspect(new ContractInfoInspector(this.result.value), options);
                    }
                    case "function":
                        switch (this.result.type.visibility) {
                            case "external": {
                                let coercedResult = (this.result);
                                let contractString = util_1.default.inspect(new ContractInfoInspector(coercedResult.value.contract), Object.assign(Object.assign({}, cleanStylize(options)), { colors: false }));
                                let firstLine;
                                switch (coercedResult.value.kind) {
                                    case "known":
                                        firstLine = `[Function: ${coercedResult.value.abi.name} of`;
                                        break;
                                    case "invalid":
                                    case "unknown":
                                        firstLine = `[Function: Unknown selector ${coercedResult.value.selector} of`;
                                        break;
                                }
                                let secondLine = `${contractString}]`;
                                let breakingSpace = firstLine.length + secondLine.length + 1 > options.breakLength
                                    ? "\n"
                                    : " ";
                                //now, put it together
                                return options.stylize(firstLine + breakingSpace + secondLine, "special");
                            }
                            case "internal": {
                                let coercedResult = (this.result);
                                switch (coercedResult.value.kind) {
                                    case "function":
                                        if (coercedResult.value.definedIn) {
                                            return options.stylize(`[Function: ${coercedResult.value.definedIn.typeName}.${coercedResult.value.name}]`, "special");
                                        }
                                        else {
                                            return options.stylize(`[Function: ${coercedResult.value.name}]`, "special");
                                        }
                                    case "exception":
                                        return coercedResult.value.deployedProgramCounter === 0
                                            ? options.stylize(`[Function: <zero>]`, "special")
                                            : options.stylize(`[Function: assert(false)]`, "special");
                                    case "unknown":
                                        let firstLine = `[Function: decoding not supported (raw info:`;
                                        let secondLine = `deployed PC=${coercedResult.value.deployedProgramCounter}, constructor PC=${coercedResult.value.constructorProgramCounter})]`;
                                        let breakingSpace = firstLine.length + secondLine.length + 1 >
                                            options.breakLength
                                            ? "\n"
                                            : " ";
                                        //now, put it together
                                        return options.stylize(firstLine + breakingSpace + secondLine, "special");
                                }
                            }
                        }
                }
            case "error": {
                debug("this.result: %O", this.result);
                let errorResult = this.result; //the hell?? why couldn't it make this inference??
                switch (errorResult.error.kind) {
                    case "UintPaddingError":
                        return `Uint has incorrect padding (expected padding: ${errorResult.error.paddingType}) (raw value ${errorResult.error.raw})`;
                    case "IntPaddingError":
                        return `Int has incorrect padding (expected padding: ${errorResult.error.paddingType}) (raw value ${errorResult.error.raw})`;
                    case "UintPaddingError":
                        return `Ufixed has (expected padding: ${errorResult.error.paddingType}) (raw value ${errorResult.error.raw})`;
                    case "FixedPaddingError":
                        return `Fixed has incorrect padding (expected padding: ${errorResult.error.paddingType}) (raw value ${errorResult.error.raw})`;
                    case "BoolOutOfRangeError":
                        return `Invalid boolean (numeric value ${errorResult.error.rawAsBN.toString()})`;
                    case "BoolPaddingError":
                        return `Boolean has incorrect padding (expected padding: ${errorResult.error.paddingType}) (raw value ${errorResult.error.raw})`;
                    case "BytesPaddingError":
                        return `Bytestring has extra trailing bytes (padding error) (raw value ${errorResult.error.raw})`;
                    case "AddressPaddingError":
                        return `Address has incorrect padding (expected padding: ${errorResult.error.paddingType}) (raw value ${errorResult.error.raw})`;
                    case "EnumOutOfRangeError":
                        return `Invalid ${enumTypeName(errorResult.error.type)} (numeric value ${errorResult.error.rawAsBN.toString()})`;
                    case "EnumPaddingError":
                        return `Enum ${enumTypeName(errorResult.error.type)} has incorrect padding (expected padding: ${errorResult.error.paddingType}) (raw value ${errorResult.error.raw})`;
                    case "EnumNotFoundDecodingError":
                        return `Unknown enum type ${enumTypeName(errorResult.error.type)} of id ${errorResult.error.type.id} (numeric value ${errorResult.error.rawAsBN.toString()})`;
                    case "ContractPaddingError":
                        return `Contract address has incorrect padding (expected padding: ${errorResult.error.paddingType}) (raw value ${errorResult.error.raw})`;
                    case "FunctionExternalNonStackPaddingError":
                        return `External function has incorrect padding (expected padding: ${errorResult.error.paddingType}) (raw value ${errorResult.error.raw})`;
                    case "FunctionExternalStackPaddingError":
                        return `External function address or selector has extra leading bytes (padding error) (raw address ${errorResult.error.rawAddress}, raw selector ${errorResult.error.rawSelector})`;
                    case "FunctionInternalPaddingError":
                        return `Internal function has incorrect padding (expected padding: ${errorResult.error.paddingType}) (raw value ${errorResult.error.raw})`;
                    case "NoSuchInternalFunctionError":
                        return `Invalid function (Deployed PC=${errorResult.error.deployedProgramCounter}, constructor PC=${errorResult.error.constructorProgramCounter}) of contract ${errorResult.error.context.typeName}`;
                    case "DeployedFunctionInConstructorError":
                        return `Deployed-style function (PC=${errorResult.error.deployedProgramCounter}) in constructor`;
                    case "MalformedInternalFunctionError":
                        return `Malformed internal function w/constructor PC only (value: ${errorResult.error.constructorProgramCounter})`;
                    case "IndexedReferenceTypeError": //for this one we'll bother with some line-wrapping
                        let firstLine = `Cannot decode indexed parameter of reference type ${errorResult.error.type.typeClass}`;
                        let secondLine = `(raw value ${errorResult.error.raw})`;
                        let breakingSpace = firstLine.length + secondLine.length + 1 > options.breakLength
                            ? "\n"
                            : " ";
                        return firstLine + breakingSpace + secondLine;
                    case "OverlongArraysAndStringsNotImplementedError":
                        return `Array or string is too long (length ${errorResult.error.lengthAsBN.toString()}); decoding is not supported`;
                    case "OverlargePointersNotImplementedError":
                        return `Pointer is too large (value ${errorResult.error.pointerAsBN.toString()}); decoding is not supported`;
                    case "UserDefinedTypeNotFoundError":
                    case "UnsupportedConstantError":
                    case "UnusedImmutableError":
                    case "ReadErrorStack":
                    case "ReadErrorStorage":
                    case "ReadErrorBytes":
                        return Exception.message(errorResult.error); //yay, these five are already defined!
                }
            }
        }
    }
}
exports.ResultInspector = ResultInspector;
//these get their own class to deal with a minor complication
class ContractInfoInspector {
    constructor(value) {
        this.value = value;
    }
    [util_1.default.inspect.custom](depth, options) {
        switch (this.value.kind) {
            case "known":
                return (options.stylize(this.value.address, "number") +
                    ` (${this.value.class.typeName})`);
            case "unknown":
                return (options.stylize(this.value.address, "number") + " of unknown class");
        }
    }
}
function enumTypeName(enumType) {
    return ((enumType.kind === "local" ? enumType.definingContractName + "." : "") +
        enumType.typeName);
}
//this function will be used in the future for displaying circular
//structures
function formatCircular(loopLength, options) {
    return options.stylize(`[Circular (=up ${loopLength})]`, "special");
}
function enumFullName(value) {
    switch (value.type.kind) {
        case "local":
            return `${value.type.definingContractName}.${value.type.typeName}.${value.value.name}`;
        case "global":
            return `${value.type.typeName}.${value.value.name}`;
    }
}
/**
 * WARNING! Do NOT use this function in real code unless you
 * absolutely have to!  Using it in controlled tests is fine,
 * but do NOT use it in real code if you have any better option!
 * See [[nativize]] for why!
 */
function nativizeVariables(variables) {
    return Object.assign({}, ...Object.entries(variables).map(([name, value]) => {
        try {
            return { [name]: nativize(value) };
        }
        catch (_) {
            return undefined; //I guess??
        }
    }));
}
exports.nativizeVariables = nativizeVariables;
//HACK! Avoid using!
/**
 * WARNING! Do NOT use this function in real code unless you absolutely have
 * to!  Using it in controlled tests is fine, but do NOT use it in real code if
 * you have any better option!
 *
 * This function is a giant hack.  It will throw exceptions on numbers that
 * don't fit in a Javascript number.  It loses various information.  It was
 * only ever written to support our hacked-together watch expression system,
 * and later repurposed to make testing easier.
 *
 * If you are not doing something as horrible as evaluating user-inputted
 * Javascript expressions meant to operate upon Solidity variables, then you
 * probably have a better option than using this in real code!
 *
 * (For instance, if you just want to nicely print individual values, without
 * attempting to first operate on them via Javascript expressions, we have the
 * [[ResultInspector]] class, which can be used with Node's
 * [util.inspect()](https://nodejs.org/api/util.html#util_util_inspect_object_options)
 * to do exactly that.)
 *
 * Remember, the decoder output format was made to be machine-readable.  It
 * shouldn't be too hard for you to process.  If it comes to it, copy-paste
 * this code and dehackify it for your use case, which hopefully is more
 * manageable than the one that caused us to write this.
 */
function nativize(result) {
    return nativizeWithTable(result, []);
}
exports.nativize = nativize;
function nativizeWithTable(result, seenSoFar) {
    if (result.kind === "error") {
        debug("ErrorResult: %O", result);
        switch (result.error.kind) {
            case "BoolOutOfRangeError":
                return true;
            default:
                return undefined;
        }
    }
    //NOTE: for simplicity, only arrays & structs will call nativizeWithTable;
    //other containers will just call nativize because they can get away with it
    //(only things that can *be* circular need nativizeWithTable, not things that
    //can merely *contain* circularities)
    switch (result.type.typeClass) {
        case "uint":
        case "int":
            return (result).value.asBN.toNumber(); //WARNING
        case "bool":
            return result.value.asBoolean;
        case "bytes":
            return result.value.asHex;
        case "address":
            return result.value.asAddress;
        case "string": {
            let coercedResult = result;
            switch (coercedResult.value.kind) {
                case "valid":
                    return coercedResult.value.asString;
                case "malformed":
                    // this will turn malformed utf-8 into replacement characters (U+FFFD) (WARNING)
                    // note we need to cut off the 0x prefix
                    return Buffer.from(coercedResult.value.asHex.slice(2), "hex").toString();
            }
        }
        case "fixed":
        case "ufixed":
            //HACK: Big doesn't have a toNumber() method, so we convert to string and then parse with Number
            //NOTE: we don't bother setting the magic variables Big.NE or Big.PE first, as the choice of
            //notation shouldn't affect the result (can you believe I have to write this? @_@)
            return Number((result).value.asBig.toString()); //WARNING
        case "array": {
            let coercedResult = result;
            if (coercedResult.reference === undefined) {
                //we need to do some pointer stuff here, so let's first create our new
                //object we'll be pointing to
                //[we don't want to alter the original accidentally so let's clone a bit]
                let output = [...coercedResult.value];
                //now, we can't use a map here, or we'll screw things up!
                //we want to *mutate* output, not replace it with a new object
                for (let index in output) {
                    output[index] = nativizeWithTable(output[index], [
                        output,
                        ...seenSoFar
                    ]);
                }
                return output;
            }
            else {
                return seenSoFar[coercedResult.reference - 1];
            }
        }
        case "mapping":
            return Object.assign({}, ...result.value.map(({ key, value }) => ({
                [nativize(key).toString()]: nativize(value)
            })));
        case "struct": {
            let coercedResult = result;
            if (coercedResult.reference === undefined) {
                //we need to do some pointer stuff here, so let's first create our new
                //object we'll be pointing to
                let output = Object.assign({}, ...result.value.map(({ name, value }) => ({
                    [name]: value //we *don't* nativize yet!
                })));
                //now, we can't use a map here, or we'll screw things up!
                //we want to *mutate* output, not replace it with a new object
                for (let name in output) {
                    output[name] = nativizeWithTable(output[name], [
                        output,
                        ...seenSoFar
                    ]);
                }
                return output;
            }
            else {
                return seenSoFar[coercedResult.reference - 1];
            }
        }
        case "type":
            switch (result.type.type.typeClass) {
                case "contract":
                    return Object.assign({}, ...result.value.map(({ name, value }) => ({
                        [name]: nativize(value)
                    })));
                case "enum":
                    return Object.assign({}, ...result.value.map(enumValue => ({
                        [enumValue.value.name]: nativize(enumValue)
                    })));
            }
        case "tuple":
            return result.value.map(({ value }) => nativize(value));
        case "magic":
            return Object.assign({}, ...Object.entries(result.value).map(([key, value]) => ({ [key]: nativize(value) })));
        case "enum":
            return enumFullName(result);
        case "contract":
            return result.value.address; //we no longer include additional info
        case "function":
            switch (result.type.visibility) {
                case "external": {
                    let coercedResult = result;
                    switch (coercedResult.value.kind) {
                        case "known":
                            return `${coercedResult.value.contract.class.typeName}(${coercedResult.value.contract.address}).${coercedResult.value.abi.name}`;
                        case "invalid":
                            return `${coercedResult.value.contract.class.typeName}(${coercedResult.value.contract.address}).call(${coercedResult.value.selector}...)`;
                        case "unknown":
                            return `${coercedResult.value.contract.address}.call(${coercedResult.value.selector}...)`;
                    }
                }
                case "internal": {
                    let coercedResult = result;
                    switch (coercedResult.value.kind) {
                        case "function":
                            if (coercedResult.value.definedIn) {
                                return `${coercedResult.value.definedIn.typeName}.${coercedResult.value.name}`;
                            }
                            else {
                                return coercedResult.value.name;
                            }
                        case "exception":
                            return coercedResult.value.deployedProgramCounter === 0
                                ? `<zero>`
                                : `assert(false)`;
                        case "unknown":
                            return `<decoding not supported>`;
                    }
                }
            }
    }
}
//# sourceMappingURL=inspect.js.map

/***/ }),

/***/ 150435:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const debug_1 = __importDefault(__webpack_require__(615158));
const debug = debug_1.default("codec:format:values");
__exportStar(__webpack_require__(459743), exports);
//# sourceMappingURL=values.js.map

/***/ }),

/***/ 485101:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/**
 * # Truffle Codec
 *
 * This module provides low-level decoding and encoding functionality for
 * Solidity and the Solidity ABI.  Many parts of this module are intended
 * primarily for internal use by Truffle and so remain largely undocumented,
 * but some of its types are also output by @truffle/decoder, which provides
 * a higher-level interface to much of this module's functionality.
 *
 * ## If you're here from Truffle Decoder
 *
 * If you're coming here from [[@truffle/decoder]], you probably just want to
 * know about the parts that are relevant to you.  These are:
 *
 * * The "data" category (specifically [[Format]])
 * * The "output" and "enumerations" categories ([[CalldataDecoding]], [[LogDecoding]], et al., see below)
 * * The "errors" category (specifically [[UnknownUserDefinedTypeError]])
 *
 * Note that the data category is largely scarce in
 * documentation, although that's because it's largely self-explanatory.
 *
 * If you're not just here from Truffle Decoder, but are actually
 * interested in the lower-level workings, read on.
 *
 * ## How this module differs from Truffle Decoder
 *
 * Unlike Truffle Decoder, this library makes no network connections
 * and avoids dependencies that do.  Instead, its decoding functionality
 * is generator-based; calling one of the decoding functions returns a
 * generator.  This generator's `next()` function may return a finished
 * result, or it may return a request for more information.  It is up to
 * the caller to fulfill these requests -- say, by making a network
 * connection of its own.  This is how @truffle/decoder works; @truffle/codec
 * makes requests, and @truffle/decoder fulfills them by
 * looking up the necessary information on the blockchain.
 *
 * This library also provides additional functionality beyond what's used by
 * Truffle Decoder.  In particular, this library also exists to support Truffle
 * Debugger, and so it provides encoding functionality not just for
 * transactions, logs, and state variables, but also for Solidity variables
 * during transaction execution, including circularity detection for memroy
 * structures.  It includes functionality for decoding Solidity's internal
 * function pointers, which the debugger uses, but which Truffle Decoder
 * currently does not (although this is planned for the future).
 *
 * There is also functionality for decoding return values and revert messages
 * that goes beyond what's currently available in @truffle/decoder; this may get
 * a better interface in the future.
 *
 * ## How to use
 *
 * You should probably use [[@truffle/decoder]] instead, if your use case doesn't
 * preclude it.  This module has little documentation, where it has any at all,
 * and it's likely that parts of its interface may change (particularly
 * regarding allocation).  That said, if you truly need the functionality here,
 * Truffle Decoder can perhaps serve as something of a reference implementation
 * (and perhaps Truffle Debugger as well, though that code is much harder to
 * read or copy).
 *
 * @module @truffle/codec
 */ /** */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Evm = exports.Pointer = exports.Conversion = exports.Contexts = exports.Compilations = exports.Compiler = exports.Ast = exports.AstConstant = exports.Storage = exports.Stack = exports.Special = exports.Memory = exports.MappingKey = exports.Topic = exports.AbiData = exports.Bytes = exports.Basic = exports.Format = void 0;
__webpack_require__(20406);
//So, what shall codec export...?
//First: export the data format
const Format = __importStar(__webpack_require__(673949));
exports.Format = Format;
//now... various low-level stuff we want to export!
//the actual decoding functions and related errors
var core_1 = __webpack_require__(889854);
Object.defineProperty(exports, "decodeVariable", ({ enumerable: true, get: function () { return core_1.decodeVariable; } }));
Object.defineProperty(exports, "decodeEvent", ({ enumerable: true, get: function () { return core_1.decodeEvent; } }));
Object.defineProperty(exports, "decodeCalldata", ({ enumerable: true, get: function () { return core_1.decodeCalldata; } }));
Object.defineProperty(exports, "decodeReturndata", ({ enumerable: true, get: function () { return core_1.decodeReturndata; } }));
Object.defineProperty(exports, "decodeRevert", ({ enumerable: true, get: function () { return core_1.decodeRevert; } }));
var errors_1 = __webpack_require__(361304);
Object.defineProperty(exports, "DecodingError", ({ enumerable: true, get: function () { return errors_1.DecodingError; } }));
Object.defineProperty(exports, "StopDecodingError", ({ enumerable: true, get: function () { return errors_1.StopDecodingError; } }));
__exportStar(__webpack_require__(969358), exports);
var abify_1 = __webpack_require__(721552);
Object.defineProperty(exports, "abifyCalldataDecoding", ({ enumerable: true, get: function () { return abify_1.abifyCalldataDecoding; } }));
Object.defineProperty(exports, "abifyLogDecoding", ({ enumerable: true, get: function () { return abify_1.abifyLogDecoding; } }));
// data locations - common
const Basic = __importStar(__webpack_require__(87023));
exports.Basic = Basic;
const Bytes = __importStar(__webpack_require__(868704));
exports.Bytes = Bytes;
// data locations - abi
const AbiData = __importStar(__webpack_require__(806494));
exports.AbiData = AbiData;
const Topic = __importStar(__webpack_require__(142274));
exports.Topic = Topic;
// data locations - solidity
const MappingKey = __importStar(__webpack_require__(782538));
exports.MappingKey = MappingKey;
const Memory = __importStar(__webpack_require__(716970));
exports.Memory = Memory;
const Special = __importStar(__webpack_require__(833723));
exports.Special = Special;
const Stack = __importStar(__webpack_require__(215143));
exports.Stack = Stack;
const Storage = __importStar(__webpack_require__(248271));
exports.Storage = Storage;
const AstConstant = __importStar(__webpack_require__(339947));
exports.AstConstant = AstConstant;
const Ast = __importStar(__webpack_require__(579545));
exports.Ast = Ast;
const Compiler = __importStar(__webpack_require__(411619));
exports.Compiler = Compiler;
const Compilations = __importStar(__webpack_require__(507405));
exports.Compilations = Compilations;
const Contexts = __importStar(__webpack_require__(420692));
exports.Contexts = Contexts;
const Conversion = __importStar(__webpack_require__(888610));
exports.Conversion = Conversion;
const Pointer = __importStar(__webpack_require__(910456));
exports.Pointer = Pointer;
const Evm = __importStar(__webpack_require__(111403));
exports.Evm = Evm;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 310305:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.mappingKeyAsHex = exports.encodeMappingKey = void 0;
const debug_1 = __importDefault(__webpack_require__(615158));
const debug = debug_1.default("codec:mapping-key:encode");
const Conversion = __importStar(__webpack_require__(888610));
const BasicEncode = __importStar(__webpack_require__(193699));
const BytesEncode = __importStar(__webpack_require__(264051));
//UGH -- it turns out TypeScript can't handle nested tagged unions
//see: https://github.com/microsoft/TypeScript/issues/18758
//so, I'm just going to have to throw in a bunch of type coercions >_>
/**
 * @Category Encoding (low-level)
 */
function encodeMappingKey(input) {
    if (input.type.typeClass === "string" ||
        (input.type.typeClass === "bytes" && input.type.kind === "dynamic")) {
        return BytesEncode.encodeBytes(input);
    }
    else {
        return BasicEncode.encodeBasic(input);
    }
}
exports.encodeMappingKey = encodeMappingKey;
/**
 * @Category Encoding (low-level)
 */
function mappingKeyAsHex(input) {
    return Conversion.toHexString(encodeMappingKey(input));
}
exports.mappingKeyAsHex = mappingKeyAsHex;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 782538:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Encode = void 0;
const Encode = __importStar(__webpack_require__(310305));
exports.Encode = Encode;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 713530:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isSkippedInMemoryStructs = exports.getMemoryAllocations = void 0;
const debug_1 = __importDefault(__webpack_require__(615158));
const debug = debug_1.default("codec:memory:allocate");
const Evm = __importStar(__webpack_require__(111403));
function getMemoryAllocations(userDefinedTypes) {
    let allocations = {};
    for (const dataType of Object.values(userDefinedTypes)) {
        if (dataType.typeClass === "struct") {
            allocations[dataType.id] = allocateStruct(dataType);
        }
    }
    return allocations;
}
exports.getMemoryAllocations = getMemoryAllocations;
function isSkippedInMemoryStructs(dataType) {
    if (dataType.typeClass === "mapping") {
        return true;
    }
    else if (dataType.typeClass === "array") {
        return isSkippedInMemoryStructs(dataType.baseType);
    }
    else {
        return false;
    }
}
exports.isSkippedInMemoryStructs = isSkippedInMemoryStructs;
//unlike in storage and calldata, we'll just return the one allocation, nothing fancy
//that's because allocating one struct can never necessitate allocating another
function allocateStruct(dataType) {
    let memberAllocations = [];
    let position = 0;
    for (const { name, type: memberType } of dataType.memberTypes) {
        const length = isSkippedInMemoryStructs(memberType)
            ? 0
            : Evm.Utils.WORD_SIZE;
        memberAllocations.push({
            name,
            type: memberType,
            pointer: {
                location: "memory",
                start: position,
                length
            }
        });
        position += length;
    }
    return {
        members: memberAllocations
    };
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 384449:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.decodeMemoryReferenceByAddress = exports.decodeMemory = void 0;
const debug_1 = __importDefault(__webpack_require__(615158));
const debug = debug_1.default("codec:memory:decode");
const read_1 = __importDefault(__webpack_require__(512252));
const Conversion = __importStar(__webpack_require__(888610));
const Format = __importStar(__webpack_require__(673949));
const Basic = __importStar(__webpack_require__(87023));
const Bytes = __importStar(__webpack_require__(868704));
const Evm = __importStar(__webpack_require__(111403));
const allocate_1 = __webpack_require__(713530);
function* decodeMemory(dataType, pointer, info, options = {}) {
    if (Format.Types.isReferenceType(dataType)) {
        if (allocate_1.isSkippedInMemoryStructs(dataType)) {
            //special case; these types are always empty in memory
            return decodeMemorySkippedType(dataType);
        }
        else {
            return yield* decodeMemoryReferenceByAddress(dataType, pointer, info, options);
        }
    }
    else {
        return yield* Basic.Decode.decodeBasic(dataType, pointer, info, options);
    }
}
exports.decodeMemory = decodeMemory;
function decodeMemorySkippedType(dataType) {
    switch (dataType.typeClass) {
        case "mapping":
            return {
                type: dataType,
                kind: "value",
                value: []
            };
        case "array":
            return {
                type: dataType,
                kind: "value",
                value: []
            };
        //other cases should not arise!
    }
}
function* decodeMemoryReferenceByAddress(dataType, pointer, info, options = {}) {
    const { state } = info;
    const memoryVisited = options.memoryVisited || [];
    debug("pointer %o", pointer);
    let rawValue;
    try {
        rawValue = yield* read_1.default(pointer, state);
    }
    catch (error) {
        return {
            //dunno why TS is failing here
            type: dataType,
            kind: "error",
            error: error.error
        };
    }
    let startPositionAsBN = Conversion.toBN(rawValue);
    let startPosition;
    try {
        startPosition = startPositionAsBN.toNumber();
    }
    catch (_) {
        return {
            //again with the TS failures...
            type: dataType,
            kind: "error",
            error: {
                kind: "OverlargePointersNotImplementedError",
                pointerAsBN: startPositionAsBN
            }
        };
    }
    //startPosition may get modified later, so let's save the current
    //value for circularity detection purposes
    const objectPosition = startPosition;
    let rawLength;
    let lengthAsBN;
    let length;
    let seenPreviously;
    switch (dataType.typeClass) {
        case "bytes":
        case "string":
            //initial word contains length
            try {
                rawLength = yield* read_1.default({
                    location: "memory",
                    start: startPosition,
                    length: Evm.Utils.WORD_SIZE
                }, state);
            }
            catch (error) {
                return {
                    //dunno why TS is failing here
                    type: dataType,
                    kind: "error",
                    error: error.error
                };
            }
            lengthAsBN = Conversion.toBN(rawLength);
            try {
                length = lengthAsBN.toNumber();
            }
            catch (_) {
                return {
                    //again with the TS failures...
                    type: dataType,
                    kind: "error",
                    error: {
                        kind: "OverlongArraysAndStringsNotImplementedError",
                        lengthAsBN
                    }
                };
            }
            let childPointer = {
                location: "memory",
                start: startPosition + Evm.Utils.WORD_SIZE,
                length
            };
            return yield* Bytes.Decode.decodeBytes(dataType, childPointer, info);
        case "array": {
            //first: circularity check!
            seenPreviously = memoryVisited.indexOf(objectPosition);
            if (seenPreviously !== -1) {
                return {
                    type: dataType,
                    kind: "value",
                    reference: seenPreviously + 1,
                    value: [] //will be fixed later by the tie function
                };
            }
            //otherwise, decode as normal
            if (dataType.kind === "dynamic") {
                //initial word contains array length
                try {
                    rawLength = yield* read_1.default({
                        location: "memory",
                        start: startPosition,
                        length: Evm.Utils.WORD_SIZE
                    }, state);
                }
                catch (error) {
                    return {
                        type: dataType,
                        kind: "error",
                        error: error.error
                    };
                }
                lengthAsBN = Conversion.toBN(rawLength);
                startPosition += Evm.Utils.WORD_SIZE; //increment startPosition
                //to next word, as first word was used for length
            }
            else {
                lengthAsBN = dataType.length;
            }
            try {
                length = lengthAsBN.toNumber();
            }
            catch (_) {
                return {
                    type: dataType,
                    kind: "error",
                    error: {
                        kind: "OverlongArraysAndStringsNotImplementedError",
                        lengthAsBN
                    }
                };
            }
            let memoryNowVisited = [objectPosition, ...memoryVisited];
            let baseType = dataType.baseType;
            let decodedChildren = [];
            for (let index = 0; index < length; index++) {
                decodedChildren.push(yield* decodeMemory(baseType, {
                    location: "memory",
                    start: startPosition + index * Evm.Utils.WORD_SIZE,
                    length: Evm.Utils.WORD_SIZE
                }, info, { memoryVisited: memoryNowVisited }));
            }
            return {
                type: dataType,
                kind: "value",
                value: decodedChildren
            };
        }
        case "struct": {
            //first: circularity check!
            seenPreviously = memoryVisited.indexOf(objectPosition);
            if (seenPreviously !== -1) {
                return {
                    type: dataType,
                    kind: "value",
                    reference: seenPreviously + 1,
                    value: [] //will be fixed later by the tie function
                };
            }
            //otherwise, decode as normal
            const { allocations: { memory: allocations } } = info;
            const typeId = dataType.id;
            const structAllocation = allocations[typeId];
            if (!structAllocation) {
                return {
                    type: dataType,
                    kind: "error",
                    error: {
                        kind: "UserDefinedTypeNotFoundError",
                        type: dataType
                    }
                };
            }
            debug("structAllocation %O", structAllocation);
            let memoryNowVisited = [objectPosition, ...memoryVisited];
            let decodedMembers = [];
            for (let index = 0; index < structAllocation.members.length; index++) {
                const memberAllocation = structAllocation.members[index];
                const memberPointer = memberAllocation.pointer;
                const childPointer = {
                    location: "memory",
                    start: startPosition + memberPointer.start,
                    length: memberPointer.length //always equals WORD_SIZE or 0
                };
                let memberName = memberAllocation.name;
                let memberType = Format.Types.specifyLocation(memberAllocation.type, "memory");
                decodedMembers.push({
                    name: memberName,
                    value: yield* decodeMemory(memberType, childPointer, info, {
                        memoryVisited: memoryNowVisited
                    })
                });
            }
            return {
                type: dataType,
                kind: "value",
                value: decodedMembers
            };
        }
    }
}
exports.decodeMemoryReferenceByAddress = decodeMemoryReferenceByAddress;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 716970:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Decode = exports.Allocate = void 0;
const Allocate = __importStar(__webpack_require__(713530));
exports.Allocate = Allocate;
const Decode = __importStar(__webpack_require__(384449));
exports.Decode = Decode;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 910456:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(334821), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 334821:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=types.js.map

/***/ }),

/***/ 512252:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const StorageRead = __importStar(__webpack_require__(62100));
const StackRead = __importStar(__webpack_require__(783365));
const BytesRead = __importStar(__webpack_require__(756626));
const AstConstantRead = __importStar(__webpack_require__(64402));
const TopicRead = __importStar(__webpack_require__(613720));
const SpecialRead = __importStar(__webpack_require__(45712));
const errors_1 = __webpack_require__(361304);
function* read(pointer, state) {
    switch (pointer.location) {
        case "stack":
            return StackRead.readStack(pointer, state);
        case "storage":
            return yield* StorageRead.readStorage(pointer, state);
        case "memory":
        case "calldata":
        case "eventdata":
        case "returndata":
            return BytesRead.readBytes(pointer, state);
        case "code":
            //keeping this separate
            return yield* BytesRead.readCode(pointer, state);
        case "stackliteral":
            return StackRead.readStackLiteral(pointer);
        case "definition":
            return AstConstantRead.readDefinition(pointer);
        case "special":
            return SpecialRead.readSpecial(pointer, state);
        case "eventtopic":
            return TopicRead.readTopic(pointer, state);
        case "nowhere":
            throw new errors_1.DecodingError({
                kind: "UnusedImmutableError"
            });
    }
}
exports.default = read;
//# sourceMappingURL=read.js.map

/***/ }),

/***/ 58601:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.decodeMagic = exports.decodeSpecial = void 0;
const debug_1 = __importDefault(__webpack_require__(615158));
const debug = debug_1.default("codec:special:decode");
const Basic = __importStar(__webpack_require__(87023));
const Bytes = __importStar(__webpack_require__(868704));
const Compiler = __importStar(__webpack_require__(411619));
const Evm = __importStar(__webpack_require__(111403));
function* decodeSpecial(dataType, pointer, info) {
    if (dataType.typeClass === "magic") {
        return yield* decodeMagic(dataType, pointer, info);
    }
    else {
        return yield* Basic.Decode.decodeBasic(dataType, pointer, info);
    }
}
exports.decodeSpecial = decodeSpecial;
function* decodeMagic(dataType, pointer, info) {
    let { state } = info;
    switch (pointer.special) {
        case "msg":
            return {
                type: dataType,
                kind: "value",
                value: {
                    data: yield* Bytes.Decode.decodeBytes({
                        typeClass: "bytes",
                        kind: "dynamic",
                        location: "calldata"
                    }, {
                        location: "calldata",
                        start: 0,
                        length: state.calldata.length
                    }, info),
                    sig: yield* Basic.Decode.decodeBasic({
                        typeClass: "bytes",
                        kind: "static",
                        length: Evm.Utils.SELECTOR_SIZE
                    }, {
                        location: "calldata",
                        start: 0,
                        length: Evm.Utils.SELECTOR_SIZE
                    }, info),
                    sender: yield* Basic.Decode.decodeBasic(senderType(info.currentContext.compiler), { location: "special", special: "sender" }, info),
                    value: yield* Basic.Decode.decodeBasic({
                        typeClass: "uint",
                        bits: 256
                    }, { location: "special", special: "value" }, info)
                }
            };
        case "tx":
            return {
                type: dataType,
                kind: "value",
                value: {
                    origin: yield* Basic.Decode.decodeBasic(externalAddressType(info.currentContext.compiler), { location: "special", special: "origin" }, info),
                    gasprice: yield* Basic.Decode.decodeBasic({
                        typeClass: "uint",
                        bits: 256
                    }, { location: "special", special: "gasprice" }, info)
                }
            };
        case "block":
            let block = {
                coinbase: yield* Basic.Decode.decodeBasic(externalAddressType(info.currentContext.compiler), { location: "special", special: "coinbase" }, info)
            };
            //the other ones are all uint's, so let's handle them all at once; due to
            //the lack of generator arrow functions, we do it by mutating block
            const variables = ["difficulty", "gaslimit", "number", "timestamp"];
            for (let variable of variables) {
                block[variable] = yield* Basic.Decode.decodeBasic({
                    typeClass: "uint",
                    bits: 256
                }, { location: "special", special: variable }, info);
            }
            return {
                type: dataType,
                kind: "value",
                value: block
            };
    }
}
exports.decodeMagic = decodeMagic;
//NOTE: this is likely going to change again in 0.7.x!  be ready!
function senderType(compiler) {
    switch (Compiler.Utils.solidityFamily(compiler)) {
        case "unknown":
        case "pre-0.5.0":
            return {
                typeClass: "address",
                kind: "general"
            };
        case "0.5.x":
            return {
                typeClass: "address",
                kind: "specific",
                payable: true
            };
    }
}
function externalAddressType(compiler) {
    switch (Compiler.Utils.solidityFamily(compiler)) {
        case "unknown":
        case "pre-0.5.0":
            return {
                typeClass: "address",
                kind: "general"
            };
        case "0.5.x":
            return {
                typeClass: "address",
                kind: "specific",
                payable: true
            };
    }
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 833723:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Read = exports.Decode = void 0;
const Decode = __importStar(__webpack_require__(58601));
exports.Decode = Decode;
const Read = __importStar(__webpack_require__(45712));
exports.Read = Read;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 45712:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.readSpecial = void 0;
function readSpecial(pointer, state) {
    //not bothering with error handling on this one as I don't expect errors
    return state.specials[pointer.special];
}
exports.readSpecial = readSpecial;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 350886:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.decodeLiteral = exports.decodeStack = void 0;
const debug_1 = __importDefault(__webpack_require__(615158));
const debug = debug_1.default("codec:stack:decode");
const AbiData = __importStar(__webpack_require__(806494));
const Conversion = __importStar(__webpack_require__(888610));
const Format = __importStar(__webpack_require__(673949));
const read_1 = __importDefault(__webpack_require__(512252));
const Basic = __importStar(__webpack_require__(87023));
const Memory = __importStar(__webpack_require__(716970));
const Storage = __importStar(__webpack_require__(248271));
const Evm = __importStar(__webpack_require__(111403));
function* decodeStack(dataType, pointer, info) {
    let rawValue;
    try {
        rawValue = yield* read_1.default(pointer, info.state);
    }
    catch (error) {
        return {
            //no idea why TS is failing here
            type: dataType,
            kind: "error",
            error: error.error
        };
    }
    const literalPointer = {
        location: "stackliteral",
        literal: rawValue
    };
    return yield* decodeLiteral(dataType, literalPointer, info);
}
exports.decodeStack = decodeStack;
function* decodeLiteral(dataType, pointer, info) {
    debug("type %O", dataType);
    debug("pointer %o", pointer);
    if (Format.Types.isReferenceType(dataType)) {
        switch (dataType.location) {
            case "memory":
                //first: do we have a memory pointer? if so we can just dispatch to
                //decodeMemoryReference
                return yield* Memory.Decode.decodeMemoryReferenceByAddress(dataType, pointer, info);
            case "storage":
                //next: do we have a storage pointer (which may be a mapping)? if so, we can
                //we dispatch to decodeStorageByAddress
                return yield* Storage.Decode.decodeStorageReferenceByAddress(dataType, pointer, info);
            case "calldata":
                //next: do we have a calldata pointer?
                //if it's a lookup type, it'll need special handling
                if (dataType.typeClass === "bytes" ||
                    dataType.typeClass === "string" ||
                    (dataType.typeClass === "array" && dataType.kind === "dynamic")) {
                    const lengthAsBN = Conversion.toBN(pointer.literal.slice(Evm.Utils.WORD_SIZE));
                    const locationOnly = pointer.literal.slice(0, Evm.Utils.WORD_SIZE);
                    return yield* AbiData.Decode.decodeAbiReferenceByAddress(dataType, { location: "stackliteral", literal: locationOnly }, info, {
                        abiPointerBase: 0,
                        lengthOverride: lengthAsBN
                    });
                }
                else {
                    //multivalue case -- this case is straightforward
                    return yield* AbiData.Decode.decodeAbiReferenceByAddress(dataType, pointer, info, {
                        abiPointerBase: 0 //let's be explicit
                    });
                }
        }
    }
    //next: do we have an external function?  these work differently on the stack
    //than elsewhere, so we can't just pass it on to decodeBasic.
    if (dataType.typeClass === "function" && dataType.visibility === "external") {
        let address = pointer.literal.slice(0, Evm.Utils.WORD_SIZE);
        let selectorWord = pointer.literal.slice(-Evm.Utils.WORD_SIZE);
        if (!Basic.Decode.checkPaddingLeft(address, Evm.Utils.ADDRESS_SIZE) ||
            !Basic.Decode.checkPaddingLeft(selectorWord, Evm.Utils.SELECTOR_SIZE)) {
            return {
                type: dataType,
                kind: "error",
                error: {
                    kind: "FunctionExternalStackPaddingError",
                    rawAddress: Conversion.toHexString(address),
                    rawSelector: Conversion.toHexString(selectorWord)
                }
            };
        }
        let selector = selectorWord.slice(-Evm.Utils.SELECTOR_SIZE);
        return {
            type: dataType,
            kind: "value",
            value: yield* Basic.Decode.decodeExternalFunction(address, selector, info)
        };
    }
    //finally, if none of the above hold, we can just dispatch to decodeBasic.
    //however, note that because we're on the stack, we use the permissive padding
    //option so that errors won't result due to values with bad padding
    //(of numeric or bytesN type, anyway)
    return yield* Basic.Decode.decodeBasic(dataType, pointer, info, {
        paddingMode: "permissive"
    });
}
exports.decodeLiteral = decodeLiteral;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 215143:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Read = exports.Decode = void 0;
const Decode = __importStar(__webpack_require__(350886));
exports.Decode = Decode;
const Read = __importStar(__webpack_require__(783365));
exports.Read = Read;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 783365:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.readStackLiteral = exports.readStack = void 0;
const debug_1 = __importDefault(__webpack_require__(615158));
const debug = debug_1.default("codec:stack:read");
const Evm = __importStar(__webpack_require__(111403));
const errors_1 = __webpack_require__(361304);
function readStack(pointer, state) {
    let { from, to } = pointer;
    let { stack } = state;
    if (from < 0 || to >= stack.length) {
        throw new errors_1.DecodingError({
            kind: "ReadErrorStack",
            from,
            to
        });
    }
    //unforunately, Uint8Arrays don't support concat; if they did the rest of
    //this would be one line.  Or similarly if they worked with lodash's flatten,
    //but they don't support that either.  But neither of those are the case, so
    //we'll have to concatenate a bit more manually.
    let words = stack.slice(from, to + 1);
    let result = new Uint8Array(words.length * Evm.Utils.WORD_SIZE);
    //shouldn't we total up the lengths? yeah, but each one should have a
    //length of 32, so unless somehting's gone wrong we can just multiply
    for (let index = 0; index < words.length; index++) {
        result.set(words[index], index * Evm.Utils.WORD_SIZE);
    }
    return result;
}
exports.readStack = readStack;
function readStackLiteral(pointer) {
    return pointer.literal;
}
exports.readStackLiteral = readStackLiteral;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 894679:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.storageSize = exports.getStateAllocations = exports.getStorageAllocations = exports.UnknownBaseContractIdError = void 0;
const debug_1 = __importDefault(__webpack_require__(615158));
const debug = debug_1.default("codec:storage:allocate");
const Common = __importStar(__webpack_require__(969358));
const Basic = __importStar(__webpack_require__(87023));
const Utils = __importStar(__webpack_require__(409580));
const Ast = __importStar(__webpack_require__(579545));
const Evm = __importStar(__webpack_require__(111403));
const Format = __importStar(__webpack_require__(673949));
const bn_js_1 = __importDefault(__webpack_require__(213550));
const lodash_partition_1 = __importDefault(__webpack_require__(246748));
class UnknownBaseContractIdError extends Error {
    constructor(derivedId, derivedName, derivedKind, baseId) {
        const message = `Cannot locate base contract ID ${baseId} of ${derivedKind} ${derivedName} (ID ${derivedId})`;
        super(message);
        this.name = "UnknownBaseContractIdError";
        this.derivedId = derivedId;
        this.derivedName = derivedName;
        this.derivedKind = derivedKind;
        this.baseId = baseId;
    }
}
exports.UnknownBaseContractIdError = UnknownBaseContractIdError;
//contracts contains only the contracts to be allocated; any base classes not
//being allocated should just be in referenceDeclarations
function getStorageAllocations(userDefinedTypes) {
    let allocations = {};
    for (const dataType of Object.values(userDefinedTypes)) {
        if (dataType.typeClass === "struct") {
            try {
                allocations = allocateStruct(dataType, userDefinedTypes, allocations);
            }
            catch (_) {
                //if allocation fails... oh well, allocation fails, we do nothing and just move on :P
                //note: a better way of handling this would probably be to *mark* it
                //as failed rather than throwing an exception as that would lead to less
                //recomputation, but this is simpler and I don't think the recomputation
                //should really be a problem
            }
        }
    }
    return allocations;
}
exports.getStorageAllocations = getStorageAllocations;
/**
 * This function gets allocations for the state variables of the contracts;
 * this is distinct from getStorageAllocations, which gets allocations for
 * storage structs.
 *
 * While mostly state variables are kept in storage, constant ones are not.
 * And immutable ones, once those are introduced, will be kept in code!
 * (But those don't exist yet so this function doesn't handle them yet.)
 */
function getStateAllocations(contracts, referenceDeclarations, userDefinedTypes, storageAllocations, existingAllocations = {}) {
    let allocations = existingAllocations;
    for (const contractInfo of contracts) {
        let { contractNode: contract, immutableReferences, compiler, compilationId } = contractInfo;
        try {
            allocations = allocateContractState(contract, immutableReferences, compilationId, compiler, referenceDeclarations[compilationId], userDefinedTypes, storageAllocations, allocations);
        }
        catch (_) {
            //we're just going to allow failure here and catch the problem elsewhere
        }
    }
    return allocations;
}
exports.getStateAllocations = getStateAllocations;
function allocateStruct(dataType, userDefinedTypes, existingAllocations) {
    //NOTE: dataType here should be a *stored* type!
    //it is up to the caller to take care of this
    return allocateMembers(dataType.id, dataType.memberTypes, userDefinedTypes, existingAllocations);
}
function allocateMembers(parentId, members, userDefinedTypes, existingAllocations) {
    let offset = 0; //will convert to BN when placing in slot
    let index = Evm.Utils.WORD_SIZE - 1;
    //don't allocate things that have already been allocated
    if (parentId in existingAllocations) {
        return existingAllocations;
    }
    let allocations = Object.assign({}, existingAllocations); //otherwise, we'll be adding to this, so we better clone
    //otherwise, we need to allocate
    let memberAllocations = [];
    for (const member of members) {
        let size;
        ({ size, allocations } = storageSizeAndAllocate(member.type, userDefinedTypes, allocations));
        //if it's sized in words (and we're not at the start of slot) we need to start on a new slot
        //if it's sized in bytes but there's not enough room, we also need a new slot
        if (Utils.isWordsLength(size)
            ? index < Evm.Utils.WORD_SIZE - 1
            : size.bytes > index + 1) {
            index = Evm.Utils.WORD_SIZE - 1;
            offset += 1;
        }
        //otherwise, we remain in place
        let range;
        if (Utils.isWordsLength(size)) {
            //words case
            range = {
                from: {
                    slot: {
                        offset: new bn_js_1.default(offset) //start at the current slot...
                    },
                    index: 0 //...at the beginning of the word.
                },
                to: {
                    slot: {
                        offset: new bn_js_1.default(offset + size.words - 1) //end at the current slot plus # of words minus 1...
                    },
                    index: Evm.Utils.WORD_SIZE - 1 //...at the end of the word.
                }
            };
        }
        else {
            //bytes case
            range = {
                from: {
                    slot: {
                        offset: new bn_js_1.default(offset) //start at the current slot...
                    },
                    index: index - (size.bytes - 1) //...early enough to fit what's being allocated.
                },
                to: {
                    slot: {
                        offset: new bn_js_1.default(offset) //end at the current slot...
                    },
                    index: index //...at the current position.
                }
            };
        }
        memberAllocations.push({
            name: member.name,
            type: member.type,
            pointer: {
                location: "storage",
                range
            }
        });
        //finally, adjust the current position.
        //if it was sized in words, move down that many slots and reset position w/in slot
        if (Utils.isWordsLength(size)) {
            offset += size.words;
            index = Evm.Utils.WORD_SIZE - 1;
        }
        //if it was sized in bytes, move down an appropriate number of bytes.
        else {
            index -= size.bytes;
            //but if this puts us into the next word, move to the next word.
            if (index < 0) {
                index = Evm.Utils.WORD_SIZE - 1;
                offset += 1;
            }
        }
    }
    //finally, let's determine the overall siz; we're dealing with a struct, so
    //the size is measured in words
    //it's one plus the last word used, i.e. one plus the current word... unless the
    //current word remains entirely unused, then it's just the current word
    //SPECIAL CASE: if *nothing* has been used, allocate a single word (that's how
    //empty structs behave in versions where they're legal)
    let totalSize;
    if (index === Evm.Utils.WORD_SIZE - 1 && offset !== 0) {
        totalSize = { words: offset };
    }
    else {
        totalSize = { words: offset + 1 };
    }
    //having made our allocation, let's add it to allocations!
    allocations[parentId] = {
        members: memberAllocations,
        size: totalSize
    };
    //...and we're done!
    return allocations;
}
function getStateVariables(contractNode) {
    // process for state variables
    return contractNode.nodes.filter((node) => node.nodeType === "VariableDeclaration" && node.stateVariable);
}
function allocateContractState(contract, immutableReferences, compilationId, compiler, referenceDeclarations, userDefinedTypes, storageAllocations, existingAllocations = {}) {
    //we're going to do a 2-deep clone here
    let allocations = Object.assign({}, ...Object.entries(existingAllocations).map(([compilationId, compilationAllocations]) => ({
        [compilationId]: Object.assign({}, compilationAllocations)
    })));
    if (!immutableReferences) {
        immutableReferences = {}; //also, let's set this up for convenience
    }
    //base contracts are listed from most derived to most base, so we
    //have to reverse before processing, but reverse() is in place, so we
    //clone with slice first
    let linearizedBaseContractsFromBase = contract.linearizedBaseContracts
        .slice()
        .reverse();
    //first, let's get all the variables under consideration
    let variables = [].concat(...linearizedBaseContractsFromBase.map((id) => {
        let baseNode = referenceDeclarations[id];
        if (baseNode === undefined) {
            throw new UnknownBaseContractIdError(contract.id, contract.name, contract.contractKind, id);
        }
        return getStateVariables(baseNode).map(definition => ({
            definition,
            definedIn: baseNode
        }));
    }));
    //just in case the constant field ever gets removed
    const isConstant = (definition) => definition.constant || definition.mutability === "constant";
    //now: we split the variables into storage, constant, and code
    let [constantVariables, variableVariables] = lodash_partition_1.default(variables, variable => isConstant(variable.definition));
    //why use this function instead of just checking
    //definition.mutability?
    //because of a bug in Solidity 0.6.5 that causes the mutability field
    //not to exist.  So, we also have to check against immutableReferences.
    const isImmutable = (definition) => definition.mutability === "immutable" ||
        definition.id.toString() in immutableReferences;
    let [immutableVariables, storageVariables] = lodash_partition_1.default(variableVariables, variable => isImmutable(variable.definition));
    //transform storage variables into data types
    let storageVariableTypes = storageVariables.map(variable => ({
        name: variable.definition.name,
        type: Ast.Import.definitionToType(variable.definition, compilationId, compiler)
    }));
    //let's allocate the storage variables using a fictitious ID
    const id = "-1";
    let storageVariableStorageAllocations = allocateMembers(id, storageVariableTypes, userDefinedTypes, storageAllocations)[id];
    //transform to new format
    let storageVariableAllocations = storageVariables.map(({ definition, definedIn }, index) => ({
        definition,
        definedIn,
        compilationId,
        pointer: storageVariableStorageAllocations.members[index].pointer
    }));
    //now let's create allocations for the immutables
    let immutableVariableAllocations = immutableVariables.map(({ definition, definedIn }) => {
        let references = immutableReferences[definition.id.toString()] || [];
        let pointer;
        if (references.length === 0) {
            pointer = {
                location: "nowhere"
            };
        }
        else {
            pointer = {
                location: "code",
                start: references[0].start,
                length: references[0].length
            };
        }
        return {
            definition,
            definedIn,
            compilationId,
            pointer
        };
    });
    //and let's create allocations for the constants
    let constantVariableAllocations = constantVariables.map(({ definition, definedIn }) => ({
        definition,
        definedIn,
        compilationId,
        pointer: {
            location: "definition",
            definition: definition.value
        }
    }));
    //now, reweave the three together
    let contractAllocation = [];
    for (let variable of variables) {
        let arrayToGrabFrom = isConstant(variable.definition)
            ? constantVariableAllocations
            : isImmutable(variable.definition)
                ? immutableVariableAllocations
                : storageVariableAllocations;
        contractAllocation.push(arrayToGrabFrom.shift()); //note that push and shift both modify!
    }
    //finally, set things and return
    if (!allocations[compilationId]) {
        allocations[compilationId] = {};
    }
    allocations[compilationId][contract.id] = {
        members: contractAllocation
    };
    return allocations;
}
//NOTE: This wrapper function is for use in decoding ONLY, after allocation is done.
//The allocator should (and does) instead use a direct call to storageSizeAndAllocate,
//not to the wrapper, because it may need the allocations returned.
function storageSize(dataType, userDefinedTypes, allocations) {
    return storageSizeAndAllocate(dataType, userDefinedTypes, allocations).size;
}
exports.storageSize = storageSize;
function storageSizeAndAllocate(dataType, userDefinedTypes, existingAllocations) {
    //we'll only directly handle reference types here;
    //direct types will be handled by dispatching to Basic.Allocate.byteLength
    //in the default case
    switch (dataType.typeClass) {
        case "bytes": {
            switch (dataType.kind) {
                case "static":
                    //really a basic type :)
                    return {
                        size: {
                            bytes: Basic.Allocate.byteLength(dataType, userDefinedTypes)
                        },
                        allocations: existingAllocations
                    };
                case "dynamic":
                    return {
                        size: { words: 1 },
                        allocations: existingAllocations
                    };
            }
        }
        case "string":
        case "mapping":
            return {
                size: { words: 1 },
                allocations: existingAllocations
            };
        case "array": {
            switch (dataType.kind) {
                case "dynamic":
                    return {
                        size: { words: 1 },
                        allocations: existingAllocations
                    };
                case "static":
                    //static array case
                    const length = dataType.length.toNumber(); //warning! but if it's too big we have a problem
                    if (length === 0) {
                        //in versions of Solidity where it's legal, arrays of length 0 still take up 1 word
                        return {
                            size: { words: 1 },
                            allocations: existingAllocations
                        };
                    }
                    let { size: baseSize, allocations } = storageSizeAndAllocate(dataType.baseType, userDefinedTypes, existingAllocations);
                    if (!Utils.isWordsLength(baseSize)) {
                        //bytes case
                        const perWord = Math.floor(Evm.Utils.WORD_SIZE / baseSize.bytes);
                        debug("length %o", length);
                        const numWords = Math.ceil(length / perWord);
                        return {
                            size: { words: numWords },
                            allocations
                        };
                    }
                    else {
                        //words case
                        return {
                            size: { words: baseSize.words * length },
                            allocations
                        };
                    }
            }
        }
        case "struct": {
            let allocations = existingAllocations;
            let allocation = allocations[dataType.id]; //may be undefined!
            if (allocation === undefined) {
                //if we don't find an allocation, we'll have to do the allocation ourselves
                const storedType = (userDefinedTypes[dataType.id]);
                if (!storedType) {
                    throw new Common.UnknownUserDefinedTypeError(dataType.id, Format.Types.typeString(dataType));
                }
                allocations = allocateStruct(storedType, userDefinedTypes, existingAllocations);
                allocation = allocations[dataType.id];
            }
            //having found our allocation, we can just look up its size
            return {
                size: allocation.size,
                allocations
            };
        }
        default:
            //otherwise, it's a direct type
            return {
                size: { bytes: Basic.Allocate.byteLength(dataType, userDefinedTypes) },
                allocations: existingAllocations
            };
    }
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 805219:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.decodeStorageReference = exports.decodeStorageReferenceByAddress = exports.decodeStorage = void 0;
const debug_1 = __importDefault(__webpack_require__(615158));
const debug = debug_1.default("codec:storage:decode");
const read_1 = __importDefault(__webpack_require__(512252));
const Conversion = __importStar(__webpack_require__(888610));
const Format = __importStar(__webpack_require__(673949));
const Basic = __importStar(__webpack_require__(87023));
const Bytes = __importStar(__webpack_require__(868704));
const Utils = __importStar(__webpack_require__(409580));
const Evm = __importStar(__webpack_require__(111403));
const allocate_1 = __webpack_require__(894679);
const bn_js_1 = __importDefault(__webpack_require__(213550));
function* decodeStorage(dataType, pointer, info) {
    if (Format.Types.isReferenceType(dataType)) {
        return yield* decodeStorageReference(dataType, pointer, info);
    }
    else {
        return yield* Basic.Decode.decodeBasic(dataType, pointer, info);
    }
}
exports.decodeStorage = decodeStorage;
//decodes storage at the address *read* from the pointer -- hence why this takes DataPointer rather than StoragePointer.
//NOTE: ONLY for use with pointers to reference types!
//Of course, pointers to value types don't exist in Solidity, so that warning is redundant, but...
function* decodeStorageReferenceByAddress(dataType, pointer, info) {
    const allocations = info.allocations.storage;
    let rawValue;
    try {
        rawValue = yield* read_1.default(pointer, info.state);
    }
    catch (error) {
        return {
            //no idea why TS is failing here
            type: dataType,
            kind: "error",
            error: error.error
        };
    }
    const startOffset = Conversion.toBN(rawValue);
    let rawSize;
    try {
        rawSize = allocate_1.storageSize(dataType, info.userDefinedTypes, allocations);
    }
    catch (error) {
        //error: DecodingError
        return {
            //no idea why TS is failing here
            type: dataType,
            kind: "error",
            error: error.error
        };
    }
    //we *know* the type being decoded must be sized in words, because it's a
    //reference type, but TypeScript doesn't, so we'll have to use a type
    //coercion
    const size = rawSize.words;
    //now, construct the storage pointer
    const newPointer = {
        location: "storage",
        range: {
            from: {
                slot: {
                    offset: startOffset
                },
                index: 0
            },
            to: {
                slot: {
                    offset: startOffset.addn(size - 1)
                },
                index: Evm.Utils.WORD_SIZE - 1
            }
        }
    };
    //dispatch to decodeStorageReference
    return yield* decodeStorageReference(dataType, newPointer, info);
}
exports.decodeStorageReferenceByAddress = decodeStorageReferenceByAddress;
function* decodeStorageReference(dataType, pointer, info) {
    var data;
    var length;
    const { state } = info;
    const allocations = info.allocations.storage;
    switch (dataType.typeClass) {
        case "array": {
            debug("storage array! %o", pointer);
            let lengthAsBN;
            switch (dataType.kind) {
                case "dynamic":
                    debug("dynamic array");
                    debug("type %O", dataType);
                    try {
                        data = yield* read_1.default(pointer, state);
                    }
                    catch (error) {
                        return {
                            //no idea why TS is failing here
                            type: dataType,
                            kind: "error",
                            error: error.error
                        };
                    }
                    lengthAsBN = Conversion.toBN(data);
                    break;
                case "static":
                    debug("static array");
                    lengthAsBN = dataType.length;
                    break;
            }
            try {
                length = lengthAsBN.toNumber();
            }
            catch (_) {
                return {
                    type: dataType,
                    kind: "error",
                    error: {
                        kind: "OverlongArraysAndStringsNotImplementedError",
                        lengthAsBN
                    }
                };
            }
            debug("length %o", length);
            debug("about to determine baseSize");
            let baseSize;
            try {
                baseSize = allocate_1.storageSize(dataType.baseType, info.userDefinedTypes, allocations);
            }
            catch (error) {
                //error: DecodingError
                return {
                    type: dataType,
                    kind: "error",
                    error: error.error
                };
            }
            debug("baseSize %o", baseSize);
            //we are going to make a list of child ranges, pushing them one by one onto
            //this list, and then decode them; the first part will vary based on whether
            //we're in the words case or the bytes case, the second will not
            let ranges = [];
            if (Utils.isWordsLength(baseSize)) {
                //currentSlot will point to the start of the entry being decoded
                let currentSlot = {
                    path: pointer.range.from.slot,
                    offset: new bn_js_1.default(0),
                    hashPath: dataType.kind === "dynamic"
                };
                for (let i = 0; i < length; i++) {
                    let childRange = {
                        from: {
                            slot: {
                                path: currentSlot.path,
                                offset: currentSlot.offset.clone(),
                                hashPath: currentSlot.hashPath
                            },
                            index: 0
                        },
                        to: {
                            slot: {
                                path: currentSlot.path,
                                offset: currentSlot.offset.addn(baseSize.words - 1),
                                hashPath: currentSlot.hashPath
                            },
                            index: Evm.Utils.WORD_SIZE - 1
                        }
                    };
                    ranges.push(childRange);
                    currentSlot.offset.iaddn(baseSize.words);
                }
            }
            else {
                const perWord = Math.floor(Evm.Utils.WORD_SIZE / baseSize.bytes);
                debug("perWord %d", perWord);
                //currentPosition will point to the start of the entry being decoded
                //note we have baseSize.bytes <= Evm.Utils.WORD_SIZE
                let currentPosition = {
                    slot: {
                        path: pointer.range.from.slot,
                        offset: new bn_js_1.default(0),
                        hashPath: dataType.kind === "dynamic"
                    },
                    index: Evm.Utils.WORD_SIZE - baseSize.bytes //note the starting index!
                };
                for (let i = 0; i < length; i++) {
                    let childRange = {
                        from: {
                            slot: {
                                path: currentPosition.slot.path,
                                offset: currentPosition.slot.offset.clone(),
                                hashPath: currentPosition.slot.hashPath
                            },
                            index: currentPosition.index
                        },
                        length: baseSize.bytes
                    };
                    ranges.push(childRange);
                    currentPosition.index -= baseSize.bytes;
                    if (currentPosition.index < 0) {
                        currentPosition.slot.offset.iaddn(1);
                        currentPosition.index = Evm.Utils.WORD_SIZE - baseSize.bytes;
                    }
                }
            }
            let decodedChildren = [];
            for (let childRange of ranges) {
                decodedChildren.push(yield* decodeStorage(dataType.baseType, { location: "storage", range: childRange }, info));
            }
            return {
                type: dataType,
                kind: "value",
                value: decodedChildren
            };
        }
        case "bytes":
        case "string": {
            try {
                data = yield* read_1.default(pointer, state);
            }
            catch (error) {
                return {
                    //no idea why TS is failing here
                    type: dataType,
                    kind: "error",
                    error: error.error
                };
            }
            let lengthByte = data[Evm.Utils.WORD_SIZE - 1];
            if (lengthByte % 2 == 0) {
                // string lives in word, length is last byte / 2
                length = lengthByte / 2;
                debug("in-word; length %o", length);
                return yield* Bytes.Decode.decodeBytes(dataType, {
                    location: "storage",
                    range: {
                        from: { slot: pointer.range.from.slot, index: 0 },
                        to: { slot: pointer.range.from.slot, index: length - 1 }
                    }
                }, info);
            }
            else {
                let lengthAsBN = Conversion.toBN(data)
                    .subn(1)
                    .divn(2);
                try {
                    length = lengthAsBN.toNumber();
                }
                catch (_) {
                    return {
                        //again with the TS failures...
                        type: dataType,
                        kind: "error",
                        error: {
                            kind: "OverlongArraysAndStringsNotImplementedError",
                            lengthAsBN
                        }
                    };
                }
                debug("new-word, length %o", length);
                return yield* Bytes.Decode.decodeBytes(dataType, {
                    location: "storage",
                    range: {
                        from: {
                            slot: {
                                path: pointer.range.from.slot,
                                offset: new bn_js_1.default(0),
                                hashPath: true
                            },
                            index: 0
                        },
                        length
                    }
                }, info);
            }
        }
        case "struct": {
            const typeId = dataType.id;
            const structAllocation = allocations[typeId];
            if (!structAllocation) {
                return {
                    type: dataType,
                    kind: "error",
                    error: {
                        kind: "UserDefinedTypeNotFoundError",
                        type: dataType
                    }
                };
            }
            let decodedMembers = [];
            const members = structAllocation.members;
            for (let index = 0; index < members.length; index++) {
                const memberAllocation = members[index];
                const memberPointer = memberAllocation.pointer;
                //the type system thinks memberPointer might also be a constant
                //definition pointer.  However, structs can't contain constants,
                //so *we* know it's not, and can safely coerce it.
                debug("pointer %O", pointer);
                const childRange = {
                    from: {
                        slot: {
                            path: pointer.range.from.slot,
                            offset: memberPointer.range.from.slot.offset.clone()
                            //note that memberPointer should have no path
                        },
                        index: memberPointer.range.from.index
                    },
                    to: {
                        slot: {
                            path: pointer.range.from.slot,
                            offset: memberPointer.range.to.slot.offset.clone()
                            //note that memberPointer should have no path
                        },
                        index: memberPointer.range.to.index
                    }
                };
                let storedType = info.userDefinedTypes[typeId];
                if (!storedType) {
                    return {
                        type: dataType,
                        kind: "error",
                        error: {
                            kind: "UserDefinedTypeNotFoundError",
                            type: dataType
                        }
                    };
                }
                let storedMemberType = storedType.memberTypes[index].type;
                let memberType = Format.Types.specifyLocation(storedMemberType, "storage");
                decodedMembers.push({
                    name: memberAllocation.name,
                    value: yield* decodeStorage(memberType, { location: "storage", range: childRange }, info)
                });
            }
            return {
                type: dataType,
                kind: "value",
                value: decodedMembers
            };
        }
        case "mapping": {
            debug("decoding mapping");
            const valueType = dataType.valueType;
            let valueSize;
            try {
                valueSize = allocate_1.storageSize(valueType, info.userDefinedTypes, allocations);
            }
            catch (error) {
                //error: DecodingError
                debug("couldn't get value size! error: %o", error);
                return {
                    type: dataType,
                    kind: "error",
                    error: error.error
                };
            }
            let decodedEntries = [];
            const baseSlot = pointer.range.from.slot;
            debug("baseSlot %o", baseSlot);
            debug("base slot address %o", Utils.slotAddress(baseSlot));
            const keySlots = info.mappingKeys.filter(({ path }) => Utils.slotAddress(baseSlot).eq(Utils.slotAddress(path)));
            for (const { key } of keySlots) {
                let valuePointer;
                if (Utils.isWordsLength(valueSize)) {
                    valuePointer = {
                        location: "storage",
                        range: {
                            from: {
                                slot: {
                                    key,
                                    path: baseSlot,
                                    offset: new bn_js_1.default(0)
                                },
                                index: 0
                            },
                            to: {
                                slot: {
                                    key,
                                    path: baseSlot,
                                    offset: new bn_js_1.default(valueSize.words - 1)
                                },
                                index: Evm.Utils.WORD_SIZE - 1
                            }
                        }
                    };
                }
                else {
                    valuePointer = {
                        location: "storage",
                        range: {
                            from: {
                                slot: {
                                    key,
                                    path: baseSlot,
                                    offset: new bn_js_1.default(0)
                                },
                                index: Evm.Utils.WORD_SIZE - valueSize.bytes
                            },
                            to: {
                                slot: {
                                    key,
                                    path: baseSlot,
                                    offset: new bn_js_1.default(0)
                                },
                                index: Evm.Utils.WORD_SIZE - 1
                            }
                        }
                    };
                }
                decodedEntries.push({
                    key,
                    value: yield* decodeStorage(valueType, valuePointer, info)
                });
            }
            return {
                type: dataType,
                kind: "value",
                value: decodedEntries
            };
        }
    }
}
exports.decodeStorageReference = decodeStorageReference;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 248271:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Read = exports.Decode = exports.Allocate = exports.Utils = void 0;
__exportStar(__webpack_require__(762231), exports);
const Utils = __importStar(__webpack_require__(409580));
exports.Utils = Utils;
const Allocate = __importStar(__webpack_require__(894679));
exports.Allocate = Allocate;
const Decode = __importStar(__webpack_require__(805219));
exports.Decode = Decode;
const Read = __importStar(__webpack_require__(62100));
exports.Read = Read;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 62100:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.readStorage = exports.readSlot = void 0;
const debug_1 = __importDefault(__webpack_require__(615158));
const debug = debug_1.default("codec:storage:read");
const Conversion = __importStar(__webpack_require__(888610));
const Utils = __importStar(__webpack_require__(409580));
const Evm = __importStar(__webpack_require__(111403));
const errors_1 = __webpack_require__(361304);
function* readSlot(storage, slot) {
    const address = Utils.slotAddress(slot);
    // debug("reading slot: %o", Conversion.toHexString(address));
    const hexAddress = Conversion.toHexString(address, Evm.Utils.WORD_SIZE);
    let word = storage[hexAddress];
    //if we can't find the word in the map, we place a request to the invoker to supply it
    //(contract-decoder will look it up from the blockchain, while the debugger will just
    //say 0)
    if (word === undefined) {
        word = yield {
            type: "storage",
            slot: address
        };
    }
    return word;
}
exports.readSlot = readSlot;
function* readStorage(pointer, state) {
    const { storage } = state;
    const { range } = pointer;
    debug("readRange %o", range);
    let { from, to, length } = range;
    from = {
        slot: from.slot,
        index: from.index || 0
    };
    if (length !== undefined) {
        to = {
            slot: {
                path: from.slot.path || undefined,
                offset: from.slot.offset.addn(Math.floor((from.index + length - 1) / Evm.Utils.WORD_SIZE))
            },
            index: (from.index + length - 1) % Evm.Utils.WORD_SIZE
        };
    }
    debug("normalized readRange %o", { from, to });
    let totalWordsAsBN = to.slot.offset.sub(from.slot.offset).addn(1);
    let totalWords;
    try {
        totalWords = totalWordsAsBN.toNumber();
    }
    catch (_) {
        throw new errors_1.DecodingError({
            kind: "ReadErrorStorage",
            range
        });
    }
    let data = new Uint8Array(totalWords * Evm.Utils.WORD_SIZE);
    for (let i = 0; i < totalWords; i++) {
        let offset = from.slot.offset.addn(i);
        const word = yield* readSlot(storage, Object.assign(Object.assign({}, from.slot), { offset }));
        if (typeof word !== "undefined") {
            data.set(word, i * Evm.Utils.WORD_SIZE);
        }
    }
    debug("words %o", data);
    data = data.slice(from.index, (totalWords - 1) * Evm.Utils.WORD_SIZE + to.index + 1);
    debug("data: %o", data);
    return data;
}
exports.readStorage = readStorage;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 762231:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=types.js.map

/***/ }),

/***/ 409580:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.equalSlots = exports.slotAddress = exports.storageLengthToBytes = exports.isWordsLength = void 0;
const debug_1 = __importDefault(__webpack_require__(615158));
const debug = debug_1.default("codec:storage:utils");
const Evm = __importStar(__webpack_require__(111403));
const MappingKey = __importStar(__webpack_require__(782538));
function isWordsLength(size) {
    return size.words !== undefined;
}
exports.isWordsLength = isWordsLength;
function storageLengthToBytes(size) {
    if (isWordsLength(size)) {
        debug("size.words %d", size.words);
        return size.words * Evm.Utils.WORD_SIZE;
    }
    else {
        return size.bytes;
    }
}
exports.storageLengthToBytes = storageLengthToBytes;
/**
 * convert a slot to a word corresponding to actual storage address
 *
 * if `slot` is an array, return hash of array values.
 * if `slot` array is nested, recurse on sub-arrays
 *
 * @param slot - number or possibly-nested array of numbers
 */
function slotAddress(slot) {
    if (slot.key !== undefined && slot.path !== undefined) {
        // mapping reference
        return Evm.Utils.keccak256(MappingKey.Encode.mappingKeyAsHex(slot.key), slotAddress(slot.path)).add(slot.offset);
    }
    else if (slot.path !== undefined) {
        const pathAddress = slotAddress(slot.path);
        const path = slot.hashPath
            ? Evm.Utils.keccak256(pathAddress)
            : pathAddress;
        return path.add(slot.offset);
    }
    else {
        return slot.offset;
    }
}
exports.slotAddress = slotAddress;
//note: this function compares slots mostly by structure,
//rather than by their numerical value
function equalSlots(slot1, slot2) {
    if (!slot1 || !slot2) {
        return !slot1 && !slot2; //if either is undefined, it's true only if both are
    }
    if (!slot1.offset.eq(slot2.offset)) {
        return false;
    }
    if (slot1.hashPath !== slot2.hashPath) {
        return false;
    }
    if (!equalSlots(slot1.path, slot2.path)) {
        return false;
    }
    //to compare keys, we'll just compare their hex encodings
    //(yes, that leaves some wiggle room, as it could consider different
    //*types* of keys to be equal, but if keys are the only difference then
    //that should determine those types, so it shouldn't be a problem)
    if (!slot1.key || !slot2.key) {
        //first, though, they likely don't *have* keys
        return !slot1.key && !slot2.key;
    }
    //if they do have keys, though...
    return Evm.Utils.equalData(MappingKey.Encode.encodeMappingKey(slot1.key), MappingKey.Encode.encodeMappingKey(slot2.key));
}
exports.equalSlots = equalSlots;
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 470221:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.decodeTopic = void 0;
const debug_1 = __importDefault(__webpack_require__(615158));
const debug = debug_1.default("codec:topic:decode");
const read_1 = __importDefault(__webpack_require__(512252));
const Basic = __importStar(__webpack_require__(87023));
const Format = __importStar(__webpack_require__(673949));
const Conversion = __importStar(__webpack_require__(888610));
function* decodeTopic(dataType, pointer, info, options = {}) {
    if (Format.Types.isReferenceType(dataType) ||
        dataType.typeClass === "tuple") {
        //we cannot decode reference types "stored" in topics; we have to just return an error
        let bytes = yield* read_1.default(pointer, info.state);
        let raw = Conversion.toHexString(bytes);
        //NOTE: even in strict mode we want to just return this, not throw an error here
        return {
            //dunno why TS is failing here
            type: dataType,
            kind: "error",
            error: {
                kind: "IndexedReferenceTypeError",
                type: dataType,
                raw
            }
        };
    }
    //otherwise, dispatch to decodeBasic
    return yield* Basic.Decode.decodeBasic(dataType, pointer, info, options);
}
exports.decodeTopic = decodeTopic;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 776021:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.encodeTopic = void 0;
const debug_1 = __importDefault(__webpack_require__(615158));
const debug = debug_1.default("codec:topic:encode");
const Conversion = __importStar(__webpack_require__(888610));
const Evm = __importStar(__webpack_require__(111403));
const BasicEncode = __importStar(__webpack_require__(193699));
/**
 * Encodes for event topics (indexed parameters).
 * Warning: This function is not fully implemented yet!
 * @Category Encoding (low-level)
 */
function encodeTopic(input) {
    //errors can't be encoded
    if (input.kind === "error") {
        debug("input: %O", input);
        //...unless it's an IndexedReferenceTypeError, in which
        //case, let's read otu that raw data!
        if (input.error.kind === "IndexedReferenceTypeError") {
            return Conversion.toBytes(input.error.raw, Evm.Utils.WORD_SIZE);
        }
        else {
            return undefined;
        }
    }
    //otherwise, just dispath to encodeBasic
    return BasicEncode.encodeBasic(input);
    //...of course, really here we should be checking
    //whether the input *is* a basic type, and if not, handling
    //that appropriately!  But so far we don't need this, so this
    //part of the function isn't implemented yet
}
exports.encodeTopic = encodeTopic;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 142274:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Read = exports.Encode = exports.Decode = void 0;
const Decode = __importStar(__webpack_require__(470221));
exports.Decode = Decode;
const Encode = __importStar(__webpack_require__(776021));
exports.Encode = Encode;
const Read = __importStar(__webpack_require__(613720));
exports.Read = Read;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 613720:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.readTopic = void 0;
function readTopic(pointer, state) {
    //not bothering with error handling on this one as I don't expect errors
    return state.eventtopics[pointer.topic];
}
exports.readTopic = readTopic;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 228472:
/***/ ((module, exports) => {

exports = module.exports = SemVer

var debug
/* istanbul ignore next */
if (typeof process === 'object' &&
    process.env &&
    process.env.NODE_DEBUG &&
    /\bsemver\b/i.test(process.env.NODE_DEBUG)) {
  debug = function () {
    var args = Array.prototype.slice.call(arguments, 0)
    args.unshift('SEMVER')
    console.log.apply(console, args)
  }
} else {
  debug = function () {}
}

// Note: this is the semver.org version of the spec that it implements
// Not necessarily the package version of this code.
exports.SEMVER_SPEC_VERSION = '2.0.0'

var MAX_LENGTH = 256
var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER ||
  /* istanbul ignore next */ 9007199254740991

// Max safe segment length for coercion.
var MAX_SAFE_COMPONENT_LENGTH = 16

// The actual regexps go on exports.re
var re = exports.re = []
var src = exports.src = []
var t = exports.tokens = {}
var R = 0

function tok (n) {
  t[n] = R++
}

// The following Regular Expressions can be used for tokenizing,
// validating, and parsing SemVer version strings.

// ## Numeric Identifier
// A single `0`, or a non-zero digit followed by zero or more digits.

tok('NUMERICIDENTIFIER')
src[t.NUMERICIDENTIFIER] = '0|[1-9]\\d*'
tok('NUMERICIDENTIFIERLOOSE')
src[t.NUMERICIDENTIFIERLOOSE] = '[0-9]+'

// ## Non-numeric Identifier
// Zero or more digits, followed by a letter or hyphen, and then zero or
// more letters, digits, or hyphens.

tok('NONNUMERICIDENTIFIER')
src[t.NONNUMERICIDENTIFIER] = '\\d*[a-zA-Z-][a-zA-Z0-9-]*'

// ## Main Version
// Three dot-separated numeric identifiers.

tok('MAINVERSION')
src[t.MAINVERSION] = '(' + src[t.NUMERICIDENTIFIER] + ')\\.' +
                   '(' + src[t.NUMERICIDENTIFIER] + ')\\.' +
                   '(' + src[t.NUMERICIDENTIFIER] + ')'

tok('MAINVERSIONLOOSE')
src[t.MAINVERSIONLOOSE] = '(' + src[t.NUMERICIDENTIFIERLOOSE] + ')\\.' +
                        '(' + src[t.NUMERICIDENTIFIERLOOSE] + ')\\.' +
                        '(' + src[t.NUMERICIDENTIFIERLOOSE] + ')'

// ## Pre-release Version Identifier
// A numeric identifier, or a non-numeric identifier.

tok('PRERELEASEIDENTIFIER')
src[t.PRERELEASEIDENTIFIER] = '(?:' + src[t.NUMERICIDENTIFIER] +
                            '|' + src[t.NONNUMERICIDENTIFIER] + ')'

tok('PRERELEASEIDENTIFIERLOOSE')
src[t.PRERELEASEIDENTIFIERLOOSE] = '(?:' + src[t.NUMERICIDENTIFIERLOOSE] +
                                 '|' + src[t.NONNUMERICIDENTIFIER] + ')'

// ## Pre-release Version
// Hyphen, followed by one or more dot-separated pre-release version
// identifiers.

tok('PRERELEASE')
src[t.PRERELEASE] = '(?:-(' + src[t.PRERELEASEIDENTIFIER] +
                  '(?:\\.' + src[t.PRERELEASEIDENTIFIER] + ')*))'

tok('PRERELEASELOOSE')
src[t.PRERELEASELOOSE] = '(?:-?(' + src[t.PRERELEASEIDENTIFIERLOOSE] +
                       '(?:\\.' + src[t.PRERELEASEIDENTIFIERLOOSE] + ')*))'

// ## Build Metadata Identifier
// Any combination of digits, letters, or hyphens.

tok('BUILDIDENTIFIER')
src[t.BUILDIDENTIFIER] = '[0-9A-Za-z-]+'

// ## Build Metadata
// Plus sign, followed by one or more period-separated build metadata
// identifiers.

tok('BUILD')
src[t.BUILD] = '(?:\\+(' + src[t.BUILDIDENTIFIER] +
             '(?:\\.' + src[t.BUILDIDENTIFIER] + ')*))'

// ## Full Version String
// A main version, followed optionally by a pre-release version and
// build metadata.

// Note that the only major, minor, patch, and pre-release sections of
// the version string are capturing groups.  The build metadata is not a
// capturing group, because it should not ever be used in version
// comparison.

tok('FULL')
tok('FULLPLAIN')
src[t.FULLPLAIN] = 'v?' + src[t.MAINVERSION] +
                  src[t.PRERELEASE] + '?' +
                  src[t.BUILD] + '?'

src[t.FULL] = '^' + src[t.FULLPLAIN] + '$'

// like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
// also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
// common in the npm registry.
tok('LOOSEPLAIN')
src[t.LOOSEPLAIN] = '[v=\\s]*' + src[t.MAINVERSIONLOOSE] +
                  src[t.PRERELEASELOOSE] + '?' +
                  src[t.BUILD] + '?'

tok('LOOSE')
src[t.LOOSE] = '^' + src[t.LOOSEPLAIN] + '$'

tok('GTLT')
src[t.GTLT] = '((?:<|>)?=?)'

// Something like "2.*" or "1.2.x".
// Note that "x.x" is a valid xRange identifer, meaning "any version"
// Only the first item is strictly required.
tok('XRANGEIDENTIFIERLOOSE')
src[t.XRANGEIDENTIFIERLOOSE] = src[t.NUMERICIDENTIFIERLOOSE] + '|x|X|\\*'
tok('XRANGEIDENTIFIER')
src[t.XRANGEIDENTIFIER] = src[t.NUMERICIDENTIFIER] + '|x|X|\\*'

tok('XRANGEPLAIN')
src[t.XRANGEPLAIN] = '[v=\\s]*(' + src[t.XRANGEIDENTIFIER] + ')' +
                   '(?:\\.(' + src[t.XRANGEIDENTIFIER] + ')' +
                   '(?:\\.(' + src[t.XRANGEIDENTIFIER] + ')' +
                   '(?:' + src[t.PRERELEASE] + ')?' +
                   src[t.BUILD] + '?' +
                   ')?)?'

tok('XRANGEPLAINLOOSE')
src[t.XRANGEPLAINLOOSE] = '[v=\\s]*(' + src[t.XRANGEIDENTIFIERLOOSE] + ')' +
                        '(?:\\.(' + src[t.XRANGEIDENTIFIERLOOSE] + ')' +
                        '(?:\\.(' + src[t.XRANGEIDENTIFIERLOOSE] + ')' +
                        '(?:' + src[t.PRERELEASELOOSE] + ')?' +
                        src[t.BUILD] + '?' +
                        ')?)?'

tok('XRANGE')
src[t.XRANGE] = '^' + src[t.GTLT] + '\\s*' + src[t.XRANGEPLAIN] + '$'
tok('XRANGELOOSE')
src[t.XRANGELOOSE] = '^' + src[t.GTLT] + '\\s*' + src[t.XRANGEPLAINLOOSE] + '$'

// Coercion.
// Extract anything that could conceivably be a part of a valid semver
tok('COERCE')
src[t.COERCE] = '(^|[^\\d])' +
              '(\\d{1,' + MAX_SAFE_COMPONENT_LENGTH + '})' +
              '(?:\\.(\\d{1,' + MAX_SAFE_COMPONENT_LENGTH + '}))?' +
              '(?:\\.(\\d{1,' + MAX_SAFE_COMPONENT_LENGTH + '}))?' +
              '(?:$|[^\\d])'
tok('COERCERTL')
re[t.COERCERTL] = new RegExp(src[t.COERCE], 'g')

// Tilde ranges.
// Meaning is "reasonably at or greater than"
tok('LONETILDE')
src[t.LONETILDE] = '(?:~>?)'

tok('TILDETRIM')
src[t.TILDETRIM] = '(\\s*)' + src[t.LONETILDE] + '\\s+'
re[t.TILDETRIM] = new RegExp(src[t.TILDETRIM], 'g')
var tildeTrimReplace = '$1~'

tok('TILDE')
src[t.TILDE] = '^' + src[t.LONETILDE] + src[t.XRANGEPLAIN] + '$'
tok('TILDELOOSE')
src[t.TILDELOOSE] = '^' + src[t.LONETILDE] + src[t.XRANGEPLAINLOOSE] + '$'

// Caret ranges.
// Meaning is "at least and backwards compatible with"
tok('LONECARET')
src[t.LONECARET] = '(?:\\^)'

tok('CARETTRIM')
src[t.CARETTRIM] = '(\\s*)' + src[t.LONECARET] + '\\s+'
re[t.CARETTRIM] = new RegExp(src[t.CARETTRIM], 'g')
var caretTrimReplace = '$1^'

tok('CARET')
src[t.CARET] = '^' + src[t.LONECARET] + src[t.XRANGEPLAIN] + '$'
tok('CARETLOOSE')
src[t.CARETLOOSE] = '^' + src[t.LONECARET] + src[t.XRANGEPLAINLOOSE] + '$'

// A simple gt/lt/eq thing, or just "" to indicate "any version"
tok('COMPARATORLOOSE')
src[t.COMPARATORLOOSE] = '^' + src[t.GTLT] + '\\s*(' + src[t.LOOSEPLAIN] + ')$|^$'
tok('COMPARATOR')
src[t.COMPARATOR] = '^' + src[t.GTLT] + '\\s*(' + src[t.FULLPLAIN] + ')$|^$'

// An expression to strip any whitespace between the gtlt and the thing
// it modifies, so that `> 1.2.3` ==> `>1.2.3`
tok('COMPARATORTRIM')
src[t.COMPARATORTRIM] = '(\\s*)' + src[t.GTLT] +
                      '\\s*(' + src[t.LOOSEPLAIN] + '|' + src[t.XRANGEPLAIN] + ')'

// this one has to use the /g flag
re[t.COMPARATORTRIM] = new RegExp(src[t.COMPARATORTRIM], 'g')
var comparatorTrimReplace = '$1$2$3'

// Something like `1.2.3 - 1.2.4`
// Note that these all use the loose form, because they'll be
// checked against either the strict or loose comparator form
// later.
tok('HYPHENRANGE')
src[t.HYPHENRANGE] = '^\\s*(' + src[t.XRANGEPLAIN] + ')' +
                   '\\s+-\\s+' +
                   '(' + src[t.XRANGEPLAIN] + ')' +
                   '\\s*$'

tok('HYPHENRANGELOOSE')
src[t.HYPHENRANGELOOSE] = '^\\s*(' + src[t.XRANGEPLAINLOOSE] + ')' +
                        '\\s+-\\s+' +
                        '(' + src[t.XRANGEPLAINLOOSE] + ')' +
                        '\\s*$'

// Star ranges basically just allow anything at all.
tok('STAR')
src[t.STAR] = '(<|>)?=?\\s*\\*'

// Compile to actual regexp objects.
// All are flag-free, unless they were created above with a flag.
for (var i = 0; i < R; i++) {
  debug(i, src[i])
  if (!re[i]) {
    re[i] = new RegExp(src[i])
  }
}

exports.parse = parse
function parse (version, options) {
  if (!options || typeof options !== 'object') {
    options = {
      loose: !!options,
      includePrerelease: false
    }
  }

  if (version instanceof SemVer) {
    return version
  }

  if (typeof version !== 'string') {
    return null
  }

  if (version.length > MAX_LENGTH) {
    return null
  }

  var r = options.loose ? re[t.LOOSE] : re[t.FULL]
  if (!r.test(version)) {
    return null
  }

  try {
    return new SemVer(version, options)
  } catch (er) {
    return null
  }
}

exports.valid = valid
function valid (version, options) {
  var v = parse(version, options)
  return v ? v.version : null
}

exports.clean = clean
function clean (version, options) {
  var s = parse(version.trim().replace(/^[=v]+/, ''), options)
  return s ? s.version : null
}

exports.SemVer = SemVer

function SemVer (version, options) {
  if (!options || typeof options !== 'object') {
    options = {
      loose: !!options,
      includePrerelease: false
    }
  }
  if (version instanceof SemVer) {
    if (version.loose === options.loose) {
      return version
    } else {
      version = version.version
    }
  } else if (typeof version !== 'string') {
    throw new TypeError('Invalid Version: ' + version)
  }

  if (version.length > MAX_LENGTH) {
    throw new TypeError('version is longer than ' + MAX_LENGTH + ' characters')
  }

  if (!(this instanceof SemVer)) {
    return new SemVer(version, options)
  }

  debug('SemVer', version, options)
  this.options = options
  this.loose = !!options.loose

  var m = version.trim().match(options.loose ? re[t.LOOSE] : re[t.FULL])

  if (!m) {
    throw new TypeError('Invalid Version: ' + version)
  }

  this.raw = version

  // these are actually numbers
  this.major = +m[1]
  this.minor = +m[2]
  this.patch = +m[3]

  if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
    throw new TypeError('Invalid major version')
  }

  if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
    throw new TypeError('Invalid minor version')
  }

  if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
    throw new TypeError('Invalid patch version')
  }

  // numberify any prerelease numeric ids
  if (!m[4]) {
    this.prerelease = []
  } else {
    this.prerelease = m[4].split('.').map(function (id) {
      if (/^[0-9]+$/.test(id)) {
        var num = +id
        if (num >= 0 && num < MAX_SAFE_INTEGER) {
          return num
        }
      }
      return id
    })
  }

  this.build = m[5] ? m[5].split('.') : []
  this.format()
}

SemVer.prototype.format = function () {
  this.version = this.major + '.' + this.minor + '.' + this.patch
  if (this.prerelease.length) {
    this.version += '-' + this.prerelease.join('.')
  }
  return this.version
}

SemVer.prototype.toString = function () {
  return this.version
}

SemVer.prototype.compare = function (other) {
  debug('SemVer.compare', this.version, this.options, other)
  if (!(other instanceof SemVer)) {
    other = new SemVer(other, this.options)
  }

  return this.compareMain(other) || this.comparePre(other)
}

SemVer.prototype.compareMain = function (other) {
  if (!(other instanceof SemVer)) {
    other = new SemVer(other, this.options)
  }

  return compareIdentifiers(this.major, other.major) ||
         compareIdentifiers(this.minor, other.minor) ||
         compareIdentifiers(this.patch, other.patch)
}

SemVer.prototype.comparePre = function (other) {
  if (!(other instanceof SemVer)) {
    other = new SemVer(other, this.options)
  }

  // NOT having a prerelease is > having one
  if (this.prerelease.length && !other.prerelease.length) {
    return -1
  } else if (!this.prerelease.length && other.prerelease.length) {
    return 1
  } else if (!this.prerelease.length && !other.prerelease.length) {
    return 0
  }

  var i = 0
  do {
    var a = this.prerelease[i]
    var b = other.prerelease[i]
    debug('prerelease compare', i, a, b)
    if (a === undefined && b === undefined) {
      return 0
    } else if (b === undefined) {
      return 1
    } else if (a === undefined) {
      return -1
    } else if (a === b) {
      continue
    } else {
      return compareIdentifiers(a, b)
    }
  } while (++i)
}

SemVer.prototype.compareBuild = function (other) {
  if (!(other instanceof SemVer)) {
    other = new SemVer(other, this.options)
  }

  var i = 0
  do {
    var a = this.build[i]
    var b = other.build[i]
    debug('prerelease compare', i, a, b)
    if (a === undefined && b === undefined) {
      return 0
    } else if (b === undefined) {
      return 1
    } else if (a === undefined) {
      return -1
    } else if (a === b) {
      continue
    } else {
      return compareIdentifiers(a, b)
    }
  } while (++i)
}

// preminor will bump the version up to the next minor release, and immediately
// down to pre-release. premajor and prepatch work the same way.
SemVer.prototype.inc = function (release, identifier) {
  switch (release) {
    case 'premajor':
      this.prerelease.length = 0
      this.patch = 0
      this.minor = 0
      this.major++
      this.inc('pre', identifier)
      break
    case 'preminor':
      this.prerelease.length = 0
      this.patch = 0
      this.minor++
      this.inc('pre', identifier)
      break
    case 'prepatch':
      // If this is already a prerelease, it will bump to the next version
      // drop any prereleases that might already exist, since they are not
      // relevant at this point.
      this.prerelease.length = 0
      this.inc('patch', identifier)
      this.inc('pre', identifier)
      break
    // If the input is a non-prerelease version, this acts the same as
    // prepatch.
    case 'prerelease':
      if (this.prerelease.length === 0) {
        this.inc('patch', identifier)
      }
      this.inc('pre', identifier)
      break

    case 'major':
      // If this is a pre-major version, bump up to the same major version.
      // Otherwise increment major.
      // 1.0.0-5 bumps to 1.0.0
      // 1.1.0 bumps to 2.0.0
      if (this.minor !== 0 ||
          this.patch !== 0 ||
          this.prerelease.length === 0) {
        this.major++
      }
      this.minor = 0
      this.patch = 0
      this.prerelease = []
      break
    case 'minor':
      // If this is a pre-minor version, bump up to the same minor version.
      // Otherwise increment minor.
      // 1.2.0-5 bumps to 1.2.0
      // 1.2.1 bumps to 1.3.0
      if (this.patch !== 0 || this.prerelease.length === 0) {
        this.minor++
      }
      this.patch = 0
      this.prerelease = []
      break
    case 'patch':
      // If this is not a pre-release version, it will increment the patch.
      // If it is a pre-release it will bump up to the same patch version.
      // 1.2.0-5 patches to 1.2.0
      // 1.2.0 patches to 1.2.1
      if (this.prerelease.length === 0) {
        this.patch++
      }
      this.prerelease = []
      break
    // This probably shouldn't be used publicly.
    // 1.0.0 "pre" would become 1.0.0-0 which is the wrong direction.
    case 'pre':
      if (this.prerelease.length === 0) {
        this.prerelease = [0]
      } else {
        var i = this.prerelease.length
        while (--i >= 0) {
          if (typeof this.prerelease[i] === 'number') {
            this.prerelease[i]++
            i = -2
          }
        }
        if (i === -1) {
          // didn't increment anything
          this.prerelease.push(0)
        }
      }
      if (identifier) {
        // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
        // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
        if (this.prerelease[0] === identifier) {
          if (isNaN(this.prerelease[1])) {
            this.prerelease = [identifier, 0]
          }
        } else {
          this.prerelease = [identifier, 0]
        }
      }
      break

    default:
      throw new Error('invalid increment argument: ' + release)
  }
  this.format()
  this.raw = this.version
  return this
}

exports.inc = inc
function inc (version, release, loose, identifier) {
  if (typeof (loose) === 'string') {
    identifier = loose
    loose = undefined
  }

  try {
    return new SemVer(version, loose).inc(release, identifier).version
  } catch (er) {
    return null
  }
}

exports.diff = diff
function diff (version1, version2) {
  if (eq(version1, version2)) {
    return null
  } else {
    var v1 = parse(version1)
    var v2 = parse(version2)
    var prefix = ''
    if (v1.prerelease.length || v2.prerelease.length) {
      prefix = 'pre'
      var defaultResult = 'prerelease'
    }
    for (var key in v1) {
      if (key === 'major' || key === 'minor' || key === 'patch') {
        if (v1[key] !== v2[key]) {
          return prefix + key
        }
      }
    }
    return defaultResult // may be undefined
  }
}

exports.compareIdentifiers = compareIdentifiers

var numeric = /^[0-9]+$/
function compareIdentifiers (a, b) {
  var anum = numeric.test(a)
  var bnum = numeric.test(b)

  if (anum && bnum) {
    a = +a
    b = +b
  }

  return a === b ? 0
    : (anum && !bnum) ? -1
    : (bnum && !anum) ? 1
    : a < b ? -1
    : 1
}

exports.rcompareIdentifiers = rcompareIdentifiers
function rcompareIdentifiers (a, b) {
  return compareIdentifiers(b, a)
}

exports.major = major
function major (a, loose) {
  return new SemVer(a, loose).major
}

exports.minor = minor
function minor (a, loose) {
  return new SemVer(a, loose).minor
}

exports.patch = patch
function patch (a, loose) {
  return new SemVer(a, loose).patch
}

exports.compare = compare
function compare (a, b, loose) {
  return new SemVer(a, loose).compare(new SemVer(b, loose))
}

exports.compareLoose = compareLoose
function compareLoose (a, b) {
  return compare(a, b, true)
}

exports.compareBuild = compareBuild
function compareBuild (a, b, loose) {
  var versionA = new SemVer(a, loose)
  var versionB = new SemVer(b, loose)
  return versionA.compare(versionB) || versionA.compareBuild(versionB)
}

exports.rcompare = rcompare
function rcompare (a, b, loose) {
  return compare(b, a, loose)
}

exports.sort = sort
function sort (list, loose) {
  return list.sort(function (a, b) {
    return exports.compareBuild(a, b, loose)
  })
}

exports.rsort = rsort
function rsort (list, loose) {
  return list.sort(function (a, b) {
    return exports.compareBuild(b, a, loose)
  })
}

exports.gt = gt
function gt (a, b, loose) {
  return compare(a, b, loose) > 0
}

exports.lt = lt
function lt (a, b, loose) {
  return compare(a, b, loose) < 0
}

exports.eq = eq
function eq (a, b, loose) {
  return compare(a, b, loose) === 0
}

exports.neq = neq
function neq (a, b, loose) {
  return compare(a, b, loose) !== 0
}

exports.gte = gte
function gte (a, b, loose) {
  return compare(a, b, loose) >= 0
}

exports.lte = lte
function lte (a, b, loose) {
  return compare(a, b, loose) <= 0
}

exports.cmp = cmp
function cmp (a, op, b, loose) {
  switch (op) {
    case '===':
      if (typeof a === 'object')
        a = a.version
      if (typeof b === 'object')
        b = b.version
      return a === b

    case '!==':
      if (typeof a === 'object')
        a = a.version
      if (typeof b === 'object')
        b = b.version
      return a !== b

    case '':
    case '=':
    case '==':
      return eq(a, b, loose)

    case '!=':
      return neq(a, b, loose)

    case '>':
      return gt(a, b, loose)

    case '>=':
      return gte(a, b, loose)

    case '<':
      return lt(a, b, loose)

    case '<=':
      return lte(a, b, loose)

    default:
      throw new TypeError('Invalid operator: ' + op)
  }
}

exports.Comparator = Comparator
function Comparator (comp, options) {
  if (!options || typeof options !== 'object') {
    options = {
      loose: !!options,
      includePrerelease: false
    }
  }

  if (comp instanceof Comparator) {
    if (comp.loose === !!options.loose) {
      return comp
    } else {
      comp = comp.value
    }
  }

  if (!(this instanceof Comparator)) {
    return new Comparator(comp, options)
  }

  debug('comparator', comp, options)
  this.options = options
  this.loose = !!options.loose
  this.parse(comp)

  if (this.semver === ANY) {
    this.value = ''
  } else {
    this.value = this.operator + this.semver.version
  }

  debug('comp', this)
}

var ANY = {}
Comparator.prototype.parse = function (comp) {
  var r = this.options.loose ? re[t.COMPARATORLOOSE] : re[t.COMPARATOR]
  var m = comp.match(r)

  if (!m) {
    throw new TypeError('Invalid comparator: ' + comp)
  }

  this.operator = m[1] !== undefined ? m[1] : ''
  if (this.operator === '=') {
    this.operator = ''
  }

  // if it literally is just '>' or '' then allow anything.
  if (!m[2]) {
    this.semver = ANY
  } else {
    this.semver = new SemVer(m[2], this.options.loose)
  }
}

Comparator.prototype.toString = function () {
  return this.value
}

Comparator.prototype.test = function (version) {
  debug('Comparator.test', version, this.options.loose)

  if (this.semver === ANY || version === ANY) {
    return true
  }

  if (typeof version === 'string') {
    try {
      version = new SemVer(version, this.options)
    } catch (er) {
      return false
    }
  }

  return cmp(version, this.operator, this.semver, this.options)
}

Comparator.prototype.intersects = function (comp, options) {
  if (!(comp instanceof Comparator)) {
    throw new TypeError('a Comparator is required')
  }

  if (!options || typeof options !== 'object') {
    options = {
      loose: !!options,
      includePrerelease: false
    }
  }

  var rangeTmp

  if (this.operator === '') {
    if (this.value === '') {
      return true
    }
    rangeTmp = new Range(comp.value, options)
    return satisfies(this.value, rangeTmp, options)
  } else if (comp.operator === '') {
    if (comp.value === '') {
      return true
    }
    rangeTmp = new Range(this.value, options)
    return satisfies(comp.semver, rangeTmp, options)
  }

  var sameDirectionIncreasing =
    (this.operator === '>=' || this.operator === '>') &&
    (comp.operator === '>=' || comp.operator === '>')
  var sameDirectionDecreasing =
    (this.operator === '<=' || this.operator === '<') &&
    (comp.operator === '<=' || comp.operator === '<')
  var sameSemVer = this.semver.version === comp.semver.version
  var differentDirectionsInclusive =
    (this.operator === '>=' || this.operator === '<=') &&
    (comp.operator === '>=' || comp.operator === '<=')
  var oppositeDirectionsLessThan =
    cmp(this.semver, '<', comp.semver, options) &&
    ((this.operator === '>=' || this.operator === '>') &&
    (comp.operator === '<=' || comp.operator === '<'))
  var oppositeDirectionsGreaterThan =
    cmp(this.semver, '>', comp.semver, options) &&
    ((this.operator === '<=' || this.operator === '<') &&
    (comp.operator === '>=' || comp.operator === '>'))

  return sameDirectionIncreasing || sameDirectionDecreasing ||
    (sameSemVer && differentDirectionsInclusive) ||
    oppositeDirectionsLessThan || oppositeDirectionsGreaterThan
}

exports.Range = Range
function Range (range, options) {
  if (!options || typeof options !== 'object') {
    options = {
      loose: !!options,
      includePrerelease: false
    }
  }

  if (range instanceof Range) {
    if (range.loose === !!options.loose &&
        range.includePrerelease === !!options.includePrerelease) {
      return range
    } else {
      return new Range(range.raw, options)
    }
  }

  if (range instanceof Comparator) {
    return new Range(range.value, options)
  }

  if (!(this instanceof Range)) {
    return new Range(range, options)
  }

  this.options = options
  this.loose = !!options.loose
  this.includePrerelease = !!options.includePrerelease

  // First, split based on boolean or ||
  this.raw = range
  this.set = range.split(/\s*\|\|\s*/).map(function (range) {
    return this.parseRange(range.trim())
  }, this).filter(function (c) {
    // throw out any that are not relevant for whatever reason
    return c.length
  })

  if (!this.set.length) {
    throw new TypeError('Invalid SemVer Range: ' + range)
  }

  this.format()
}

Range.prototype.format = function () {
  this.range = this.set.map(function (comps) {
    return comps.join(' ').trim()
  }).join('||').trim()
  return this.range
}

Range.prototype.toString = function () {
  return this.range
}

Range.prototype.parseRange = function (range) {
  var loose = this.options.loose
  range = range.trim()
  // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`
  var hr = loose ? re[t.HYPHENRANGELOOSE] : re[t.HYPHENRANGE]
  range = range.replace(hr, hyphenReplace)
  debug('hyphen replace', range)
  // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`
  range = range.replace(re[t.COMPARATORTRIM], comparatorTrimReplace)
  debug('comparator trim', range, re[t.COMPARATORTRIM])

  // `~ 1.2.3` => `~1.2.3`
  range = range.replace(re[t.TILDETRIM], tildeTrimReplace)

  // `^ 1.2.3` => `^1.2.3`
  range = range.replace(re[t.CARETTRIM], caretTrimReplace)

  // normalize spaces
  range = range.split(/\s+/).join(' ')

  // At this point, the range is completely trimmed and
  // ready to be split into comparators.

  var compRe = loose ? re[t.COMPARATORLOOSE] : re[t.COMPARATOR]
  var set = range.split(' ').map(function (comp) {
    return parseComparator(comp, this.options)
  }, this).join(' ').split(/\s+/)
  if (this.options.loose) {
    // in loose mode, throw out any that are not valid comparators
    set = set.filter(function (comp) {
      return !!comp.match(compRe)
    })
  }
  set = set.map(function (comp) {
    return new Comparator(comp, this.options)
  }, this)

  return set
}

Range.prototype.intersects = function (range, options) {
  if (!(range instanceof Range)) {
    throw new TypeError('a Range is required')
  }

  return this.set.some(function (thisComparators) {
    return (
      isSatisfiable(thisComparators, options) &&
      range.set.some(function (rangeComparators) {
        return (
          isSatisfiable(rangeComparators, options) &&
          thisComparators.every(function (thisComparator) {
            return rangeComparators.every(function (rangeComparator) {
              return thisComparator.intersects(rangeComparator, options)
            })
          })
        )
      })
    )
  })
}

// take a set of comparators and determine whether there
// exists a version which can satisfy it
function isSatisfiable (comparators, options) {
  var result = true
  var remainingComparators = comparators.slice()
  var testComparator = remainingComparators.pop()

  while (result && remainingComparators.length) {
    result = remainingComparators.every(function (otherComparator) {
      return testComparator.intersects(otherComparator, options)
    })

    testComparator = remainingComparators.pop()
  }

  return result
}

// Mostly just for testing and legacy API reasons
exports.toComparators = toComparators
function toComparators (range, options) {
  return new Range(range, options).set.map(function (comp) {
    return comp.map(function (c) {
      return c.value
    }).join(' ').trim().split(' ')
  })
}

// comprised of xranges, tildes, stars, and gtlt's at this point.
// already replaced the hyphen ranges
// turn into a set of JUST comparators.
function parseComparator (comp, options) {
  debug('comp', comp, options)
  comp = replaceCarets(comp, options)
  debug('caret', comp)
  comp = replaceTildes(comp, options)
  debug('tildes', comp)
  comp = replaceXRanges(comp, options)
  debug('xrange', comp)
  comp = replaceStars(comp, options)
  debug('stars', comp)
  return comp
}

function isX (id) {
  return !id || id.toLowerCase() === 'x' || id === '*'
}

// ~, ~> --> * (any, kinda silly)
// ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0
// ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0
// ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0
// ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0
// ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0
function replaceTildes (comp, options) {
  return comp.trim().split(/\s+/).map(function (comp) {
    return replaceTilde(comp, options)
  }).join(' ')
}

function replaceTilde (comp, options) {
  var r = options.loose ? re[t.TILDELOOSE] : re[t.TILDE]
  return comp.replace(r, function (_, M, m, p, pr) {
    debug('tilde', comp, _, M, m, p, pr)
    var ret

    if (isX(M)) {
      ret = ''
    } else if (isX(m)) {
      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0'
    } else if (isX(p)) {
      // ~1.2 == >=1.2.0 <1.3.0
      ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0'
    } else if (pr) {
      debug('replaceTilde pr', pr)
      ret = '>=' + M + '.' + m + '.' + p + '-' + pr +
            ' <' + M + '.' + (+m + 1) + '.0'
    } else {
      // ~1.2.3 == >=1.2.3 <1.3.0
      ret = '>=' + M + '.' + m + '.' + p +
            ' <' + M + '.' + (+m + 1) + '.0'
    }

    debug('tilde return', ret)
    return ret
  })
}

// ^ --> * (any, kinda silly)
// ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0
// ^2.0, ^2.0.x --> >=2.0.0 <3.0.0
// ^1.2, ^1.2.x --> >=1.2.0 <2.0.0
// ^1.2.3 --> >=1.2.3 <2.0.0
// ^1.2.0 --> >=1.2.0 <2.0.0
function replaceCarets (comp, options) {
  return comp.trim().split(/\s+/).map(function (comp) {
    return replaceCaret(comp, options)
  }).join(' ')
}

function replaceCaret (comp, options) {
  debug('caret', comp, options)
  var r = options.loose ? re[t.CARETLOOSE] : re[t.CARET]
  return comp.replace(r, function (_, M, m, p, pr) {
    debug('caret', comp, _, M, m, p, pr)
    var ret

    if (isX(M)) {
      ret = ''
    } else if (isX(m)) {
      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0'
    } else if (isX(p)) {
      if (M === '0') {
        ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0'
      } else {
        ret = '>=' + M + '.' + m + '.0 <' + (+M + 1) + '.0.0'
      }
    } else if (pr) {
      debug('replaceCaret pr', pr)
      if (M === '0') {
        if (m === '0') {
          ret = '>=' + M + '.' + m + '.' + p + '-' + pr +
                ' <' + M + '.' + m + '.' + (+p + 1)
        } else {
          ret = '>=' + M + '.' + m + '.' + p + '-' + pr +
                ' <' + M + '.' + (+m + 1) + '.0'
        }
      } else {
        ret = '>=' + M + '.' + m + '.' + p + '-' + pr +
              ' <' + (+M + 1) + '.0.0'
      }
    } else {
      debug('no pr')
      if (M === '0') {
        if (m === '0') {
          ret = '>=' + M + '.' + m + '.' + p +
                ' <' + M + '.' + m + '.' + (+p + 1)
        } else {
          ret = '>=' + M + '.' + m + '.' + p +
                ' <' + M + '.' + (+m + 1) + '.0'
        }
      } else {
        ret = '>=' + M + '.' + m + '.' + p +
              ' <' + (+M + 1) + '.0.0'
      }
    }

    debug('caret return', ret)
    return ret
  })
}

function replaceXRanges (comp, options) {
  debug('replaceXRanges', comp, options)
  return comp.split(/\s+/).map(function (comp) {
    return replaceXRange(comp, options)
  }).join(' ')
}

function replaceXRange (comp, options) {
  comp = comp.trim()
  var r = options.loose ? re[t.XRANGELOOSE] : re[t.XRANGE]
  return comp.replace(r, function (ret, gtlt, M, m, p, pr) {
    debug('xRange', comp, ret, gtlt, M, m, p, pr)
    var xM = isX(M)
    var xm = xM || isX(m)
    var xp = xm || isX(p)
    var anyX = xp

    if (gtlt === '=' && anyX) {
      gtlt = ''
    }

    // if we're including prereleases in the match, then we need
    // to fix this to -0, the lowest possible prerelease value
    pr = options.includePrerelease ? '-0' : ''

    if (xM) {
      if (gtlt === '>' || gtlt === '<') {
        // nothing is allowed
        ret = '<0.0.0-0'
      } else {
        // nothing is forbidden
        ret = '*'
      }
    } else if (gtlt && anyX) {
      // we know patch is an x, because we have any x at all.
      // replace X with 0
      if (xm) {
        m = 0
      }
      p = 0

      if (gtlt === '>') {
        // >1 => >=2.0.0
        // >1.2 => >=1.3.0
        // >1.2.3 => >= 1.2.4
        gtlt = '>='
        if (xm) {
          M = +M + 1
          m = 0
          p = 0
        } else {
          m = +m + 1
          p = 0
        }
      } else if (gtlt === '<=') {
        // <=0.7.x is actually <0.8.0, since any 0.7.x should
        // pass.  Similarly, <=7.x is actually <8.0.0, etc.
        gtlt = '<'
        if (xm) {
          M = +M + 1
        } else {
          m = +m + 1
        }
      }

      ret = gtlt + M + '.' + m + '.' + p + pr
    } else if (xm) {
      ret = '>=' + M + '.0.0' + pr + ' <' + (+M + 1) + '.0.0' + pr
    } else if (xp) {
      ret = '>=' + M + '.' + m + '.0' + pr +
        ' <' + M + '.' + (+m + 1) + '.0' + pr
    }

    debug('xRange return', ret)

    return ret
  })
}

// Because * is AND-ed with everything else in the comparator,
// and '' means "any version", just remove the *s entirely.
function replaceStars (comp, options) {
  debug('replaceStars', comp, options)
  // Looseness is ignored here.  star is always as loose as it gets!
  return comp.trim().replace(re[t.STAR], '')
}

// This function is passed to string.replace(re[t.HYPHENRANGE])
// M, m, patch, prerelease, build
// 1.2 - 3.4.5 => >=1.2.0 <=3.4.5
// 1.2.3 - 3.4 => >=1.2.0 <3.5.0 Any 3.4.x will do
// 1.2 - 3.4 => >=1.2.0 <3.5.0
function hyphenReplace ($0,
  from, fM, fm, fp, fpr, fb,
  to, tM, tm, tp, tpr, tb) {
  if (isX(fM)) {
    from = ''
  } else if (isX(fm)) {
    from = '>=' + fM + '.0.0'
  } else if (isX(fp)) {
    from = '>=' + fM + '.' + fm + '.0'
  } else {
    from = '>=' + from
  }

  if (isX(tM)) {
    to = ''
  } else if (isX(tm)) {
    to = '<' + (+tM + 1) + '.0.0'
  } else if (isX(tp)) {
    to = '<' + tM + '.' + (+tm + 1) + '.0'
  } else if (tpr) {
    to = '<=' + tM + '.' + tm + '.' + tp + '-' + tpr
  } else {
    to = '<=' + to
  }

  return (from + ' ' + to).trim()
}

// if ANY of the sets match ALL of its comparators, then pass
Range.prototype.test = function (version) {
  if (!version) {
    return false
  }

  if (typeof version === 'string') {
    try {
      version = new SemVer(version, this.options)
    } catch (er) {
      return false
    }
  }

  for (var i = 0; i < this.set.length; i++) {
    if (testSet(this.set[i], version, this.options)) {
      return true
    }
  }
  return false
}

function testSet (set, version, options) {
  for (var i = 0; i < set.length; i++) {
    if (!set[i].test(version)) {
      return false
    }
  }

  if (version.prerelease.length && !options.includePrerelease) {
    // Find the set of versions that are allowed to have prereleases
    // For example, ^1.2.3-pr.1 desugars to >=1.2.3-pr.1 <2.0.0
    // That should allow `1.2.3-pr.2` to pass.
    // However, `1.2.4-alpha.notready` should NOT be allowed,
    // even though it's within the range set by the comparators.
    for (i = 0; i < set.length; i++) {
      debug(set[i].semver)
      if (set[i].semver === ANY) {
        continue
      }

      if (set[i].semver.prerelease.length > 0) {
        var allowed = set[i].semver
        if (allowed.major === version.major &&
            allowed.minor === version.minor &&
            allowed.patch === version.patch) {
          return true
        }
      }
    }

    // Version has a -pre, but it's not one of the ones we like.
    return false
  }

  return true
}

exports.satisfies = satisfies
function satisfies (version, range, options) {
  try {
    range = new Range(range, options)
  } catch (er) {
    return false
  }
  return range.test(version)
}

exports.maxSatisfying = maxSatisfying
function maxSatisfying (versions, range, options) {
  var max = null
  var maxSV = null
  try {
    var rangeObj = new Range(range, options)
  } catch (er) {
    return null
  }
  versions.forEach(function (v) {
    if (rangeObj.test(v)) {
      // satisfies(v, range, options)
      if (!max || maxSV.compare(v) === -1) {
        // compare(max, v, true)
        max = v
        maxSV = new SemVer(max, options)
      }
    }
  })
  return max
}

exports.minSatisfying = minSatisfying
function minSatisfying (versions, range, options) {
  var min = null
  var minSV = null
  try {
    var rangeObj = new Range(range, options)
  } catch (er) {
    return null
  }
  versions.forEach(function (v) {
    if (rangeObj.test(v)) {
      // satisfies(v, range, options)
      if (!min || minSV.compare(v) === 1) {
        // compare(min, v, true)
        min = v
        minSV = new SemVer(min, options)
      }
    }
  })
  return min
}

exports.minVersion = minVersion
function minVersion (range, loose) {
  range = new Range(range, loose)

  var minver = new SemVer('0.0.0')
  if (range.test(minver)) {
    return minver
  }

  minver = new SemVer('0.0.0-0')
  if (range.test(minver)) {
    return minver
  }

  minver = null
  for (var i = 0; i < range.set.length; ++i) {
    var comparators = range.set[i]

    comparators.forEach(function (comparator) {
      // Clone to avoid manipulating the comparator's semver object.
      var compver = new SemVer(comparator.semver.version)
      switch (comparator.operator) {
        case '>':
          if (compver.prerelease.length === 0) {
            compver.patch++
          } else {
            compver.prerelease.push(0)
          }
          compver.raw = compver.format()
          /* fallthrough */
        case '':
        case '>=':
          if (!minver || gt(minver, compver)) {
            minver = compver
          }
          break
        case '<':
        case '<=':
          /* Ignore maximum versions */
          break
        /* istanbul ignore next */
        default:
          throw new Error('Unexpected operation: ' + comparator.operator)
      }
    })
  }

  if (minver && range.test(minver)) {
    return minver
  }

  return null
}

exports.validRange = validRange
function validRange (range, options) {
  try {
    // Return '*' instead of '' so that truthiness works.
    // This will throw if it's invalid anyway
    return new Range(range, options).range || '*'
  } catch (er) {
    return null
  }
}

// Determine if version is less than all the versions possible in the range
exports.ltr = ltr
function ltr (version, range, options) {
  return outside(version, range, '<', options)
}

// Determine if version is greater than all the versions possible in the range.
exports.gtr = gtr
function gtr (version, range, options) {
  return outside(version, range, '>', options)
}

exports.outside = outside
function outside (version, range, hilo, options) {
  version = new SemVer(version, options)
  range = new Range(range, options)

  var gtfn, ltefn, ltfn, comp, ecomp
  switch (hilo) {
    case '>':
      gtfn = gt
      ltefn = lte
      ltfn = lt
      comp = '>'
      ecomp = '>='
      break
    case '<':
      gtfn = lt
      ltefn = gte
      ltfn = gt
      comp = '<'
      ecomp = '<='
      break
    default:
      throw new TypeError('Must provide a hilo val of "<" or ">"')
  }

  // If it satisifes the range it is not outside
  if (satisfies(version, range, options)) {
    return false
  }

  // From now on, variable terms are as if we're in "gtr" mode.
  // but note that everything is flipped for the "ltr" function.

  for (var i = 0; i < range.set.length; ++i) {
    var comparators = range.set[i]

    var high = null
    var low = null

    comparators.forEach(function (comparator) {
      if (comparator.semver === ANY) {
        comparator = new Comparator('>=0.0.0')
      }
      high = high || comparator
      low = low || comparator
      if (gtfn(comparator.semver, high.semver, options)) {
        high = comparator
      } else if (ltfn(comparator.semver, low.semver, options)) {
        low = comparator
      }
    })

    // If the edge version comparator has a operator then our version
    // isn't outside it
    if (high.operator === comp || high.operator === ecomp) {
      return false
    }

    // If the lowest version comparator has an operator and our version
    // is less than it then it isn't higher than the range
    if ((!low.operator || low.operator === comp) &&
        ltefn(version, low.semver)) {
      return false
    } else if (low.operator === ecomp && ltfn(version, low.semver)) {
      return false
    }
  }
  return true
}

exports.prerelease = prerelease
function prerelease (version, options) {
  var parsed = parse(version, options)
  return (parsed && parsed.prerelease.length) ? parsed.prerelease : null
}

exports.intersects = intersects
function intersects (r1, r2, options) {
  r1 = new Range(r1, options)
  r2 = new Range(r2, options)
  return r1.intersects(r2)
}

exports.coerce = coerce
function coerce (version, options) {
  if (version instanceof SemVer) {
    return version
  }

  if (typeof version === 'number') {
    version = String(version)
  }

  if (typeof version !== 'string') {
    return null
  }

  options = options || {}

  var match = null
  if (!options.rtl) {
    match = version.match(re[t.COERCE])
  } else {
    // Find the right-most coercible string that does not share
    // a terminus with a more left-ward coercible string.
    // Eg, '1.2.3.4' wants to coerce '2.3.4', not '3.4' or '4'
    //
    // Walk through the string checking with a /g regexp
    // Manually set the index so as to pick up overlapping matches.
    // Stop when we get a match that ends at the string end, since no
    // coercible string can be more right-ward without the same terminus.
    var next
    while ((next = re[t.COERCERTL].exec(version)) &&
      (!match || match.index + match[0].length !== version.length)
    ) {
      if (!match ||
          next.index + next[0].length !== match.index + match[0].length) {
        match = next
      }
      re[t.COERCERTL].lastIndex = next.index + next[1].length + next[2].length
    }
    // leave it in a clean state
    re[t.COERCERTL].lastIndex = -1
  }

  if (match === null) {
    return null
  }

  return parse(match[2] +
    '.' + (match[3] || '0') +
    '.' + (match[4] || '0'), options)
}


/***/ })

};
;
//# sourceMappingURL=161.bundled.js.map
import { GraphQLTagPluckOptions } from '.';
export declare type PluckedContent = {
    content: string;
    start: number;
    end: number;
    loc: {
        start: {
            line: number;
            column: number;
        };
        end: {
            line: number;
            column: number;
        };
    };
};
declare const _default: (code: string, out: any, options?: GraphQLTagPluckOptions) => {
    CallExpression: {
        enter(path: any): void;
    };
    ImportDeclaration: {
        enter(path: any): void;
    };
    ExpressionStatement: {
        exit(path: any): void;
    };
    TemplateLiteral: {
        exit(path: any): void;
    };
    TaggedTemplateExpression: {
        exit(path: any): void;
    };
    exit(): void;
};
export default _default;

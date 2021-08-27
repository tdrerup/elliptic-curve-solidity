import { GraphQLError } from 'graphql';
import { ServerParseError } from '../link/http';
import { ServerError } from '../link/utils';
export declare function isApolloError(err: Error): err is ApolloError;
export declare class ApolloError extends Error {
    message: string;
    graphQLErrors: ReadonlyArray<GraphQLError>;
    clientErrors: ReadonlyArray<Error>;
    networkError: Error | ServerParseError | ServerError | null;
    extraInfo: any;
    constructor({ graphQLErrors, clientErrors, networkError, errorMessage, extraInfo, }: {
        graphQLErrors?: ReadonlyArray<GraphQLError>;
        clientErrors?: ReadonlyArray<Error>;
        networkError?: Error | ServerParseError | ServerError | null;
        errorMessage?: string;
        extraInfo?: any;
    });
}
//# sourceMappingURL=index.d.ts.map
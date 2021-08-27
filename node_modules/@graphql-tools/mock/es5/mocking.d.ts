import { GraphQLSchema, GraphQLList, GraphQLResolveInfo, GraphQLFieldResolver } from 'graphql';
import { IMocks, IMockServer, IMockOptions, IMockTypeFn } from './types';
import { ITypeDefinitions } from '@graphql-tools/utils';
/**
 * A convenience wrapper on top of addMocksToSchema. It adds your mock resolvers
 * to your schema and returns a client that will correctly execute your query with
 * variables. Note: when executing queries from the returned server, context and
 * root will both equal `{}`.
 * @param schema The schema to which to add mocks. This can also be a set of type
 * definitions instead.
 * @param mocks The mocks to add to the schema.
 * @param preserveResolvers Set to `true` to prevent existing resolvers from being
 * overwritten to provide mock data. This can be used to mock some parts of the
 * server and not others.
 */
export declare function mockServer(schema: GraphQLSchema | ITypeDefinitions, mocks: IMocks, preserveResolvers?: boolean): IMockServer;
/**
 * Given an instance of GraphQLSchema and a mock object, returns a new schema
 * that can return mock data for any valid query that is sent to the server.
 * @param options Options object
 */
export declare function addMocksToSchema({ schema, mocks, preserveResolvers }: IMockOptions): GraphQLSchema;
/**
 * @internal
 */
export declare function isMockList(obj: any): obj is MockList;
/**
 * This is an object you can return from your mock resolvers which calls the
 * provided `mockFunction` once for each list item.
 */
export declare class MockList {
    private readonly len;
    private readonly wrappedFunction;
    /**
     * @param length Either the exact length of items to return or an inclusive
     * range of possible lengths.
     * @param mockFunction The function to call for each item in the list to
     * resolve it. It can return another MockList or a value.
     */
    constructor(length: number | Array<number>, mockFunction?: GraphQLFieldResolver<any, any>);
    /**
     * @internal
     */
    mock(root: any, args: Record<string, any>, context: any, info: GraphQLResolveInfo, fieldType: GraphQLList<any>, mockTypeFunc: IMockTypeFn): any[];
    private randint;
}

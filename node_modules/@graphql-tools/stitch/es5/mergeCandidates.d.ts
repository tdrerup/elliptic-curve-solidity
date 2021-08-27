import { GraphQLNamedType } from 'graphql';
import { MergeTypeCandidate, TypeMergingOptions } from './types';
export declare function mergeCandidates(typeName: string, candidates: Array<MergeTypeCandidate>, typeMergingOptions: TypeMergingOptions): GraphQLNamedType;

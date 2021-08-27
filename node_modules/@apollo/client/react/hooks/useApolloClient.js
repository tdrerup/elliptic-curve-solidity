import * as React from 'react';
import { invariant } from 'ts-invariant';
import { getApolloContext } from "../context/index.js";
export function useApolloClient() {
    var client = React.useContext(getApolloContext()).client;
    __DEV__ ? invariant(client, 'No Apollo Client instance can be found. Please ensure that you ' +
        'have called `ApolloProvider` higher up in your tree.') : invariant(client, 36);
    return client;
}
//# sourceMappingURL=useApolloClient.js.map
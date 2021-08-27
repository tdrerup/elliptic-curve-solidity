import { __assign } from "tslib";
import { useContext, useState, useRef, useEffect, useReducer } from 'react';
import { SubscriptionData } from "../data/index.js";
import { getApolloContext } from "../context/index.js";
import { useAfterFastRefresh } from "./utils/useAfterFastRefresh.js";
export function useSubscription(subscription, options) {
    var _a = useReducer(function (x) { return x + 1; }, 0), forceUpdate = _a[1];
    var context = useContext(getApolloContext());
    var updatedOptions = options
        ? __assign(__assign({}, options), { subscription: subscription }) : { subscription: subscription };
    var _b = useState({
        loading: !updatedOptions.skip,
        error: void 0,
        data: void 0,
    }), result = _b[0], setResult = _b[1];
    var subscriptionDataRef = useRef();
    function getSubscriptionDataRef() {
        if (!subscriptionDataRef.current) {
            subscriptionDataRef.current = new SubscriptionData({
                options: updatedOptions,
                context: context,
                setResult: setResult
            });
        }
        return subscriptionDataRef.current;
    }
    var subscriptionData = getSubscriptionDataRef();
    subscriptionData.setOptions(updatedOptions, true);
    subscriptionData.context = context;
    if (__DEV__) {
        useAfterFastRefresh(forceUpdate);
    }
    useEffect(function () { return subscriptionData.afterExecute(); });
    useEffect(function () {
        return function () {
            subscriptionData.cleanup();
            subscriptionDataRef.current = void 0;
        };
    }, []);
    return subscriptionData.execute(result);
}
//# sourceMappingURL=useSubscription.js.map
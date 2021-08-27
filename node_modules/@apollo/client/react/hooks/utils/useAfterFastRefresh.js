import { useEffect, useRef } from "react";
export function useAfterFastRefresh(effectFn) {
    if (__DEV__) {
        var didRefresh_1 = useRef(false);
        useEffect(function () {
            return function () {
                didRefresh_1.current = true;
            };
        }, []);
        useEffect(function () {
            if (didRefresh_1.current === true) {
                didRefresh_1.current = false;
                effectFn();
            }
        }, []);
    }
}
//# sourceMappingURL=useAfterFastRefresh.js.map
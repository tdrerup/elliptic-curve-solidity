"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildCompareFilter = void 0;
function subArrayContains(tab, upperBound, includeValue) {
    for (let idx = 0; idx < upperBound; ++idx) {
        if (includeValue(tab[idx]))
            return true;
    }
    return false;
}
function swap(tab, idx1, idx2) {
    const temp = tab[idx1];
    tab[idx1] = tab[idx2];
    tab[idx2] = temp;
}
function buildCompareFilter(compare) {
    return (tab) => {
        let finalLength = tab.length;
        for (let idx = tab.length - 1; idx !== -1; --idx) {
            if (subArrayContains(tab, idx, (t) => compare(t.value_, tab[idx].value_))) {
                --finalLength;
                swap(tab, idx, finalLength);
            }
        }
        return tab.slice(0, finalLength);
    };
}
exports.buildCompareFilter = buildCompareFilter;

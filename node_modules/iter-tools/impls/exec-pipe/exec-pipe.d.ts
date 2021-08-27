declare function execPipe<A>(initial: A): A;
declare function execPipe<A, R1>(initial: A, fn0: (value: A) => R1): R1;
declare function execPipe<A, R1, R2>(initial: A, fn0: (value: A) => R1, fn1: (value: R1) => R2): R2;
declare function execPipe<A, R1, R2, R3>(value: A, fn0: (value: A) => R1, fn1: (value: R1) => R2, fn2: (value: R2) => R3): R3;
declare function execPipe<A, R1, R2, R3, R4>(initial: A, fn0: (value: A) => R1, fn1: (value: R1) => R2, fn2: (value: R2) => R3, fn3: (value: R3) => R4): R4;
declare function execPipe<A, R1, R2, R3, R4, R5>(initial: A, fn0: (value: A) => R1, fn1: (value: R1) => R2, fn2: (value: R2) => R3, fn3: (value: R3) => R4, fn4: (value: R4) => R5): R5;
declare function execPipe<A, R1, R2, R3, R4, R5, R6>(initial: A, fn0: (value: A) => R1, fn1: (value: R1) => R2, fn2: (value: R2) => R3, fn3: (value: R3) => R4, fn4: (value: R4) => R5, fn5: (value: R5) => R6): R6;
declare function execPipe<T>(initial: T, ...fns: Array<(value: T) => T>): T;
export { execPipe };
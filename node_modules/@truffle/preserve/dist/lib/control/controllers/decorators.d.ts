import type { State } from "../types";
export declare const validStates: (states: State[]) => (target: Object, propertyKey: string, descriptor: PropertyDescriptor) => PropertyDescriptor;
export declare const transitionToState: (state: State) => (target: Object, propertyKey: string, descriptor: PropertyDescriptor) => PropertyDescriptor;

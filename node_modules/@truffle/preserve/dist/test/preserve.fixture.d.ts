import { Recipe } from "../lib";
export declare const simpleTarget = "hello, world!";
export declare const simpleLoader: Recipe;
export declare const vowelsRecipe: Recipe;
export declare const vowelsCounterRecipe: Recipe;
export declare const expectedEventsForVowelsRecipe: ({
    type: string;
    scope: string[];
    result?: undefined;
    message?: undefined;
} | {
    type: string;
    scope: string[];
    result: {
        string: string;
        vowels?: undefined;
    };
    message?: undefined;
} | {
    type: string;
    scope: string[];
    message: string;
    result?: undefined;
} | {
    type: string;
    scope: string[];
    result: {
        vowels: string;
        string?: undefined;
    };
    message?: undefined;
})[];
export declare const expectedEventsForVowelsCounterRecipe: ({
    type: string;
    scope: string[];
    message?: undefined;
    resolution?: undefined;
    result?: undefined;
} | {
    type: string;
    scope: string[];
    message: string;
    resolution?: undefined;
    result?: undefined;
} | {
    type: string;
    scope: string[];
    resolution: {
        count: number;
    };
    message?: undefined;
    result?: undefined;
} | {
    type: string;
    scope: string[];
    result: {
        "vowels-count": number;
    };
    message?: undefined;
    resolution?: undefined;
})[];

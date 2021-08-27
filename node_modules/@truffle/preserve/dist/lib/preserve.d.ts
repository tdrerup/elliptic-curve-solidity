import type { Recipe } from "./recipes";
import { Event } from "./control";
export interface Request {
    recipe: Recipe;
    settings?: Map<string, any>;
    inputs?: any;
}
export interface PreserveOptions {
    request: Request;
    recipes: Recipe[];
}
export declare function preserve(options: PreserveOptions): AsyncIterable<Event>;

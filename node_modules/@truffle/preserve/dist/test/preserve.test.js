"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const iter_tools_1 = require("iter-tools");
const preserve_1 = require("../lib/preserve");
const preserve_fixture_1 = require("./preserve.fixture");
const recipes = [preserve_fixture_1.simpleLoader, preserve_fixture_1.vowelsRecipe, preserve_fixture_1.vowelsCounterRecipe];
describe("preserve()", () => {
    it("preserves via a single recipe", () => __awaiter(void 0, void 0, void 0, function* () {
        const events = yield iter_tools_1.asyncToArray(preserve_1.preserve({
            request: { recipe: preserve_fixture_1.vowelsRecipe },
            recipes,
        }));
        expect(events).toEqual(preserve_fixture_1.expectedEventsForVowelsRecipe);
    }));
    it("preserves via a recipe that depends on another recipe", () => __awaiter(void 0, void 0, void 0, function* () {
        const allEvents = yield iter_tools_1.asyncToArray(preserve_1.preserve({
            request: { recipe: preserve_fixture_1.vowelsCounterRecipe },
            recipes,
        }));
        const relevantEvents = allEvents.filter(({ scope }) => scope[0] === "vowels-counter-recipe");
        expect(relevantEvents).toEqual(preserve_fixture_1.expectedEventsForVowelsCounterRecipe);
    }));
    it("throws when no recipe dependency path can be found", () => __awaiter(void 0, void 0, void 0, function* () {
        const incompleteRecipes = [...recipes];
        incompleteRecipes.shift();
        const throwingCall = iter_tools_1.asyncToArray(preserve_1.preserve({
            request: { recipe: preserve_fixture_1.vowelsRecipe },
            recipes: incompleteRecipes,
        }));
        yield expect(throwingCall).rejects.toThrow('No plugins found that output the label "string".');
    }));
});
//# sourceMappingURL=preserve.test.js.map
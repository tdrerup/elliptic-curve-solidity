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
const buckets_fixture_1 = require("./buckets.fixture");
const preserve_1 = require("./utils/preserve");
jest.setTimeout(200000);
// There's no local test environment for buckets, so this test can be run on
// production only
describe.skip("preserve", () => {
    for (const { name, target, events } of buckets_fixture_1.tests) {
        it(`${name}: should emit the correct events`, () => __awaiter(void 0, void 0, void 0, function* () {
            const environment = {
                key: "BUCKET_KEY",
                secret: "BUCKET_SECRET",
                bucketName: "TEST_BUCKET",
            };
            const emittedEvents = yield preserve_1.preserveToBucketsWithEvents(target, environment);
            expect(emittedEvents).toEqual(events);
        }));
    }
});
//# sourceMappingURL=buckets.test.js.map
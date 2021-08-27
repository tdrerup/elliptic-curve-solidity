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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const buckets_1 = require("@textile/buckets");
const context_1 = require("@textile/context");
const crypto_1 = require("@textile/crypto");
const hub_threads_client_1 = require("@textile/hub-threads-client");
const threads_id_1 = require("@textile/threads-id");
const users_1 = require("@textile/users");
const browser_or_node_1 = require("browser-or-node");
const chai_1 = require("chai");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const testing_1 = require("@textile/testing");
describe('All apis...', () => {
    describe('Buckets and accounts', () => {
        context('a developer', () => {
            const ctx = new context_1.Context(testing_1.addrApiurl);
            let dev;
            it('should sign-up, create an API key, and sign it for the requests', () => __awaiter(void 0, void 0, void 0, function* () {
                // @note This should be done using the cli
                const { user } = yield testing_1.signUp(ctx, testing_1.addrGatewayUrl, testing_1.sessionSecret);
                if (user)
                    dev = user;
                // @note This should be done using the cli
                ctx.withSession(dev.session);
                const { keyInfo } = yield testing_1.createKey(ctx, 'KEY_TYPE_ACCOUNT');
                yield ctx.withAPIKey(keyInfo === null || keyInfo === void 0 ? void 0 : keyInfo.key).withKeyInfo(keyInfo);
                chai_1.expect(ctx.toJSON()).to.have.ownProperty('x-textile-api-sig');
            })).timeout(3000);
            it('should then create a db for the bucket', () => __awaiter(void 0, void 0, void 0, function* () {
                const db = new hub_threads_client_1.Client(ctx);
                const id = threads_id_1.ThreadID.fromRandom();
                yield db.newDB(id, 'my-buckets');
                chai_1.expect(ctx.toJSON()).to.have.ownProperty('x-textile-thread-name');
            }));
            it('should create a new bucket in the db and push to it', function () {
                var _a, _b;
                return __awaiter(this, void 0, void 0, function* () {
                    if (browser_or_node_1.isBrowser)
                        return this.skip();
                    // Create a new bucket in the db
                    const buckets = new buckets_1.Buckets(ctx);
                    const buck = yield buckets.create('mybuck');
                    chai_1.expect((_a = buck.root) === null || _a === void 0 ? void 0 : _a.name).to.equal('mybuck');
                    // Finally, push a file to the bucket.
                    const pth = path_1.default.join(__dirname, '../../..', 'testdata');
                    const stream = fs_1.default.createReadStream(path_1.default.join(pth, 'file1.jpg'));
                    const rootKey = ((_b = buck.root) === null || _b === void 0 ? void 0 : _b.key) || '';
                    const { root } = yield buckets.pushPath(rootKey, 'dir1/file1.jpg', stream);
                    chai_1.expect(root).to.not.be.undefined;
                    // We should have a thread named "my-buckets"
                    const db = new hub_threads_client_1.Client(ctx);
                    const res = yield db.getThread('my-buckets');
                    chai_1.expect(res.id).to.deep.equal(ctx.toJSON()['x-textile-thread']);
                });
            });
        });
        context('a developer with a user', function () {
            this.timeout(5000);
            const ctx = new context_1.Context(testing_1.addrApiurl);
            const identity = crypto_1.PrivateKey.fromRandom();
            let dev;
            let db;
            let users;
            it('should sign-up, create an API key, and a new user', function () {
                return __awaiter(this, void 0, void 0, function* () {
                    // @note This should be done using the cli
                    const { user } = yield testing_1.signUp(ctx, testing_1.addrGatewayUrl, testing_1.sessionSecret);
                    if (user)
                        dev = user;
                    // @note This should be done using the cli
                    // This time they create a user key
                    const { keyInfo } = yield testing_1.createKey(ctx.withSession(dev.session), 'KEY_TYPE_USER');
                    // We also explicitly specify a custom context here, which could be omitted as it uses reasonable defaults
                    const userContext = yield new context_1.Context(testing_1.addrApiurl).withKeyInfo(keyInfo);
                    // In the app, we simply create a new user from the provided user key, signing is done automatically
                    db = new hub_threads_client_1.Client(userContext);
                    const token = yield db.getToken(identity);
                    users = new users_1.Users(userContext);
                    users.setToken(token);
                    chai_1.expect(db.context.toJSON()).to.have.ownProperty('x-textile-api-sig');
                });
            }).timeout(3000);
            it('should then create a db for the bucket', function () {
                return __awaiter(this, void 0, void 0, function* () {
                    yield db.newDB(threads_id_1.ThreadID.fromRandom(), 'my-buckets');
                    chai_1.expect(db.context.toJSON()).to.have.ownProperty('x-textile-thread-name');
                });
            });
            it('should create a new bucket in the db and push to it', function () {
                var _a, _b;
                return __awaiter(this, void 0, void 0, function* () {
                    if (browser_or_node_1.isBrowser)
                        return this.skip();
                    // Create a new bucket in the db from the user context
                    const buckets = new buckets_1.Buckets(db.context);
                    const buck = yield buckets.create('mybuck');
                    chai_1.expect((_a = buck.root) === null || _a === void 0 ? void 0 : _a.name).to.equal('mybuck');
                    // Finally, push a file to the bucket.
                    const pth = path_1.default.join(__dirname, '../../..', 'testdata');
                    const stream = fs_1.default.createReadStream(path_1.default.join(pth, 'file1.jpg'));
                    const rootKey = ((_b = buck.root) === null || _b === void 0 ? void 0 : _b.key) || '';
                    const { root } = yield buckets.pushPath(rootKey, 'dir1/file1.jpg', stream);
                    chai_1.expect(root).to.not.be.undefined;
                    // Ensure context is set properly
                    chai_1.expect(db.context.toJSON()).to.have.ownProperty('x-textile-thread-name');
                    chai_1.expect(db.context.get('x-textile-thread-name')).to.equal('my-buckets');
                    // We should have a thread named "my-buckets"
                    const res = yield db.getThread('my-buckets');
                    chai_1.expect(res.id).to.deep.equal(db.context.toJSON()['x-textile-thread']);
                });
            });
            it('should check the users own usage', function () {
                var _a;
                return __awaiter(this, void 0, void 0, function* () {
                    if (browser_or_node_1.isBrowser)
                        return this.skip();
                    const usage = yield users.getUsage();
                    const daily = ((_a = usage.customer) === null || _a === void 0 ? void 0 : _a.dailyUsageMap) || [];
                    for (const use of daily) {
                        switch (use[0]) {
                            case 'instance_reads': {
                                chai_1.expect(use[1].total).to.equal(4);
                                break;
                            }
                            case 'instance_writes': {
                                chai_1.expect(use[1].total).to.equal(2);
                                break;
                            }
                            case 'network_egress': {
                                chai_1.expect(use[1].total).to.be.closeTo(3887, 1000);
                                break;
                            }
                            case 'stored_data': {
                                chai_1.expect(use[1].total).to.equal(601902);
                                break;
                            }
                        }
                    }
                });
            });
            it('should check the users usage as the developer', function () {
                var _a;
                return __awaiter(this, void 0, void 0, function* () {
                    if (browser_or_node_1.isBrowser)
                        return this.skip();
                    const { keyInfo } = yield testing_1.createKey(ctx, 'KEY_TYPE_ACCOUNT');
                    yield ctx.withAPIKey(keyInfo === null || keyInfo === void 0 ? void 0 : keyInfo.key).withKeyInfo(keyInfo);
                    const devUser = new users_1.Users(ctx);
                    const usage = yield devUser.getUsage({
                        dependentUserKey: identity.public.toString(),
                    });
                    const daily = ((_a = usage.customer) === null || _a === void 0 ? void 0 : _a.dailyUsageMap) || [];
                    for (const use of daily) {
                        switch (use[0]) {
                            case 'instance_reads': {
                                chai_1.expect(use[1].total).to.equal(4);
                                break;
                            }
                            case 'instance_writes': {
                                chai_1.expect(use[1].total).to.equal(2);
                                break;
                            }
                            case 'network_egress': {
                                chai_1.expect(use[1].total).to.be.closeTo(3887, 1000);
                                break;
                            }
                            case 'stored_data': {
                                chai_1.expect(use[1].total).to.equal(601902);
                                break;
                            }
                        }
                    }
                });
            });
            it('should check the developers usage', function () {
                var _a;
                return __awaiter(this, void 0, void 0, function* () {
                    if (browser_or_node_1.isBrowser)
                        return this.skip();
                    const { keyInfo } = yield testing_1.createKey(ctx, 'KEY_TYPE_ACCOUNT');
                    yield ctx.withAPIKey(keyInfo === null || keyInfo === void 0 ? void 0 : keyInfo.key).withKeyInfo(keyInfo);
                    const devUser = new users_1.Users(ctx);
                    const usage = yield devUser.getUsage();
                    const daily = ((_a = usage.customer) === null || _a === void 0 ? void 0 : _a.dailyUsageMap) || [];
                    for (const use of daily) {
                        switch (use[0]) {
                            case 'instance_reads': {
                                chai_1.expect(use[1].total).to.equal(4);
                                break;
                            }
                            case 'instance_writes': {
                                chai_1.expect(use[1].total).to.equal(2);
                                break;
                            }
                            case 'network_egress': {
                                chai_1.expect(use[1].total).to.be.closeTo(5237, 1000);
                                break;
                            }
                            case 'stored_data': {
                                chai_1.expect(use[1].total).to.equal(601902);
                                break;
                            }
                        }
                    }
                });
            });
        });
    });
});
//# sourceMappingURL=users.spec.js.map
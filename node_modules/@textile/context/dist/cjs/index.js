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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Context = exports.defaultHost = exports.errors = void 0;
const grpc_web_1 = require("@improbable-eng/grpc-web");
const security_1 = require("@textile/security");
exports.errors = {
    /**
     * expirationError is an error your app will receive anytime your credentials have expired.
     * @public
     */
    expirationError: new Error('Auth expired. Consider calling withKeyInfo or withAPISig to refresh.'),
};
exports.defaultHost = 'https://webapi.hub.textile.io';
/**
 * Context provides context management for gRPC credentials and config settings.
 * It is the default implementation for the ContextInterface interface.
 */
class Context {
    /**
     * Construct a new Context object.
     * @param host The remote gRPC host. This input exists to comply with the Config interface.
     */
    constructor(host = exports.defaultHost) {
        // Internal context variables
        this._context = {};
        this._context['host'] = host;
    }
    static fromUserAuth(auth, host = exports.defaultHost) {
        const ctx = new Context(host);
        const { key, token } = auth, sig = __rest(auth, ["key", "token"]);
        return ctx.withAPIKey(key).withAPISig(sig).withToken(token);
    }
    static fromUserAuthCallback(authCallback, host = exports.defaultHost) {
        const ctx = new Context(host);
        // @todo: Should we now callback right away?
        ctx.authCallback = authCallback;
        return ctx;
    }
    get host() {
        return this._context['host'];
    }
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    set(key, value) {
        this._context[key] = value;
        return this;
    }
    get(key) {
        return this._context[key];
    }
    withSession(value) {
        if (value === undefined)
            return this;
        this._context['x-textile-session'] = value;
        return this;
    }
    withThread(value) {
        if (value === undefined)
            return this;
        this._context['x-textile-thread'] = value.toString();
        return this;
    }
    withThreadName(value) {
        if (value === undefined)
            return this;
        this._context['x-textile-thread-name'] = value;
        return this;
    }
    withOrg(value) {
        if (value === undefined)
            return this;
        this._context['x-textile-org'] = value;
        return this;
    }
    withToken(value) {
        if (value === undefined)
            return this;
        this._context['authorization'] = `bearer ${value}`;
        return this;
    }
    withAPIKey(value) {
        if (value === undefined)
            return this;
        this._context['x-textile-api-key'] = value;
        return this;
    }
    withAPISig(value) {
        if (value === undefined)
            return this;
        const { sig, msg } = value;
        this._context['x-textile-api-sig-msg'] = msg;
        this._context['x-textile-api-sig'] = sig;
        return this;
    }
    withKeyInfo(key, date) {
        return __awaiter(this, void 0, void 0, function* () {
            if (key === undefined)
                return this;
            // Enables the use of insecure / non-signing keys
            if (!key.secret)
                return this.withAPIKey(key.key);
            const sig = yield security_1.createAPISig(key.secret, date);
            return this.withAPIKey(key.key).withAPISig(sig);
        });
    }
    withContext(value) {
        if (value === undefined)
            return this;
        this._context = Object.assign(Object.assign({}, this._context), value.toJSON());
        return this;
    }
    /**
     * Returns true if this Context contains an api sig msg, and that msg has expired, or if
     * it does _not_ have an api sig msg, but it _does_ have an auth callback.
     */
    get isExpired() {
        const msg = this.get('x-textile-api-sig-msg');
        const notAuthed = msg === undefined && this.authCallback !== undefined;
        const isExpired = msg !== undefined && new Date(msg) <= new Date();
        return isExpired || notAuthed;
    }
    /**
     * Refresh user auth with provided callback.
     * If callback is not specified, attempts to use existing callback specified at initialization.
     */
    refreshUserAuth(authCallback) {
        return __awaiter(this, void 0, void 0, function* () {
            // If we have a new one, use it...
            if (authCallback !== undefined) {
                this.authCallback = authCallback;
            }
            // If we still don't have a callback, throw...
            if (this.authCallback === undefined) {
                throw new Error('Missing authCallback. See Context.fromUserAuthCallback for details.');
            }
            // Now do the renewal and return self...
            const _a = yield this.authCallback(), { key, token } = _a, sig = __rest(_a, ["key", "token"]);
            return this.withAPIKey(key).withAPISig(sig).withToken(token);
        });
    }
    /**
     * Convert Context to plain JSON object.
     * @throws If this Context has expired.
     * @see toMetadata for an alternative for gRPC clients that supports auto-renewal.
     */
    toJSON() {
        const json = Object.assign({}, this._context);
        // If we're expired, throw...
        if (this.isExpired) {
            throw exports.errors.expirationError;
        }
        return json;
    }
    /**
     * Convert Context to grpc Metadata object.
     * Will automatically call the auth callback if available.
     * @param ctx Additional context object that will be merged with this prior to conversion.
     * @see toJSON for an alternative that returns a plain object, and throws when expired.
     */
    toMetadata(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            const context = new Context();
            if (this.isExpired && this.authCallback !== undefined) {
                const _a = yield this.authCallback(), { key, token } = _a, sig = __rest(_a, ["key", "token"]);
                // We do want to mutate this here because we want to update our auth sig
                this.withAPIKey(key).withAPISig(sig).withToken(token);
            }
            // We merge this context and ctx with the empty context so as to avoid mutating this with ctx
            return new grpc_web_1.grpc.Metadata(context.withContext(this).withContext(ctx).toJSON());
        });
    }
    /**
     * Import various ContextInterface API properties from JSON.
     * @param json The JSON object.
     * @param host Optional host string.
     */
    static fromJSON(json, host = exports.defaultHost) {
        const newContext = Object.assign({}, json);
        newContext['host'] = host;
        const ctx = new Context();
        ctx._context = newContext;
        return ctx;
    }
}
exports.Context = Context;
//# sourceMappingURL=index.js.map
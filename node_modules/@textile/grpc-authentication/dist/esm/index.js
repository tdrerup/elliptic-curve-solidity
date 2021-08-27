import{Context as t}from"@textile/context";import{GrpcConnection as e}from"@textile/grpc-connection";import{Client as n}from"@textile/hub-threads-client";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function o(t,e,n,o){return new(n||(n=Promise))((function(i,r){function c(t){try{u(o.next(t))}catch(t){r(t)}}function h(t){try{u(o.throw(t))}catch(t){r(t)}}function u(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(c,h)}u((o=o.apply(t,e||[])).next())}))}class i extends e{static copyAuth(t,e={}){return new i(t.context,e.debug)}static withUserAuth(e,n={}){const o="object"==typeof e?t.fromUserAuth(e,n.host):t.fromUserAuthCallback(e,n.host);return new i(o,n.debug)}static withKeyInfo(e,n={}){return o(this,void 0,void 0,(function*(){const o=new t(n.host);return yield o.withKeyInfo(e,n.date),new i(o,n.debug)}))}withThread(t){void 0!==t&&this.context.withThread(t)}getToken(t){return o(this,void 0,void 0,(function*(){const e=new n(this.context),o=yield e.getToken(t);return this.context.withToken(o),o}))}setToken(t){return o(this,void 0,void 0,(function*(){this.context.withToken(t)}))}getTokenChallenge(t,e){return o(this,void 0,void 0,(function*(){return new n(this.context).getTokenChallenge(t,e)}))}}export{i as GrpcAuthentication};

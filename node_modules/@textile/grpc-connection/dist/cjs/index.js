"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrpcConnection = void 0;
const grpc_web_1 = require("@improbable-eng/grpc-web");
const context_1 = require("@textile/context");
const grpc_transport_1 = require("@textile/grpc-transport");
class GrpcConnection {
    /**
     * Creates a new gRPC client instance for accessing the Textile Buckets API.
     * @param context The context to use for interacting with the APIs. Can be modified later.
     */
    constructor(context = new context_1.Context(), debug = false) {
        this.context = context;
        const transport = grpc_transport_1.WebsocketTransport(); // Default to websocket always
        this.serviceHost = context.host;
        this.rpcOptions = {
            transport,
            debug,
        };
        // Set default transport to websocket "globally"
        grpc_web_1.grpc.setDefaultTransport(transport);
    }
    unary(methodDescriptor, req, ctx) {
        return new Promise((resolve, reject) => {
            const metadata = ctx ? Object.assign({}, ctx.toJSON()) : Object.assign({}, this.context.toJSON());
            grpc_web_1.grpc.unary(methodDescriptor, {
                request: req,
                host: this.serviceHost,
                transport: this.rpcOptions.transport,
                debug: this.rpcOptions.debug,
                metadata,
                onEnd: (res) => {
                    const { status, statusMessage, message } = res;
                    if (status === grpc_web_1.grpc.Code.OK) {
                        resolve(message);
                    }
                    else {
                        const err = {
                            message: statusMessage,
                            code: status,
                            metadata,
                        };
                        reject(err);
                    }
                },
            });
        });
    }
}
exports.GrpcConnection = GrpcConnection;
//# sourceMappingURL=index.js.map
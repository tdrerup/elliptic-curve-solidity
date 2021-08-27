"use strict";
/**
 * @packageDocumentation
 * @module Common-JRPCAPI
 */
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
exports.JRPCAPI = void 0;
const apibase_1 = require("./apibase");
class JRPCAPI extends apibase_1.APIBase {
    /**
     *
     * @param core Reference to the Avalanche instance using this endpoint
     * @param baseURL Path of the APIs baseURL - ex: "/ext/bc/avm"
     * @param jrpcVersion The jrpc version to use, default "2.0".
     */
    constructor(core, baseURL, jrpcVersion = "2.0") {
        super(core, baseURL);
        this.jrpcVersion = "2.0";
        this.rpcID = 1;
        this.callMethod = (method, params, baseURL, headers) => __awaiter(this, void 0, void 0, function* () {
            const ep = baseURL || this.baseURL;
            const rpc = {};
            rpc.id = this.rpcID;
            rpc.method = method;
            // Set parameters if exists
            if (params) {
                rpc.params = params;
            }
            else if (this.jrpcVersion === "1.0") {
                rpc.params = [];
            }
            if (this.jrpcVersion !== "1.0") {
                rpc.jsonrpc = this.jrpcVersion;
            }
            let headrs = { "Content-Type": "application/json;charset=UTF-8" };
            if (headers) {
                headrs = Object.assign(Object.assign({}, headrs), headers);
            }
            baseURL = `${this.core.getProtocol()}://${this.core.getHost()}`;
            const port = this.core.getPort();
            if (port != undefined && typeof port === "number" && port >= 0) {
                baseURL = `${baseURL}:${port}`;
            }
            const axConf = {
                baseURL: baseURL,
                responseType: "json"
            };
            const resp = yield this.core.post(ep, {}, JSON.stringify(rpc), headrs, axConf);
            if (resp.status >= 200 && resp.status < 300) {
                this.rpcID += 1;
                if (typeof resp.data === "string") {
                    resp.data = JSON.parse(resp.data);
                }
                if (typeof resp.data === "object" &&
                    (resp.data === null || "error" in resp.data)) {
                    throw new Error(resp.data.error.message);
                }
            }
            return resp;
        });
        /**
         * Returns the rpcid, a strictly-increasing number, starting from 1, indicating the next
         * request ID that will be sent.
         */
        this.getRPCID = () => this.rpcID;
        this.jrpcVersion = jrpcVersion;
        this.rpcID = 1;
    }
}
exports.JRPCAPI = JRPCAPI;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianJwY2FwaS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tb24vanJwY2FwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7OztHQUdHOzs7Ozs7Ozs7Ozs7QUFJSCx1Q0FBd0Q7QUFFeEQsTUFBYSxPQUFRLFNBQVEsaUJBQU87SUFzRWxDOzs7OztPQUtHO0lBQ0gsWUFDRSxJQUFtQixFQUNuQixPQUFlLEVBQ2YsY0FBc0IsS0FBSztRQUUzQixLQUFLLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFBO1FBaEZaLGdCQUFXLEdBQVcsS0FBSyxDQUFBO1FBQzNCLFVBQUssR0FBRyxDQUFDLENBQUE7UUFFbkIsZUFBVSxHQUFHLENBQ1gsTUFBYyxFQUNkLE1BQTBCLEVBQzFCLE9BQWdCLEVBQ2hCLE9BQWdCLEVBQ2MsRUFBRTtZQUNoQyxNQUFNLEVBQUUsR0FBVyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQTtZQUMxQyxNQUFNLEdBQUcsR0FBUSxFQUFFLENBQUE7WUFDbkIsR0FBRyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFBO1lBQ25CLEdBQUcsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFBO1lBRW5CLDJCQUEyQjtZQUMzQixJQUFJLE1BQU0sRUFBRTtnQkFDVixHQUFHLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQTthQUNwQjtpQkFBTSxJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssS0FBSyxFQUFFO2dCQUNyQyxHQUFHLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQTthQUNoQjtZQUVELElBQUksSUFBSSxDQUFDLFdBQVcsS0FBSyxLQUFLLEVBQUU7Z0JBQzlCLEdBQUcsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQTthQUMvQjtZQUVELElBQUksTUFBTSxHQUFXLEVBQUUsY0FBYyxFQUFFLGdDQUFnQyxFQUFFLENBQUE7WUFDekUsSUFBSSxPQUFPLEVBQUU7Z0JBQ1gsTUFBTSxtQ0FBUSxNQUFNLEdBQUssT0FBTyxDQUFFLENBQUE7YUFDbkM7WUFFRCxPQUFPLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQTtZQUMvRCxNQUFNLElBQUksR0FBVyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFBO1lBQ3hDLElBQUksSUFBSSxJQUFJLFNBQVMsSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLElBQUksSUFBSSxJQUFJLENBQUMsRUFBRTtnQkFDOUQsT0FBTyxHQUFHLEdBQUcsT0FBTyxJQUFJLElBQUksRUFBRSxDQUFBO2FBQy9CO1lBRUQsTUFBTSxNQUFNLEdBQXVCO2dCQUNqQyxPQUFPLEVBQUUsT0FBTztnQkFDaEIsWUFBWSxFQUFFLE1BQU07YUFDckIsQ0FBQTtZQUVELE1BQU0sSUFBSSxHQUF3QixNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUNwRCxFQUFFLEVBQ0YsRUFBRSxFQUNGLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQ25CLE1BQU0sRUFDTixNQUFNLENBQ1AsQ0FBQTtZQUNELElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLEVBQUU7Z0JBQzNDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFBO2dCQUNmLElBQUksT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtvQkFDakMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtpQkFDbEM7Z0JBQ0QsSUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUTtvQkFDN0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksSUFBSSxPQUFPLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUM1QztvQkFDQSxNQUFNLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFBO2lCQUN6QzthQUNGO1lBQ0QsT0FBTyxJQUFJLENBQUE7UUFDYixDQUFDLENBQUEsQ0FBQTtRQUVEOzs7V0FHRztRQUNILGFBQVEsR0FBRyxHQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFBO1FBY2pDLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFBO1FBQzlCLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFBO0lBQ2hCLENBQUM7Q0FDRjtBQXJGRCwwQkFxRkMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBwYWNrYWdlRG9jdW1lbnRhdGlvblxuICogQG1vZHVsZSBDb21tb24tSlJQQ0FQSVxuICovXG5cbmltcG9ydCB7IEF4aW9zUmVxdWVzdENvbmZpZyB9IGZyb20gXCJheGlvc1wiXG5pbXBvcnQgQXZhbGFuY2hlQ29yZSBmcm9tIFwiLi4vYXZhbGFuY2hlXCJcbmltcG9ydCB7IEFQSUJhc2UsIFJlcXVlc3RSZXNwb25zZURhdGEgfSBmcm9tIFwiLi9hcGliYXNlXCJcblxuZXhwb3J0IGNsYXNzIEpSUENBUEkgZXh0ZW5kcyBBUElCYXNlIHtcbiAgcHJvdGVjdGVkIGpycGNWZXJzaW9uOiBzdHJpbmcgPSBcIjIuMFwiXG4gIHByb3RlY3RlZCBycGNJRCA9IDFcblxuICBjYWxsTWV0aG9kID0gYXN5bmMgKFxuICAgIG1ldGhvZDogc3RyaW5nLFxuICAgIHBhcmFtcz86IG9iamVjdFtdIHwgb2JqZWN0LFxuICAgIGJhc2VVUkw/OiBzdHJpbmcsXG4gICAgaGVhZGVycz86IG9iamVjdFxuICApOiBQcm9taXNlPFJlcXVlc3RSZXNwb25zZURhdGE+ID0+IHtcbiAgICBjb25zdCBlcDogc3RyaW5nID0gYmFzZVVSTCB8fCB0aGlzLmJhc2VVUkxcbiAgICBjb25zdCBycGM6IGFueSA9IHt9XG4gICAgcnBjLmlkID0gdGhpcy5ycGNJRFxuICAgIHJwYy5tZXRob2QgPSBtZXRob2RcblxuICAgIC8vIFNldCBwYXJhbWV0ZXJzIGlmIGV4aXN0c1xuICAgIGlmIChwYXJhbXMpIHtcbiAgICAgIHJwYy5wYXJhbXMgPSBwYXJhbXNcbiAgICB9IGVsc2UgaWYgKHRoaXMuanJwY1ZlcnNpb24gPT09IFwiMS4wXCIpIHtcbiAgICAgIHJwYy5wYXJhbXMgPSBbXVxuICAgIH1cblxuICAgIGlmICh0aGlzLmpycGNWZXJzaW9uICE9PSBcIjEuMFwiKSB7XG4gICAgICBycGMuanNvbnJwYyA9IHRoaXMuanJwY1ZlcnNpb25cbiAgICB9XG5cbiAgICBsZXQgaGVhZHJzOiBvYmplY3QgPSB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PVVURi04XCIgfVxuICAgIGlmIChoZWFkZXJzKSB7XG4gICAgICBoZWFkcnMgPSB7IC4uLmhlYWRycywgLi4uaGVhZGVycyB9XG4gICAgfVxuXG4gICAgYmFzZVVSTCA9IGAke3RoaXMuY29yZS5nZXRQcm90b2NvbCgpfTovLyR7dGhpcy5jb3JlLmdldEhvc3QoKX1gXG4gICAgY29uc3QgcG9ydDogbnVtYmVyID0gdGhpcy5jb3JlLmdldFBvcnQoKVxuICAgIGlmIChwb3J0ICE9IHVuZGVmaW5lZCAmJiB0eXBlb2YgcG9ydCA9PT0gXCJudW1iZXJcIiAmJiBwb3J0ID49IDApIHtcbiAgICAgIGJhc2VVUkwgPSBgJHtiYXNlVVJMfToke3BvcnR9YFxuICAgIH1cblxuICAgIGNvbnN0IGF4Q29uZjogQXhpb3NSZXF1ZXN0Q29uZmlnID0ge1xuICAgICAgYmFzZVVSTDogYmFzZVVSTCxcbiAgICAgIHJlc3BvbnNlVHlwZTogXCJqc29uXCJcbiAgICB9XG5cbiAgICBjb25zdCByZXNwOiBSZXF1ZXN0UmVzcG9uc2VEYXRhID0gYXdhaXQgdGhpcy5jb3JlLnBvc3QoXG4gICAgICBlcCxcbiAgICAgIHt9LFxuICAgICAgSlNPTi5zdHJpbmdpZnkocnBjKSxcbiAgICAgIGhlYWRycyxcbiAgICAgIGF4Q29uZlxuICAgIClcbiAgICBpZiAocmVzcC5zdGF0dXMgPj0gMjAwICYmIHJlc3Auc3RhdHVzIDwgMzAwKSB7XG4gICAgICB0aGlzLnJwY0lEICs9IDFcbiAgICAgIGlmICh0eXBlb2YgcmVzcC5kYXRhID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHJlc3AuZGF0YSA9IEpTT04ucGFyc2UocmVzcC5kYXRhKVxuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICB0eXBlb2YgcmVzcC5kYXRhID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgIChyZXNwLmRhdGEgPT09IG51bGwgfHwgXCJlcnJvclwiIGluIHJlc3AuZGF0YSlcbiAgICAgICkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IocmVzcC5kYXRhLmVycm9yLm1lc3NhZ2UpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXNwXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgcnBjaWQsIGEgc3RyaWN0bHktaW5jcmVhc2luZyBudW1iZXIsIHN0YXJ0aW5nIGZyb20gMSwgaW5kaWNhdGluZyB0aGUgbmV4dFxuICAgKiByZXF1ZXN0IElEIHRoYXQgd2lsbCBiZSBzZW50LlxuICAgKi9cbiAgZ2V0UlBDSUQgPSAoKTogbnVtYmVyID0+IHRoaXMucnBjSURcblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIGNvcmUgUmVmZXJlbmNlIHRvIHRoZSBBdmFsYW5jaGUgaW5zdGFuY2UgdXNpbmcgdGhpcyBlbmRwb2ludFxuICAgKiBAcGFyYW0gYmFzZVVSTCBQYXRoIG9mIHRoZSBBUElzIGJhc2VVUkwgLSBleDogXCIvZXh0L2JjL2F2bVwiXG4gICAqIEBwYXJhbSBqcnBjVmVyc2lvbiBUaGUganJwYyB2ZXJzaW9uIHRvIHVzZSwgZGVmYXVsdCBcIjIuMFwiLlxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgY29yZTogQXZhbGFuY2hlQ29yZSxcbiAgICBiYXNlVVJMOiBzdHJpbmcsXG4gICAganJwY1ZlcnNpb246IHN0cmluZyA9IFwiMi4wXCJcbiAgKSB7XG4gICAgc3VwZXIoY29yZSwgYmFzZVVSTClcbiAgICB0aGlzLmpycGNWZXJzaW9uID0ganJwY1ZlcnNpb25cbiAgICB0aGlzLnJwY0lEID0gMVxuICB9XG59XG4iXX0=
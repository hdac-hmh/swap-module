/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Token } from "../tokenswap/token";
import { PageRequest, PageResponse, } from "../cosmos/base/query/v1beta1/pagination";
import { SwapRequest } from "../tokenswap/swap_request";
export const protobufPackage = "hdachmh.swapmodule.tokenswap";
const baseQueryGetTokenRequest = { id: 0 };
export const QueryGetTokenRequest = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetTokenRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetTokenRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetTokenRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    },
};
const baseQueryGetTokenResponse = {};
export const QueryGetTokenResponse = {
    encode(message, writer = Writer.create()) {
        if (message.Token !== undefined) {
            Token.encode(message.Token, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetTokenResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Token = Token.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetTokenResponse };
        if (object.Token !== undefined && object.Token !== null) {
            message.Token = Token.fromJSON(object.Token);
        }
        else {
            message.Token = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.Token !== undefined &&
            (obj.Token = message.Token ? Token.toJSON(message.Token) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetTokenResponse };
        if (object.Token !== undefined && object.Token !== null) {
            message.Token = Token.fromPartial(object.Token);
        }
        else {
            message.Token = undefined;
        }
        return message;
    },
};
const baseQueryAllTokenRequest = {};
export const QueryAllTokenRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllTokenRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllTokenRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllTokenRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryAllTokenResponse = {};
export const QueryAllTokenResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.Token) {
            Token.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllTokenResponse };
        message.Token = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Token.push(Token.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllTokenResponse };
        message.Token = [];
        if (object.Token !== undefined && object.Token !== null) {
            for (const e of object.Token) {
                message.Token.push(Token.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.Token) {
            obj.Token = message.Token.map((e) => (e ? Token.toJSON(e) : undefined));
        }
        else {
            obj.Token = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllTokenResponse };
        message.Token = [];
        if (object.Token !== undefined && object.Token !== null) {
            for (const e of object.Token) {
                message.Token.push(Token.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryGetSwapRequestRequest = { id: 0 };
export const QueryGetSwapRequestRequest = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetSwapRequestRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryGetSwapRequestRequest,
        };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetSwapRequestRequest,
        };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    },
};
const baseQueryGetSwapRequestResponse = {};
export const QueryGetSwapRequestResponse = {
    encode(message, writer = Writer.create()) {
        if (message.SwapRequest !== undefined) {
            SwapRequest.encode(message.SwapRequest, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetSwapRequestResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.SwapRequest = SwapRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryGetSwapRequestResponse,
        };
        if (object.SwapRequest !== undefined && object.SwapRequest !== null) {
            message.SwapRequest = SwapRequest.fromJSON(object.SwapRequest);
        }
        else {
            message.SwapRequest = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.SwapRequest !== undefined &&
            (obj.SwapRequest = message.SwapRequest
                ? SwapRequest.toJSON(message.SwapRequest)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetSwapRequestResponse,
        };
        if (object.SwapRequest !== undefined && object.SwapRequest !== null) {
            message.SwapRequest = SwapRequest.fromPartial(object.SwapRequest);
        }
        else {
            message.SwapRequest = undefined;
        }
        return message;
    },
};
const baseQueryAllSwapRequestRequest = {};
export const QueryAllSwapRequestRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllSwapRequestRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryAllSwapRequestRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllSwapRequestRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryAllSwapRequestResponse = {};
export const QueryAllSwapRequestResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.SwapRequest) {
            SwapRequest.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllSwapRequestResponse,
        };
        message.SwapRequest = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.SwapRequest.push(SwapRequest.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryAllSwapRequestResponse,
        };
        message.SwapRequest = [];
        if (object.SwapRequest !== undefined && object.SwapRequest !== null) {
            for (const e of object.SwapRequest) {
                message.SwapRequest.push(SwapRequest.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.SwapRequest) {
            obj.SwapRequest = message.SwapRequest.map((e) => e ? SwapRequest.toJSON(e) : undefined);
        }
        else {
            obj.SwapRequest = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllSwapRequestResponse,
        };
        message.SwapRequest = [];
        if (object.SwapRequest !== undefined && object.SwapRequest !== null) {
            for (const e of object.SwapRequest) {
                message.SwapRequest.push(SwapRequest.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    Token(request) {
        const data = QueryGetTokenRequest.encode(request).finish();
        const promise = this.rpc.request("hdachmh.swapmodule.tokenswap.Query", "Token", data);
        return promise.then((data) => QueryGetTokenResponse.decode(new Reader(data)));
    }
    TokenAll(request) {
        const data = QueryAllTokenRequest.encode(request).finish();
        const promise = this.rpc.request("hdachmh.swapmodule.tokenswap.Query", "TokenAll", data);
        return promise.then((data) => QueryAllTokenResponse.decode(new Reader(data)));
    }
    SwapRequest(request) {
        const data = QueryGetSwapRequestRequest.encode(request).finish();
        const promise = this.rpc.request("hdachmh.swapmodule.tokenswap.Query", "SwapRequest", data);
        return promise.then((data) => QueryGetSwapRequestResponse.decode(new Reader(data)));
    }
    SwapRequestAll(request) {
        const data = QueryAllSwapRequestRequest.encode(request).finish();
        const promise = this.rpc.request("hdachmh.swapmodule.tokenswap.Query", "SwapRequestAll", data);
        return promise.then((data) => QueryAllSwapRequestResponse.decode(new Reader(data)));
    }
}
var globalThis = (() => {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}

/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
export const protobufPackage = "hdachmh.swapmodule.swapmodule";
const baseMsgCreateToken = {
    creator: "",
    Owner: "",
    Denom: "",
    Balance: "",
};
export const MsgCreateToken = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.Owner !== "") {
            writer.uint32(18).string(message.Owner);
        }
        if (message.Denom !== "") {
            writer.uint32(26).string(message.Denom);
        }
        if (message.Balance !== "") {
            writer.uint32(34).string(message.Balance);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateToken };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.Owner = reader.string();
                    break;
                case 3:
                    message.Denom = reader.string();
                    break;
                case 4:
                    message.Balance = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateToken };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.Owner !== undefined && object.Owner !== null) {
            message.Owner = String(object.Owner);
        }
        else {
            message.Owner = "";
        }
        if (object.Denom !== undefined && object.Denom !== null) {
            message.Denom = String(object.Denom);
        }
        else {
            message.Denom = "";
        }
        if (object.Balance !== undefined && object.Balance !== null) {
            message.Balance = String(object.Balance);
        }
        else {
            message.Balance = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.Owner !== undefined && (obj.Owner = message.Owner);
        message.Denom !== undefined && (obj.Denom = message.Denom);
        message.Balance !== undefined && (obj.Balance = message.Balance);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateToken };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.Owner !== undefined && object.Owner !== null) {
            message.Owner = object.Owner;
        }
        else {
            message.Owner = "";
        }
        if (object.Denom !== undefined && object.Denom !== null) {
            message.Denom = object.Denom;
        }
        else {
            message.Denom = "";
        }
        if (object.Balance !== undefined && object.Balance !== null) {
            message.Balance = object.Balance;
        }
        else {
            message.Balance = "";
        }
        return message;
    },
};
const baseMsgCreateTokenResponse = { id: 0 };
export const MsgCreateTokenResponse = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateTokenResponse };
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
        const message = { ...baseMsgCreateTokenResponse };
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
        const message = { ...baseMsgCreateTokenResponse };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    },
};
const baseMsgUpdateToken = {
    creator: "",
    id: 0,
    Owner: "",
    Denom: "",
    Balance: "",
};
export const MsgUpdateToken = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        if (message.Owner !== "") {
            writer.uint32(26).string(message.Owner);
        }
        if (message.Denom !== "") {
            writer.uint32(34).string(message.Denom);
        }
        if (message.Balance !== "") {
            writer.uint32(42).string(message.Balance);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateToken };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.Owner = reader.string();
                    break;
                case 4:
                    message.Denom = reader.string();
                    break;
                case 5:
                    message.Balance = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUpdateToken };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        if (object.Owner !== undefined && object.Owner !== null) {
            message.Owner = String(object.Owner);
        }
        else {
            message.Owner = "";
        }
        if (object.Denom !== undefined && object.Denom !== null) {
            message.Denom = String(object.Denom);
        }
        else {
            message.Denom = "";
        }
        if (object.Balance !== undefined && object.Balance !== null) {
            message.Balance = String(object.Balance);
        }
        else {
            message.Balance = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        message.Owner !== undefined && (obj.Owner = message.Owner);
        message.Denom !== undefined && (obj.Denom = message.Denom);
        message.Balance !== undefined && (obj.Balance = message.Balance);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateToken };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        if (object.Owner !== undefined && object.Owner !== null) {
            message.Owner = object.Owner;
        }
        else {
            message.Owner = "";
        }
        if (object.Denom !== undefined && object.Denom !== null) {
            message.Denom = object.Denom;
        }
        else {
            message.Denom = "";
        }
        if (object.Balance !== undefined && object.Balance !== null) {
            message.Balance = object.Balance;
        }
        else {
            message.Balance = "";
        }
        return message;
    },
};
const baseMsgUpdateTokenResponse = {};
export const MsgUpdateTokenResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateTokenResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgUpdateTokenResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgUpdateTokenResponse };
        return message;
    },
};
const baseMsgDeleteToken = { creator: "", id: 0 };
export const MsgDeleteToken = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteToken };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
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
        const message = { ...baseMsgDeleteToken };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
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
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgDeleteToken };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    },
};
const baseMsgDeleteTokenResponse = {};
export const MsgDeleteTokenResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteTokenResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgDeleteTokenResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgDeleteTokenResponse };
        return message;
    },
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    CreateToken(request) {
        const data = MsgCreateToken.encode(request).finish();
        const promise = this.rpc.request("hdachmh.swapmodule.swapmodule.Msg", "CreateToken", data);
        return promise.then((data) => MsgCreateTokenResponse.decode(new Reader(data)));
    }
    UpdateToken(request) {
        const data = MsgUpdateToken.encode(request).finish();
        const promise = this.rpc.request("hdachmh.swapmodule.swapmodule.Msg", "UpdateToken", data);
        return promise.then((data) => MsgUpdateTokenResponse.decode(new Reader(data)));
    }
    DeleteToken(request) {
        const data = MsgDeleteToken.encode(request).finish();
        const promise = this.rpc.request("hdachmh.swapmodule.swapmodule.Msg", "DeleteToken", data);
        return promise.then((data) => MsgDeleteTokenResponse.decode(new Reader(data)));
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

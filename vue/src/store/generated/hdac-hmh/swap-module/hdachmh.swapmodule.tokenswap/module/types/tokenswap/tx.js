/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
export const protobufPackage = "hdachmh.swapmodule.tokenswap";
const baseMsgCreateToken = { creator: "", address: "", coin: 0 };
export const MsgCreateToken = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        if (message.coin !== 0) {
            writer.uint32(24).int32(message.coin);
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
                    message.address = reader.string();
                    break;
                case 3:
                    message.coin = reader.int32();
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
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        }
        else {
            message.address = "";
        }
        if (object.coin !== undefined && object.coin !== null) {
            message.coin = Number(object.coin);
        }
        else {
            message.coin = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.address !== undefined && (obj.address = message.address);
        message.coin !== undefined && (obj.coin = message.coin);
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
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        else {
            message.address = "";
        }
        if (object.coin !== undefined && object.coin !== null) {
            message.coin = object.coin;
        }
        else {
            message.coin = 0;
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
const baseMsgUpdateToken = { creator: "", id: 0, address: "", coin: 0 };
export const MsgUpdateToken = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        if (message.address !== "") {
            writer.uint32(26).string(message.address);
        }
        if (message.coin !== 0) {
            writer.uint32(32).int32(message.coin);
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
                    message.address = reader.string();
                    break;
                case 4:
                    message.coin = reader.int32();
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
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        }
        else {
            message.address = "";
        }
        if (object.coin !== undefined && object.coin !== null) {
            message.coin = Number(object.coin);
        }
        else {
            message.coin = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        message.address !== undefined && (obj.address = message.address);
        message.coin !== undefined && (obj.coin = message.coin);
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
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        else {
            message.address = "";
        }
        if (object.coin !== undefined && object.coin !== null) {
            message.coin = object.coin;
        }
        else {
            message.coin = 0;
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
const baseMsgCreateSwapRequest = {
    creator: "",
    burnTxHash: "",
    ethereumSender: "",
    receiver: "",
    amountEng: "",
    signerAddr: "",
};
export const MsgCreateSwapRequest = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.burnTxHash !== "") {
            writer.uint32(18).string(message.burnTxHash);
        }
        if (message.ethereumSender !== "") {
            writer.uint32(26).string(message.ethereumSender);
        }
        if (message.receiver !== "") {
            writer.uint32(34).string(message.receiver);
        }
        if (message.amountEng !== "") {
            writer.uint32(42).string(message.amountEng);
        }
        if (message.signerAddr !== "") {
            writer.uint32(50).string(message.signerAddr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateSwapRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.burnTxHash = reader.string();
                    break;
                case 3:
                    message.ethereumSender = reader.string();
                    break;
                case 4:
                    message.receiver = reader.string();
                    break;
                case 5:
                    message.amountEng = reader.string();
                    break;
                case 6:
                    message.signerAddr = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateSwapRequest };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.burnTxHash !== undefined && object.burnTxHash !== null) {
            message.burnTxHash = String(object.burnTxHash);
        }
        else {
            message.burnTxHash = "";
        }
        if (object.ethereumSender !== undefined && object.ethereumSender !== null) {
            message.ethereumSender = String(object.ethereumSender);
        }
        else {
            message.ethereumSender = "";
        }
        if (object.receiver !== undefined && object.receiver !== null) {
            message.receiver = String(object.receiver);
        }
        else {
            message.receiver = "";
        }
        if (object.amountEng !== undefined && object.amountEng !== null) {
            message.amountEng = String(object.amountEng);
        }
        else {
            message.amountEng = "";
        }
        if (object.signerAddr !== undefined && object.signerAddr !== null) {
            message.signerAddr = String(object.signerAddr);
        }
        else {
            message.signerAddr = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.burnTxHash !== undefined && (obj.burnTxHash = message.burnTxHash);
        message.ethereumSender !== undefined &&
            (obj.ethereumSender = message.ethereumSender);
        message.receiver !== undefined && (obj.receiver = message.receiver);
        message.amountEng !== undefined && (obj.amountEng = message.amountEng);
        message.signerAddr !== undefined && (obj.signerAddr = message.signerAddr);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateSwapRequest };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.burnTxHash !== undefined && object.burnTxHash !== null) {
            message.burnTxHash = object.burnTxHash;
        }
        else {
            message.burnTxHash = "";
        }
        if (object.ethereumSender !== undefined && object.ethereumSender !== null) {
            message.ethereumSender = object.ethereumSender;
        }
        else {
            message.ethereumSender = "";
        }
        if (object.receiver !== undefined && object.receiver !== null) {
            message.receiver = object.receiver;
        }
        else {
            message.receiver = "";
        }
        if (object.amountEng !== undefined && object.amountEng !== null) {
            message.amountEng = object.amountEng;
        }
        else {
            message.amountEng = "";
        }
        if (object.signerAddr !== undefined && object.signerAddr !== null) {
            message.signerAddr = object.signerAddr;
        }
        else {
            message.signerAddr = "";
        }
        return message;
    },
};
const baseMsgCreateSwapRequestResponse = { id: 0 };
export const MsgCreateSwapRequestResponse = {
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
            ...baseMsgCreateSwapRequestResponse,
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
            ...baseMsgCreateSwapRequestResponse,
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
            ...baseMsgCreateSwapRequestResponse,
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
const baseMsgUpdateSwapRequest = {
    creator: "",
    id: 0,
    burnTxHash: "",
    ethereumSender: "",
    receiver: "",
    amountEng: "",
    signerAddr: "",
};
export const MsgUpdateSwapRequest = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        if (message.burnTxHash !== "") {
            writer.uint32(26).string(message.burnTxHash);
        }
        if (message.ethereumSender !== "") {
            writer.uint32(34).string(message.ethereumSender);
        }
        if (message.receiver !== "") {
            writer.uint32(42).string(message.receiver);
        }
        if (message.amountEng !== "") {
            writer.uint32(50).string(message.amountEng);
        }
        if (message.signerAddr !== "") {
            writer.uint32(58).string(message.signerAddr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateSwapRequest };
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
                    message.burnTxHash = reader.string();
                    break;
                case 4:
                    message.ethereumSender = reader.string();
                    break;
                case 5:
                    message.receiver = reader.string();
                    break;
                case 6:
                    message.amountEng = reader.string();
                    break;
                case 7:
                    message.signerAddr = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUpdateSwapRequest };
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
        if (object.burnTxHash !== undefined && object.burnTxHash !== null) {
            message.burnTxHash = String(object.burnTxHash);
        }
        else {
            message.burnTxHash = "";
        }
        if (object.ethereumSender !== undefined && object.ethereumSender !== null) {
            message.ethereumSender = String(object.ethereumSender);
        }
        else {
            message.ethereumSender = "";
        }
        if (object.receiver !== undefined && object.receiver !== null) {
            message.receiver = String(object.receiver);
        }
        else {
            message.receiver = "";
        }
        if (object.amountEng !== undefined && object.amountEng !== null) {
            message.amountEng = String(object.amountEng);
        }
        else {
            message.amountEng = "";
        }
        if (object.signerAddr !== undefined && object.signerAddr !== null) {
            message.signerAddr = String(object.signerAddr);
        }
        else {
            message.signerAddr = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        message.burnTxHash !== undefined && (obj.burnTxHash = message.burnTxHash);
        message.ethereumSender !== undefined &&
            (obj.ethereumSender = message.ethereumSender);
        message.receiver !== undefined && (obj.receiver = message.receiver);
        message.amountEng !== undefined && (obj.amountEng = message.amountEng);
        message.signerAddr !== undefined && (obj.signerAddr = message.signerAddr);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateSwapRequest };
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
        if (object.burnTxHash !== undefined && object.burnTxHash !== null) {
            message.burnTxHash = object.burnTxHash;
        }
        else {
            message.burnTxHash = "";
        }
        if (object.ethereumSender !== undefined && object.ethereumSender !== null) {
            message.ethereumSender = object.ethereumSender;
        }
        else {
            message.ethereumSender = "";
        }
        if (object.receiver !== undefined && object.receiver !== null) {
            message.receiver = object.receiver;
        }
        else {
            message.receiver = "";
        }
        if (object.amountEng !== undefined && object.amountEng !== null) {
            message.amountEng = object.amountEng;
        }
        else {
            message.amountEng = "";
        }
        if (object.signerAddr !== undefined && object.signerAddr !== null) {
            message.signerAddr = object.signerAddr;
        }
        else {
            message.signerAddr = "";
        }
        return message;
    },
};
const baseMsgUpdateSwapRequestResponse = {};
export const MsgUpdateSwapRequestResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgUpdateSwapRequestResponse,
        };
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
        const message = {
            ...baseMsgUpdateSwapRequestResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgUpdateSwapRequestResponse,
        };
        return message;
    },
};
const baseMsgDeleteSwapRequest = { creator: "", id: 0 };
export const MsgDeleteSwapRequest = {
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
        const message = { ...baseMsgDeleteSwapRequest };
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
        const message = { ...baseMsgDeleteSwapRequest };
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
        const message = { ...baseMsgDeleteSwapRequest };
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
const baseMsgDeleteSwapRequestResponse = {};
export const MsgDeleteSwapRequestResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgDeleteSwapRequestResponse,
        };
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
        const message = {
            ...baseMsgDeleteSwapRequestResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgDeleteSwapRequestResponse,
        };
        return message;
    },
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    CreateToken(request) {
        const data = MsgCreateToken.encode(request).finish();
        const promise = this.rpc.request("hdachmh.swapmodule.tokenswap.Msg", "CreateToken", data);
        return promise.then((data) => MsgCreateTokenResponse.decode(new Reader(data)));
    }
    UpdateToken(request) {
        const data = MsgUpdateToken.encode(request).finish();
        const promise = this.rpc.request("hdachmh.swapmodule.tokenswap.Msg", "UpdateToken", data);
        return promise.then((data) => MsgUpdateTokenResponse.decode(new Reader(data)));
    }
    DeleteToken(request) {
        const data = MsgDeleteToken.encode(request).finish();
        const promise = this.rpc.request("hdachmh.swapmodule.tokenswap.Msg", "DeleteToken", data);
        return promise.then((data) => MsgDeleteTokenResponse.decode(new Reader(data)));
    }
    CreateSwapRequest(request) {
        const data = MsgCreateSwapRequest.encode(request).finish();
        const promise = this.rpc.request("hdachmh.swapmodule.tokenswap.Msg", "CreateSwapRequest", data);
        return promise.then((data) => MsgCreateSwapRequestResponse.decode(new Reader(data)));
    }
    UpdateSwapRequest(request) {
        const data = MsgUpdateSwapRequest.encode(request).finish();
        const promise = this.rpc.request("hdachmh.swapmodule.tokenswap.Msg", "UpdateSwapRequest", data);
        return promise.then((data) => MsgUpdateSwapRequestResponse.decode(new Reader(data)));
    }
    DeleteSwapRequest(request) {
        const data = MsgDeleteSwapRequest.encode(request).finish();
        const promise = this.rpc.request("hdachmh.swapmodule.tokenswap.Msg", "DeleteSwapRequest", data);
        return promise.then((data) => MsgDeleteSwapRequestResponse.decode(new Reader(data)));
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

/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
export const protobufPackage = "hdachmh.swapmodule.blogibc";
const baseMsgSendIbcPost = {
    sender: "",
    port: "",
    channelID: "",
    timeoutTimestamp: 0,
    title: "",
    content: "",
};
export const MsgSendIbcPost = {
    encode(message, writer = Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.port !== "") {
            writer.uint32(18).string(message.port);
        }
        if (message.channelID !== "") {
            writer.uint32(26).string(message.channelID);
        }
        if (message.timeoutTimestamp !== 0) {
            writer.uint32(32).uint64(message.timeoutTimestamp);
        }
        if (message.title !== "") {
            writer.uint32(42).string(message.title);
        }
        if (message.content !== "") {
            writer.uint32(50).string(message.content);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgSendIbcPost };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.port = reader.string();
                    break;
                case 3:
                    message.channelID = reader.string();
                    break;
                case 4:
                    message.timeoutTimestamp = longToNumber(reader.uint64());
                    break;
                case 5:
                    message.title = reader.string();
                    break;
                case 6:
                    message.content = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgSendIbcPost };
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = String(object.sender);
        }
        else {
            message.sender = "";
        }
        if (object.port !== undefined && object.port !== null) {
            message.port = String(object.port);
        }
        else {
            message.port = "";
        }
        if (object.channelID !== undefined && object.channelID !== null) {
            message.channelID = String(object.channelID);
        }
        else {
            message.channelID = "";
        }
        if (object.timeoutTimestamp !== undefined &&
            object.timeoutTimestamp !== null) {
            message.timeoutTimestamp = Number(object.timeoutTimestamp);
        }
        else {
            message.timeoutTimestamp = 0;
        }
        if (object.title !== undefined && object.title !== null) {
            message.title = String(object.title);
        }
        else {
            message.title = "";
        }
        if (object.content !== undefined && object.content !== null) {
            message.content = String(object.content);
        }
        else {
            message.content = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.port !== undefined && (obj.port = message.port);
        message.channelID !== undefined && (obj.channelID = message.channelID);
        message.timeoutTimestamp !== undefined &&
            (obj.timeoutTimestamp = message.timeoutTimestamp);
        message.title !== undefined && (obj.title = message.title);
        message.content !== undefined && (obj.content = message.content);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgSendIbcPost };
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        else {
            message.sender = "";
        }
        if (object.port !== undefined && object.port !== null) {
            message.port = object.port;
        }
        else {
            message.port = "";
        }
        if (object.channelID !== undefined && object.channelID !== null) {
            message.channelID = object.channelID;
        }
        else {
            message.channelID = "";
        }
        if (object.timeoutTimestamp !== undefined &&
            object.timeoutTimestamp !== null) {
            message.timeoutTimestamp = object.timeoutTimestamp;
        }
        else {
            message.timeoutTimestamp = 0;
        }
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        else {
            message.title = "";
        }
        if (object.content !== undefined && object.content !== null) {
            message.content = object.content;
        }
        else {
            message.content = "";
        }
        return message;
    },
};
const baseMsgSendIbcPostResponse = {};
export const MsgSendIbcPostResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgSendIbcPostResponse };
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
        const message = { ...baseMsgSendIbcPostResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgSendIbcPostResponse };
        return message;
    },
};
const baseMsgCreateTimedoutPost = { creator: "", title: "", chain: "" };
export const MsgCreateTimedoutPost = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.title !== "") {
            writer.uint32(18).string(message.title);
        }
        if (message.chain !== "") {
            writer.uint32(26).string(message.chain);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateTimedoutPost };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.title = reader.string();
                    break;
                case 3:
                    message.chain = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateTimedoutPost };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.title !== undefined && object.title !== null) {
            message.title = String(object.title);
        }
        else {
            message.title = "";
        }
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = String(object.chain);
        }
        else {
            message.chain = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.title !== undefined && (obj.title = message.title);
        message.chain !== undefined && (obj.chain = message.chain);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateTimedoutPost };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        else {
            message.title = "";
        }
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = object.chain;
        }
        else {
            message.chain = "";
        }
        return message;
    },
};
const baseMsgCreateTimedoutPostResponse = { id: 0 };
export const MsgCreateTimedoutPostResponse = {
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
            ...baseMsgCreateTimedoutPostResponse,
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
            ...baseMsgCreateTimedoutPostResponse,
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
            ...baseMsgCreateTimedoutPostResponse,
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
const baseMsgUpdateTimedoutPost = {
    creator: "",
    id: 0,
    title: "",
    chain: "",
};
export const MsgUpdateTimedoutPost = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        if (message.title !== "") {
            writer.uint32(26).string(message.title);
        }
        if (message.chain !== "") {
            writer.uint32(34).string(message.chain);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateTimedoutPost };
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
                    message.title = reader.string();
                    break;
                case 4:
                    message.chain = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUpdateTimedoutPost };
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
        if (object.title !== undefined && object.title !== null) {
            message.title = String(object.title);
        }
        else {
            message.title = "";
        }
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = String(object.chain);
        }
        else {
            message.chain = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        message.title !== undefined && (obj.title = message.title);
        message.chain !== undefined && (obj.chain = message.chain);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateTimedoutPost };
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
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        else {
            message.title = "";
        }
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = object.chain;
        }
        else {
            message.chain = "";
        }
        return message;
    },
};
const baseMsgUpdateTimedoutPostResponse = {};
export const MsgUpdateTimedoutPostResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgUpdateTimedoutPostResponse,
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
            ...baseMsgUpdateTimedoutPostResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgUpdateTimedoutPostResponse,
        };
        return message;
    },
};
const baseMsgDeleteTimedoutPost = { creator: "", id: 0 };
export const MsgDeleteTimedoutPost = {
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
        const message = { ...baseMsgDeleteTimedoutPost };
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
        const message = { ...baseMsgDeleteTimedoutPost };
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
        const message = { ...baseMsgDeleteTimedoutPost };
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
const baseMsgDeleteTimedoutPostResponse = {};
export const MsgDeleteTimedoutPostResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgDeleteTimedoutPostResponse,
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
            ...baseMsgDeleteTimedoutPostResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgDeleteTimedoutPostResponse,
        };
        return message;
    },
};
const baseMsgCreateSentPost = {
    creator: "",
    postID: "",
    title: "",
    chain: "",
};
export const MsgCreateSentPost = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.postID !== "") {
            writer.uint32(18).string(message.postID);
        }
        if (message.title !== "") {
            writer.uint32(26).string(message.title);
        }
        if (message.chain !== "") {
            writer.uint32(34).string(message.chain);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateSentPost };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.postID = reader.string();
                    break;
                case 3:
                    message.title = reader.string();
                    break;
                case 4:
                    message.chain = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateSentPost };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.postID !== undefined && object.postID !== null) {
            message.postID = String(object.postID);
        }
        else {
            message.postID = "";
        }
        if (object.title !== undefined && object.title !== null) {
            message.title = String(object.title);
        }
        else {
            message.title = "";
        }
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = String(object.chain);
        }
        else {
            message.chain = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.postID !== undefined && (obj.postID = message.postID);
        message.title !== undefined && (obj.title = message.title);
        message.chain !== undefined && (obj.chain = message.chain);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateSentPost };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.postID !== undefined && object.postID !== null) {
            message.postID = object.postID;
        }
        else {
            message.postID = "";
        }
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        else {
            message.title = "";
        }
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = object.chain;
        }
        else {
            message.chain = "";
        }
        return message;
    },
};
const baseMsgCreateSentPostResponse = { id: 0 };
export const MsgCreateSentPostResponse = {
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
            ...baseMsgCreateSentPostResponse,
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
            ...baseMsgCreateSentPostResponse,
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
            ...baseMsgCreateSentPostResponse,
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
const baseMsgUpdateSentPost = {
    creator: "",
    id: 0,
    postID: "",
    title: "",
    chain: "",
};
export const MsgUpdateSentPost = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        if (message.postID !== "") {
            writer.uint32(26).string(message.postID);
        }
        if (message.title !== "") {
            writer.uint32(34).string(message.title);
        }
        if (message.chain !== "") {
            writer.uint32(42).string(message.chain);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateSentPost };
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
                    message.postID = reader.string();
                    break;
                case 4:
                    message.title = reader.string();
                    break;
                case 5:
                    message.chain = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUpdateSentPost };
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
        if (object.postID !== undefined && object.postID !== null) {
            message.postID = String(object.postID);
        }
        else {
            message.postID = "";
        }
        if (object.title !== undefined && object.title !== null) {
            message.title = String(object.title);
        }
        else {
            message.title = "";
        }
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = String(object.chain);
        }
        else {
            message.chain = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        message.postID !== undefined && (obj.postID = message.postID);
        message.title !== undefined && (obj.title = message.title);
        message.chain !== undefined && (obj.chain = message.chain);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateSentPost };
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
        if (object.postID !== undefined && object.postID !== null) {
            message.postID = object.postID;
        }
        else {
            message.postID = "";
        }
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        else {
            message.title = "";
        }
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = object.chain;
        }
        else {
            message.chain = "";
        }
        return message;
    },
};
const baseMsgUpdateSentPostResponse = {};
export const MsgUpdateSentPostResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgUpdateSentPostResponse,
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
            ...baseMsgUpdateSentPostResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgUpdateSentPostResponse,
        };
        return message;
    },
};
const baseMsgDeleteSentPost = { creator: "", id: 0 };
export const MsgDeleteSentPost = {
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
        const message = { ...baseMsgDeleteSentPost };
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
        const message = { ...baseMsgDeleteSentPost };
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
        const message = { ...baseMsgDeleteSentPost };
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
const baseMsgDeleteSentPostResponse = {};
export const MsgDeleteSentPostResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgDeleteSentPostResponse,
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
            ...baseMsgDeleteSentPostResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgDeleteSentPostResponse,
        };
        return message;
    },
};
const baseMsgCreatePost = { creator: "", title: "", content: "" };
export const MsgCreatePost = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.title !== "") {
            writer.uint32(18).string(message.title);
        }
        if (message.content !== "") {
            writer.uint32(26).string(message.content);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreatePost };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.title = reader.string();
                    break;
                case 3:
                    message.content = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreatePost };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.title !== undefined && object.title !== null) {
            message.title = String(object.title);
        }
        else {
            message.title = "";
        }
        if (object.content !== undefined && object.content !== null) {
            message.content = String(object.content);
        }
        else {
            message.content = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.title !== undefined && (obj.title = message.title);
        message.content !== undefined && (obj.content = message.content);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreatePost };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        else {
            message.title = "";
        }
        if (object.content !== undefined && object.content !== null) {
            message.content = object.content;
        }
        else {
            message.content = "";
        }
        return message;
    },
};
const baseMsgCreatePostResponse = { id: 0 };
export const MsgCreatePostResponse = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreatePostResponse };
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
        const message = { ...baseMsgCreatePostResponse };
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
        const message = { ...baseMsgCreatePostResponse };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    },
};
const baseMsgUpdatePost = {
    creator: "",
    id: 0,
    title: "",
    content: "",
};
export const MsgUpdatePost = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        if (message.title !== "") {
            writer.uint32(26).string(message.title);
        }
        if (message.content !== "") {
            writer.uint32(34).string(message.content);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdatePost };
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
                    message.title = reader.string();
                    break;
                case 4:
                    message.content = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUpdatePost };
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
        if (object.title !== undefined && object.title !== null) {
            message.title = String(object.title);
        }
        else {
            message.title = "";
        }
        if (object.content !== undefined && object.content !== null) {
            message.content = String(object.content);
        }
        else {
            message.content = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        message.title !== undefined && (obj.title = message.title);
        message.content !== undefined && (obj.content = message.content);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdatePost };
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
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        else {
            message.title = "";
        }
        if (object.content !== undefined && object.content !== null) {
            message.content = object.content;
        }
        else {
            message.content = "";
        }
        return message;
    },
};
const baseMsgUpdatePostResponse = {};
export const MsgUpdatePostResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdatePostResponse };
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
        const message = { ...baseMsgUpdatePostResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgUpdatePostResponse };
        return message;
    },
};
const baseMsgDeletePost = { creator: "", id: 0 };
export const MsgDeletePost = {
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
        const message = { ...baseMsgDeletePost };
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
        const message = { ...baseMsgDeletePost };
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
        const message = { ...baseMsgDeletePost };
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
const baseMsgDeletePostResponse = {};
export const MsgDeletePostResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeletePostResponse };
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
        const message = { ...baseMsgDeletePostResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgDeletePostResponse };
        return message;
    },
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    SendIbcPost(request) {
        const data = MsgSendIbcPost.encode(request).finish();
        const promise = this.rpc.request("hdachmh.swapmodule.blogibc.Msg", "SendIbcPost", data);
        return promise.then((data) => MsgSendIbcPostResponse.decode(new Reader(data)));
    }
    CreateTimedoutPost(request) {
        const data = MsgCreateTimedoutPost.encode(request).finish();
        const promise = this.rpc.request("hdachmh.swapmodule.blogibc.Msg", "CreateTimedoutPost", data);
        return promise.then((data) => MsgCreateTimedoutPostResponse.decode(new Reader(data)));
    }
    UpdateTimedoutPost(request) {
        const data = MsgUpdateTimedoutPost.encode(request).finish();
        const promise = this.rpc.request("hdachmh.swapmodule.blogibc.Msg", "UpdateTimedoutPost", data);
        return promise.then((data) => MsgUpdateTimedoutPostResponse.decode(new Reader(data)));
    }
    DeleteTimedoutPost(request) {
        const data = MsgDeleteTimedoutPost.encode(request).finish();
        const promise = this.rpc.request("hdachmh.swapmodule.blogibc.Msg", "DeleteTimedoutPost", data);
        return promise.then((data) => MsgDeleteTimedoutPostResponse.decode(new Reader(data)));
    }
    CreateSentPost(request) {
        const data = MsgCreateSentPost.encode(request).finish();
        const promise = this.rpc.request("hdachmh.swapmodule.blogibc.Msg", "CreateSentPost", data);
        return promise.then((data) => MsgCreateSentPostResponse.decode(new Reader(data)));
    }
    UpdateSentPost(request) {
        const data = MsgUpdateSentPost.encode(request).finish();
        const promise = this.rpc.request("hdachmh.swapmodule.blogibc.Msg", "UpdateSentPost", data);
        return promise.then((data) => MsgUpdateSentPostResponse.decode(new Reader(data)));
    }
    DeleteSentPost(request) {
        const data = MsgDeleteSentPost.encode(request).finish();
        const promise = this.rpc.request("hdachmh.swapmodule.blogibc.Msg", "DeleteSentPost", data);
        return promise.then((data) => MsgDeleteSentPostResponse.decode(new Reader(data)));
    }
    CreatePost(request) {
        const data = MsgCreatePost.encode(request).finish();
        const promise = this.rpc.request("hdachmh.swapmodule.blogibc.Msg", "CreatePost", data);
        return promise.then((data) => MsgCreatePostResponse.decode(new Reader(data)));
    }
    UpdatePost(request) {
        const data = MsgUpdatePost.encode(request).finish();
        const promise = this.rpc.request("hdachmh.swapmodule.blogibc.Msg", "UpdatePost", data);
        return promise.then((data) => MsgUpdatePostResponse.decode(new Reader(data)));
    }
    DeletePost(request) {
        const data = MsgDeletePost.encode(request).finish();
        const promise = this.rpc.request("hdachmh.swapmodule.blogibc.Msg", "DeletePost", data);
        return promise.then((data) => MsgDeletePostResponse.decode(new Reader(data)));
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

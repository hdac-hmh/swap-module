/* eslint-disable */
import { SentPost } from "../blogibc/sentPost";
import { Post } from "../blogibc/post";
import { Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "hdachmh.swapmodule.blogibc";
const baseGenesisState = { portId: "" };
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        for (const v of message.sentPostList) {
            SentPost.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.postList) {
            Post.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.sentPostList = [];
        message.postList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 3:
                    message.sentPostList.push(SentPost.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.postList.push(Post.decode(reader, reader.uint32()));
                    break;
                case 1:
                    message.portId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGenesisState };
        message.sentPostList = [];
        message.postList = [];
        if (object.sentPostList !== undefined && object.sentPostList !== null) {
            for (const e of object.sentPostList) {
                message.sentPostList.push(SentPost.fromJSON(e));
            }
        }
        if (object.postList !== undefined && object.postList !== null) {
            for (const e of object.postList) {
                message.postList.push(Post.fromJSON(e));
            }
        }
        if (object.portId !== undefined && object.portId !== null) {
            message.portId = String(object.portId);
        }
        else {
            message.portId = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.sentPostList) {
            obj.sentPostList = message.sentPostList.map((e) => e ? SentPost.toJSON(e) : undefined);
        }
        else {
            obj.sentPostList = [];
        }
        if (message.postList) {
            obj.postList = message.postList.map((e) => e ? Post.toJSON(e) : undefined);
        }
        else {
            obj.postList = [];
        }
        message.portId !== undefined && (obj.portId = message.portId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.sentPostList = [];
        message.postList = [];
        if (object.sentPostList !== undefined && object.sentPostList !== null) {
            for (const e of object.sentPostList) {
                message.sentPostList.push(SentPost.fromPartial(e));
            }
        }
        if (object.postList !== undefined && object.postList !== null) {
            for (const e of object.postList) {
                message.postList.push(Post.fromPartial(e));
            }
        }
        if (object.portId !== undefined && object.portId !== null) {
            message.portId = object.portId;
        }
        else {
            message.portId = "";
        }
        return message;
    },
};

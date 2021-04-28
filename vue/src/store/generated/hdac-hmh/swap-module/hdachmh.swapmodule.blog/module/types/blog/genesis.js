/* eslint-disable */
import { Comment } from "../blog/comment";
import { Post } from "../blog/post";
import { Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "hdachmh.swapmodule.blog";
const baseGenesisState = {};
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        for (const v of message.commentList) {
            Comment.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.postList) {
            Post.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.commentList = [];
        message.postList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.commentList.push(Comment.decode(reader, reader.uint32()));
                    break;
                case 1:
                    message.postList.push(Post.decode(reader, reader.uint32()));
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
        message.commentList = [];
        message.postList = [];
        if (object.commentList !== undefined && object.commentList !== null) {
            for (const e of object.commentList) {
                message.commentList.push(Comment.fromJSON(e));
            }
        }
        if (object.postList !== undefined && object.postList !== null) {
            for (const e of object.postList) {
                message.postList.push(Post.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.commentList) {
            obj.commentList = message.commentList.map((e) => e ? Comment.toJSON(e) : undefined);
        }
        else {
            obj.commentList = [];
        }
        if (message.postList) {
            obj.postList = message.postList.map((e) => e ? Post.toJSON(e) : undefined);
        }
        else {
            obj.postList = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.commentList = [];
        message.postList = [];
        if (object.commentList !== undefined && object.commentList !== null) {
            for (const e of object.commentList) {
                message.commentList.push(Comment.fromPartial(e));
            }
        }
        if (object.postList !== undefined && object.postList !== null) {
            for (const e of object.postList) {
                message.postList.push(Post.fromPartial(e));
            }
        }
        return message;
    },
};

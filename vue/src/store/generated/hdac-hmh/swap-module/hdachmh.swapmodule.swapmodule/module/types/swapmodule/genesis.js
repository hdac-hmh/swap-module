/* eslint-disable */
import { Token } from "../swapmodule/Token";
import { Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "hdachmh.swapmodule.swapmodule";
const baseGenesisState = {};
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        for (const v of message.TokenList) {
            Token.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.TokenList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.TokenList.push(Token.decode(reader, reader.uint32()));
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
        message.TokenList = [];
        if (object.TokenList !== undefined && object.TokenList !== null) {
            for (const e of object.TokenList) {
                message.TokenList.push(Token.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.TokenList) {
            obj.TokenList = message.TokenList.map((e) => e ? Token.toJSON(e) : undefined);
        }
        else {
            obj.TokenList = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.TokenList = [];
        if (object.TokenList !== undefined && object.TokenList !== null) {
            for (const e of object.TokenList) {
                message.TokenList.push(Token.fromPartial(e));
            }
        }
        return message;
    },
};

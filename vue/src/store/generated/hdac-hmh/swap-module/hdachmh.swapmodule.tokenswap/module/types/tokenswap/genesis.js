/* eslint-disable */
import { SwapRequest } from "../tokenswap/SwapRequest";
import { Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "hdachmh.swapmodule.tokenswap";
const baseGenesisState = {};
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        for (const v of message.SwapRequestList) {
            SwapRequest.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.SwapRequestList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.SwapRequestList.push(SwapRequest.decode(reader, reader.uint32()));
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
        message.SwapRequestList = [];
        if (object.SwapRequestList !== undefined &&
            object.SwapRequestList !== null) {
            for (const e of object.SwapRequestList) {
                message.SwapRequestList.push(SwapRequest.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.SwapRequestList) {
            obj.SwapRequestList = message.SwapRequestList.map((e) => e ? SwapRequest.toJSON(e) : undefined);
        }
        else {
            obj.SwapRequestList = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.SwapRequestList = [];
        if (object.SwapRequestList !== undefined &&
            object.SwapRequestList !== null) {
            for (const e of object.SwapRequestList) {
                message.SwapRequestList.push(SwapRequest.fromPartial(e));
            }
        }
        return message;
    },
};

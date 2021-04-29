/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "hdachmh.swapmodule.tokenswap";

export interface SwapRequest {
  creator: string;
  id: number;
  burnTxHash: string;
  ethereumSender: string;
  receiver: string;
  amountEng: string;
  signerAddr: string;
}

const baseSwapRequest: object = {
  creator: "",
  id: 0,
  burnTxHash: "",
  ethereumSender: "",
  receiver: "",
  amountEng: "",
  signerAddr: "",
};

export const SwapRequest = {
  encode(message: SwapRequest, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): SwapRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSwapRequest } as SwapRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
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

  fromJSON(object: any): SwapRequest {
    const message = { ...baseSwapRequest } as SwapRequest;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.burnTxHash !== undefined && object.burnTxHash !== null) {
      message.burnTxHash = String(object.burnTxHash);
    } else {
      message.burnTxHash = "";
    }
    if (object.ethereumSender !== undefined && object.ethereumSender !== null) {
      message.ethereumSender = String(object.ethereumSender);
    } else {
      message.ethereumSender = "";
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = String(object.receiver);
    } else {
      message.receiver = "";
    }
    if (object.amountEng !== undefined && object.amountEng !== null) {
      message.amountEng = String(object.amountEng);
    } else {
      message.amountEng = "";
    }
    if (object.signerAddr !== undefined && object.signerAddr !== null) {
      message.signerAddr = String(object.signerAddr);
    } else {
      message.signerAddr = "";
    }
    return message;
  },

  toJSON(message: SwapRequest): unknown {
    const obj: any = {};
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

  fromPartial(object: DeepPartial<SwapRequest>): SwapRequest {
    const message = { ...baseSwapRequest } as SwapRequest;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.burnTxHash !== undefined && object.burnTxHash !== null) {
      message.burnTxHash = object.burnTxHash;
    } else {
      message.burnTxHash = "";
    }
    if (object.ethereumSender !== undefined && object.ethereumSender !== null) {
      message.ethereumSender = object.ethereumSender;
    } else {
      message.ethereumSender = "";
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    } else {
      message.receiver = "";
    }
    if (object.amountEng !== undefined && object.amountEng !== null) {
      message.amountEng = object.amountEng;
    } else {
      message.amountEng = "";
    }
    if (object.signerAddr !== undefined && object.signerAddr !== null) {
      message.signerAddr = object.signerAddr;
    } else {
      message.signerAddr = "";
    }
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}

/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "hdachmh.swapmodule.swapmodule";

export interface Token {
  creator: string;
  id: number;
  Owner: string;
  Denom: string;
  Balance: string;
}

const baseToken: object = {
  creator: "",
  id: 0,
  Owner: "",
  Denom: "",
  Balance: "",
};

export const Token = {
  encode(message: Token, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): Token {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseToken } as Token;
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

  fromJSON(object: any): Token {
    const message = { ...baseToken } as Token;
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
    if (object.Owner !== undefined && object.Owner !== null) {
      message.Owner = String(object.Owner);
    } else {
      message.Owner = "";
    }
    if (object.Denom !== undefined && object.Denom !== null) {
      message.Denom = String(object.Denom);
    } else {
      message.Denom = "";
    }
    if (object.Balance !== undefined && object.Balance !== null) {
      message.Balance = String(object.Balance);
    } else {
      message.Balance = "";
    }
    return message;
  },

  toJSON(message: Token): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.Owner !== undefined && (obj.Owner = message.Owner);
    message.Denom !== undefined && (obj.Denom = message.Denom);
    message.Balance !== undefined && (obj.Balance = message.Balance);
    return obj;
  },

  fromPartial(object: DeepPartial<Token>): Token {
    const message = { ...baseToken } as Token;
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
    if (object.Owner !== undefined && object.Owner !== null) {
      message.Owner = object.Owner;
    } else {
      message.Owner = "";
    }
    if (object.Denom !== undefined && object.Denom !== null) {
      message.Denom = object.Denom;
    } else {
      message.Denom = "";
    }
    if (object.Balance !== undefined && object.Balance !== null) {
      message.Balance = object.Balance;
    } else {
      message.Balance = "";
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

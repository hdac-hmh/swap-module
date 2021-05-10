/* eslint-disable */
import { Token } from "../tokenswap/token";
import { SwapRequest } from "../tokenswap/swap_request";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "hdachmh.swapmodule.tokenswap";

/** GenesisState defines the tokenswap module's genesis state. */
export interface GenesisState {
  /** this line is used by starport scaffolding # genesis/proto/state */
  tokenList: Token[];
  /** this line is used by starport scaffolding # genesis/proto/stateField */
  SwapRequestList: SwapRequest[];
}

const baseGenesisState: object = {};

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    for (const v of message.tokenList) {
      Token.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.SwapRequestList) {
      SwapRequest.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.tokenList = [];
    message.SwapRequestList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.tokenList.push(Token.decode(reader, reader.uint32()));
          break;
        case 1:
          message.SwapRequestList.push(
            SwapRequest.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.tokenList = [];
    message.SwapRequestList = [];
    if (object.tokenList !== undefined && object.tokenList !== null) {
      for (const e of object.tokenList) {
        message.tokenList.push(Token.fromJSON(e));
      }
    }
    if (
      object.SwapRequestList !== undefined &&
      object.SwapRequestList !== null
    ) {
      for (const e of object.SwapRequestList) {
        message.SwapRequestList.push(SwapRequest.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.tokenList) {
      obj.tokenList = message.tokenList.map((e) =>
        e ? Token.toJSON(e) : undefined
      );
    } else {
      obj.tokenList = [];
    }
    if (message.SwapRequestList) {
      obj.SwapRequestList = message.SwapRequestList.map((e) =>
        e ? SwapRequest.toJSON(e) : undefined
      );
    } else {
      obj.SwapRequestList = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.tokenList = [];
    message.SwapRequestList = [];
    if (object.tokenList !== undefined && object.tokenList !== null) {
      for (const e of object.tokenList) {
        message.tokenList.push(Token.fromPartial(e));
      }
    }
    if (
      object.SwapRequestList !== undefined &&
      object.SwapRequestList !== null
    ) {
      for (const e of object.SwapRequestList) {
        message.SwapRequestList.push(SwapRequest.fromPartial(e));
      }
    }
    return message;
  },
};

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

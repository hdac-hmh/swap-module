/* eslint-disable */
import { SwapRequest } from "../tokenswap/SwapRequest";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "hdachmh.swapmodule.tokenswap";

/** GenesisState defines the tokenswap module's genesis state. */
export interface GenesisState {
  /** this line is used by starport scaffolding # genesis/proto/state */
  SwapRequestList: SwapRequest[];
}

const baseGenesisState: object = {};

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    for (const v of message.SwapRequestList) {
      SwapRequest.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.SwapRequestList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
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
    message.SwapRequestList = [];
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
    message.SwapRequestList = [];
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
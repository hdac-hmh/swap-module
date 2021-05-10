/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "hdachmh.swapmodule.tokenswap";

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateToken {
  creator: string;
  address: string;
  coin: number;
}

export interface MsgCreateTokenResponse {
  id: number;
}

export interface MsgUpdateToken {
  creator: string;
  id: number;
  address: string;
  coin: number;
}

export interface MsgUpdateTokenResponse {}

export interface MsgDeleteToken {
  creator: string;
  id: number;
}

export interface MsgDeleteTokenResponse {}

export interface MsgCreateSwapRequest {
  creator: string;
  burnTxHash: string;
  ethereumSender: string;
  receiver: string;
  amountEng: string;
  signerAddr: string;
}

export interface MsgCreateSwapRequestResponse {
  id: number;
}

export interface MsgUpdateSwapRequest {
  creator: string;
  id: number;
  burnTxHash: string;
  ethereumSender: string;
  receiver: string;
  amountEng: string;
  signerAddr: string;
}

export interface MsgUpdateSwapRequestResponse {}

export interface MsgDeleteSwapRequest {
  creator: string;
  id: number;
}

export interface MsgDeleteSwapRequestResponse {}

const baseMsgCreateToken: object = { creator: "", address: "", coin: 0 };

export const MsgCreateToken = {
  encode(message: MsgCreateToken, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): MsgCreateToken {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateToken } as MsgCreateToken;
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

  fromJSON(object: any): MsgCreateToken {
    const message = { ...baseMsgCreateToken } as MsgCreateToken;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.coin !== undefined && object.coin !== null) {
      message.coin = Number(object.coin);
    } else {
      message.coin = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateToken): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.address !== undefined && (obj.address = message.address);
    message.coin !== undefined && (obj.coin = message.coin);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateToken>): MsgCreateToken {
    const message = { ...baseMsgCreateToken } as MsgCreateToken;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.coin !== undefined && object.coin !== null) {
      message.coin = object.coin;
    } else {
      message.coin = 0;
    }
    return message;
  },
};

const baseMsgCreateTokenResponse: object = { id: 0 };

export const MsgCreateTokenResponse = {
  encode(
    message: MsgCreateTokenResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateTokenResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateTokenResponse } as MsgCreateTokenResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateTokenResponse {
    const message = { ...baseMsgCreateTokenResponse } as MsgCreateTokenResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateTokenResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateTokenResponse>
  ): MsgCreateTokenResponse {
    const message = { ...baseMsgCreateTokenResponse } as MsgCreateTokenResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdateToken: object = { creator: "", id: 0, address: "", coin: 0 };

export const MsgUpdateToken = {
  encode(message: MsgUpdateToken, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateToken {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateToken } as MsgUpdateToken;
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

  fromJSON(object: any): MsgUpdateToken {
    const message = { ...baseMsgUpdateToken } as MsgUpdateToken;
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
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.coin !== undefined && object.coin !== null) {
      message.coin = Number(object.coin);
    } else {
      message.coin = 0;
    }
    return message;
  },

  toJSON(message: MsgUpdateToken): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.address !== undefined && (obj.address = message.address);
    message.coin !== undefined && (obj.coin = message.coin);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateToken>): MsgUpdateToken {
    const message = { ...baseMsgUpdateToken } as MsgUpdateToken;
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
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.coin !== undefined && object.coin !== null) {
      message.coin = object.coin;
    } else {
      message.coin = 0;
    }
    return message;
  },
};

const baseMsgUpdateTokenResponse: object = {};

export const MsgUpdateTokenResponse = {
  encode(_: MsgUpdateTokenResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateTokenResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateTokenResponse } as MsgUpdateTokenResponse;
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

  fromJSON(_: any): MsgUpdateTokenResponse {
    const message = { ...baseMsgUpdateTokenResponse } as MsgUpdateTokenResponse;
    return message;
  },

  toJSON(_: MsgUpdateTokenResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUpdateTokenResponse>): MsgUpdateTokenResponse {
    const message = { ...baseMsgUpdateTokenResponse } as MsgUpdateTokenResponse;
    return message;
  },
};

const baseMsgDeleteToken: object = { creator: "", id: 0 };

export const MsgDeleteToken = {
  encode(message: MsgDeleteToken, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteToken {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteToken } as MsgDeleteToken;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteToken {
    const message = { ...baseMsgDeleteToken } as MsgDeleteToken;
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
    return message;
  },

  toJSON(message: MsgDeleteToken): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteToken>): MsgDeleteToken {
    const message = { ...baseMsgDeleteToken } as MsgDeleteToken;
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
    return message;
  },
};

const baseMsgDeleteTokenResponse: object = {};

export const MsgDeleteTokenResponse = {
  encode(_: MsgDeleteTokenResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteTokenResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteTokenResponse } as MsgDeleteTokenResponse;
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

  fromJSON(_: any): MsgDeleteTokenResponse {
    const message = { ...baseMsgDeleteTokenResponse } as MsgDeleteTokenResponse;
    return message;
  },

  toJSON(_: MsgDeleteTokenResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgDeleteTokenResponse>): MsgDeleteTokenResponse {
    const message = { ...baseMsgDeleteTokenResponse } as MsgDeleteTokenResponse;
    return message;
  },
};

const baseMsgCreateSwapRequest: object = {
  creator: "",
  burnTxHash: "",
  ethereumSender: "",
  receiver: "",
  amountEng: "",
  signerAddr: "",
};

export const MsgCreateSwapRequest = {
  encode(
    message: MsgCreateSwapRequest,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): MsgCreateSwapRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateSwapRequest } as MsgCreateSwapRequest;
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

  fromJSON(object: any): MsgCreateSwapRequest {
    const message = { ...baseMsgCreateSwapRequest } as MsgCreateSwapRequest;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
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

  toJSON(message: MsgCreateSwapRequest): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.burnTxHash !== undefined && (obj.burnTxHash = message.burnTxHash);
    message.ethereumSender !== undefined &&
      (obj.ethereumSender = message.ethereumSender);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.amountEng !== undefined && (obj.amountEng = message.amountEng);
    message.signerAddr !== undefined && (obj.signerAddr = message.signerAddr);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateSwapRequest>): MsgCreateSwapRequest {
    const message = { ...baseMsgCreateSwapRequest } as MsgCreateSwapRequest;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
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

const baseMsgCreateSwapRequestResponse: object = { id: 0 };

export const MsgCreateSwapRequestResponse = {
  encode(
    message: MsgCreateSwapRequestResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateSwapRequestResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateSwapRequestResponse,
    } as MsgCreateSwapRequestResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateSwapRequestResponse {
    const message = {
      ...baseMsgCreateSwapRequestResponse,
    } as MsgCreateSwapRequestResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateSwapRequestResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateSwapRequestResponse>
  ): MsgCreateSwapRequestResponse {
    const message = {
      ...baseMsgCreateSwapRequestResponse,
    } as MsgCreateSwapRequestResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdateSwapRequest: object = {
  creator: "",
  id: 0,
  burnTxHash: "",
  ethereumSender: "",
  receiver: "",
  amountEng: "",
  signerAddr: "",
};

export const MsgUpdateSwapRequest = {
  encode(
    message: MsgUpdateSwapRequest,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateSwapRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateSwapRequest } as MsgUpdateSwapRequest;
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

  fromJSON(object: any): MsgUpdateSwapRequest {
    const message = { ...baseMsgUpdateSwapRequest } as MsgUpdateSwapRequest;
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

  toJSON(message: MsgUpdateSwapRequest): unknown {
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

  fromPartial(object: DeepPartial<MsgUpdateSwapRequest>): MsgUpdateSwapRequest {
    const message = { ...baseMsgUpdateSwapRequest } as MsgUpdateSwapRequest;
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

const baseMsgUpdateSwapRequestResponse: object = {};

export const MsgUpdateSwapRequestResponse = {
  encode(
    _: MsgUpdateSwapRequestResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateSwapRequestResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateSwapRequestResponse,
    } as MsgUpdateSwapRequestResponse;
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

  fromJSON(_: any): MsgUpdateSwapRequestResponse {
    const message = {
      ...baseMsgUpdateSwapRequestResponse,
    } as MsgUpdateSwapRequestResponse;
    return message;
  },

  toJSON(_: MsgUpdateSwapRequestResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateSwapRequestResponse>
  ): MsgUpdateSwapRequestResponse {
    const message = {
      ...baseMsgUpdateSwapRequestResponse,
    } as MsgUpdateSwapRequestResponse;
    return message;
  },
};

const baseMsgDeleteSwapRequest: object = { creator: "", id: 0 };

export const MsgDeleteSwapRequest = {
  encode(
    message: MsgDeleteSwapRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteSwapRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteSwapRequest } as MsgDeleteSwapRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteSwapRequest {
    const message = { ...baseMsgDeleteSwapRequest } as MsgDeleteSwapRequest;
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
    return message;
  },

  toJSON(message: MsgDeleteSwapRequest): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteSwapRequest>): MsgDeleteSwapRequest {
    const message = { ...baseMsgDeleteSwapRequest } as MsgDeleteSwapRequest;
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
    return message;
  },
};

const baseMsgDeleteSwapRequestResponse: object = {};

export const MsgDeleteSwapRequestResponse = {
  encode(
    _: MsgDeleteSwapRequestResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteSwapRequestResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteSwapRequestResponse,
    } as MsgDeleteSwapRequestResponse;
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

  fromJSON(_: any): MsgDeleteSwapRequestResponse {
    const message = {
      ...baseMsgDeleteSwapRequestResponse,
    } as MsgDeleteSwapRequestResponse;
    return message;
  },

  toJSON(_: MsgDeleteSwapRequestResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteSwapRequestResponse>
  ): MsgDeleteSwapRequestResponse {
    const message = {
      ...baseMsgDeleteSwapRequestResponse,
    } as MsgDeleteSwapRequestResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreateToken(request: MsgCreateToken): Promise<MsgCreateTokenResponse>;
  UpdateToken(request: MsgUpdateToken): Promise<MsgUpdateTokenResponse>;
  DeleteToken(request: MsgDeleteToken): Promise<MsgDeleteTokenResponse>;
  CreateSwapRequest(
    request: MsgCreateSwapRequest
  ): Promise<MsgCreateSwapRequestResponse>;
  UpdateSwapRequest(
    request: MsgUpdateSwapRequest
  ): Promise<MsgUpdateSwapRequestResponse>;
  DeleteSwapRequest(
    request: MsgDeleteSwapRequest
  ): Promise<MsgDeleteSwapRequestResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateToken(request: MsgCreateToken): Promise<MsgCreateTokenResponse> {
    const data = MsgCreateToken.encode(request).finish();
    const promise = this.rpc.request(
      "hdachmh.swapmodule.tokenswap.Msg",
      "CreateToken",
      data
    );
    return promise.then((data) =>
      MsgCreateTokenResponse.decode(new Reader(data))
    );
  }

  UpdateToken(request: MsgUpdateToken): Promise<MsgUpdateTokenResponse> {
    const data = MsgUpdateToken.encode(request).finish();
    const promise = this.rpc.request(
      "hdachmh.swapmodule.tokenswap.Msg",
      "UpdateToken",
      data
    );
    return promise.then((data) =>
      MsgUpdateTokenResponse.decode(new Reader(data))
    );
  }

  DeleteToken(request: MsgDeleteToken): Promise<MsgDeleteTokenResponse> {
    const data = MsgDeleteToken.encode(request).finish();
    const promise = this.rpc.request(
      "hdachmh.swapmodule.tokenswap.Msg",
      "DeleteToken",
      data
    );
    return promise.then((data) =>
      MsgDeleteTokenResponse.decode(new Reader(data))
    );
  }

  CreateSwapRequest(
    request: MsgCreateSwapRequest
  ): Promise<MsgCreateSwapRequestResponse> {
    const data = MsgCreateSwapRequest.encode(request).finish();
    const promise = this.rpc.request(
      "hdachmh.swapmodule.tokenswap.Msg",
      "CreateSwapRequest",
      data
    );
    return promise.then((data) =>
      MsgCreateSwapRequestResponse.decode(new Reader(data))
    );
  }

  UpdateSwapRequest(
    request: MsgUpdateSwapRequest
  ): Promise<MsgUpdateSwapRequestResponse> {
    const data = MsgUpdateSwapRequest.encode(request).finish();
    const promise = this.rpc.request(
      "hdachmh.swapmodule.tokenswap.Msg",
      "UpdateSwapRequest",
      data
    );
    return promise.then((data) =>
      MsgUpdateSwapRequestResponse.decode(new Reader(data))
    );
  }

  DeleteSwapRequest(
    request: MsgDeleteSwapRequest
  ): Promise<MsgDeleteSwapRequestResponse> {
    const data = MsgDeleteSwapRequest.encode(request).finish();
    const promise = this.rpc.request(
      "hdachmh.swapmodule.tokenswap.Msg",
      "DeleteSwapRequest",
      data
    );
    return promise.then((data) =>
      MsgDeleteSwapRequestResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

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

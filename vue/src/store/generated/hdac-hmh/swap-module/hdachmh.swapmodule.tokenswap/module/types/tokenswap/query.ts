/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { SwapRequest } from "../tokenswap/SwapRequest";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";

export const protobufPackage = "hdachmh.swapmodule.tokenswap";

/** this line is used by starport scaffolding # 3 */
export interface QueryGetSwapRequestRequest {
  id: number;
}

export interface QueryGetSwapRequestResponse {
  SwapRequest: SwapRequest | undefined;
}

export interface QueryAllSwapRequestRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllSwapRequestResponse {
  SwapRequest: SwapRequest[];
  pagination: PageResponse | undefined;
}

const baseQueryGetSwapRequestRequest: object = { id: 0 };

export const QueryGetSwapRequestRequest = {
  encode(
    message: QueryGetSwapRequestRequest,
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
  ): QueryGetSwapRequestRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetSwapRequestRequest,
    } as QueryGetSwapRequestRequest;
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

  fromJSON(object: any): QueryGetSwapRequestRequest {
    const message = {
      ...baseQueryGetSwapRequestRequest,
    } as QueryGetSwapRequestRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetSwapRequestRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetSwapRequestRequest>
  ): QueryGetSwapRequestRequest {
    const message = {
      ...baseQueryGetSwapRequestRequest,
    } as QueryGetSwapRequestRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetSwapRequestResponse: object = {};

export const QueryGetSwapRequestResponse = {
  encode(
    message: QueryGetSwapRequestResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.SwapRequest !== undefined) {
      SwapRequest.encode(
        message.SwapRequest,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetSwapRequestResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetSwapRequestResponse,
    } as QueryGetSwapRequestResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.SwapRequest = SwapRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetSwapRequestResponse {
    const message = {
      ...baseQueryGetSwapRequestResponse,
    } as QueryGetSwapRequestResponse;
    if (object.SwapRequest !== undefined && object.SwapRequest !== null) {
      message.SwapRequest = SwapRequest.fromJSON(object.SwapRequest);
    } else {
      message.SwapRequest = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetSwapRequestResponse): unknown {
    const obj: any = {};
    message.SwapRequest !== undefined &&
      (obj.SwapRequest = message.SwapRequest
        ? SwapRequest.toJSON(message.SwapRequest)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetSwapRequestResponse>
  ): QueryGetSwapRequestResponse {
    const message = {
      ...baseQueryGetSwapRequestResponse,
    } as QueryGetSwapRequestResponse;
    if (object.SwapRequest !== undefined && object.SwapRequest !== null) {
      message.SwapRequest = SwapRequest.fromPartial(object.SwapRequest);
    } else {
      message.SwapRequest = undefined;
    }
    return message;
  },
};

const baseQueryAllSwapRequestRequest: object = {};

export const QueryAllSwapRequestRequest = {
  encode(
    message: QueryAllSwapRequestRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllSwapRequestRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllSwapRequestRequest,
    } as QueryAllSwapRequestRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllSwapRequestRequest {
    const message = {
      ...baseQueryAllSwapRequestRequest,
    } as QueryAllSwapRequestRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllSwapRequestRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllSwapRequestRequest>
  ): QueryAllSwapRequestRequest {
    const message = {
      ...baseQueryAllSwapRequestRequest,
    } as QueryAllSwapRequestRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllSwapRequestResponse: object = {};

export const QueryAllSwapRequestResponse = {
  encode(
    message: QueryAllSwapRequestResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.SwapRequest) {
      SwapRequest.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllSwapRequestResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllSwapRequestResponse,
    } as QueryAllSwapRequestResponse;
    message.SwapRequest = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.SwapRequest.push(SwapRequest.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllSwapRequestResponse {
    const message = {
      ...baseQueryAllSwapRequestResponse,
    } as QueryAllSwapRequestResponse;
    message.SwapRequest = [];
    if (object.SwapRequest !== undefined && object.SwapRequest !== null) {
      for (const e of object.SwapRequest) {
        message.SwapRequest.push(SwapRequest.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllSwapRequestResponse): unknown {
    const obj: any = {};
    if (message.SwapRequest) {
      obj.SwapRequest = message.SwapRequest.map((e) =>
        e ? SwapRequest.toJSON(e) : undefined
      );
    } else {
      obj.SwapRequest = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllSwapRequestResponse>
  ): QueryAllSwapRequestResponse {
    const message = {
      ...baseQueryAllSwapRequestResponse,
    } as QueryAllSwapRequestResponse;
    message.SwapRequest = [];
    if (object.SwapRequest !== undefined && object.SwapRequest !== null) {
      for (const e of object.SwapRequest) {
        message.SwapRequest.push(SwapRequest.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** this line is used by starport scaffolding # 2 */
  SwapRequest(
    request: QueryGetSwapRequestRequest
  ): Promise<QueryGetSwapRequestResponse>;
  SwapRequestAll(
    request: QueryAllSwapRequestRequest
  ): Promise<QueryAllSwapRequestResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  SwapRequest(
    request: QueryGetSwapRequestRequest
  ): Promise<QueryGetSwapRequestResponse> {
    const data = QueryGetSwapRequestRequest.encode(request).finish();
    const promise = this.rpc.request(
      "hdachmh.swapmodule.tokenswap.Query",
      "SwapRequest",
      data
    );
    return promise.then((data) =>
      QueryGetSwapRequestResponse.decode(new Reader(data))
    );
  }

  SwapRequestAll(
    request: QueryAllSwapRequestRequest
  ): Promise<QueryAllSwapRequestResponse> {
    const data = QueryAllSwapRequestRequest.encode(request).finish();
    const promise = this.rpc.request(
      "hdachmh.swapmodule.tokenswap.Query",
      "SwapRequestAll",
      data
    );
    return promise.then((data) =>
      QueryAllSwapRequestResponse.decode(new Reader(data))
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

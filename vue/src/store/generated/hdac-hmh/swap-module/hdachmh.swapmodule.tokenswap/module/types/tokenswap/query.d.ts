import { Reader, Writer } from "protobufjs/minimal";
import { SwapRequest } from "../tokenswap/swap_request";
import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
export declare const protobufPackage = "hdachmh.swapmodule.tokenswap";
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
export declare const QueryGetSwapRequestRequest: {
    encode(message: QueryGetSwapRequestRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetSwapRequestRequest;
    fromJSON(object: any): QueryGetSwapRequestRequest;
    toJSON(message: QueryGetSwapRequestRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetSwapRequestRequest>): QueryGetSwapRequestRequest;
};
export declare const QueryGetSwapRequestResponse: {
    encode(message: QueryGetSwapRequestResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetSwapRequestResponse;
    fromJSON(object: any): QueryGetSwapRequestResponse;
    toJSON(message: QueryGetSwapRequestResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetSwapRequestResponse>): QueryGetSwapRequestResponse;
};
export declare const QueryAllSwapRequestRequest: {
    encode(message: QueryAllSwapRequestRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllSwapRequestRequest;
    fromJSON(object: any): QueryAllSwapRequestRequest;
    toJSON(message: QueryAllSwapRequestRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllSwapRequestRequest>): QueryAllSwapRequestRequest;
};
export declare const QueryAllSwapRequestResponse: {
    encode(message: QueryAllSwapRequestResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllSwapRequestResponse;
    fromJSON(object: any): QueryAllSwapRequestResponse;
    toJSON(message: QueryAllSwapRequestResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllSwapRequestResponse>): QueryAllSwapRequestResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** this line is used by starport scaffolding # 2 */
    SwapRequest(request: QueryGetSwapRequestRequest): Promise<QueryGetSwapRequestResponse>;
    SwapRequestAll(request: QueryAllSwapRequestRequest): Promise<QueryAllSwapRequestResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    SwapRequest(request: QueryGetSwapRequestRequest): Promise<QueryGetSwapRequestResponse>;
    SwapRequestAll(request: QueryAllSwapRequestRequest): Promise<QueryAllSwapRequestResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};

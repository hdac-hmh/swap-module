import { Reader, Writer } from "protobufjs/minimal";
import { Token } from "../tokenswap/token";
import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
import { SwapRequest } from "../tokenswap/swap_request";
export declare const protobufPackage = "hdachmh.swapmodule.tokenswap";
/** this line is used by starport scaffolding # 3 */
export interface QueryGetTokenRequest {
    id: number;
}
export interface QueryGetTokenResponse {
    Token: Token | undefined;
}
export interface QueryAllTokenRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllTokenResponse {
    Token: Token[];
    pagination: PageResponse | undefined;
}
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
export declare const QueryGetTokenRequest: {
    encode(message: QueryGetTokenRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetTokenRequest;
    fromJSON(object: any): QueryGetTokenRequest;
    toJSON(message: QueryGetTokenRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetTokenRequest>): QueryGetTokenRequest;
};
export declare const QueryGetTokenResponse: {
    encode(message: QueryGetTokenResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetTokenResponse;
    fromJSON(object: any): QueryGetTokenResponse;
    toJSON(message: QueryGetTokenResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetTokenResponse>): QueryGetTokenResponse;
};
export declare const QueryAllTokenRequest: {
    encode(message: QueryAllTokenRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllTokenRequest;
    fromJSON(object: any): QueryAllTokenRequest;
    toJSON(message: QueryAllTokenRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllTokenRequest>): QueryAllTokenRequest;
};
export declare const QueryAllTokenResponse: {
    encode(message: QueryAllTokenResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllTokenResponse;
    fromJSON(object: any): QueryAllTokenResponse;
    toJSON(message: QueryAllTokenResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllTokenResponse>): QueryAllTokenResponse;
};
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
    Token(request: QueryGetTokenRequest): Promise<QueryGetTokenResponse>;
    TokenAll(request: QueryAllTokenRequest): Promise<QueryAllTokenResponse>;
    SwapRequest(request: QueryGetSwapRequestRequest): Promise<QueryGetSwapRequestResponse>;
    SwapRequestAll(request: QueryAllSwapRequestRequest): Promise<QueryAllSwapRequestResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Token(request: QueryGetTokenRequest): Promise<QueryGetTokenResponse>;
    TokenAll(request: QueryAllTokenRequest): Promise<QueryAllTokenResponse>;
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

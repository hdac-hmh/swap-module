import { Reader, Writer } from "protobufjs/minimal";
export declare const protobufPackage = "hdachmh.swapmodule.tokenswap";
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
export interface MsgUpdateTokenResponse {
}
export interface MsgDeleteToken {
    creator: string;
    id: number;
}
export interface MsgDeleteTokenResponse {
}
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
export interface MsgUpdateSwapRequestResponse {
}
export interface MsgDeleteSwapRequest {
    creator: string;
    id: number;
}
export interface MsgDeleteSwapRequestResponse {
}
export declare const MsgCreateToken: {
    encode(message: MsgCreateToken, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateToken;
    fromJSON(object: any): MsgCreateToken;
    toJSON(message: MsgCreateToken): unknown;
    fromPartial(object: DeepPartial<MsgCreateToken>): MsgCreateToken;
};
export declare const MsgCreateTokenResponse: {
    encode(message: MsgCreateTokenResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateTokenResponse;
    fromJSON(object: any): MsgCreateTokenResponse;
    toJSON(message: MsgCreateTokenResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateTokenResponse>): MsgCreateTokenResponse;
};
export declare const MsgUpdateToken: {
    encode(message: MsgUpdateToken, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateToken;
    fromJSON(object: any): MsgUpdateToken;
    toJSON(message: MsgUpdateToken): unknown;
    fromPartial(object: DeepPartial<MsgUpdateToken>): MsgUpdateToken;
};
export declare const MsgUpdateTokenResponse: {
    encode(_: MsgUpdateTokenResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateTokenResponse;
    fromJSON(_: any): MsgUpdateTokenResponse;
    toJSON(_: MsgUpdateTokenResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateTokenResponse>): MsgUpdateTokenResponse;
};
export declare const MsgDeleteToken: {
    encode(message: MsgDeleteToken, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteToken;
    fromJSON(object: any): MsgDeleteToken;
    toJSON(message: MsgDeleteToken): unknown;
    fromPartial(object: DeepPartial<MsgDeleteToken>): MsgDeleteToken;
};
export declare const MsgDeleteTokenResponse: {
    encode(_: MsgDeleteTokenResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteTokenResponse;
    fromJSON(_: any): MsgDeleteTokenResponse;
    toJSON(_: MsgDeleteTokenResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteTokenResponse>): MsgDeleteTokenResponse;
};
export declare const MsgCreateSwapRequest: {
    encode(message: MsgCreateSwapRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateSwapRequest;
    fromJSON(object: any): MsgCreateSwapRequest;
    toJSON(message: MsgCreateSwapRequest): unknown;
    fromPartial(object: DeepPartial<MsgCreateSwapRequest>): MsgCreateSwapRequest;
};
export declare const MsgCreateSwapRequestResponse: {
    encode(message: MsgCreateSwapRequestResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateSwapRequestResponse;
    fromJSON(object: any): MsgCreateSwapRequestResponse;
    toJSON(message: MsgCreateSwapRequestResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateSwapRequestResponse>): MsgCreateSwapRequestResponse;
};
export declare const MsgUpdateSwapRequest: {
    encode(message: MsgUpdateSwapRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateSwapRequest;
    fromJSON(object: any): MsgUpdateSwapRequest;
    toJSON(message: MsgUpdateSwapRequest): unknown;
    fromPartial(object: DeepPartial<MsgUpdateSwapRequest>): MsgUpdateSwapRequest;
};
export declare const MsgUpdateSwapRequestResponse: {
    encode(_: MsgUpdateSwapRequestResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateSwapRequestResponse;
    fromJSON(_: any): MsgUpdateSwapRequestResponse;
    toJSON(_: MsgUpdateSwapRequestResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateSwapRequestResponse>): MsgUpdateSwapRequestResponse;
};
export declare const MsgDeleteSwapRequest: {
    encode(message: MsgDeleteSwapRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteSwapRequest;
    fromJSON(object: any): MsgDeleteSwapRequest;
    toJSON(message: MsgDeleteSwapRequest): unknown;
    fromPartial(object: DeepPartial<MsgDeleteSwapRequest>): MsgDeleteSwapRequest;
};
export declare const MsgDeleteSwapRequestResponse: {
    encode(_: MsgDeleteSwapRequestResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteSwapRequestResponse;
    fromJSON(_: any): MsgDeleteSwapRequestResponse;
    toJSON(_: MsgDeleteSwapRequestResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteSwapRequestResponse>): MsgDeleteSwapRequestResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /** this line is used by starport scaffolding # proto/tx/rpc */
    CreateToken(request: MsgCreateToken): Promise<MsgCreateTokenResponse>;
    UpdateToken(request: MsgUpdateToken): Promise<MsgUpdateTokenResponse>;
    DeleteToken(request: MsgDeleteToken): Promise<MsgDeleteTokenResponse>;
    CreateSwapRequest(request: MsgCreateSwapRequest): Promise<MsgCreateSwapRequestResponse>;
    UpdateSwapRequest(request: MsgUpdateSwapRequest): Promise<MsgUpdateSwapRequestResponse>;
    DeleteSwapRequest(request: MsgDeleteSwapRequest): Promise<MsgDeleteSwapRequestResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateToken(request: MsgCreateToken): Promise<MsgCreateTokenResponse>;
    UpdateToken(request: MsgUpdateToken): Promise<MsgUpdateTokenResponse>;
    DeleteToken(request: MsgDeleteToken): Promise<MsgDeleteTokenResponse>;
    CreateSwapRequest(request: MsgCreateSwapRequest): Promise<MsgCreateSwapRequestResponse>;
    UpdateSwapRequest(request: MsgUpdateSwapRequest): Promise<MsgUpdateSwapRequestResponse>;
    DeleteSwapRequest(request: MsgDeleteSwapRequest): Promise<MsgDeleteSwapRequestResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};

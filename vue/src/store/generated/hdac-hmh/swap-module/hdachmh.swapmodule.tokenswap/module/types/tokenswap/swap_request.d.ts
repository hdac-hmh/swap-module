import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "hdachmh.swapmodule.tokenswap";
export interface SwapRequest {
    creator: string;
    id: number;
    burnTxHash: string;
    ethereumSender: string;
    receiver: string;
    amountEng: string;
    signerAddr: string;
}
export declare const SwapRequest: {
    encode(message: SwapRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): SwapRequest;
    fromJSON(object: any): SwapRequest;
    toJSON(message: SwapRequest): unknown;
    fromPartial(object: DeepPartial<SwapRequest>): SwapRequest;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};

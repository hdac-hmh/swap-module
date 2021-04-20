import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "hdachmh.swapmodule.mintservice";
export interface Token {
    creator: string;
    id: number;
    Owner: string;
    Denom: string;
    Balance: string;
}
export declare const Token: {
    encode(message: Token, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Token;
    fromJSON(object: any): Token;
    toJSON(message: Token): unknown;
    fromPartial(object: DeepPartial<Token>): Token;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};

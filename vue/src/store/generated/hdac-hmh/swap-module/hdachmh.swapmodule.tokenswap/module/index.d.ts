import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateSwapRequest } from "./types/tokenswap/tx";
import { MsgDeleteToken } from "./types/tokenswap/tx";
import { MsgDeleteSwapRequest } from "./types/tokenswap/tx";
import { MsgCreateToken } from "./types/tokenswap/tx";
import { MsgUpdateToken } from "./types/tokenswap/tx";
import { MsgUpdateSwapRequest } from "./types/tokenswap/tx";
interface TxClientOptions {
    addr: string;
}
interface SignAndBroadcastOptions {
    fee: StdFee;
    memo?: string;
}
declare const txClient: (wallet: OfflineSigner, { addr: addr }?: TxClientOptions) => Promise<{
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions) => Promise<import("@cosmjs/stargate").BroadcastTxResponse>;
    msgCreateSwapRequest: (data: MsgCreateSwapRequest) => EncodeObject;
    msgDeleteToken: (data: MsgDeleteToken) => EncodeObject;
    msgDeleteSwapRequest: (data: MsgDeleteSwapRequest) => EncodeObject;
    msgCreateToken: (data: MsgCreateToken) => EncodeObject;
    msgUpdateToken: (data: MsgUpdateToken) => EncodeObject;
    msgUpdateSwapRequest: (data: MsgUpdateSwapRequest) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };

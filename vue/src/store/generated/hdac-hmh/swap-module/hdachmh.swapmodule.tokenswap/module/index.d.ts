import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgUpdateSwapRequest } from "./types/tokenswap/tx";
import { MsgDeleteSwapRequest } from "./types/tokenswap/tx";
import { MsgCreateSwapRequest } from "./types/tokenswap/tx";
interface TxClientOptions {
    addr: string;
}
interface SignAndBroadcastOptions {
    fee: StdFee;
    memo?: string;
}
declare const txClient: (wallet: OfflineSigner, { addr: addr }?: TxClientOptions) => Promise<{
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions) => Promise<import("@cosmjs/stargate").BroadcastTxResponse>;
    msgUpdateSwapRequest: (data: MsgUpdateSwapRequest) => EncodeObject;
    msgDeleteSwapRequest: (data: MsgDeleteSwapRequest) => EncodeObject;
    msgCreateSwapRequest: (data: MsgCreateSwapRequest) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };

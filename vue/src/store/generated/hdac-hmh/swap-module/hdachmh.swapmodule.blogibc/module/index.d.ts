import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgDeleteSentPost } from "./types/blogibc/tx";
import { MsgCreatePost } from "./types/blogibc/tx";
import { MsgUpdatePost } from "./types/blogibc/tx";
import { MsgUpdateSentPost } from "./types/blogibc/tx";
import { MsgCreateSentPost } from "./types/blogibc/tx";
import { MsgDeletePost } from "./types/blogibc/tx";
interface TxClientOptions {
    addr: string;
}
interface SignAndBroadcastOptions {
    fee: StdFee;
    memo?: string;
}
declare const txClient: (wallet: OfflineSigner, { addr: addr }?: TxClientOptions) => Promise<{
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions) => Promise<import("@cosmjs/stargate").BroadcastTxResponse>;
    msgDeleteSentPost: (data: MsgDeleteSentPost) => EncodeObject;
    msgCreatePost: (data: MsgCreatePost) => EncodeObject;
    msgUpdatePost: (data: MsgUpdatePost) => EncodeObject;
    msgUpdateSentPost: (data: MsgUpdateSentPost) => EncodeObject;
    msgCreateSentPost: (data: MsgCreateSentPost) => EncodeObject;
    msgDeletePost: (data: MsgDeletePost) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };

import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreatePost } from "./types/blogibc/tx";
import { MsgCreateTimedoutPost } from "./types/blogibc/tx";
import { MsgUpdateTimedoutPost } from "./types/blogibc/tx";
import { MsgUpdateSentPost } from "./types/blogibc/tx";
import { MsgSendIbcPost } from "./types/blogibc/tx";
import { MsgDeleteTimedoutPost } from "./types/blogibc/tx";
import { MsgDeletePost } from "./types/blogibc/tx";
import { MsgUpdatePost } from "./types/blogibc/tx";
import { MsgCreateSentPost } from "./types/blogibc/tx";
import { MsgDeleteSentPost } from "./types/blogibc/tx";
interface TxClientOptions {
    addr: string;
}
interface SignAndBroadcastOptions {
    fee: StdFee;
    memo?: string;
}
declare const txClient: (wallet: OfflineSigner, { addr: addr }?: TxClientOptions) => Promise<{
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions) => Promise<import("@cosmjs/stargate").BroadcastTxResponse>;
    msgCreatePost: (data: MsgCreatePost) => EncodeObject;
    msgCreateTimedoutPost: (data: MsgCreateTimedoutPost) => EncodeObject;
    msgUpdateTimedoutPost: (data: MsgUpdateTimedoutPost) => EncodeObject;
    msgUpdateSentPost: (data: MsgUpdateSentPost) => EncodeObject;
    msgSendIbcPost: (data: MsgSendIbcPost) => EncodeObject;
    msgDeleteTimedoutPost: (data: MsgDeleteTimedoutPost) => EncodeObject;
    msgDeletePost: (data: MsgDeletePost) => EncodeObject;
    msgUpdatePost: (data: MsgUpdatePost) => EncodeObject;
    msgCreateSentPost: (data: MsgCreateSentPost) => EncodeObject;
    msgDeleteSentPost: (data: MsgDeleteSentPost) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };

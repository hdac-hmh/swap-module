// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgDeleteTimedoutPost } from "./types/blogibc/tx";
import { MsgCreatePost } from "./types/blogibc/tx";
import { MsgSendIbcPost } from "./types/blogibc/tx";
import { MsgUpdateSentPost } from "./types/blogibc/tx";
import { MsgUpdateTimedoutPost } from "./types/blogibc/tx";
import { MsgCreateTimedoutPost } from "./types/blogibc/tx";
import { MsgDeleteSentPost } from "./types/blogibc/tx";
import { MsgUpdatePost } from "./types/blogibc/tx";
import { MsgCreateSentPost } from "./types/blogibc/tx";
import { MsgDeletePost } from "./types/blogibc/tx";
const types = [
    ["/hdachmh.swapmodule.blogibc.MsgDeleteTimedoutPost", MsgDeleteTimedoutPost],
    ["/hdachmh.swapmodule.blogibc.MsgCreatePost", MsgCreatePost],
    ["/hdachmh.swapmodule.blogibc.MsgSendIbcPost", MsgSendIbcPost],
    ["/hdachmh.swapmodule.blogibc.MsgUpdateSentPost", MsgUpdateSentPost],
    ["/hdachmh.swapmodule.blogibc.MsgUpdateTimedoutPost", MsgUpdateTimedoutPost],
    ["/hdachmh.swapmodule.blogibc.MsgCreateTimedoutPost", MsgCreateTimedoutPost],
    ["/hdachmh.swapmodule.blogibc.MsgDeleteSentPost", MsgDeleteSentPost],
    ["/hdachmh.swapmodule.blogibc.MsgUpdatePost", MsgUpdatePost],
    ["/hdachmh.swapmodule.blogibc.MsgCreateSentPost", MsgCreateSentPost],
    ["/hdachmh.swapmodule.blogibc.MsgDeletePost", MsgDeletePost],
];
const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw new Error("wallet is required");
    const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee = defaultFee, memo = null }) => memo ? client.signAndBroadcast(address, msgs, fee, memo) : client.signAndBroadcast(address, msgs, fee),
        msgDeleteTimedoutPost: (data) => ({ typeUrl: "/hdachmh.swapmodule.blogibc.MsgDeleteTimedoutPost", value: data }),
        msgCreatePost: (data) => ({ typeUrl: "/hdachmh.swapmodule.blogibc.MsgCreatePost", value: data }),
        msgSendIbcPost: (data) => ({ typeUrl: "/hdachmh.swapmodule.blogibc.MsgSendIbcPost", value: data }),
        msgUpdateSentPost: (data) => ({ typeUrl: "/hdachmh.swapmodule.blogibc.MsgUpdateSentPost", value: data }),
        msgUpdateTimedoutPost: (data) => ({ typeUrl: "/hdachmh.swapmodule.blogibc.MsgUpdateTimedoutPost", value: data }),
        msgCreateTimedoutPost: (data) => ({ typeUrl: "/hdachmh.swapmodule.blogibc.MsgCreateTimedoutPost", value: data }),
        msgDeleteSentPost: (data) => ({ typeUrl: "/hdachmh.swapmodule.blogibc.MsgDeleteSentPost", value: data }),
        msgUpdatePost: (data) => ({ typeUrl: "/hdachmh.swapmodule.blogibc.MsgUpdatePost", value: data }),
        msgCreateSentPost: (data) => ({ typeUrl: "/hdachmh.swapmodule.blogibc.MsgCreateSentPost", value: data }),
        msgDeletePost: (data) => ({ typeUrl: "/hdachmh.swapmodule.blogibc.MsgDeletePost", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };

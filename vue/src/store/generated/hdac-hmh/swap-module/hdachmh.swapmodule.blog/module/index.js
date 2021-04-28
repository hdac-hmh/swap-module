// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgDeletePost } from "./types/blog/tx";
import { MsgCreatePost } from "./types/blog/tx";
import { MsgCreateComment } from "./types/blog/tx";
import { MsgUpdateComment } from "./types/blog/tx";
import { MsgDeleteComment } from "./types/blog/tx";
import { MsgUpdatePost } from "./types/blog/tx";
const types = [
    ["/hdachmh.swapmodule.blog.MsgDeletePost", MsgDeletePost],
    ["/hdachmh.swapmodule.blog.MsgCreatePost", MsgCreatePost],
    ["/hdachmh.swapmodule.blog.MsgCreateComment", MsgCreateComment],
    ["/hdachmh.swapmodule.blog.MsgUpdateComment", MsgUpdateComment],
    ["/hdachmh.swapmodule.blog.MsgDeleteComment", MsgDeleteComment],
    ["/hdachmh.swapmodule.blog.MsgUpdatePost", MsgUpdatePost],
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
        msgDeletePost: (data) => ({ typeUrl: "/hdachmh.swapmodule.blog.MsgDeletePost", value: data }),
        msgCreatePost: (data) => ({ typeUrl: "/hdachmh.swapmodule.blog.MsgCreatePost", value: data }),
        msgCreateComment: (data) => ({ typeUrl: "/hdachmh.swapmodule.blog.MsgCreateComment", value: data }),
        msgUpdateComment: (data) => ({ typeUrl: "/hdachmh.swapmodule.blog.MsgUpdateComment", value: data }),
        msgDeleteComment: (data) => ({ typeUrl: "/hdachmh.swapmodule.blog.MsgDeleteComment", value: data }),
        msgUpdatePost: (data) => ({ typeUrl: "/hdachmh.swapmodule.blog.MsgUpdatePost", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };

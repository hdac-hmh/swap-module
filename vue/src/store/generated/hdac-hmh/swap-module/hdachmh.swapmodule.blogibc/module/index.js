// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreatePost } from "./types/blogibc/tx";
import { MsgDeletePost } from "./types/blogibc/tx";
import { MsgUpdatePost } from "./types/blogibc/tx";
const types = [
    ["/hdachmh.swapmodule.blogibc.MsgCreatePost", MsgCreatePost],
    ["/hdachmh.swapmodule.blogibc.MsgDeletePost", MsgDeletePost],
    ["/hdachmh.swapmodule.blogibc.MsgUpdatePost", MsgUpdatePost],
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
        msgCreatePost: (data) => ({ typeUrl: "/hdachmh.swapmodule.blogibc.MsgCreatePost", value: data }),
        msgDeletePost: (data) => ({ typeUrl: "/hdachmh.swapmodule.blogibc.MsgDeletePost", value: data }),
        msgUpdatePost: (data) => ({ typeUrl: "/hdachmh.swapmodule.blogibc.MsgUpdatePost", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };

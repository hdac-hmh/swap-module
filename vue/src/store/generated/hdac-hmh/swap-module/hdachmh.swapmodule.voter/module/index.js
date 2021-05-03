// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgDeletePoll } from "./types/voter/tx";
import { MsgCreateVote } from "./types/voter/tx";
import { MsgUpdateVote } from "./types/voter/tx";
import { MsgCreatePoll } from "./types/voter/tx";
import { MsgUpdatePoll } from "./types/voter/tx";
import { MsgDeleteVote } from "./types/voter/tx";
const types = [
    ["/hdachmh.swapmodule.voter.MsgDeletePoll", MsgDeletePoll],
    ["/hdachmh.swapmodule.voter.MsgCreateVote", MsgCreateVote],
    ["/hdachmh.swapmodule.voter.MsgUpdateVote", MsgUpdateVote],
    ["/hdachmh.swapmodule.voter.MsgCreatePoll", MsgCreatePoll],
    ["/hdachmh.swapmodule.voter.MsgUpdatePoll", MsgUpdatePoll],
    ["/hdachmh.swapmodule.voter.MsgDeleteVote", MsgDeleteVote],
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
        msgDeletePoll: (data) => ({ typeUrl: "/hdachmh.swapmodule.voter.MsgDeletePoll", value: data }),
        msgCreateVote: (data) => ({ typeUrl: "/hdachmh.swapmodule.voter.MsgCreateVote", value: data }),
        msgUpdateVote: (data) => ({ typeUrl: "/hdachmh.swapmodule.voter.MsgUpdateVote", value: data }),
        msgCreatePoll: (data) => ({ typeUrl: "/hdachmh.swapmodule.voter.MsgCreatePoll", value: data }),
        msgUpdatePoll: (data) => ({ typeUrl: "/hdachmh.swapmodule.voter.MsgUpdatePoll", value: data }),
        msgDeleteVote: (data) => ({ typeUrl: "/hdachmh.swapmodule.voter.MsgDeleteVote", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };

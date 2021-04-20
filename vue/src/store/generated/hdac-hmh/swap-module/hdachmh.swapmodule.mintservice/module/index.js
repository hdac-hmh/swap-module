// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateToken } from "./types/mintservice/tx";
import { MsgUpdateToken } from "./types/mintservice/tx";
import { MsgDeleteToken } from "./types/mintservice/tx";
const types = [
    ["/hdachmh.swapmodule.mintservice.MsgCreateToken", MsgCreateToken],
    ["/hdachmh.swapmodule.mintservice.MsgUpdateToken", MsgUpdateToken],
    ["/hdachmh.swapmodule.mintservice.MsgDeleteToken", MsgDeleteToken],
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
        msgCreateToken: (data) => ({ typeUrl: "/hdachmh.swapmodule.mintservice.MsgCreateToken", value: data }),
        msgUpdateToken: (data) => ({ typeUrl: "/hdachmh.swapmodule.mintservice.MsgUpdateToken", value: data }),
        msgDeleteToken: (data) => ({ typeUrl: "/hdachmh.swapmodule.mintservice.MsgDeleteToken", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };

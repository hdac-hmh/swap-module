// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateToken } from "./types/swapmodule/tx";
import { MsgUpdateToken } from "./types/swapmodule/tx";
import { MsgDeleteToken } from "./types/swapmodule/tx";
const types = [
    ["/hdachmh.swapmodule.swapmodule.MsgCreateToken", MsgCreateToken],
    ["/hdachmh.swapmodule.swapmodule.MsgUpdateToken", MsgUpdateToken],
    ["/hdachmh.swapmodule.swapmodule.MsgDeleteToken", MsgDeleteToken],
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
        msgCreateToken: (data) => ({ typeUrl: "/hdachmh.swapmodule.swapmodule.MsgCreateToken", value: data }),
        msgUpdateToken: (data) => ({ typeUrl: "/hdachmh.swapmodule.swapmodule.MsgUpdateToken", value: data }),
        msgDeleteToken: (data) => ({ typeUrl: "/hdachmh.swapmodule.swapmodule.MsgDeleteToken", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };

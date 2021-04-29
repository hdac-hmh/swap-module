// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgUpdateSwapRequest } from "./types/tokenswap/tx";
import { MsgCreateSwapRequest } from "./types/tokenswap/tx";
import { MsgDeleteSwapRequest } from "./types/tokenswap/tx";
const types = [
    ["/hdachmh.swapmodule.tokenswap.MsgUpdateSwapRequest", MsgUpdateSwapRequest],
    ["/hdachmh.swapmodule.tokenswap.MsgCreateSwapRequest", MsgCreateSwapRequest],
    ["/hdachmh.swapmodule.tokenswap.MsgDeleteSwapRequest", MsgDeleteSwapRequest],
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
        msgUpdateSwapRequest: (data) => ({ typeUrl: "/hdachmh.swapmodule.tokenswap.MsgUpdateSwapRequest", value: data }),
        msgCreateSwapRequest: (data) => ({ typeUrl: "/hdachmh.swapmodule.tokenswap.MsgCreateSwapRequest", value: data }),
        msgDeleteSwapRequest: (data) => ({ typeUrl: "/hdachmh.swapmodule.tokenswap.MsgDeleteSwapRequest", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };

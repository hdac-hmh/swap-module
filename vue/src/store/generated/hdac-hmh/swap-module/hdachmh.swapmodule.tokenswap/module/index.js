// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateSwapRequest } from "./types/tokenswap/tx";
import { MsgDeleteToken } from "./types/tokenswap/tx";
import { MsgDeleteSwapRequest } from "./types/tokenswap/tx";
import { MsgCreateToken } from "./types/tokenswap/tx";
import { MsgUpdateToken } from "./types/tokenswap/tx";
import { MsgUpdateSwapRequest } from "./types/tokenswap/tx";
const types = [
    ["/hdachmh.swapmodule.tokenswap.MsgCreateSwapRequest", MsgCreateSwapRequest],
    ["/hdachmh.swapmodule.tokenswap.MsgDeleteToken", MsgDeleteToken],
    ["/hdachmh.swapmodule.tokenswap.MsgDeleteSwapRequest", MsgDeleteSwapRequest],
    ["/hdachmh.swapmodule.tokenswap.MsgCreateToken", MsgCreateToken],
    ["/hdachmh.swapmodule.tokenswap.MsgUpdateToken", MsgUpdateToken],
    ["/hdachmh.swapmodule.tokenswap.MsgUpdateSwapRequest", MsgUpdateSwapRequest],
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
        msgCreateSwapRequest: (data) => ({ typeUrl: "/hdachmh.swapmodule.tokenswap.MsgCreateSwapRequest", value: data }),
        msgDeleteToken: (data) => ({ typeUrl: "/hdachmh.swapmodule.tokenswap.MsgDeleteToken", value: data }),
        msgDeleteSwapRequest: (data) => ({ typeUrl: "/hdachmh.swapmodule.tokenswap.MsgDeleteSwapRequest", value: data }),
        msgCreateToken: (data) => ({ typeUrl: "/hdachmh.swapmodule.tokenswap.MsgCreateToken", value: data }),
        msgUpdateToken: (data) => ({ typeUrl: "/hdachmh.swapmodule.tokenswap.MsgUpdateToken", value: data }),
        msgUpdateSwapRequest: (data) => ({ typeUrl: "/hdachmh.swapmodule.tokenswap.MsgUpdateSwapRequest", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };

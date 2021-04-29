// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgUpdateSwapRequest } from "./types/tokenswap/tx";
import { MsgDeleteSwapRequest } from "./types/tokenswap/tx";
import { MsgCreateSwapRequest } from "./types/tokenswap/tx";


const types = [
  ["/hdachmh.swapmodule.tokenswap.MsgUpdateSwapRequest", MsgUpdateSwapRequest],
  ["/hdachmh.swapmodule.tokenswap.MsgDeleteSwapRequest", MsgDeleteSwapRequest],
  ["/hdachmh.swapmodule.tokenswap.MsgCreateSwapRequest", MsgCreateSwapRequest],
  
];

const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw new Error("wallet is required");

  const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee=defaultFee, memo=null }: SignAndBroadcastOptions) => memo?client.signAndBroadcast(address, msgs, fee,memo):client.signAndBroadcast(address, msgs, fee),
    msgUpdateSwapRequest: (data: MsgUpdateSwapRequest): EncodeObject => ({ typeUrl: "/hdachmh.swapmodule.tokenswap.MsgUpdateSwapRequest", value: data }),
    msgDeleteSwapRequest: (data: MsgDeleteSwapRequest): EncodeObject => ({ typeUrl: "/hdachmh.swapmodule.tokenswap.MsgDeleteSwapRequest", value: data }),
    msgCreateSwapRequest: (data: MsgCreateSwapRequest): EncodeObject => ({ typeUrl: "/hdachmh.swapmodule.tokenswap.MsgCreateSwapRequest", value: data }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
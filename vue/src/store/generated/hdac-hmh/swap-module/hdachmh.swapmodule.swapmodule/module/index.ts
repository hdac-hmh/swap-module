// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateToken } from "./types/swapmodule/tx";
import { MsgUpdateToken } from "./types/swapmodule/tx";
import { MsgDeleteToken } from "./types/swapmodule/tx";


const types = [
  ["/hdachmh.swapmodule.swapmodule.MsgCreateToken", MsgCreateToken],
  ["/hdachmh.swapmodule.swapmodule.MsgUpdateToken", MsgUpdateToken],
  ["/hdachmh.swapmodule.swapmodule.MsgDeleteToken", MsgDeleteToken],
  
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
    msgCreateToken: (data: MsgCreateToken): EncodeObject => ({ typeUrl: "/hdachmh.swapmodule.swapmodule.MsgCreateToken", value: data }),
    msgUpdateToken: (data: MsgUpdateToken): EncodeObject => ({ typeUrl: "/hdachmh.swapmodule.swapmodule.MsgUpdateToken", value: data }),
    msgDeleteToken: (data: MsgDeleteToken): EncodeObject => ({ typeUrl: "/hdachmh.swapmodule.swapmodule.MsgDeleteToken", value: data }),
    
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

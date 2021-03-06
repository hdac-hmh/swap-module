// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreatePoll } from "./types/voter/tx";
import { MsgDeletePoll } from "./types/voter/tx";
import { MsgCreateVote } from "./types/voter/tx";
import { MsgUpdateVote } from "./types/voter/tx";
import { MsgUpdatePoll } from "./types/voter/tx";
import { MsgDeleteVote } from "./types/voter/tx";


const types = [
  ["/hdachmh.swapmodule.voter.MsgCreatePoll", MsgCreatePoll],
  ["/hdachmh.swapmodule.voter.MsgDeletePoll", MsgDeletePoll],
  ["/hdachmh.swapmodule.voter.MsgCreateVote", MsgCreateVote],
  ["/hdachmh.swapmodule.voter.MsgUpdateVote", MsgUpdateVote],
  ["/hdachmh.swapmodule.voter.MsgUpdatePoll", MsgUpdatePoll],
  ["/hdachmh.swapmodule.voter.MsgDeleteVote", MsgDeleteVote],
  
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
    msgCreatePoll: (data: MsgCreatePoll): EncodeObject => ({ typeUrl: "/hdachmh.swapmodule.voter.MsgCreatePoll", value: data }),
    msgDeletePoll: (data: MsgDeletePoll): EncodeObject => ({ typeUrl: "/hdachmh.swapmodule.voter.MsgDeletePoll", value: data }),
    msgCreateVote: (data: MsgCreateVote): EncodeObject => ({ typeUrl: "/hdachmh.swapmodule.voter.MsgCreateVote", value: data }),
    msgUpdateVote: (data: MsgUpdateVote): EncodeObject => ({ typeUrl: "/hdachmh.swapmodule.voter.MsgUpdateVote", value: data }),
    msgUpdatePoll: (data: MsgUpdatePoll): EncodeObject => ({ typeUrl: "/hdachmh.swapmodule.voter.MsgUpdatePoll", value: data }),
    msgDeleteVote: (data: MsgDeleteVote): EncodeObject => ({ typeUrl: "/hdachmh.swapmodule.voter.MsgDeleteVote", value: data }),
    
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

package cli

import (
	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/hdac-hmh/swap-module/x/tokenswap/types"
)

func CmdRequestTokenSwap() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "request-tokenswap [burnTxHash] [burnTokenSender] [mintReceiver] [mintTokenAmount] [signerAddr]",
		Short: "Request token swap",
		Args:  cobra.ExactArgs(5),
		RunE: func(cmd *cobra.Command, args []string) error {
			argsBurnTxHash := string(args[0])
			argsEthereumSender := string(args[1])
			argsReceiver := string(args[2])
			argsAmountEng := string(args[3])
			argsSignerAddr := string(args[4])

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateSwapRequest(clientCtx.GetFromAddress().String(), string(argsBurnTxHash), string(argsEthereumSender), string(argsReceiver), string(argsAmountEng), string(argsSignerAddr))
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

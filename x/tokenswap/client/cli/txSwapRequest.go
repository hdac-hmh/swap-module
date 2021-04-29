package cli

import (
	"strconv"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/hdac-hmh/swap-module/x/tokenswap/types"
)

func CmdCreateSwapRequest() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-SwapRequest [burnTxHash] [ethereumSender] [receiver] [amountEng] [signerAddr]",
		Short: "Creates a new SwapRequest",
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

func CmdUpdateSwapRequest() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-SwapRequest [id] [burnTxHash] [ethereumSender] [receiver] [amountEng] [signerAddr]",
		Short: "Update a SwapRequest",
		Args:  cobra.ExactArgs(6),
		RunE: func(cmd *cobra.Command, args []string) error {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			argsBurnTxHash := string(args[1])
			argsEthereumSender := string(args[2])
			argsReceiver := string(args[3])
			argsAmountEng := string(args[4])
			argsSignerAddr := string(args[5])

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateSwapRequest(clientCtx.GetFromAddress().String(), id, string(argsBurnTxHash), string(argsEthereumSender), string(argsReceiver), string(argsAmountEng), string(argsSignerAddr))
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteSwapRequest() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-SwapRequest [id] [burnTxHash] [ethereumSender] [receiver] [amountEng] [signerAddr]",
		Short: "Delete a SwapRequest by id",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteSwapRequest(clientCtx.GetFromAddress().String(), id)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

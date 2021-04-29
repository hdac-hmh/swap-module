package cli

import (
	"context"
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/hdac-hmh/swap-module/x/tokenswap/types"
	"github.com/spf13/cobra"
)

func CmdListSwapRequest() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-SwapRequest",
		Short: "list all SwapRequest",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllSwapRequestRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.SwapRequestAll(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdShowSwapRequest() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-SwapRequest [id]",
		Short: "shows a SwapRequest",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			params := &types.QueryGetSwapRequestRequest{
				Id: id,
			}

			res, err := queryClient.SwapRequest(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/hdac-hmh/swap-module/x/tokenswap/types"
)

func (k msgServer) CreateSwapRequest(goCtx context.Context, msg *types.MsgCreateSwapRequest) (*types.MsgCreateSwapRequestResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	id := k.AppendSwapRequest(
		ctx,
		msg.Creator,
		msg.BurnTxHash,
		msg.EthereumSender,
		msg.Receiver,
		msg.AmountEng,
		msg.SignerAddr,
	)

	return &types.MsgCreateSwapRequestResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateSwapRequest(goCtx context.Context, msg *types.MsgUpdateSwapRequest) (*types.MsgUpdateSwapRequestResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var SwapRequest = types.SwapRequest{
		Creator:        msg.Creator,
		Id:             msg.Id,
		BurnTxHash:     msg.BurnTxHash,
		EthereumSender: msg.EthereumSender,
		Receiver:       msg.Receiver,
		AmountEng:      msg.AmountEng,
		SignerAddr:     msg.SignerAddr,
	}

	// Checks that the element exists
	if !k.HasSwapRequest(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != k.GetSwapRequestOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetSwapRequest(ctx, SwapRequest)

	return &types.MsgUpdateSwapRequestResponse{}, nil
}

func (k msgServer) DeleteSwapRequest(goCtx context.Context, msg *types.MsgDeleteSwapRequest) (*types.MsgDeleteSwapRequestResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if !k.HasSwapRequest(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}
	if msg.Creator != k.GetSwapRequestOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveSwapRequest(ctx, msg.Id)

	return &types.MsgDeleteSwapRequestResponse{}, nil
}

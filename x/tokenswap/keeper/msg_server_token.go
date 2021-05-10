package keeper

import (
    "fmt"
	"context"

    "github.com/hdac-hmh/swap-module/x/tokenswap/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)


func (k msgServer) CreateToken(goCtx context.Context,  msg *types.MsgCreateToken) (*types.MsgCreateTokenResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

    id := k.AppendToken(
        ctx,
        msg.Creator,
        msg.Address,
        msg.Coin,
    )

	return &types.MsgCreateTokenResponse{
	    Id: id,
	}, nil
}

func (k msgServer) UpdateToken(goCtx context.Context,  msg *types.MsgUpdateToken) (*types.MsgUpdateTokenResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

    var token = types.Token{
		Creator: msg.Creator,
		Id:      msg.Id,
    	Address: msg.Address,
    	Coin: msg.Coin,
	}

    // Checks that the element exists
    if !k.HasToken(ctx, msg.Id) {
        return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
    }

    // Checks if the the msg sender is the same as the current owner
    if msg.Creator != k.GetTokenOwner(ctx, msg.Id) {
        return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
    }

	k.SetToken(ctx, token)

	return &types.MsgUpdateTokenResponse{}, nil
}

func (k msgServer) DeleteToken(goCtx context.Context,  msg *types.MsgDeleteToken) (*types.MsgDeleteTokenResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

    if !k.HasToken(ctx, msg.Id) {
        return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
    }
    if msg.Creator != k.GetTokenOwner(ctx, msg.Id) {
        return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
    }

	k.RemoveToken(ctx, msg.Id)

	return &types.MsgDeleteTokenResponse{}, nil
}

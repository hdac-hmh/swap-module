package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/hdac-hmh/swap-module/x/tokenswap/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) SwapRequestAll(c context.Context, req *types.QueryAllSwapRequestRequest) (*types.QueryAllSwapRequestResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var SwapRequests []*types.SwapRequest
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	SwapRequestStore := prefix.NewStore(store, types.KeyPrefix(types.SwapRequestKey))

	pageRes, err := query.Paginate(SwapRequestStore, req.Pagination, func(key []byte, value []byte) error {
		var SwapRequest types.SwapRequest
		if err := k.cdc.UnmarshalBinaryBare(value, &SwapRequest); err != nil {
			return err
		}

		SwapRequests = append(SwapRequests, &SwapRequest)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllSwapRequestResponse{SwapRequest: SwapRequests, Pagination: pageRes}, nil
}

func (k Keeper) SwapRequest(c context.Context, req *types.QueryGetSwapRequestRequest) (*types.QueryGetSwapRequestResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var SwapRequest types.SwapRequest
	ctx := sdk.UnwrapSDKContext(c)

	if !k.HasSwapRequest(ctx, req.Id) {
		return nil, sdkerrors.ErrKeyNotFound
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SwapRequestKey))
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetSwapRequestIDBytes(req.Id)), &SwapRequest)

	return &types.QueryGetSwapRequestResponse{SwapRequest: &SwapRequest}, nil
}

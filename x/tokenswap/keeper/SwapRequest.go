package keeper

import (
	"encoding/binary"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/hdac-hmh/swap-module/x/tokenswap/types"
	"strconv"
)

// GetSwapRequestCount get the total number of SwapRequest
func (k Keeper) GetSwapRequestCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SwapRequestCountKey))
	byteKey := types.KeyPrefix(types.SwapRequestCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	count, err := strconv.ParseUint(string(bz), 10, 64)
	if err != nil {
		// Panic because the count should be always formattable to iint64
		panic("cannot decode count")
	}

	return count
}

// SetSwapRequestCount set the total number of SwapRequest
func (k Keeper) SetSwapRequestCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SwapRequestCountKey))
	byteKey := types.KeyPrefix(types.SwapRequestCountKey)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}

// AppendSwapRequest appends a SwapRequest in the store with a new id and update the count
func (k Keeper) AppendSwapRequest(
	ctx sdk.Context,
	creator string,
	burnTxHash string,
	ethereumSender string,
	receiver string,
	amountEng string,
	signerAddr string,
) uint64 {
	// Create the SwapRequest
	count := k.GetSwapRequestCount(ctx)
	var SwapRequest = types.SwapRequest{
		Creator:        creator,
		Id:             count,
		BurnTxHash:     burnTxHash,
		EthereumSender: ethereumSender,
		Receiver:       receiver,
		AmountEng:      amountEng,
		SignerAddr:     signerAddr,
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SwapRequestKey))
	value := k.cdc.MustMarshalBinaryBare(&SwapRequest)
	store.Set(GetSwapRequestIDBytes(SwapRequest.Id), value)

	// Update SwapRequest count
	k.SetSwapRequestCount(ctx, count+1)

	return count
}

// SetSwapRequest set a specific SwapRequest in the store
func (k Keeper) SetSwapRequest(ctx sdk.Context, SwapRequest types.SwapRequest) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SwapRequestKey))
	b := k.cdc.MustMarshalBinaryBare(&SwapRequest)
	store.Set(GetSwapRequestIDBytes(SwapRequest.Id), b)
}

// GetSwapRequest returns a SwapRequest from its id
func (k Keeper) GetSwapRequest(ctx sdk.Context, id uint64) types.SwapRequest {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SwapRequestKey))
	var SwapRequest types.SwapRequest
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetSwapRequestIDBytes(id)), &SwapRequest)
	return SwapRequest
}

// HasSwapRequest checks if the SwapRequest exists in the store
func (k Keeper) HasSwapRequest(ctx sdk.Context, id uint64) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SwapRequestKey))
	return store.Has(GetSwapRequestIDBytes(id))
}

// GetSwapRequestOwner returns the creator of the SwapRequest
func (k Keeper) GetSwapRequestOwner(ctx sdk.Context, id uint64) string {
	return k.GetSwapRequest(ctx, id).Creator
}

// RemoveSwapRequest removes a SwapRequest from the store
func (k Keeper) RemoveSwapRequest(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SwapRequestKey))
	store.Delete(GetSwapRequestIDBytes(id))
}

// GetAllSwapRequest returns all SwapRequest
func (k Keeper) GetAllSwapRequest(ctx sdk.Context) (list []types.SwapRequest) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SwapRequestKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.SwapRequest
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetSwapRequestIDBytes returns the byte representation of the ID
func GetSwapRequestIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetSwapRequestIDFromBytes returns ID in uint64 format from a byte array
func GetSwapRequestIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}

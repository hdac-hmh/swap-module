package keeper

import (
	"fmt"

	"github.com/tendermint/tendermint/libs/log"

	"github.com/cosmos/cosmos-sdk/codec"
	sdk "github.com/cosmos/cosmos-sdk/types"
	paramstypes "github.com/cosmos/cosmos-sdk/x/params/types"
	"github.com/hdac-hmh/swap-module/x/minter/types"
	// this line is used by starport scaffolding # ibc/keeper/import
)

type (
	Keeper struct {
		cdc      codec.Marshaler
		storeKey sdk.StoreKey
		// this line is used by starport scaffolding # ibc/keeper/attribute
		tokenKeeper types.TokenKeeper
		paramSpace  paramstypes.Subspace
	}
)

func NewKeeper(
	cdc codec.Marshaler,
	storeKey sdk.StoreKey,
	// this line is used by starport scaffolding # ibc/keeper/parameter
	tokenKeeper types.TokenKeeper,
	paramSpace paramstypes.Subspace,
) *Keeper {
	if !paramSpace.HasKeyTable() {
		paramSpace = paramSpace.WithKeyTable(ParamKeyTable())
	}
	return &Keeper{
		cdc:      cdc,
		storeKey: storeKey,
		// this line is used by starport scaffolding # ibc/keeper/return
		tokenKeeper: tokenKeeper,
		paramSpace:  paramSpace,
	}
}

func (k Keeper) Logger(ctx sdk.Context) log.Logger {
	return ctx.Logger().With("module", fmt.Sprintf("x/%s", types.ModuleName))
}

// Mint mints the base native token by the specified amount
func (k Keeper) Mint(ctx sdk.Context, amount uint64, recipient sdk.AccAddress) error {
	// get mint denom param
	mintDenom := k.MintDenom(ctx)

	// NOTE: empty owner
	owner := sdk.AccAddress{}

	return k.tokenKeeper.MintToken(ctx, mintDenom, amount, recipient, owner)
}

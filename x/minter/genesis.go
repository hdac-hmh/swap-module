package minter

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/hdac-hmh/swap-module/x/minter/keeper"
	"github.com/hdac-hmh/swap-module/x/minter/types"
	abci "github.com/tendermint/tendermint/abci/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, data types.GenesisState) (res []abci.ValidatorUpdate) {
	// this line is used by starport scaffolding # genesis/module/init
	if err := types.ValidateGenesis(data); err != nil {
		panic(err.Error())
	}

	k.SetParams(ctx, data.Params)

	return nil
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	//genesis := types.DefaultGenesis()

	// this line is used by starport scaffolding # genesis/module/export
	genesis := types.NewGenesisState(k.GetParams(ctx))
	// this line is used by starport scaffolding # ibc/genesis/export

	return genesis
}

package voter

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/hdac-hmh/swap-module/x/voter/keeper"
	"github.com/hdac-hmh/swap-module/x/voter/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// this line is used by starport scaffolding # genesis/module/init
	// Set all the vote
	for _, elem := range genState.VoteList {
		k.SetVote(ctx, *elem)
	}

	// Set vote count
	k.SetVoteCount(ctx, uint64(len(genState.VoteList)))

	// Set all the poll
	for _, elem := range genState.PollList {
		k.SetPoll(ctx, *elem)
	}

	// Set poll count
	k.SetPollCount(ctx, uint64(len(genState.PollList)))

	// this line is used by starport scaffolding # ibc/genesis/init
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()

	// this line is used by starport scaffolding # genesis/module/export
	// Get all vote
	voteList := k.GetAllVote(ctx)
	for _, elem := range voteList {
		elem := elem
		genesis.VoteList = append(genesis.VoteList, &elem)
	}

	// Get all poll
	pollList := k.GetAllPoll(ctx)
	for _, elem := range pollList {
		elem := elem
		genesis.PollList = append(genesis.PollList, &elem)
	}

	// this line is used by starport scaffolding # ibc/genesis/export

	return genesis
}

package keeper

import (
	"github.com/hdac-hmh/swap-module/x/minter/types"
)

var _ types.QueryServer = Keeper{}

package keeper

import (
	"github.com/hdac-hmh/swap-module/x/swapmodule/types"
)

var _ types.QueryServer = Keeper{}

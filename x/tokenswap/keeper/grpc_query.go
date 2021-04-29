package keeper

import (
	"github.com/hdac-hmh/swap-module/x/tokenswap/types"
)

var _ types.QueryServer = Keeper{}

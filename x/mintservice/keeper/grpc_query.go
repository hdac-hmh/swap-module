package keeper

import (
	"github.com/hdac-hmh/swap-module/x/mintservice/types"
)

var _ types.QueryServer = Keeper{}

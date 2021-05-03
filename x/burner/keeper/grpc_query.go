package keeper

import (
	"github.com/hdac-hmh/swap-module/x/burner/types"
)

var _ types.QueryServer = Keeper{}

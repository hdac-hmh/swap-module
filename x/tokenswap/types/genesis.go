package types

import (
	"fmt"
	// this line is used by starport scaffolding # ibc/genesistype/import
)

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		// this line is used by starport scaffolding # ibc/genesistype/default
		// this line is used by starport scaffolding # genesis/types/default
TokenList: []*Token{},
		SwapRequestList: []*SwapRequest{},
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// this line is used by starport scaffolding # ibc/genesistype/validate

	// this line is used by starport scaffolding # genesis/types/validate
// Check for duplicated ID in token
tokenIdMap := make(map[uint64]bool)

for _, elem := range gs.TokenList {
	if _, ok := tokenIdMap[elem.Id]; ok {
		return fmt.Errorf("duplicated id for token")
	}
	tokenIdMap[elem.Id] = true
}
	// Check for duplicated ID in SwapRequest
	SwapRequestIdMap := make(map[uint64]bool)

	for _, elem := range gs.SwapRequestList {
		if _, ok := SwapRequestIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for SwapRequest")
		}
		SwapRequestIdMap[elem.Id] = true
	}

	return nil
}

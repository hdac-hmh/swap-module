package rest

import (
	"github.com/gorilla/mux"

	"github.com/cosmos/cosmos-sdk/client"
	// this line is used by starport scaffolding # 1
)

const (
	MethodGet = "GET"
)

// RegisterRoutes registers tokenswap-related REST handlers to a router
func RegisterRoutes(clientCtx client.Context, r *mux.Router) {
	// this line is used by starport scaffolding # 2
	registerQueryRoutes(clientCtx, r)
	registerTxHandlers(clientCtx, r)

	registerQueryRoutes(clientCtx, r)
	registerTxHandlers(clientCtx, r)

}

func registerQueryRoutes(clientCtx client.Context, r *mux.Router) {
	// this line is used by starport scaffolding # 3
    r.HandleFunc("/tokenswap/tokens/{id}", getTokenHandler(clientCtx)).Methods("GET")
    r.HandleFunc("/tokenswap/tokens", listTokenHandler(clientCtx)).Methods("GET")

	r.HandleFunc("/tokenswap/SwapRequests/{id}", getSwapRequestHandler(clientCtx)).Methods("GET")
	r.HandleFunc("/tokenswap/SwapRequests", listSwapRequestHandler(clientCtx)).Methods("GET")

}

func registerTxHandlers(clientCtx client.Context, r *mux.Router) {
	// this line is used by starport scaffolding # 4
    r.HandleFunc("/tokenswap/tokens", createTokenHandler(clientCtx)).Methods("POST")
    r.HandleFunc("/tokenswap/tokens/{id}", updateTokenHandler(clientCtx)).Methods("POST")
    r.HandleFunc("/tokenswap/tokens/{id}", deleteTokenHandler(clientCtx)).Methods("POST")

	r.HandleFunc("/tokenswap/SwapRequests", requestTokenSwapHandler(clientCtx)).Methods("POST")
}

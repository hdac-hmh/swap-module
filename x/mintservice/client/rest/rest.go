package rest

import (
	"github.com/gorilla/mux"

	"github.com/cosmos/cosmos-sdk/client"
	// this line is used by starport scaffolding # 1
)

const (
	MethodGet = "GET"
)

// RegisterRoutes registers mintservice-related REST handlers to a router
func RegisterRoutes(clientCtx client.Context, r *mux.Router) {
	// this line is used by starport scaffolding # 2
	registerQueryRoutes(clientCtx, r)
	registerTxHandlers(clientCtx, r)

}

func registerQueryRoutes(clientCtx client.Context, r *mux.Router) {
	// this line is used by starport scaffolding # 3
	r.HandleFunc("/mintservice/Tokens/{id}", getTokenHandler(clientCtx)).Methods("GET")
	r.HandleFunc("/mintservice/Tokens", listTokenHandler(clientCtx)).Methods("GET")

}

func registerTxHandlers(clientCtx client.Context, r *mux.Router) {
	// this line is used by starport scaffolding # 4
	r.HandleFunc("/mintservice/Tokens", createTokenHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/mintservice/Tokens/{id}", updateTokenHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/mintservice/Tokens/{id}", deleteTokenHandler(clientCtx)).Methods("POST")

}

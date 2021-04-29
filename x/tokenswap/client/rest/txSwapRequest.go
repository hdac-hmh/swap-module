package rest

import (
	"net/http"
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/tx"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/rest"
	"github.com/gorilla/mux"
	"github.com/hdac-hmh/swap-module/x/tokenswap/types"
)

type createSwapRequestRequest struct {
	BaseReq        rest.BaseReq `json:"base_req"`
	Creator        string       `json:"creator"`
	BurnTxHash     string       `json:"burnTxHash"`
	EthereumSender string       `json:"ethereumSender"`
	Receiver       string       `json:"receiver"`
	AmountEng      string       `json:"amountEng"`
	SignerAddr     string       `json:"signerAddr"`
}

func createSwapRequestHandler(clientCtx client.Context) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		var req createSwapRequestRequest
		if !rest.ReadRESTReq(w, r, clientCtx.LegacyAmino, &req) {
			rest.WriteErrorResponse(w, http.StatusBadRequest, "failed to parse request")
			return
		}

		baseReq := req.BaseReq.Sanitize()
		if !baseReq.ValidateBasic(w) {
			return
		}

		_, err := sdk.AccAddressFromBech32(req.Creator)
		if err != nil {
			rest.WriteErrorResponse(w, http.StatusBadRequest, err.Error())
			return
		}

		parsedBurnTxHash := req.BurnTxHash

		parsedEthereumSender := req.EthereumSender

		parsedReceiver := req.Receiver

		parsedAmountEng := req.AmountEng

		parsedSignerAddr := req.SignerAddr

		msg := types.NewMsgCreateSwapRequest(
			req.Creator,
			parsedBurnTxHash,
			parsedEthereumSender,
			parsedReceiver,
			parsedAmountEng,
			parsedSignerAddr,
		)

		tx.WriteGeneratedTxResponse(clientCtx, w, req.BaseReq, msg)
	}
}

type updateSwapRequestRequest struct {
	BaseReq        rest.BaseReq `json:"base_req"`
	Creator        string       `json:"creator"`
	BurnTxHash     string       `json:"burnTxHash"`
	EthereumSender string       `json:"ethereumSender"`
	Receiver       string       `json:"receiver"`
	AmountEng      string       `json:"amountEng"`
	SignerAddr     string       `json:"signerAddr"`
}

func updateSwapRequestHandler(clientCtx client.Context) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		id, err := strconv.ParseUint(mux.Vars(r)["id"], 10, 64)
		if err != nil {
			return
		}

		var req updateSwapRequestRequest
		if !rest.ReadRESTReq(w, r, clientCtx.LegacyAmino, &req) {
			rest.WriteErrorResponse(w, http.StatusBadRequest, "failed to parse request")
			return
		}

		baseReq := req.BaseReq.Sanitize()
		if !baseReq.ValidateBasic(w) {
			return
		}

		_, err = sdk.AccAddressFromBech32(req.Creator)
		if err != nil {
			rest.WriteErrorResponse(w, http.StatusBadRequest, err.Error())
			return
		}

		parsedBurnTxHash := req.BurnTxHash

		parsedEthereumSender := req.EthereumSender

		parsedReceiver := req.Receiver

		parsedAmountEng := req.AmountEng

		parsedSignerAddr := req.SignerAddr

		msg := types.NewMsgUpdateSwapRequest(
			req.Creator,
			id,
			parsedBurnTxHash,
			parsedEthereumSender,
			parsedReceiver,
			parsedAmountEng,
			parsedSignerAddr,
		)

		tx.WriteGeneratedTxResponse(clientCtx, w, req.BaseReq, msg)
	}
}

type deleteSwapRequestRequest struct {
	BaseReq rest.BaseReq `json:"base_req"`
	Creator string       `json:"creator"`
}

func deleteSwapRequestHandler(clientCtx client.Context) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		id, err := strconv.ParseUint(mux.Vars(r)["id"], 10, 64)
		if err != nil {
			return
		}

		var req deleteSwapRequestRequest
		if !rest.ReadRESTReq(w, r, clientCtx.LegacyAmino, &req) {
			rest.WriteErrorResponse(w, http.StatusBadRequest, "failed to parse request")
			return
		}

		baseReq := req.BaseReq.Sanitize()
		if !baseReq.ValidateBasic(w) {
			return
		}

		_, err = sdk.AccAddressFromBech32(req.Creator)
		if err != nil {
			rest.WriteErrorResponse(w, http.StatusBadRequest, err.Error())
			return
		}

		msg := types.NewMsgDeleteSwapRequest(
			req.Creator,
			id,
		)

		tx.WriteGeneratedTxResponse(clientCtx, w, req.BaseReq, msg)
	}
}

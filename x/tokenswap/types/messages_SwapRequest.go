package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateSwapRequest{}

func NewMsgCreateSwapRequest(creator string, burnTxHash string, ethereumSender string, receiver string, amountEng string, signerAddr string) *MsgCreateSwapRequest {
	return &MsgCreateSwapRequest{
		Creator:        creator,
		BurnTxHash:     burnTxHash,
		EthereumSender: ethereumSender,
		Receiver:       receiver,
		AmountEng:      amountEng,
		SignerAddr:     signerAddr,
	}
}

func (msg *MsgCreateSwapRequest) Route() string {
	return RouterKey
}

func (msg *MsgCreateSwapRequest) Type() string {
	return "CreateSwapRequest"
}

func (msg *MsgCreateSwapRequest) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateSwapRequest) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateSwapRequest) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateSwapRequest{}

func NewMsgUpdateSwapRequest(creator string, id uint64, burnTxHash string, ethereumSender string, receiver string, amountEng string, signerAddr string) *MsgUpdateSwapRequest {
	return &MsgUpdateSwapRequest{
		Id:             id,
		Creator:        creator,
		BurnTxHash:     burnTxHash,
		EthereumSender: ethereumSender,
		Receiver:       receiver,
		AmountEng:      amountEng,
		SignerAddr:     signerAddr,
	}
}

func (msg *MsgUpdateSwapRequest) Route() string {
	return RouterKey
}

func (msg *MsgUpdateSwapRequest) Type() string {
	return "UpdateSwapRequest"
}

func (msg *MsgUpdateSwapRequest) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateSwapRequest) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateSwapRequest) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgCreateSwapRequest{}

func NewMsgDeleteSwapRequest(creator string, id uint64) *MsgDeleteSwapRequest {
	return &MsgDeleteSwapRequest{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteSwapRequest) Route() string {
	return RouterKey
}

func (msg *MsgDeleteSwapRequest) Type() string {
	return "DeleteSwapRequest"
}

func (msg *MsgDeleteSwapRequest) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteSwapRequest) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteSwapRequest) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

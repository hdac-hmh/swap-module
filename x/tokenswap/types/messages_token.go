package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateToken{}

func NewMsgCreateToken(creator string, address string, coin int32) *MsgCreateToken {
  return &MsgCreateToken{
		Creator: creator,
    Address: address,
    Coin: coin,
	}
}

func (msg *MsgCreateToken) Route() string {
  return RouterKey
}

func (msg *MsgCreateToken) Type() string {
  return "CreateToken"
}

func (msg *MsgCreateToken) GetSigners() []sdk.AccAddress {
  creator, err := sdk.AccAddressFromBech32(msg.Creator)
  if err != nil {
    panic(err)
  }
  return []sdk.AccAddress{creator}
}

func (msg *MsgCreateToken) GetSignBytes() []byte {
  bz := ModuleCdc.MustMarshalJSON(msg)
  return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateToken) ValidateBasic() error {
  _, err := sdk.AccAddressFromBech32(msg.Creator)
  	if err != nil {
  		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
  	}
  return nil
}

var _ sdk.Msg = &MsgUpdateToken{}

func NewMsgUpdateToken(creator string, id uint64, address string, coin int32) *MsgUpdateToken {
  return &MsgUpdateToken{
        Id: id,
		Creator: creator,
    Address: address,
    Coin: coin,
	}
}

func (msg *MsgUpdateToken) Route() string {
  return RouterKey
}

func (msg *MsgUpdateToken) Type() string {
  return "UpdateToken"
}

func (msg *MsgUpdateToken) GetSigners() []sdk.AccAddress {
  creator, err := sdk.AccAddressFromBech32(msg.Creator)
  if err != nil {
    panic(err)
  }
  return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateToken) GetSignBytes() []byte {
  bz := ModuleCdc.MustMarshalJSON(msg)
  return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateToken) ValidateBasic() error {
  _, err := sdk.AccAddressFromBech32(msg.Creator)
  if err != nil {
    return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
  }
   return nil
}

var _ sdk.Msg = &MsgCreateToken{}

func NewMsgDeleteToken(creator string, id uint64) *MsgDeleteToken {
  return &MsgDeleteToken{
        Id: id,
		Creator: creator,
	}
} 
func (msg *MsgDeleteToken) Route() string {
  return RouterKey
}

func (msg *MsgDeleteToken) Type() string {
  return "DeleteToken"
}

func (msg *MsgDeleteToken) GetSigners() []sdk.AccAddress {
  creator, err := sdk.AccAddressFromBech32(msg.Creator)
  if err != nil {
    panic(err)
  }
  return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteToken) GetSignBytes() []byte {
  bz := ModuleCdc.MustMarshalJSON(msg)
  return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteToken) ValidateBasic() error {
  _, err := sdk.AccAddressFromBech32(msg.Creator)
  if err != nil {
    return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
  }
  return nil
}

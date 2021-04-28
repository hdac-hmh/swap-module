package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	// this line is used by starport scaffolding # 2
	cdc.RegisterConcrete(&MsgCreateTimedoutPost{}, "blogibc/CreateTimedoutPost", nil)
	cdc.RegisterConcrete(&MsgUpdateTimedoutPost{}, "blogibc/UpdateTimedoutPost", nil)
	cdc.RegisterConcrete(&MsgDeleteTimedoutPost{}, "blogibc/DeleteTimedoutPost", nil)

	cdc.RegisterConcrete(&MsgCreateSentPost{}, "blogibc/CreateSentPost", nil)
	cdc.RegisterConcrete(&MsgUpdateSentPost{}, "blogibc/UpdateSentPost", nil)
	cdc.RegisterConcrete(&MsgDeleteSentPost{}, "blogibc/DeleteSentPost", nil)

	cdc.RegisterConcrete(&MsgCreatePost{}, "blogibc/CreatePost", nil)
	cdc.RegisterConcrete(&MsgUpdatePost{}, "blogibc/UpdatePost", nil)
	cdc.RegisterConcrete(&MsgDeletePost{}, "blogibc/DeletePost", nil)

}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	// this line is used by starport scaffolding # 3
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateTimedoutPost{},
		&MsgUpdateTimedoutPost{},
		&MsgDeleteTimedoutPost{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateSentPost{},
		&MsgUpdateSentPost{},
		&MsgDeleteSentPost{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreatePost{},
		&MsgUpdatePost{},
		&MsgDeletePost{},
	)

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewAminoCodec(amino)
)

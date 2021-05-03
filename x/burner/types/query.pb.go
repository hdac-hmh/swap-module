// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: proto/burner/query.proto

package types

import (
	context "context"
	fmt "fmt"
	_ "github.com/cosmos/cosmos-sdk/types/query"
	grpc1 "github.com/gogo/protobuf/grpc"
	proto "github.com/gogo/protobuf/proto"
	_ "google.golang.org/genproto/googleapis/api/annotations"
	grpc "google.golang.org/grpc"
	math "math"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

func init() { proto.RegisterFile("proto/burner/query.proto", fileDescriptor_5d03043b5ee60bd0) }

var fileDescriptor_5d03043b5ee60bd0 = []byte{
	// 199 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x34, 0xce, 0x3d, 0x4e, 0xc4, 0x30,
	0x10, 0x86, 0xe1, 0xa4, 0x00, 0xa4, 0x94, 0x54, 0x10, 0x21, 0x1f, 0x00, 0x29, 0x1e, 0x05, 0x6e,
	0x40, 0x45, 0x4b, 0x4b, 0x37, 0x4e, 0x2c, 0xdb, 0x52, 0xec, 0x31, 0xfe, 0x01, 0x72, 0x0b, 0x8e,
	0x45, 0x99, 0x72, 0xcb, 0x55, 0x72, 0x91, 0x55, 0x62, 0x6d, 0x3b, 0x7a, 0xe7, 0xd3, 0xd3, 0x3c,
	0xf8, 0x40, 0x89, 0x40, 0xe4, 0xe0, 0x64, 0x80, 0xaf, 0x2c, 0xc3, 0xcc, 0x8f, 0xd3, 0xfd, 0xa3,
	0x1e, 0x71, 0xd0, 0x56, 0xf3, 0xf8, 0x83, 0xde, 0xd2, 0x98, 0x27, 0xc9, 0x4b, 0xd6, 0x3e, 0x29,
	0x22, 0x35, 0x49, 0x40, 0x6f, 0x00, 0x9d, 0xa3, 0x84, 0xc9, 0x90, 0x8b, 0xe5, 0xb1, 0x7d, 0x1e,
	0x28, 0x5a, 0x8a, 0x20, 0x30, 0xca, 0xb2, 0x08, 0xdf, 0xbd, 0x90, 0x09, 0x7b, 0xf0, 0xa8, 0x8c,
	0x3b, 0xe2, 0xd2, 0xbe, 0xdc, 0x35, 0x37, 0x1f, 0x7b, 0xf1, 0xf6, 0xfe, 0xbf, 0xb2, 0x7a, 0x59,
	0x59, 0x7d, 0x5e, 0x59, 0xfd, 0xb7, 0xb1, 0x6a, 0xd9, 0x58, 0x75, 0xda, 0x58, 0xf5, 0xc9, 0x95,
	0x49, 0x3a, 0x0b, 0x3e, 0x90, 0x85, 0x9d, 0xd4, 0x69, 0xab, 0x61, 0x37, 0x75, 0x05, 0x05, 0xbf,
	0x57, 0x7d, 0x9a, 0xbd, 0x8c, 0xe2, 0xf6, 0x58, 0x7e, 0xbd, 0x04, 0x00, 0x00, 0xff, 0xff, 0x9a,
	0x83, 0xe1, 0x46, 0xda, 0x00, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// QueryClient is the client API for Query service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type QueryClient interface {
}

type queryClient struct {
	cc grpc1.ClientConn
}

func NewQueryClient(cc grpc1.ClientConn) QueryClient {
	return &queryClient{cc}
}

// QueryServer is the server API for Query service.
type QueryServer interface {
}

// UnimplementedQueryServer can be embedded to have forward compatible implementations.
type UnimplementedQueryServer struct {
}

func RegisterQueryServer(s grpc1.Server, srv QueryServer) {
	s.RegisterService(&_Query_serviceDesc, srv)
}

var _Query_serviceDesc = grpc.ServiceDesc{
	ServiceName: "hdachmh.swapmodule.burner.Query",
	HandlerType: (*QueryServer)(nil),
	Methods:     []grpc.MethodDesc{},
	Streams:     []grpc.StreamDesc{},
	Metadata:    "proto/burner/query.proto",
}

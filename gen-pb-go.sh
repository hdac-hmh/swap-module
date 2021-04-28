#!/bin/bash
PACKAGE='github.com/hdac-hmh/swap-module'
PROTO_SRC='./proto/nameservice/domain.proto'
PROTO_OUT='./pb'
DST_TYPES='./x/nameservice/types'

mkdir ${PROTO_OUT}

echo protoc -I ./ -I ./third_party/proto ${PROTO_SRC} --go_out=${PROTO_OUT}
protoc -I ./ -I ./third_party/proto ${PROTO_SRC} --go_out=${PROTO_OUT}

mv ${PROTO_OUT}/${PACKAGE}/${DST_TYPES}/* ${DST_TYPES}

rm -r ${PROTO_OUT}

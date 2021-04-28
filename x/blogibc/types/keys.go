package types

const (
	// ModuleName defines the module name
	ModuleName = "blogibc"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// RouterKey is the message route for slashing
	RouterKey = ModuleName

	// QuerierRoute defines the module's query routing key
	QuerierRoute = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_capability"

	// Version defines the current version the IBC module supports
	Version = "blogibc-1"

	// PortID is the default port id that module binds to
	PortID = "blogibc"
)

var (
	// PortKey defines the key to store the port ID in store
	PortKey = KeyPrefix("blogibc-port-")
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}

const (
	PostKey      = "Post-value-"
	PostCountKey = "Post-count-"
)

const (
	SentPostKey      = "SentPost-value-"
	SentPostCountKey = "SentPost-count-"
)

const (
	TimedoutPostKey      = "TimedoutPost-value-"
	TimedoutPostCountKey = "TimedoutPost-count-"
)

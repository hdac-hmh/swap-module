#!/bin/bash
APPNAME="swap-moduled"
APPFOLDER="swapmodule"

$APPNAME unsafe-reset-all
rm -r ~/.$APPFOLDER

echo "1234567890" | $APPNAME keys add alice
echo "1234567890" | $APPNAME keys add bob

$APPNAME init mynode --chain-id swapchain
$APPNAME add-genesis-account $($APPNAME keys show alice -a) 10000hdac,100000000stake
$APPNAME add-genesis-account $($APPNAME keys show bob -a) 20000hdac
#scavengeCLI config chain-id scavenge
#scavengeCLI config output json
#scavengeCLI config indent true
#scavengeCLI config trust-node true

echo "1234567890" | $APPNAME gentx alice 100000000stake --chain-id swapchain
$APPNAME collect-gentxs

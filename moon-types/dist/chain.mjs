var n=[{chainId:"0x1",chainName:"Ethereum",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:["https://eth.llamarpc.com"],blockExplorerUrls:["https://etherscan.io/"]},{chainId:"0x89",chainName:"Polygon",nativeCurrency:{name:"Matic",symbol:"MATIC",decimals:18},rpcUrls:["https://polygon-rpc.com/"],blockExplorerUrls:["https://polygonscan.com/"]},{chainId:"0x38",chainName:"Binance Smart Chain",nativeCurrency:{name:"BNB",symbol:"BNB",decimals:18},rpcUrls:["https://bsc-dataseed.binance.org/"],blockExplorerUrls:["https://bscscan.com/"]},{chainId:"0xa86a",chainName:"Avalanche",nativeCurrency:{name:"AVAX",symbol:"AVAX",decimals:18},rpcUrls:["https://api.avax.network/ext/bc/C/rpc"],blockExplorerUrls:["https://cchain.explorer.avax.network/"]},{chainId:"0xfa",chainName:"Fantom",nativeCurrency:{name:"FTM",symbol:"FTM",decimals:18},rpcUrls:["https://rpc.ftm.tools"],blockExplorerUrls:["https://ftmscan.com/"]},{chainId:"0xa",chainName:"Optimism",nativeCurrency:{name:"Optimism",symbol:"OP",decimals:18},rpcUrls:["https://mainnet.optimism.io/"],blockExplorerUrls:["https://optimistic.etherscan.io/"]},{chainId:"0xa4b1",chainName:"Arbitrum",nativeCurrency:{name:"Arbitrum",symbol:"ARB",decimals:18},rpcUrls:["https://arb1.arbitrum.io/rpc"],blockExplorerUrls:["https://arbiscan.io/"]},{chainId:"0xa4ec",chainName:"Celo",nativeCurrency:{name:"Celo",symbol:"CELO",decimals:18},rpcUrls:["https://forno.celo.org"],blockExplorerUrls:["https://explorer.celo.org/"]},{chainId:"0x50877ed6",chainName:"SKALE",nativeCurrency:{name:"SKALE",symbol:"SKALE",decimals:18},rpcUrls:["https://staging-v3.skalenodes.com/v1/staging-aware-chief-gianfar"],blockExplorerUrls:["https://staging-aware-chief-gianfar.explorer.staging-v3.skalenodes.com/"]},{chainId:"0x52",chainName:"Meter",nativeCurrency:{name:"Meter",symbol:"MTR",decimals:18},rpcUrls:["https://rpc.meter.io"],blockExplorerUrls:["https://scan.meter.io"]},{chainId:"0x76b3",chainName:"Lightlink Pegasus Testnet",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:["https://replicator.pegasus.lightlink.io/rpc/v1"],blockExplorerUrls:["https://pegasus.lightlink.io/"]},{chainId:"0x76b2",chainName:"Lightlink Phoenix Mainnet",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:["https://replicator.phoenix.lightlink.io/rpc/v1"],blockExplorerUrls:["https://phoenix.lightlink.io/"]}],a=r=>{typeof r=="number"&&(r=r.toString(16));let e=n.find(t=>t.chainId===r);return e?e.rpcUrls:[]},i=r=>(typeof r=="number"&&(r=r.toString(16)),n.find(e=>e.chainId===r));export{n as MOON_SUPPORTED_NETWORKS,i as getChain,a as getRpcUrls};
//# sourceMappingURL=chain.mjs.map
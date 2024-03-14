const symbioteToken = "0:4e9bb7c7a9d61fa937b5dcf038c2545a4078839ead0db5e2811941b310da3a3b"
const managerAddress = "0:4c2bad8915a59c0f51fee82e49d925c33698d318d4af97d2f692a91891f99e77"
const liquidityAddress = "0:b9a949dfc3271c5c940864edb65547f91af408bbf5f01ed6b7418b5ce19c385f"
const LOGOURL = "https://impulsefinance.s3.us-east-1.amazonaws.com/images/1693422836805logo.png"
const NFTAddress = "0:847778f543759f1576f6e1170d6ecf88c6b662fac4f16e579b46dbffc328b1ad"

const tokenSaleContract = "0xdf64b3EA6BE144986c5860b80B96944886D4a128"
const USDTContract = "0x55d398326f99059fF775485246999027B3197955"
const CHEF = "0:1a04c53c7d47b8498b9ef89436d10fded52f2e958bc7ba6b5799ef826b3b1def"

const emitter = "0:6dee01e0165736ac6145bed2eaf0344b129fd6b77992d0ec4b420d6a09e5971d"
const WVENOM = "0:2c3a2ff6443af741ce653ae4ef2c85c2d52a9df84944bbe14d702c3131da3f14"
const USDT = "0:20470e6a6e33aa696263b5702608d69e3317c23bf20c2f921b38d6588c555603"
const USDC = "0:85ef6d4574ba9705ebde989d500e414640286d93df4a77844c8b295a9ea3e5c5"

const tokenSaleABI = [{
        "anonymous": false,
        "inputs": [{
                "indexed": false,
                "internalType": "string",
                "name": "venomAddress",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "sym",
                "type": "uint256"
            }
        ],
        "name": "Bought",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "SYMSTORE",
        "outputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "string",
                "name": "venomAddress",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "buy",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "maxBuy",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "minBuy",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "phaseOne",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "phaseTwo",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "raised",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "string",
            "name": "",
            "type": "string"
        }],
        "name": "sale",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
        }],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]

const USDTABI = [{
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": true,
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "isExcluded",
                "type": "bool"
            }
        ],
        "name": "ExcludeFromFees",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "inputs": [{
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            }
        ],
        "name": "allowance",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "address",
            "name": "account",
            "type": "address"
        }],
        "name": "balanceOf",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "decimals",
        "outputs": [{
            "internalType": "uint8",
            "name": "",
            "type": "uint8"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "subtractedValue",
                "type": "uint256"
            }
        ],
        "name": "decreaseAllowance",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "excluded",
                "type": "bool"
            }
        ],
        "name": "excludeFromFees",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "addedValue",
                "type": "uint256"
            }
        ],
        "name": "increaseAllowance",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "address",
            "name": "account",
            "type": "address"
        }],
        "name": "isExcludedFromFees",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "name",
        "outputs": [{
            "internalType": "string",
            "name": "",
            "type": "string"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "rewardsWallet",
        "outputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "_rewFee",
            "type": "uint256"
        }],
        "name": "setFees",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "symbol",
        "outputs": [{
            "internalType": "string",
            "name": "",
            "type": "string"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "taxFee",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "address",
                "name": "recipient",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "recipient",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
        }],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "address",
            "name": "_token",
            "type": "address"
        }],
        "name": "transferTokens",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "address",
            "name": "_newWallet",
            "type": "address"
        }],
        "name": "updateRewardsWallet",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]

const stakeABI = {
    "ABI version": 2,
    "version": "2.2",
    "header": ["pubkey", "time", "expire"],
    "functions": [{
            "name": "constructor",
            "inputs": [
                { "name": "stakeTokenRoot", "type": "address" },
                { "name": "rewardTokenRoot", "type": "address" },
                { "name": "minstake", "type": "uint256" },
                { "name": "starttime", "type": "uint256" },
                { "name": "endtime", "type": "uint256" },
                { "name": "supply", "type": "uint256" },
                { "name": "_owner", "type": "address" }
            ],
            "outputs": []
        },
        {
            "name": "onRewardTokenWallet",
            "inputs": [
                { "name": "value", "type": "address" }
            ],
            "outputs": []
        },
        {
            "name": "stake",
            "inputs": [
                { "name": "amount", "type": "uint128" },
                { "name": "stakeOwner", "type": "address" },
                { "name": "staked", "type": "uint256" },
                { "name": "lastClaimed", "type": "uint256" },
                { "name": "time", "type": "uint256" }
            ],
            "outputs": []
        },
        {
            "name": "getRewards",
            "inputs": [
                { "components": [{ "name": "amount", "type": "uint256" }, { "name": "lastReward", "type": "uint256" }, { "name": "owner", "type": "address" }], "name": "user", "type": "tuple" }
            ],
            "outputs": [
                { "name": "value0", "type": "uint256" }
            ]
        },
        {
            "name": "claim",
            "inputs": [
                { "name": "stakeOwner", "type": "address" },
                { "name": "staked", "type": "uint128" },
                { "name": "lastClaimed", "type": "uint256" },
                { "name": "time", "type": "uint256" }
            ],
            "outputs": []
        },
        {
            "name": "unstake",
            "inputs": [
                { "name": "unstakeAmount", "type": "uint128" },
                { "name": "stakeOwner", "type": "address" },
                { "name": "staked", "type": "uint256" },
                { "name": "lastClaimed", "type": "uint256" },
                { "name": "time", "type": "uint256" }
            ],
            "outputs": []
        },
        {
            "name": "getLeftOverTokens",
            "inputs": [
                { "name": "receiver", "type": "address" }
            ],
            "outputs": []
        },
        {
            "name": "getTokensByWallet",
            "inputs": [
                { "name": "receiver", "type": "address" },
                { "name": "wallet", "type": "address" }
            ],
            "outputs": []
        },
        {
            "name": "_stakeTokenRoot",
            "inputs": [],
            "outputs": [
                { "name": "_stakeTokenRoot", "type": "address" }
            ]
        },
        {
            "name": "_rewardTokenRoot",
            "inputs": [],
            "outputs": [
                { "name": "_rewardTokenRoot", "type": "address" }
            ]
        },
        {
            "name": "_rewardTokenWallet",
            "inputs": [],
            "outputs": [
                { "name": "_rewardTokenWallet", "type": "address" }
            ]
        },
        {
            "name": "_minstake",
            "inputs": [],
            "outputs": [
                { "name": "_minstake", "type": "uint256" }
            ]
        },
        {
            "name": "_starttime",
            "inputs": [],
            "outputs": [
                { "name": "_starttime", "type": "uint256" }
            ]
        },
        {
            "name": "_endtime",
            "inputs": [],
            "outputs": [
                { "name": "_endtime", "type": "uint256" }
            ]
        },
        {
            "name": "_supply",
            "inputs": [],
            "outputs": [
                { "name": "_supply", "type": "uint256" }
            ]
        },
        {
            "name": "owner",
            "inputs": [],
            "outputs": [
                { "name": "owner", "type": "address" }
            ]
        },
        {
            "name": "totalRewardsDistributed",
            "inputs": [],
            "outputs": [
                { "name": "totalRewardsDistributed", "type": "uint256" }
            ]
        },
        {
            "name": "amountStaked",
            "inputs": [],
            "outputs": [
                { "name": "amountStaked", "type": "uint256" }
            ]
        },
        {
            "name": "_await_TIP3TokenWallet_balance",
            "inputs": [
                { "name": "value0", "type": "uint128" }
            ],
            "outputs": []
        }
    ],
    "data": [
        { "key": 1, "name": "_nonce", "type": "uint256" }
    ],
    "events": [{
            "name": "stakeEvent",
            "inputs": [
                { "name": "saleAddress", "type": "address" },
                { "name": "amount", "type": "uint256" },
                { "name": "single", "type": "address" }
            ],
            "outputs": []
        },
        {
            "name": "claimEvent",
            "inputs": [
                { "name": "saleAddress", "type": "address" },
                { "name": "amount", "type": "uint256" },
                { "name": "single", "type": "address" }
            ],
            "outputs": []
        },
        {
            "name": "unstakeEvent",
            "inputs": [
                { "name": "saleAddress", "type": "address" },
                { "name": "amount", "type": "uint256" },
                { "name": "single", "type": "address" }
            ],
            "outputs": []
        }
    ],
    "fields": [
        { "name": "_pubkey", "type": "uint256" },
        { "name": "_timestamp", "type": "uint64" },
        { "name": "_constructorFlag", "type": "bool" },
        { "name": "_await", "type": "optional(cell)" },
        { "name": "_nonce", "type": "uint256" },
        { "name": "_stakeTokenRoot", "type": "address" },
        { "name": "_rewardTokenRoot", "type": "address" },
        { "name": "_rewardTokenWallet", "type": "address" },
        { "name": "_minstake", "type": "uint256" },
        { "name": "_starttime", "type": "uint256" },
        { "name": "_endtime", "type": "uint256" },
        { "name": "_supply", "type": "uint256" },
        { "name": "owner", "type": "address" },
        { "name": "deployer", "type": "address" },
        { "name": "totalRewardsDistributed", "type": "uint256" },
        { "name": "amountStaked", "type": "uint256" }
    ]
}

const stakeSingleABI = {
    "ABI version": 2,
    "version": "2.2",
    "header": ["pubkey", "time", "expire"],
    "functions": [{
            "name": "constructor",
            "inputs": [
                { "name": "stakeTokenRoot", "type": "address" },
                { "name": "minstake", "type": "uint256" }
            ],
            "outputs": []
        },
        {
            "name": "onStakeTokenWallet",
            "inputs": [
                { "name": "value", "type": "address" }
            ],
            "outputs": []
        },
        {
            "name": "onAcceptTokensTransfer",
            "inputs": [
                { "name": "tokenRoot", "type": "address" },
                { "name": "amount", "type": "uint128" },
                { "name": "value2", "type": "address" },
                { "name": "senderWallet", "type": "address" },
                { "name": "remainingGasTo", "type": "address" },
                { "name": "payload", "type": "cell" }
            ],
            "outputs": []
        },
        {
            "name": "claim",
            "inputs": [],
            "outputs": []
        },
        {
            "name": "unstake",
            "inputs": [
                { "name": "_amount", "type": "uint256" }
            ],
            "outputs": []
        },
        {
            "name": "getUserInfo",
            "inputs": [
                { "name": "answerId", "type": "uint32" }
            ],
            "outputs": [
                { "components": [{ "name": "amount", "type": "uint256" }, { "name": "lastReward", "type": "uint256" }, { "name": "owner", "type": "address" }], "name": "value0", "type": "tuple" }
            ]
        },
        {
            "name": "parent",
            "inputs": [],
            "outputs": [
                { "name": "parent", "type": "address" }
            ]
        },
        {
            "name": "owner",
            "inputs": [],
            "outputs": [
                { "name": "owner", "type": "address" }
            ]
        },
        {
            "name": "lastReward",
            "inputs": [],
            "outputs": [
                { "name": "lastReward", "type": "uint256" }
            ]
        },
        {
            "name": "staked",
            "inputs": [],
            "outputs": [
                { "name": "staked", "type": "uint256" }
            ]
        },
        {
            "name": "_stakeTokenRoot",
            "inputs": [],
            "outputs": [
                { "name": "_stakeTokenRoot", "type": "address" }
            ]
        },
        {
            "name": "_stakeTokenWallet",
            "inputs": [],
            "outputs": [
                { "name": "_stakeTokenWallet", "type": "address" }
            ]
        },
        {
            "name": "_minstake",
            "inputs": [],
            "outputs": [
                { "name": "_minstake", "type": "uint256" }
            ]
        },
        {
            "name": "_await_TIP3TokenWallet_balance",
            "inputs": [
                { "name": "value0", "type": "uint128" }
            ],
            "outputs": []
        }
    ],
    "data": [
        { "key": 1, "name": "parent", "type": "address" },
        { "key": 2, "name": "owner", "type": "address" }
    ],
    "events": [],
    "fields": [
        { "name": "_pubkey", "type": "uint256" },
        { "name": "_timestamp", "type": "uint64" },
        { "name": "_constructorFlag", "type": "bool" },
        { "name": "_await", "type": "optional(cell)" },
        { "name": "parent", "type": "address" },
        { "name": "owner", "type": "address" },
        { "name": "lastReward", "type": "uint256" },
        { "name": "staked", "type": "uint256" },
        { "name": "_stakeTokenRoot", "type": "address" },
        { "name": "_stakeTokenWallet", "type": "address" },
        { "name": "_minstake", "type": "uint256" }
    ]
}

const indexABI = {
    "ABI version": 2,
    "version": "2.2",
    "header": ["time"],
    "functions": [{
            "name": "constructor",
            "inputs": [
                { "name": "collection", "type": "address" }
            ],
            "outputs": []
        },
        {
            "name": "getInfo",
            "inputs": [
                { "name": "answerId", "type": "uint32" }
            ],
            "outputs": [
                { "name": "collection", "type": "address" },
                { "name": "owner", "type": "address" },
                { "name": "nft", "type": "address" }
            ]
        },
        {
            "name": "destruct",
            "inputs": [
                { "name": "gasReceiver", "type": "address" }
            ],
            "outputs": []
        }
    ],
    "data": [
        { "key": 1, "name": "_nft", "type": "address" }
    ],
    "events": [],
    "fields": [
        { "name": "_pubkey", "type": "uint256" },
        { "name": "_timestamp", "type": "uint64" },
        { "name": "_constructorFlag", "type": "bool" },
        { "name": "_nft", "type": "address" },
        { "name": "_collection", "type": "address" },
        { "name": "_owner", "type": "address" }
    ]
}

const nftSTakeABI = {
    "ABI version": 2,
    "version": "2.2",
    "header": ["pubkey", "time", "expire"],
    "functions": [{
            "name": "constructor",
            "inputs": [
                { "name": "impulseNFTCollection", "type": "address" },
                { "name": "rewardTokenRoot", "type": "address" },
                { "name": "stakeNFTCollection", "type": "address" },
                { "name": "amountOfTokenPerDayPerNFT", "type": "uint256" },
                { "name": "possibleImpulseNFTToStake", "type": "uint256" },
                { "name": "_owner", "type": "address" }
            ],
            "outputs": []
        },
        {
            "name": "stake",
            "inputs": [
                { "name": "tokenId", "type": "uint256" },
                { "name": "sender", "type": "address" },
                { "name": "gasReceiver", "type": "address" },
                { "name": "newOwner", "type": "address" },
                { "name": "oldManager", "type": "address" },
                { "name": "newManager", "type": "address" },
                { "name": "payload", "type": "cell" },
                { "name": "time", "type": "uint256" }
            ],
            "outputs": []
        },
        {
            "name": "stakeImpulse",
            "inputs": [
                { "name": "tokenId", "type": "uint256" },
                { "name": "sender", "type": "address" },
                { "name": "gasReceiver", "type": "address" },
                { "name": "newOwner", "type": "address" },
                { "name": "oldManager", "type": "address" },
                { "name": "newManager", "type": "address" },
                { "name": "payload", "type": "cell" },
                { "name": "time", "type": "uint256" }
            ],
            "outputs": []
        },
        {
            "name": "claimAll",
            "inputs": [
                { "name": "delta", "type": "uint256" },
                { "name": "user", "type": "address" },
                { "name": "time", "type": "uint256" }
            ],
            "outputs": []
        },
        {
            "name": "unStake",
            "inputs": [
                { "name": "delta", "type": "uint256" },
                { "name": "time", "type": "uint256" },
                { "name": "user", "type": "address" },
                { "name": "_id", "type": "uint256" }
            ],
            "outputs": []
        },
        {
            "name": "unStakeImpulse",
            "inputs": [
                { "name": "delta", "type": "uint256" },
                { "name": "time", "type": "uint256" },
                { "name": "user", "type": "address" },
                { "name": "_id", "type": "uint256" }
            ],
            "outputs": []
        },
        {
            "name": "getStuckedTokens",
            "inputs": [
                { "name": "receiver", "type": "address" }
            ],
            "outputs": []
        },
        {
            "name": "getTokensByWallet",
            "inputs": [
                { "name": "receiver", "type": "address" },
                { "name": "wallet", "type": "address" }
            ],
            "outputs": []
        },
        {
            "name": "updateDripStake",
            "inputs": [
                { "name": "_newRewardPerDay", "type": "uint256" }
            ],
            "outputs": []
        },
        {
            "name": "impulseStaked",
            "inputs": [
                { "name": "answerId", "type": "uint32" }
            ],
            "outputs": [
                { "name": "value0", "type": "uint256" }
            ]
        },
        {
            "name": "_stakeNFTCollection",
            "inputs": [],
            "outputs": [
                { "name": "_stakeNFTCollection", "type": "address" }
            ]
        },
        {
            "name": "_rewardTokenRoot",
            "inputs": [],
            "outputs": [
                { "name": "_rewardTokenRoot", "type": "address" }
            ]
        },
        {
            "name": "_rewardTokenWallet",
            "inputs": [],
            "outputs": [
                { "name": "_rewardTokenWallet", "type": "address" }
            ]
        },
        {
            "name": "rewardsPaid",
            "inputs": [],
            "outputs": [
                { "name": "rewardsPaid", "type": "uint256" }
            ]
        },
        {
            "name": "_rewardTokenDripRate",
            "inputs": [],
            "outputs": [
                { "name": "_rewardTokenDripRate", "type": "uint256" }
            ]
        },
        {
            "name": "_totalNFTStaked",
            "inputs": [],
            "outputs": [
                { "name": "_totalNFTStaked", "type": "uint256" }
            ]
        },
        {
            "name": "_impulseNFTCollection",
            "inputs": [],
            "outputs": [
                { "name": "_impulseNFTCollection", "type": "address" }
            ]
        },
        {
            "name": "_totalImpulseNFTStaked",
            "inputs": [],
            "outputs": [
                { "name": "_totalImpulseNFTStaked", "type": "uint256" }
            ]
        },
        {
            "name": "_possibleImpulseNFTToStake",
            "inputs": [],
            "outputs": [
                { "name": "_possibleImpulseNFTToStake", "type": "uint256" }
            ]
        },
        {
            "name": "_await_ITokenRoot_deployWallet",
            "inputs": [
                { "name": "value0", "type": "address" }
            ],
            "outputs": []
        },
        {
            "name": "_await_TIP3TokenWallet_balance",
            "inputs": [
                { "name": "value0", "type": "uint128" }
            ],
            "outputs": []
        }
    ],
    "data": [
        { "key": 1, "name": "_nonce", "type": "uint256" }
    ],
    "events": [{
            "name": "stakeEvent",
            "inputs": [
                { "name": "tokenId", "type": "uint256" },
                { "name": "sender", "type": "address" },
                { "name": "newOwner", "type": "address" },
                { "name": "oldManager", "type": "address" },
                { "name": "newManager", "type": "address" },
                { "name": "payload", "type": "cell" }
            ],
            "outputs": []
        },
        {
            "name": "claimEvent",
            "inputs": [
                { "name": "amount", "type": "uint256" },
                { "name": "user", "type": "address" }
            ],
            "outputs": []
        },
        {
            "name": "unstakeEvent",
            "inputs": [
                { "name": "collectionAddress", "type": "address" },
                { "name": "tokenId", "type": "uint256" },
                { "name": "user", "type": "address" }
            ],
            "outputs": []
        }
    ],
    "fields": [
        { "name": "_pubkey", "type": "uint256" },
        { "name": "_timestamp", "type": "uint64" },
        { "name": "_constructorFlag", "type": "bool" },
        { "name": "_await", "type": "optional(cell)" },
        { "name": "_nonce", "type": "uint256" },
        { "name": "_stakeNFTCollection", "type": "address" },
        { "name": "_rewardTokenRoot", "type": "address" },
        { "name": "_rewardTokenWallet", "type": "address" },
        { "name": "rewardsPaid", "type": "uint256" },
        { "name": "_rewardTokenDripRate", "type": "uint256" },
        { "name": "owner", "type": "address" },
        { "name": "_totalNFTStaked", "type": "uint256" },
        { "name": "_impulseNFTCollection", "type": "address" },
        { "name": "_totalImpulseNFTStaked", "type": "uint256" },
        { "name": "_possibleImpulseNFTToStake", "type": "uint256" }
    ]
}

const nftStakeSingleABI = {
    "ABI version": 2,
    "version": "2.2",
    "header": ["pubkey", "time", "expire"],
    "functions": [{
            "name": "constructor",
            "inputs": [
                { "name": "owner", "type": "address" },
                { "name": "impulseNFTCollection", "type": "address" },
                { "name": "stakeNFTCollection", "type": "address" },
                { "name": "possibleImpulseNFTToStake", "type": "uint256" }
            ],
            "outputs": []
        },
        {
            "name": "onNftTransfer",
            "inputs": [
                { "name": "id", "type": "uint256" },
                { "name": "oldOwner", "type": "address" },
                { "name": "newOwner", "type": "address" },
                { "name": "oldManager", "type": "address" },
                { "name": "newManager", "type": "address" },
                { "name": "collection", "type": "address" },
                { "name": "gasReceiver", "type": "address" },
                { "name": "payload", "type": "cell" }
            ],
            "outputs": []
        },
        {
            "name": "unStake",
            "inputs": [
                { "name": "nft", "type": "address" }
            ],
            "outputs": []
        },
        {
            "name": "unStakeImpulse",
            "inputs": [
                { "name": "nft", "type": "address" }
            ],
            "outputs": []
        },
        {
            "name": "claim",
            "inputs": [],
            "outputs": []
        },
        {
            "name": "getStuckedNFT",
            "inputs": [
                { "name": "nft", "type": "address" },
                { "name": "receiver", "type": "address" }
            ],
            "outputs": []
        },
        {
            "name": "getAllStakedIds",
            "inputs": [],
            "outputs": [
                { "name": "value0", "type": "address[]" }
            ]
        },
        {
            "name": "getStakeIds",
            "inputs": [],
            "outputs": [
                { "name": "value0", "type": "address[]" }
            ]
        },
        {
            "name": "claimable",
            "inputs": [
                { "name": "_rewardTokenDripRate", "type": "uint256" }
            ],
            "outputs": [
                { "components": [{ "name": "stakeId", "type": "address" }, { "name": "amount", "type": "uint256" }, { "name": "tokenId", "type": "uint256" }], "name": "value0", "type": "tuple[]" }
            ]
        },
        {
            "name": "isImpulseStaked",
            "inputs": [
                { "name": "answerId", "type": "uint32" }
            ],
            "outputs": [
                { "name": "value0", "type": "address" }
            ]
        },
        {
            "name": "nftsStaked",
            "inputs": [
                { "name": "answerId", "type": "uint32" }
            ],
            "outputs": [
                { "components": [{ "name": "nfts", "type": "uint256" }, { "name": "impulse", "type": "address" }], "name": "value0", "type": "tuple" }
            ]
        },
        {
            "name": "parent",
            "inputs": [],
            "outputs": [
                { "name": "parent", "type": "address" }
            ]
        },
        {
            "name": "_owner",
            "inputs": [],
            "outputs": [
                { "name": "_owner", "type": "address" }
            ]
        },
        {
            "name": "_managerAddress",
            "inputs": [],
            "outputs": [
                { "name": "_managerAddress", "type": "address" }
            ]
        },
        {
            "name": "_impulseNFTCollection",
            "inputs": [],
            "outputs": [
                { "name": "_impulseNFTCollection", "type": "address" }
            ]
        },
        {
            "name": "_stakeNFTCollection",
            "inputs": [],
            "outputs": [
                { "name": "_stakeNFTCollection", "type": "address" }
            ]
        },
        {
            "name": "_possibleImpulseNFTToStake",
            "inputs": [],
            "outputs": [
                { "name": "_possibleImpulseNFTToStake", "type": "uint256" }
            ]
        },
        {
            "name": "_await_INFTStake_impulseStaked",
            "inputs": [
                { "name": "value0", "type": "uint256" }
            ],
            "outputs": []
        },
        {
            "name": "_await_ITIP4_1NFT_getInfo",
            "inputs": [
                { "name": "id", "type": "uint256" },
                { "name": "owner", "type": "address" },
                { "name": "manager", "type": "address" },
                { "name": "collection", "type": "address" }
            ],
            "outputs": []
        },
        {
            "name": "_await_ITIP4_1Collection_nftAddress",
            "inputs": [
                { "name": "nft", "type": "address" }
            ],
            "outputs": []
        }
    ],
    "data": [
        { "key": 1, "name": "parent", "type": "address" },
        { "key": 2, "name": "_owner", "type": "address" },
        { "key": 3, "name": "_managerAddress", "type": "address" }
    ],
    "events": [],
    "fields": [
        { "name": "_pubkey", "type": "uint256" },
        { "name": "_timestamp", "type": "uint64" },
        { "name": "_constructorFlag", "type": "bool" },
        { "name": "_await", "type": "optional(cell)" },
        { "name": "parent", "type": "address" },
        { "name": "_owner", "type": "address" },
        { "name": "_managerAddress", "type": "address" },
        { "name": "_impulseNFTCollection", "type": "address" },
        { "name": "_stakeNFTCollection", "type": "address" },
        { "name": "_possibleImpulseNFTToStake", "type": "uint256" },
        { "name": "_impulseStaked", "type": "address" },
        { "name": "myStaked", "type": "uint256" },
        { "components": [{ "name": "nft", "type": "address" }, { "name": "_owner", "type": "address" }, { "name": "collectionContract", "type": "address" }, { "name": "tokenId", "type": "uint256" }, { "name": "stakedTimestamp", "type": "uint256" }, { "name": "lastClaimTimestamp", "type": "uint256" }], "name": "stakedNFTs", "type": "map(address,tuple)" }
    ]
}

const saleABI = {
    "ABI version": 2,
    "version": "2.2",
    "header": ["pubkey", "time", "expire"],
    "functions": [{
            "name": "constructor",
            "inputs": [
                { "name": "ownerAddress", "type": "address" },
                { "name": "distributedTokenRoot", "type": "address" },
                { "name": "rate", "type": "uint128" },
                { "name": "minbuy", "type": "uint128" },
                { "name": "maxbuy", "type": "uint128" },
                { "name": "starttime", "type": "uint128" },
                { "name": "endtime", "type": "uint128" },
                { "name": "liqpercentage", "type": "uint128" },
                { "name": "supply", "type": "uint256" },
                { "name": "toRefund", "type": "bool" },
                { "name": "softcap", "type": "uint128" },
                { "name": "refBonusPercentage", "type": "uint128" },
                { "name": "managerAddress", "type": "address" },
                { "name": "liquidityAddress", "type": "address" },
                { "name": "salePercentage", "type": "uint128" }
            ],
            "outputs": []
        },
        {
            "name": "makeCommitment",
            "inputs": [
                { "name": "referrer", "type": "address" }
            ],
            "outputs": []
        },
        {
            "name": "userSingle",
            "inputs": [
                { "name": "account", "type": "address" }
            ],
            "outputs": [
                { "name": "value0", "type": "address" }
            ]
        },
        {
            "name": "emergencyRetrieveCommitments",
            "inputs": [],
            "outputs": []
        },
        {
            "name": "isSaleOver",
            "inputs": [],
            "outputs": [
                { "name": "value0", "type": "bool" }
            ]
        },
        {
            "name": "retrieveCommitments",
            "inputs": [],
            "outputs": []
        },
        {
            "name": "claimDistributedToken",
            "inputs": [],
            "outputs": []
        },
        {
            "name": "getRefund",
            "inputs": [],
            "outputs": []
        },
        {
            "name": "setManagerAddress",
            "inputs": [
                { "name": "manager", "type": "address" }
            ],
            "outputs": []
        },
        {
            "name": "setSaleState",
            "inputs": [],
            "outputs": []
        },
        {
            "name": "setLiquidityAddress",
            "inputs": [
                { "name": "liqwallet", "type": "address" }
            ],
            "outputs": []
        },
        {
            "name": "setSalePercentage",
            "inputs": [
                { "name": "salerPercent", "type": "uint128" }
            ],
            "outputs": []
        },
        {
            "name": "setRedeemed",
            "inputs": [],
            "outputs": []
        },
        {
            "name": "getLeftOverTokens",
            "inputs": [
                { "name": "receiver", "type": "address" }
            ],
            "outputs": []
        },
        {
            "name": "getLiquidityTokens",
            "inputs": [
                { "name": "receiver", "type": "address" },
                { "name": "amount", "type": "uint256" }
            ],
            "outputs": []
        },
        {
            "name": "getTokensByWallet",
            "inputs": [
                { "name": "receiver", "type": "address" },
                { "name": "wallet", "type": "address" }
            ],
            "outputs": []
        },
        {
            "name": "getVenomBalance",
            "inputs": [
                { "name": "answerId", "type": "uint32" }
            ],
            "outputs": [
                { "name": "value0", "type": "uint128" }
            ]
        },
        {
            "name": "_ownerAddress",
            "inputs": [],
            "outputs": [
                { "name": "_ownerAddress", "type": "address" }
            ]
        },
        {
            "name": "_managerContract",
            "inputs": [],
            "outputs": [
                { "name": "_managerContract", "type": "address" }
            ]
        },
        {
            "name": "_managerAddress",
            "inputs": [],
            "outputs": [
                { "name": "_managerAddress", "type": "address" }
            ]
        },
        {
            "name": "_liquidityAddress",
            "inputs": [],
            "outputs": [
                { "name": "_liquidityAddress", "type": "address" }
            ]
        },
        {
            "name": "_salePercentage",
            "inputs": [],
            "outputs": [
                { "name": "_salePercentage", "type": "uint128" }
            ]
        },
        {
            "name": "_distributedTokenRoot",
            "inputs": [],
            "outputs": [
                { "name": "_distributedTokenRoot", "type": "address" }
            ]
        },
        {
            "name": "_distributedTokenWallet",
            "inputs": [],
            "outputs": [
                { "name": "_distributedTokenWallet", "type": "address" }
            ]
        },
        {
            "name": "_rate",
            "inputs": [],
            "outputs": [
                { "name": "_rate", "type": "uint128" }
            ]
        },
        {
            "name": "_minbuy",
            "inputs": [],
            "outputs": [
                { "name": "_minbuy", "type": "uint128" }
            ]
        },
        {
            "name": "_maxbuy",
            "inputs": [],
            "outputs": [
                { "name": "_maxbuy", "type": "uint128" }
            ]
        },
        {
            "name": "_starttime",
            "inputs": [],
            "outputs": [
                { "name": "_starttime", "type": "uint128" }
            ]
        },
        {
            "name": "_endtime",
            "inputs": [],
            "outputs": [
                { "name": "_endtime", "type": "uint128" }
            ]
        },
        {
            "name": "_liqpercentage",
            "inputs": [],
            "outputs": [
                { "name": "_liqpercentage", "type": "uint128" }
            ]
        },
        {
            "name": "_supply",
            "inputs": [],
            "outputs": [
                { "name": "_supply", "type": "uint256" }
            ]
        },
        {
            "name": "_toRefund",
            "inputs": [],
            "outputs": [
                { "name": "_toRefund", "type": "bool" }
            ]
        },
        {
            "name": "_softcap",
            "inputs": [],
            "outputs": [
                { "name": "_softcap", "type": "uint128" }
            ]
        },
        {
            "name": "_refBonusPercentage",
            "inputs": [],
            "outputs": [
                { "name": "_refBonusPercentage", "type": "uint128" }
            ]
        },
        {
            "name": "_reconciled",
            "inputs": [],
            "outputs": [
                { "name": "_reconciled", "type": "bool" }
            ]
        },
        {
            "name": "_startRedeem",
            "inputs": [],
            "outputs": [
                { "name": "_startRedeem", "type": "bool" }
            ]
        },
        {
            "name": "_totalCommited",
            "inputs": [],
            "outputs": [
                { "name": "_totalCommited", "type": "uint128" }
            ]
        },
        {
            "name": "_totalRefEarnings",
            "inputs": [],
            "outputs": [
                { "name": "_totalRefEarnings", "type": "uint128" }
            ]
        },
        {
            "name": "_await_ISaleSingle_resetToZero",
            "inputs": [
                { "name": "value0", "type": "bool" }
            ],
            "outputs": []
        },
        {
            "name": "_await_ISaleSingle_getInfo",
            "inputs": [
                { "components": [{ "name": "commited", "type": "uint128" }, { "name": "refEarnings", "type": "uint128" }], "name": "value0", "type": "tuple" }
            ],
            "outputs": []
        },
        {
            "name": "_await_ISaleSingle_updateCommit",
            "inputs": [
                { "name": "value0", "type": "bool" }
            ],
            "outputs": []
        },
        {
            "name": "_await_ISaleSingle_updateRef",
            "inputs": [
                { "name": "value0", "type": "bool" }
            ],
            "outputs": []
        },
        {
            "name": "_await_TIP3TokenWallet_balance",
            "inputs": [
                { "name": "value0", "type": "uint128" }
            ],
            "outputs": []
        },
        {
            "name": "_await_ITokenRoot_deployWallet",
            "inputs": [
                { "name": "value0", "type": "address" }
            ],
            "outputs": []
        }
    ],
    "data": [
        { "key": 1, "name": "_owner", "type": "uint256" },
        { "key": 2, "name": "_manager", "type": "uint256" },
        { "key": 3, "name": "_nonce", "type": "uint256" },
        { "key": 4, "name": "_singleCode", "type": "cell" }
    ],
    "events": [{
            "name": "commitEvent",
            "inputs": [
                { "name": "saleAddress", "type": "address" },
                { "name": "amount", "type": "uint128" },
                { "name": "buyer", "type": "address" },
                { "name": "single", "type": "address" }
            ],
            "outputs": []
        },
        {
            "name": "refundEvent",
            "inputs": [
                { "name": "saleAddress", "type": "address" },
                { "name": "amount", "type": "uint128" },
                { "name": "sender", "type": "address" },
                { "name": "single", "type": "address" }
            ],
            "outputs": []
        },
        {
            "name": "claimEvent",
            "inputs": [
                { "name": "saleAddress", "type": "address" },
                { "name": "amount", "type": "uint128" },
                { "name": "owner", "type": "address" }
            ],
            "outputs": []
        },
        {
            "name": "distributedClaim",
            "inputs": [
                { "name": "saleAddress", "type": "address" },
                { "name": "amount", "type": "uint128" },
                { "name": "owner", "type": "address" },
                { "name": "single", "type": "address" }
            ],
            "outputs": []
        }
    ],
    "fields": [
        { "name": "_pubkey", "type": "uint256" },
        { "name": "_timestamp", "type": "uint64" },
        { "name": "_constructorFlag", "type": "bool" },
        { "name": "_await", "type": "optional(cell)" },
        { "name": "_owner", "type": "uint256" },
        { "name": "_manager", "type": "uint256" },
        { "name": "_nonce", "type": "uint256" },
        { "name": "_singleCode", "type": "cell" },
        { "name": "_ownerAddress", "type": "address" },
        { "name": "_managerContract", "type": "address" },
        { "name": "_managerAddress", "type": "address" },
        { "name": "_liquidityAddress", "type": "address" },
        { "name": "_salePercentage", "type": "uint128" },
        { "name": "_distributedTokenRoot", "type": "address" },
        { "name": "_distributedTokenWallet", "type": "address" },
        { "name": "_rate", "type": "uint128" },
        { "name": "_minbuy", "type": "uint128" },
        { "name": "_maxbuy", "type": "uint128" },
        { "name": "_starttime", "type": "uint128" },
        { "name": "_endtime", "type": "uint128" },
        { "name": "_liqpercentage", "type": "uint128" },
        { "name": "_supply", "type": "uint256" },
        { "name": "_toRefund", "type": "bool" },
        { "name": "_softcap", "type": "uint128" },
        { "name": "_refBonusPercentage", "type": "uint128" },
        { "name": "_reconciled", "type": "bool" },
        { "name": "_startRedeem", "type": "bool" },
        { "name": "_totalCommited", "type": "uint128" },
        { "name": "_totalRefEarnings", "type": "uint128" }
    ]
}


const tokenWalletABI = {
    "ABI version": 2,
    "version": "2.2",
    "header": ["pubkey", "time", "expire"],
    "functions": [{
            "name": "constructor",
            "inputs": [],
            "outputs": []
        },
        {
            "name": "supportsInterface",
            "inputs": [
                { "name": "answerId", "type": "uint32" },
                { "name": "interfaceID", "type": "uint32" }
            ],
            "outputs": [
                { "name": "value0", "type": "bool" }
            ]
        },
        {
            "name": "destroy",
            "inputs": [
                { "name": "remainingGasTo", "type": "address" }
            ],
            "outputs": []
        },
        {
            "name": "burnByRoot",
            "inputs": [
                { "name": "amount", "type": "uint128" },
                { "name": "remainingGasTo", "type": "address" },
                { "name": "callbackTo", "type": "address" },
                { "name": "payload", "type": "cell" }
            ],
            "outputs": []
        },
        {
            "name": "burn",
            "inputs": [
                { "name": "amount", "type": "uint128" },
                { "name": "remainingGasTo", "type": "address" },
                { "name": "callbackTo", "type": "address" },
                { "name": "payload", "type": "cell" }
            ],
            "outputs": []
        },
        {
            "name": "balance",
            "inputs": [
                { "name": "answerId", "type": "uint32" }
            ],
            "outputs": [
                { "name": "value0", "type": "uint128" }
            ]
        },
        {
            "name": "owner",
            "inputs": [
                { "name": "answerId", "type": "uint32" }
            ],
            "outputs": [
                { "name": "value0", "type": "address" }
            ]
        },
        {
            "name": "root",
            "inputs": [
                { "name": "answerId", "type": "uint32" }
            ],
            "outputs": [
                { "name": "value0", "type": "address" }
            ]
        },
        {
            "name": "walletCode",
            "inputs": [
                { "name": "answerId", "type": "uint32" }
            ],
            "outputs": [
                { "name": "value0", "type": "cell" }
            ]
        },
        {
            "name": "transfer",
            "inputs": [
                { "name": "amount", "type": "uint128" },
                { "name": "recipient", "type": "address" },
                { "name": "deployWalletValue", "type": "uint128" },
                { "name": "remainingGasTo", "type": "address" },
                { "name": "notify", "type": "bool" },
                { "name": "payload", "type": "cell" }
            ],
            "outputs": []
        },
        {
            "name": "transferToWallet",
            "inputs": [
                { "name": "amount", "type": "uint128" },
                { "name": "recipientTokenWallet", "type": "address" },
                { "name": "remainingGasTo", "type": "address" },
                { "name": "notify", "type": "bool" },
                { "name": "payload", "type": "cell" }
            ],
            "outputs": []
        },
        {
            "name": "acceptTransfer",
            "id": "0x67A0B95F",
            "inputs": [
                { "name": "amount", "type": "uint128" },
                { "name": "sender", "type": "address" },
                { "name": "remainingGasTo", "type": "address" },
                { "name": "notify", "type": "bool" },
                { "name": "payload", "type": "cell" }
            ],
            "outputs": []
        },
        {
            "name": "acceptMint",
            "id": "0x4384F298",
            "inputs": [
                { "name": "amount", "type": "uint128" },
                { "name": "remainingGasTo", "type": "address" },
                { "name": "notify", "type": "bool" },
                { "name": "payload", "type": "cell" }
            ],
            "outputs": []
        },
        {
            "name": "sendSurplusGas",
            "inputs": [
                { "name": "to", "type": "address" }
            ],
            "outputs": []
        }
    ],
    "data": [
        { "key": 1, "name": "root_", "type": "address" },
        { "key": 2, "name": "owner_", "type": "address" }
    ],
    "events": [],
    "fields": [
        { "name": "_pubkey", "type": "uint256" },
        { "name": "_timestamp", "type": "uint64" },
        { "name": "_constructorFlag", "type": "bool" },
        { "name": "root_", "type": "address" },
        { "name": "owner_", "type": "address" },
        { "name": "balance_", "type": "uint128" }
    ]
}

const tokenRootABI = {
    "ABI version": 2,
    "version": "2.2",
    "header": ["pubkey", "time", "expire"],
    "functions": [{
            "name": "constructor",
            "inputs": [
                { "name": "initialSupplyTo", "type": "address" },
                { "name": "initialSupply", "type": "uint128" },
                { "name": "deployWalletValue", "type": "uint128" },
                { "name": "mintDisabled", "type": "bool" },
                { "name": "burnByRootDisabled", "type": "bool" },
                { "name": "burnPaused", "type": "bool" },
                { "name": "remainingGasTo", "type": "address" }
            ],
            "outputs": []
        },
        {
            "name": "supportsInterface",
            "inputs": [
                { "name": "answerId", "type": "uint32" },
                { "name": "interfaceID", "type": "uint32" }
            ],
            "outputs": [
                { "name": "value0", "type": "bool" }
            ]
        },
        {
            "name": "disableMint",
            "inputs": [
                { "name": "answerId", "type": "uint32" }
            ],
            "outputs": [
                { "name": "value0", "type": "bool" }
            ]
        },
        {
            "name": "mintDisabled",
            "inputs": [
                { "name": "answerId", "type": "uint32" }
            ],
            "outputs": [
                { "name": "value0", "type": "bool" }
            ]
        },
        {
            "name": "burnTokens",
            "inputs": [
                { "name": "amount", "type": "uint128" },
                { "name": "walletOwner", "type": "address" },
                { "name": "remainingGasTo", "type": "address" },
                { "name": "callbackTo", "type": "address" },
                { "name": "payload", "type": "cell" }
            ],
            "outputs": []
        },
        {
            "name": "disableBurnByRoot",
            "inputs": [
                { "name": "answerId", "type": "uint32" }
            ],
            "outputs": [
                { "name": "value0", "type": "bool" }
            ]
        },
        {
            "name": "burnByRootDisabled",
            "inputs": [
                { "name": "answerId", "type": "uint32" }
            ],
            "outputs": [
                { "name": "value0", "type": "bool" }
            ]
        },
        {
            "name": "burnPaused",
            "inputs": [
                { "name": "answerId", "type": "uint32" }
            ],
            "outputs": [
                { "name": "value0", "type": "bool" }
            ]
        },
        {
            "name": "setBurnPaused",
            "inputs": [
                { "name": "answerId", "type": "uint32" },
                { "name": "paused", "type": "bool" }
            ],
            "outputs": [
                { "name": "value0", "type": "bool" }
            ]
        },
        {
            "name": "transferOwnership",
            "inputs": [
                { "name": "newOwner", "type": "address" },
                { "name": "remainingGasTo", "type": "address" },
                { "components": [{ "name": "value", "type": "uint128" }, { "name": "payload", "type": "cell" }], "name": "callbacks", "type": "map(address,tuple)" }
            ],
            "outputs": []
        },
        {
            "name": "name",
            "inputs": [
                { "name": "answerId", "type": "uint32" }
            ],
            "outputs": [
                { "name": "value0", "type": "string" }
            ]
        },
        {
            "name": "symbol",
            "inputs": [
                { "name": "answerId", "type": "uint32" }
            ],
            "outputs": [
                { "name": "value0", "type": "string" }
            ]
        },
        {
            "name": "decimals",
            "inputs": [
                { "name": "answerId", "type": "uint32" }
            ],
            "outputs": [
                { "name": "value0", "type": "uint8" }
            ]
        },
        {
            "name": "totalSupply",
            "inputs": [
                { "name": "answerId", "type": "uint32" }
            ],
            "outputs": [
                { "name": "value0", "type": "uint128" }
            ]
        },
        {
            "name": "walletCode",
            "inputs": [
                { "name": "answerId", "type": "uint32" }
            ],
            "outputs": [
                { "name": "value0", "type": "cell" }
            ]
        },
        {
            "name": "rootOwner",
            "inputs": [
                { "name": "answerId", "type": "uint32" }
            ],
            "outputs": [
                { "name": "value0", "type": "address" }
            ]
        },
        {
            "name": "walletOf",
            "inputs": [
                { "name": "answerId", "type": "uint32" },
                { "name": "walletOwner", "type": "address" }
            ],
            "outputs": [
                { "name": "value0", "type": "address" }
            ]
        },
        {
            "name": "deployWallet",
            "inputs": [
                { "name": "answerId", "type": "uint32" },
                { "name": "walletOwner", "type": "address" },
                { "name": "deployWalletValue", "type": "uint128" }
            ],
            "outputs": [
                { "name": "tokenWallet", "type": "address" }
            ]
        },
        {
            "name": "mint",
            "inputs": [
                { "name": "amount", "type": "uint128" },
                { "name": "recipient", "type": "address" },
                { "name": "deployWalletValue", "type": "uint128" },
                { "name": "remainingGasTo", "type": "address" },
                { "name": "notify", "type": "bool" },
                { "name": "payload", "type": "cell" }
            ],
            "outputs": []
        },
        {
            "name": "acceptBurn",
            "id": "0x192B51B1",
            "inputs": [
                { "name": "amount", "type": "uint128" },
                { "name": "walletOwner", "type": "address" },
                { "name": "remainingGasTo", "type": "address" },
                { "name": "callbackTo", "type": "address" },
                { "name": "payload", "type": "cell" }
            ],
            "outputs": []
        },
        {
            "name": "sendSurplusGas",
            "inputs": [
                { "name": "to", "type": "address" }
            ],
            "outputs": []
        }
    ],
    "data": [
        { "key": 1, "name": "name_", "type": "string" },
        { "key": 2, "name": "symbol_", "type": "string" },
        { "key": 3, "name": "decimals_", "type": "uint8" },
        { "key": 4, "name": "rootOwner_", "type": "address" },
        { "key": 5, "name": "walletCode_", "type": "cell" },
        { "key": 6, "name": "randomNonce_", "type": "uint256" },
        { "key": 7, "name": "deployer_", "type": "address" }
    ],
    "events": [],
    "fields": [
        { "name": "_pubkey", "type": "uint256" },
        { "name": "_timestamp", "type": "uint64" },
        { "name": "_constructorFlag", "type": "bool" },
        { "name": "name_", "type": "string" },
        { "name": "symbol_", "type": "string" },
        { "name": "decimals_", "type": "uint8" },
        { "name": "rootOwner_", "type": "address" },
        { "name": "walletCode_", "type": "cell" },
        { "name": "totalSupply_", "type": "uint128" },
        { "name": "burnPaused_", "type": "bool" },
        { "name": "burnByRootDisabled_", "type": "bool" },
        { "name": "mintDisabled_", "type": "bool" },
        { "name": "randomNonce_", "type": "uint256" },
        { "name": "deployer_", "type": "address" }
    ]
}

const chefABI = {
    "ABI version": 2,
    "version": "2.2",
    "header": ["pubkey", "time", "expire"],
    "functions": [{
            "name": "constructor",
            "inputs": [
                { "name": "owner", "type": "address" }
            ],
            "outputs": []
        },
        {
            "name": "makePayment",
            "inputs": [],
            "outputs": []
        },
        {
            "name": "getPayment",
            "inputs": [
                { "name": "answerId", "type": "uint32" },
                { "name": "_account", "type": "address" }
            ],
            "outputs": [
                { "components": [{ "name": "id", "type": "uint256" }, { "name": "amount", "type": "uint256" }], "name": "value0", "type": "tuple" }
            ]
        },
        {
            "name": "updateOwner",
            "inputs": [
                { "name": "newOwner", "type": "address" }
            ],
            "outputs": []
        },
        {
            "name": "_managerAddress",
            "inputs": [],
            "outputs": [
                { "name": "_managerAddress", "type": "address" }
            ]
        }
    ],
    "data": [
        { "key": 1, "name": "_nonce", "type": "uint256" }
    ],
    "events": [],
    "fields": [
        { "name": "_pubkey", "type": "uint256" },
        { "name": "_timestamp", "type": "uint64" },
        { "name": "_constructorFlag", "type": "bool" },
        { "name": "_nonce", "type": "uint256" },
        { "name": "_managerAddress", "type": "address" },
        { "components": [{ "name": "id", "type": "uint256" }, { "name": "amount", "type": "uint256" }], "name": "payments", "type": "map(address,tuple)" }
    ]
}


const lockerABI = {
    "ABI version": 2,
    "version": "2.2",
    "header": ["pubkey", "time", "expire"],
    "functions": [{
            "name": "constructor",
            "inputs": [
                { "name": "lockTokenRoot", "type": "address" },
                { "name": "fee", "type": "uint256" },
                { "name": "manager", "type": "address" },
                { "components": [{ "name": "amount", "type": "uint256" }, { "name": "unlock", "type": "uint256" }, { "name": "recipient", "type": "address" }], "name": "locks", "type": "tuple[]" }
            ],
            "outputs": []
        },
        {
            "name": "onAcceptTokensTransfer",
            "inputs": [
                { "name": "tokenRoot", "type": "address" },
                { "name": "amount", "type": "uint128" },
                { "name": "sender", "type": "address" },
                { "name": "senderWallet", "type": "address" },
                { "name": "remainingGasTo", "type": "address" },
                { "name": "payload", "type": "cell" }
            ],
            "outputs": []
        },
        {
            "name": "isReady",
            "inputs": [],
            "outputs": [
                { "name": "value0", "type": "bool" }
            ]
        },
        {
            "name": "unLock",
            "inputs": [
                { "name": "_lockId", "type": "uint256" }
            ],
            "outputs": []
        },
        {
            "name": "increaseUnlock",
            "inputs": [
                { "name": "_lockId", "type": "uint256" },
                { "name": "_newTime", "type": "uint256" }
            ],
            "outputs": []
        },
        {
            "name": "getLock",
            "inputs": [
                { "name": "_lockid", "type": "uint256" }
            ],
            "outputs": [
                { "components": [{ "name": "amount", "type": "uint256" }, { "name": "unlock", "type": "uint256" }, { "name": "claimed", "type": "bool" }, { "name": "supplied", "type": "bool" }, { "name": "recipient", "type": "address" }], "name": "value0", "type": "tuple" }
            ]
        },
        {
            "name": "setLockFee",
            "inputs": [
                { "name": "fee", "type": "uint128" }
            ],
            "outputs": []
        },
        {
            "name": "setManager",
            "inputs": [
                { "name": "manager", "type": "address" }
            ],
            "outputs": []
        },
        {
            "name": "getStuckedTokens",
            "inputs": [
                { "name": "receiver", "type": "address" }
            ],
            "outputs": []
        },
        {
            "name": "getTokensByWallet",
            "inputs": [
                { "name": "receiver", "type": "address" },
                { "name": "wallet", "type": "address" }
            ],
            "outputs": []
        },
        {
            "name": "_lockTokenRoot",
            "inputs": [],
            "outputs": [
                { "name": "_lockTokenRoot", "type": "address" }
            ]
        },
        {
            "name": "_lockTokenWallet",
            "inputs": [],
            "outputs": [
                { "name": "_lockTokenWallet", "type": "address" }
            ]
        },
        {
            "name": "_fee",
            "inputs": [],
            "outputs": [
                { "name": "_fee", "type": "uint256" }
            ]
        },
        {
            "name": "_manager",
            "inputs": [],
            "outputs": [
                { "name": "_manager", "type": "address" }
            ]
        },
        {
            "name": "allLockIds",
            "inputs": [],
            "outputs": [
                { "name": "allLockIds", "type": "uint256[]" }
            ]
        },
        {
            "name": "amountLocked",
            "inputs": [],
            "outputs": [
                { "name": "amountLocked", "type": "uint256" }
            ]
        },
        {
            "name": "_await_ITokenRoot_deployWallet",
            "inputs": [
                { "name": "value0", "type": "address" }
            ],
            "outputs": []
        },
        {
            "name": "_await_TIP3TokenWallet_balance",
            "inputs": [
                { "name": "value0", "type": "uint128" }
            ],
            "outputs": []
        }
    ],
    "data": [
        { "key": 1, "name": "_nonce", "type": "uint256" }
    ],
    "events": [{
            "name": "lockEvent",
            "inputs": [
                { "name": "amount", "type": "uint256" },
                { "name": "sender", "type": "address" },
                { "name": "timestamp", "type": "uint128" }
            ],
            "outputs": []
        },
        {
            "name": "unlockEvent",
            "inputs": [
                { "name": "amount", "type": "uint256" },
                { "name": "recipient", "type": "address" },
                { "name": "timestamp", "type": "uint128" }
            ],
            "outputs": []
        }
    ],
    "fields": [
        { "name": "_pubkey", "type": "uint256" },
        { "name": "_timestamp", "type": "uint64" },
        { "name": "_constructorFlag", "type": "bool" },
        { "name": "_await", "type": "optional(cell)" },
        { "name": "_nonce", "type": "uint256" },
        { "name": "_lockTokenRoot", "type": "address" },
        { "name": "_lockTokenWallet", "type": "address" },
        { "name": "_fee", "type": "uint256" },
        { "name": "_manager", "type": "address" },
        { "components": [{ "name": "amount", "type": "uint256" }, { "name": "unlock", "type": "uint256" }, { "name": "claimed", "type": "bool" }, { "name": "supplied", "type": "bool" }, { "name": "recipient", "type": "address" }], "name": "lockIds", "type": "map(uint256,tuple)" },
        { "name": "allLockIds", "type": "uint256[]" },
        { "name": "amountLocked", "type": "uint256" }
    ]
}

const pairABI = {
    "ABI version": 2,
    "version": "2.2",
    "header": ["pubkey", "time", "expire"],
    "functions": [{
            "name": "constructor",
            "inputs": [],
            "outputs": []
        },
        {
            "name": "onToken0Wallet",
            "inputs": [
                { "name": "value", "type": "address" }
            ],
            "outputs": []
        },
        {
            "name": "onToken1Wallet",
            "inputs": [
                { "name": "value", "type": "address" }
            ],
            "outputs": []
        },
        {
            "name": "reserveZero",
            "inputs": [
                { "name": "answerId", "type": "uint32" }
            ],
            "outputs": [
                { "name": "value0", "type": "uint256" }
            ]
        },
        {
            "name": "reserveOne",
            "inputs": [
                { "name": "answerId", "type": "uint32" }
            ],
            "outputs": [
                { "name": "value0", "type": "uint256" }
            ]
        },
        {
            "name": "addLiquidity",
            "inputs": [
                { "name": "in0", "type": "uint256" },
                { "name": "in1", "type": "uint256" },
                { "name": "time", "type": "uint256" },
                { "name": "_owner", "type": "address" }
            ],
            "outputs": []
        },
        {
            "name": "onAcceptTokensTransfer",
            "inputs": [
                { "name": "tokenRoot", "type": "address" },
                { "name": "amount", "type": "uint128" },
                { "name": "sender", "type": "address" },
                { "name": "value3", "type": "address" },
                { "name": "value4", "type": "address" },
                { "name": "payload", "type": "cell" }
            ],
            "outputs": []
        },
        {
            "name": "liqOut",
            "inputs": [
                { "name": "answerId", "type": "uint32" },
                { "name": "shares", "type": "uint256" }
            ],
            "outputs": [
                { "name": "value0", "type": "uint256" },
                { "name": "value1", "type": "uint256" }
            ]
        },
        {
            "name": "_amountOut",
            "inputs": [
                { "name": "answerId", "type": "uint32" },
                { "name": "_tokenRoot", "type": "address" },
                { "name": "amount", "type": "uint128" }
            ],
            "outputs": [
                { "name": "value0", "type": "uint256" }
            ]
        },
        {
            "name": "encoder",
            "inputs": [
                { "name": "min", "type": "uint256" },
                { "name": "patch", "type": "address" },
                { "name": "receiver", "type": "address" },
                { "name": "stage", "type": "uint8" }
            ],
            "outputs": [
                { "name": "data", "type": "cell" }
            ]
        },
        {
            "name": "decodeSwapCell",
            "inputs": [
                { "name": "data", "type": "cell" }
            ],
            "outputs": [
                { "name": "minimum", "type": "uint256" },
                { "name": "next_pair", "type": "address" },
                { "name": "receiver", "type": "address" },
                { "name": "stage", "type": "uint8" }
            ]
        },
        {
            "name": "emiter",
            "inputs": [],
            "outputs": [
                { "name": "emiter", "type": "address" }
            ]
        },
        {
            "name": "WVENOM",
            "inputs": [],
            "outputs": [
                { "name": "WVENOM", "type": "address" }
            ]
        },
        {
            "name": "token0",
            "inputs": [],
            "outputs": [
                { "name": "token0", "type": "address" }
            ]
        },
        {
            "name": "token1",
            "inputs": [],
            "outputs": [
                { "name": "token1", "type": "address" }
            ]
        },
        {
            "name": "token0Wallet",
            "inputs": [],
            "outputs": [
                { "name": "token0Wallet", "type": "address" }
            ]
        },
        {
            "name": "token1Wallet",
            "inputs": [],
            "outputs": [
                { "name": "token1Wallet", "type": "address" }
            ]
        },
        {
            "name": "reserve0",
            "inputs": [],
            "outputs": [
                { "name": "reserve0", "type": "uint256" }
            ]
        },
        {
            "name": "reserve1",
            "inputs": [],
            "outputs": [
                { "name": "reserve1", "type": "uint256" }
            ]
        },
        {
            "name": "totalSupply",
            "inputs": [],
            "outputs": [
                { "name": "totalSupply", "type": "uint256" }
            ]
        },
        {
            "name": "LPRoot",
            "inputs": [],
            "outputs": [
                { "name": "LPRoot", "type": "address" }
            ]
        },
        {
            "name": "_await_ITokenRoot_walletOf",
            "inputs": [
                { "name": "value0", "type": "address" }
            ],
            "outputs": []
        },
        {
            "name": "_await_TIP3TokenRoot_symbol",
            "inputs": [
                { "name": "value0", "type": "string" }
            ],
            "outputs": []
        }
    ],
    "data": [
        { "key": 1, "name": "manager", "type": "address" },
        { "key": 2, "name": "_rootCode", "type": "cell" },
        { "key": 3, "name": "walletCode_", "type": "cell" },
        { "key": 4, "name": "_nonce", "type": "uint256" },
        { "key": 5, "name": "emiter", "type": "address" },
        { "key": 6, "name": "WVENOM", "type": "address" },
        { "key": 7, "name": "token0", "type": "address" },
        { "key": 8, "name": "token1", "type": "address" }
    ],
    "events": [],
    "fields": [
        { "name": "_pubkey", "type": "uint256" },
        { "name": "_timestamp", "type": "uint64" },
        { "name": "_constructorFlag", "type": "bool" },
        { "name": "_await", "type": "optional(cell)" },
        { "name": "manager", "type": "address" },
        { "name": "_rootCode", "type": "cell" },
        { "name": "walletCode_", "type": "cell" },
        { "name": "_nonce", "type": "uint256" },
        { "name": "emiter", "type": "address" },
        { "name": "WVENOM", "type": "address" },
        { "name": "token0", "type": "address" },
        { "name": "token1", "type": "address" },
        { "name": "token0Wallet", "type": "address" },
        { "name": "token1Wallet", "type": "address" },
        { "name": "reserve0", "type": "uint256" },
        { "name": "reserve1", "type": "uint256" },
        { "name": "totalSupply", "type": "uint256" },
        { "name": "fee", "type": "uint256" },
        { "name": "LPRoot", "type": "address" }
    ]
}


const emitterABI = {
    "ABI version": 2,
    "version": "2.2",
    "header": ["pubkey", "time", "expire"],
    "functions": [{
            "name": "constructor",
            "inputs": [],
            "outputs": []
        },
        {
            "name": "swap",
            "inputs": [
                { "name": "time", "type": "uint256" },
                { "name": "receiver", "type": "address" },
                { "name": "amount", "type": "uint256" },
                { "name": "amountInWithFee", "type": "uint256" },
                { "name": "amountOut", "type": "uint256" },
                { "name": "amountOutWithFee", "type": "uint256" },
                { "name": "rootIn", "type": "address" },
                { "name": "rootOut", "type": "address" },
                { "name": "reserve0", "type": "uint256" },
                { "name": "reserve1", "type": "uint256" }
            ],
            "outputs": []
        }
    ],
    "data": [
        { "key": 1, "name": "manager", "type": "address" },
        { "key": 2, "name": "_nonce", "type": "uint256" }
    ],
    "events": [{
        "name": "swapEvent",
        "inputs": [
            { "name": "user", "type": "address" },
            { "name": "amountIn", "type": "uint256" },
            { "name": "amountInWithFee", "type": "uint256" },
            { "name": "amountOut", "type": "uint256" },
            { "name": "amountOutWithFee", "type": "uint256" },
            { "name": "inRoot", "type": "address" },
            { "name": "outRoot", "type": "address" },
            { "name": "feeIn", "type": "uint256" },
            { "name": "feeOut", "type": "uint256" },
            { "name": "reserve0", "type": "uint256" },
            { "name": "reserve1", "type": "uint256" }
        ],
        "outputs": []
    }],
    "fields": [
        { "name": "_pubkey", "type": "uint256" },
        { "name": "_timestamp", "type": "uint64" },
        { "name": "_constructorFlag", "type": "bool" },
        { "name": "manager", "type": "address" },
        { "name": "_nonce", "type": "uint256" }
    ]
}

const WalletContract = {
    abi: tokenWalletABI,
    tvc: `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`,
    code: `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`,
    codeHash: `feac9c96c6859b7dadc72f7ac11fd6f965b0e5d6fa9de7e85ee8fd5ca50e6b48`,
};

module.exports = { saleABI, tokenWalletABI, tokenRootABI, symbioteToken, managerAddress, liquidityAddress, stakeABI, tokenSaleContract, USDTContract, tokenSaleABI, USDTABI, nftSTakeABI, LOGOURL, NFTAddress, indexABI, CHEF, chefABI, lockerABI, stakeSingleABI, nftStakeSingleABI, pairABI, emitter, emitterABI, WVENOM, WalletContract, USDT, USDC }
const { ProviderRpcClient, Contract } = require('everscale-inpage-provider');
const { TonClient, signerKeys } = require('@eversdk/core')
const assert = require('node:assert/strict');
const createError = require("http-errors");
//const { libNode } = require("@eversdk/lib-node");

// Application initialization
//TonClient.useBinaryLibrary(libNode)
    // For browser environment:
const { EverscaleStandaloneClient, Clock, GiverAccount, SimpleAccountsStorage, SimpleKeystore, EverWalletAccount } = require('everscale-standalone-client/nodejs');
const { managerAddress } = require('../config');
//const endpoint = "https://venom-testnet.evercloud.dev/0557f5cf837743e18d68f18eb1ffb279/graphql"
const endpoint = "https://gql-testnet.venom.foundation/graphql";


assert.ok(endpoint,
    "An endpoint is required. You can find it when creating a project at https://dashboard.evercloud.dev"
)
const giverContract = {
    abi: {
        "ABI version": 2,
        "data": [],
        "events": [],
        "fields": [{
                "name": "_pubkey",
                "type": "uint256"
            },
            {
                "name": "_timestamp",
                "type": "uint64"
            }
        ],
        "functions": [{
                "inputs": [{
                        "name": "dest",
                        "type": "address"
                    },
                    {
                        "name": "value",
                        "type": "uint128"
                    },
                    {
                        "name": "bounce",
                        "type": "bool"
                    },
                    {
                        "name": "flags",
                        "type": "uint8"
                    },
                    {
                        "name": "payload",
                        "type": "cell"
                    }
                ],
                "name": "sendTransaction",
                "outputs": []
            },
            {
                "inputs": [{
                        "name": "flags",
                        "type": "uint8"
                    },
                    {
                        "name": "message",
                        "type": "cell"
                    }
                ],
                "name": "sendTransactionRaw",
                "outputs": []
            }
        ],
        "header": [
            "pubkey",
            "time",
            "expire"
        ],
        "version": "2.3"
    },
};


let ever;

async function everline(next) {
    return new Promise(async(resolve, reject) => {
        try {
            client = new TonClient({ network: { endpoints: [endpoint] } })

            const giverAddress = managerAddress;
            const giverKeys = signerKeys({
                public: process.env.PUBLICKEY,
                secret: process.env.SECRETKEY,
            });

            const giverAccount = new GiverAccount({ address: giverAddress, publicKey: process.env.PUBLICKEY })

            const keystore = new SimpleKeystore()
            keystore.addKeyPair('giver', giverKeys)
            const clock = new Clock();
            ever = new ProviderRpcClient({
                forceUseFallback: true,
                fallback: () =>
                    EverscaleStandaloneClient.create({
                        clock,
                        connection: {
                            id: 1001,
                            group: 'testnet',
                            type: 'jrpc',
                            data: {
                                endpoint: 'https://jrpc-testnet.venom.foundation/rpc',
                            },
                        },
                        accountsStorage: new SimpleAccountsStorage({
                            entries: [giverAccount],
                        }),
                        keystore,
                    }),
            });

            //it is now established harsh has not been used before
            await ever.ensureInitialized();

            resolve({ ever, client: client ? client : false })

        } catch (error) {
            console.log("error happened here and here");
            if (next) {
                next(createError(422, error.message));
            }
            console.log(error.message)
        }
    })

}

module.exports = { everline }
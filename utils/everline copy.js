const { ProviderRpcClient } = require('everscale-inpage-provider');
const { TonClient, signerKeys } = require('@eversdk/core')
const assert = require('node:assert/strict');
const createError = require("http-errors");



// For browser environment:
const { EverscaleStandaloneClient, Clock, GiverAccount, SimpleAccountsStorage, SimpleKeystore, } = require('everscale-standalone-client/nodejs');
const { managerAddress } = require('../config');
const endpoint = "https://venom-testnet.evercloud.dev/0557f5cf837743e18d68f18eb1ffb279/graphql"
const jrpc = "https://jrpc-testnet.venom.foundation";
const mainnet = "https://jrpc.venom.foundation"

assert.ok(endpoint,
    "An endpoint is required. You can find it when creating a project at https://dashboard.evercloud.dev"
)


let ever;

async function everline() {

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
                //forceUseFallback: true,
                fallback: () => {
                    try {
                        EverscaleStandaloneClient.create({
                            clock,
                            connection: {
                                id: 1000,
                                group: 'testnet',
                                type: 'jrpc',
                                data: {
                                    endpoint: "https://jrpc-testnet.venom.foundation/rpc",
                                },
                            },
                            accountsStorage: new SimpleAccountsStorage({
                                entries: [giverAccount],
                            }),
                            keystore,
                        }).catch((e) => {
                            console.log(e.message)
                            resolve({ ever, client: client ? client : false })
                        })
                    } catch (error) {
                        resolve({ ever, client: client ? client : false })
                    }
                }
            });

            //it is now established harsh has not been used before
            await ever.ensureInitialized();
            resolve({ ever, client: client ? client : false })

        } catch (error) {
            reject(new Error(error.message))
        }
    })

}

module.exports = { everline }
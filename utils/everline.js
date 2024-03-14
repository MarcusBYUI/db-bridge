const { ProviderRpcClient } = require('everscale-inpage-provider');
const { TonClient } = require('@eversdk/core')
const assert = require('node:assert/strict');
const { libNode } = require("@eversdk/lib-node");

// Application initialization
TonClient.useBinaryLibrary(libNode)
    // For browser environment:
const { EverscaleStandaloneClient, SimpleKeystore } = require('everscale-standalone-client/nodejs');
//const endpoint = "https://venom-testnet.evercloud.dev/0557f5cf837743e18d68f18eb1ffb279/graphql"
const endpoint = "https://gql-testnet.venom.foundation/graphql";


assert.ok(endpoint,
    "An endpoint is required. You can find it when creating a project at https://dashboard.evercloud.dev"
)

const client = new TonClient({
    network: {
        endpoints: [
            endpoint
        ],
    },
});



const getEver = async() => {
    try {
        const ever = new ProviderRpcClient({
            fallback: () =>
                EverscaleStandaloneClient.create({
                    connection: {
                        id: 1010,
                        group: 'testnet',
                        type: 'jrpc',
                        data: {
                            endpoint: 'https://jrpc-testnet.venom.foundation/rpc',
                        },
                    },
                    // Manually creating a keystore for our client, because we haven't wallet extension here...we are not in browser
                    keystore: new SimpleKeystore({
                        [process.env.PUBLICKEY]: {
                            publicKey: process.env.PUBLICKEY,
                            secretKey: process.env.SECRETKEY,
                        }
                    }),
                }),
        });


        await ever.ensureInitialized();
        return ever
    } catch (error) {
        console.log(error);
    }
}

async function everline() {
    return { ever: await getEver(), client }
}

module.exports = { everline }
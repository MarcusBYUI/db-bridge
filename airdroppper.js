const dotenv = require("dotenv");
const { Account } = require("@eversdk/appkit");
dotenv.config();
const { signerKeys } = require('@eversdk/core');
const { everline } = require("./utils/everline");



const list = []


const main = async() => {
    try {

        const { client } = await everline().catch((err) => {
            throw new Error(err.message)
        });

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

        const giverAddress = "0:4c2bad8915a59c0f51fee82e49d925c33698d318d4af97d2f692a91891f99e77";
        // Keypair for the Giver
        const giverKeys = signerKeys({
            public: process.env.PUBLICKEY,
            secret: process.env.SECRETKEY,
        });

        // Create Giver's account
        const giverAccounts = new Account(giverContract, {
            client,
            address: giverAddress,
            signer: giverKeys,
        });

        const giverSendTo = async(address, value) => {
            // Run method `sendTransaction` for the Giver. You can use your custom account,
            // in this case, method name and arguments might vary:
            return await giverAccounts.run("sendTransaction", {
                dest: address,
                value,
                bounce: true,
                flags: 3,
                payload: "te6ccgEBAQEAAgAAAA=="
            });
        };

        // In order to implement giver's logics, we must implement `AccountGiver` interface
        const giver = {
            address: giverAddress,
            sendTo: async(address, value) => giverSendTo(address, value),
        };
        Account.setGiverForClient(client, giver);

        await new Promise(async(resolve) => {
            for (let i = 0; i < list.length; i++) {
                const element = list[i];
                const res = await giverSendTo(element, 20000000000).catch((e) => console.log(e))
                console.log(res.transaction.id);
                if (i == list.length - 1) {
                    console.log("Done Airdropping Tokens");
                }
            }
        })

        client.close();



    } catch (error) {
        console.log(error);
    }
}


module.exports = { main }
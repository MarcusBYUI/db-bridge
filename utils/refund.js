const { numberToTwoDecimals } = require("./index");
const { Address } = require("everscale-inpage-provider");
const { everline } = require("./everline");
const { chefABI, managerAddress, CHEF } = require("../config");
const { query } = require("../model/query");
const { signerKeys } = require('@eversdk/core')
const { Account } = require("@eversdk/appkit");




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


const sendRefund = async(address, ftoken, msg) => {
    return new Promise(async(resolve, reject) => {
        try {
            const { ever, client } = await everline().catch((err) => {
                throw new Error(err.message)
            });

            //get harsh
            //chech if its in sale or pool or nftpool or token
            const chefAddress = new Address(CHEF);


            const chefInstance = new ever.Contract(chefABI, chefAddress);
            const { value0 } = await chefInstance.methods.getPayment({ answerId: 0, _account: String(address) }).call();



            if (value0.amount == 0) {
                resolve("No payment found")
            }

            value0.amount = value0.amount / 10 ** 9

            const info = value0
            let result = []

            //check if harsh in table, if so return false
            const sales = await query(
                `SELECT * FROM sales WHERE harsh = ?`, [info.id]
            ).catch((err) => {
                resolve("sql err")
            });

            result.push(...sales)

            const pools = await query(
                `SELECT * FROM pools WHERE harsh = ?`, [info.id]
            ).catch((err) => {
                resolve("sql err")
            });

            result.push(...pools)

            const nftpool = await query(
                `SELECT * FROM nftpool WHERE harsh = ?`, [info.id]
            ).catch((err) => {
                resolve("sql err")
            });

            result.push(...nftpool)

            const locker = await query(
                `SELECT * FROM locker WHERE harsh = ?`, [info.id]
            ).catch((err) => {
                resolve("sql err")
            });

            result.push(...locker)

            const token = await query(
                `SELECT * FROM token WHERE harsh = ?`, [info.id]
            ).catch((err) => {
                resolve("sql err")
            });

            result.push(...token)

            if (result.length > 0) {
                resolve("harsh exists")
            }


            //add to refunded and amount as false if no duplicate error
            const percentage = ftoken ? 0.1 : 0.9;

            await query(`INSERT INTO refund (harsh, amount, address, reason) VALUES (?, ?, ?, ?) `, [info.id, (info.amount * percentage) * 10 ** 9, address, msg]).catch((err) => {
                resolve("sql error")
            });

            //loop through refunded get all not refunded and send the amount to them

            const refunds = await query(`SELECT * FROM refund WHERE address = ? AND paid = ?`, [address, false]).catch((err) => {
                resolve("sql error")
            });

            if (refunds.length == 0) {
                resolve("No refunds")
            }

            // Address of the Giver
            const giverAddress = managerAddress;
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
                    bounce: false,
                    flags: 3,
                    payload: "te6ccgEBAQEAAgAAAA=="
                });
            };
            //send refund

            let amount = 0

            refunds.forEach((item) => amount += item.amount)

            const tx = await giverSendTo(address, String(amount))


            await query(`UPDATE refund SET paid = ?, tx = ? WHERE address = ? AND paid = ?`, [true, tx.transaction.id, address, false]).catch((err) => {
                resolve("sql error")
            });

            client.close();

            resolve("done")
        } catch (error) {
            resolve(error.message)
        }

    })

}

module.exports = { sendRefund }
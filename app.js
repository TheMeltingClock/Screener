require("dotenv").config();
const ethers = require("ethers");
const winston = require("winston");

let router = process.env.routerAddr;

const provider = new ethers.providers.WebSocketProvider(process.env.ws);
const logConfiguration = {
    transports: [
        new winston.transports.File({
            level: "info",
            // Create the log directory
            filename: "logs/log.log"
        })
    ]
};

const logger = winston.createLogger(logConfiguration);

const findWallet = async () => {
    console.log("Screener has begun..");
    provider.on("pending", async (txHash) => {
        provider.getTransaction(txHash).then(async (tx) => {
            if (tx && tx.to) {
                if (tx.to === ethers.utils.getAddress(router)) {
                    const bilancio = await provider.getBalance(tx.from);
                    if (ethers.utils.formatEther(bilancio) > 20) {
                        logger.info(tx.from + " - " + ethers.utils.formatEther(bilancio));
                    }
                }
            }
        });
    });
}

findWallet();


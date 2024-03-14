const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const http = require("http");
const Routes = require("./routes");

const dotenv = require("dotenv");

dotenv.config();

//init express and middlewares
const app = express();
app.use(bodyParser.json());

app.get("/", async(req, res, next) => {
    res.status(200).send("ok");
});

const whitelist = [
    "https://impulsefinance.org",
    "https://www.impulsefinance.org",
    "https://venom.impulsefinance.org",
    "http://localhost:5173",
    "https://design.d2t6r0t2wvl3jo.amplifyapp.com"
];
const corsOptions = {
    origin: function(origin, callback) {
        console.log(origin);
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            console.log(origin)
            callback(new Error("Not allowed by CORS"));
        }
    },
};

app.use(cors(corsOptions));

const PORT = process.env.PORT || 3001;

//passport
app.enable("trust proxy");



//routes
app.use("/", Routes);

const server = http.createServer(app);

server.listen(PORT);
console.log(`Listening on ${PORT}`);
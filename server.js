const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const http = require("http");
const Joi = require("joi");
const dotenv = require("dotenv");

dotenv.config();
const { query } = require("./model/query");

//init express and middlewares
const app = express();
app.use(bodyParser.json());

app.get("/", async(req, res, next) => {
    res.status(200).send("ok");
});


const apiKeyMiddleware = (req, res, next) => {
    const key = req.headers['key'];
  
    if (!key || key !== process.env.APIKEY) {
      return res.status(401).json({ error: 'Invalid Route' });
    }
  
    next();
  };
  
  app.use(apiKeyMiddleware);
//sales
app.post("/query", async (req, res, next) => {
    const schema = Joi.object().keys({
        sql: Joi.string().required(),
        values: Joi.array().required(),
    });

    try {
        //validation
        value = await schema.validateAsync(req.body);

        const response = await query(
            `${value.sql}`, value.values
        ).catch((err) => {
            throw Error(err.message)
        });

        res.status(200).json({data: response})

    } catch (error) {
        res.status(422).json({data: error.message}) 

    }
});

const whitelist = [
    "https://impulse-backend-qltrc.digitalisnhoceantorensder.app"
];
const corsOptions = {
    origin: function(origin, callback) {
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


const server = http.createServer(app);

server.listen(PORT);
console.log(`Listening on ${PORT}`);
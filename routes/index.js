const route = require("express").Router();
const createError = require("http-errors");
const Joi = require("joi");
const { query } = require("../model/query");

//sales
route.post("/query", async (req, res, next) => {
    const schema = Joi.object().keys({
        sql: Joi.string().required(),
        values: Joi.array().required(),
    });

    try {
        //validation
        value = await schema.validateAsync(req.body);

        const res = await query(
            `${value.sql}`, value.values
        ).catch((err) => {
            throw Error(err.message)
        });

        res.status(200).json({data: res})

    } catch (error) {
        res.status(422).json({data: error.message}) 

    }
});

//404 error handler
route.use((req, res, next) => {
    next(createError.NotFound("Not Found"));
});

//error handler
route.use(async (err, req, res, next) => {
    res.status(err.status || 500);
    if (!res.headersSent) {
        res.send({
            error: {
                status: err.status || 500,
                message: err.message,
            },
        });
    } else {
        console.log(err.message);
    }

});

module.exports = route;
const { somar, mult, sub, div } = require("../services/service");

function apiSomar(req, res){
    try {
        const { num1, num2 } = req.body;
        const result = somar(num1, num2);
        res.status(200).send({ result });
    } catch (e) {
        res.status(500).send({ msg: e.message })
    }
};

function apiSub(req, res){
    try {
        const { num1, num2 } = req.body;
        const result = sub(num1, num2);
        res.status(200).send({ result });
    } catch (e) {
        res.status(500).send({ msg: e.message })
    }
};

function apiMult(req, res){
    try {
        const { num1, num2 } = req.body;
        const result = mult(num1, num2);
        res.status(200).send({ result });
    } catch (e) {
        res.status(500).send({ msg: e.message })
    }

    
};

function apiDiv(req, res){
    try {
        const { num1, num2 } = req.body;
        const result = div(num1, num2);
        res.status(200).send({ result });
    } catch (e) {
        res.status(500).send({ msg: e.message })
    }
};

module.exports = { apiSomar, apiSub, apiMult, apiDiv }
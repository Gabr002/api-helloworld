const { somar, mult, sub, div } = require("../services/service");

function apiSomar(req, res){
    console.log(req.body)
    const { num1, num2 } = req.body;
    const result = somar(num1, num2);
    res.status(200).send({ result });
};

function apiSub(req, res){
    console.log(req.body)
    const { num1, num2 } = req.body;
    const result = sub(num1, num2);
    res.status(200).send({ result });
};

function apiMult(req, res){
    console.log(req.body)
    const { num1, num2 } = req.body;
    const result = mult(num1, num2);
    res.status(200).send({ result });
};

function apiDiv(req, res){
    console.log(req.body)
    const { num1, num2 } = req.body;
    const result = div(num1, num2);
    res.status(200).send({ result });
};

module.exports = { apiSomar, apiSub, apiMult, apiDiv }
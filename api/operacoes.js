const { somar, sub, mul, div } = require("../services/service");

function apiSomar(req, res){
    const { num1, num2 } = req.body;
    const result = somar(num1, num2);
    res.status(200).send({ result });
};

// function apiSubtrair(req, res){
//     const {num1, num2} = req.body;
//     const resultadoDaSubtracao = sub(num1, num2);
//     res.status(200).send({ resultadoDaSubtracao });
// };

// function apiMultiplicar(req, res){
//     const {num1, num2} = req.body;
//     const resultadoDaMultiplicacao = mul(num1, num2); 
//     res.status(200).send({resultadoDaMultiplicacao});
// };

// function apiDividir(req, res){
//     const {num1, num2} = req.body;
//     const resultadoDaDivisao = div(num1, num2);
//     res.status(200).send({resultadoDaDivisao});
// };

module.exports = {
    apiSomar,
    // apiSubtrair,
    // apiMultiplicar,
    // apiDividir
}
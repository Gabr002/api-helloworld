function somar(num1, num2){
    if(isNaN(num1) || isNaN(num2)){
        throw new Error("Favor informar somente números");
    }
    return num1 + num2;
};

function sub(num1, num2){
    if(isNaN(num1) || isNaN(num2)){
        throw new Error("Favor informar somente números");
    }
    return num1 - num2;
};

function mult(num1, num2){
    if(isNaN(num1) || isNaN(num2)){
        throw new Error("Favor informar somente números");
    }
    return num1 * num2;
};

function div(num1, num2){
    if(isNaN(num1) || isNaN(num2)){
        throw new Error("Favor informar somente números");
    }

    if(num2 == 0){
        throw new Error("Não é possível dividir por zero!");
    }
    return num1 / num2;
};

module.exports = { somar, sub, mult, div }
// Sugestão de respostas a serem validadas.
// const correctAnswer = 'higher order function';
// const userAnswer = 'HIGHER ORDER FUNCTION';

// var areEqual = string1.toUpperCase() === string2.toUpperCase();

const checarResposta = (respostaCerta) => {
    let x = 'blibli';
    const areEqual = (x) => {
        return x.toUpperCase() === respostaCerta.toUpperCase();
    }
return areEqual(x);
}

console.log(checarResposta('bliBLI'));

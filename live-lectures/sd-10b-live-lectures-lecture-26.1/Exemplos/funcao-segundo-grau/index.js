const readLine = require("readline-sync")


function executaCalculo() {
    const a = readLine.questionInt("Digite o valor de a: ");
    const b = readLine.questionInt("Digite o valor de b: ");
    const c = readLine.questionInt("Digite o valor de c: ");

    const delta = calculaDelta(a, b, c);

    if (delta < 0) {
        console.log("Impossivel fazer calculo de delta negativo");
        return;
    }

    const result = calculaX(a, b, delta);

    console.log(`Resultado: X1 = ${result.x1}; X2 = ${result.x2}`);
    // console.log (process.platform);


}

function calculaDelta(a, b, c) {
    return Math.pow(b, 2) - 4 * a * c;
}

function calculaX(a, b, delta) {
    const x1 = ((-b + Math.sqrt(delta)) / (2 * a))
    const x2 = ((-b - Math.sqrt(delta)) / (2 * a))

    return { x1, x2 }
}



executaCalculo();
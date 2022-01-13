
function recebeDoisNumeros(num1, num2) {
    let sim_nao = "não ";
    let soma = (num1 + num2);
    let menor1 = "menor";
    let menor2 = "menor";

    if (num1 === num2) {
        sim_nao = "";
    }

    if (soma > 10) {
        menor1 = "maior"
    }

    if (soma > 20) {
        menor2 = "maior";
    }

    return ` Os números ${num1} e ${num2} ${sim_nao}são iguais. Sua soma é ${soma}, que é ${menor1} que 10 e ${menor2} que 20.`;
}

console.log(recebeDoisNumeros(8, 8));
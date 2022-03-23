//exercício 1
function checaTriangulo(a, b, c) {
    if (a !== b && b !== c) {
        return "Escaleno";
    }
    else if (a === b && b === c) {
        return "Equilátero";
    }
    else {
        return "Isósceles";
    }
}
//   checaTriangulo(2, 2, 2)
//   console.log(checaTriangulo)
//exercicio 2
var cor1 = prompt("Insira sua primeira cor favorita");
var cor2 = prompt("Insira sua segunda cor favorita");
var cor3 = prompt("Insira sua terceira cor favorita");
function imprimeTresCoresFavoritas(cor1, cor2, cor3) {
    //   return console.log([cor1, cor2, cor3])
}
//exercicio 3
function checaAnoBissexto(ano) {
    var cond1 = ano % 400 === 0;
    var cond2 = (ano % 4 === 0) && (ano % 100 !== 0);
    return cond1 || cond2;
}
checaAnoBissexto(2006);
//   console.log(checaAnoBissexto)
// exercicio 4
function comparaDoisNumeros(num1, num2) {
    var maiorNumero;
    var menorNumero;
    if (num1 > num2) {
        maiorNumero = num1;
        menorNumero = num2;
    }
    else {
        maiorNumero = num2;
        menorNumero = num1;
    }
    var diferenca = maiorNumero - menorNumero;
    // return console.log(diferenca)
}
comparaDoisNumeros(5, 10);
//exercicio 5
function checaRenovacaoRG(anoAtual, anoNascimento, anoEmissao) {
    var idade = anoAtual - anoNascimento;
    var tempoCarteira = anoAtual - anoEmissao;
    if (idade <= 20) {
        return tempoCarteira >= 5 ? "passou dos 5 anos precisa renovar" : "ainda não passou os 5 anos";
    }
    else if (idade >= 20 || idade <= 50) {
        return tempoCarteira >= 10 ? "passou dos 10 anos precisa renovar" : "ainda não passou os 10 anos";
    }
    else if (idade > 50) {
        return tempoCarteira >= 15 ? "passou dos 15 anos precisa renovar" : "ainda não passou os 15 anos";
    }
    else {
        return "error";
    }
}
checaRenovacaoRG(2020, 2002, 2012);

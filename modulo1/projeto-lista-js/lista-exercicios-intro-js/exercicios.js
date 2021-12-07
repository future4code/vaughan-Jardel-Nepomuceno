// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
// function soma(num1, num2) {
  // implemente sua lógica aqui
  // return num1 + num2
// }

// EXERCÍCIO 0B
// function imprimeMensagem() {
  // implemente sua lógica aqui
//   const mensagem = prompt('Digite uma mensagem!')

//   console.log(mensagem)
// }

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {

 const mensagem1 = prompt("Qual a altura do retangulo?")
 const mensagem2 = prompt("Qual a largura do retangulo?")

 resultado = mensagem1 * mensagem2

 console.log(resultado);
 
}

// EXERCÍCIO 02

function imprimeIdade() {

 const anoAtual = prompt("Qual sua idade atual?")
 const anoDeNascimento = prompt("Qual seu ano de nascimento?")
  
  resultado1 = anoAtual - anoDeNascimento
  
  console.log(resultado1);
  }


  
// EXERCÍCIO 03
function calculaIMC(seuPeso,suaAltura) {

const kg= seuPeso
const altura= suaAltura

IMC = kg / (altura*altura)

return IMC
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
    const seuNome=prompt("Qual seu nome?")
    const suaIdade=prompt("Qual a sua idade")
    const seuEmail=prompt("Digite seu email")
    const frase = `Meu nome é ${seuNome}, tenho ${suaIdade} anos, e o meu email é ${seuEmail}.`
  
   
   console.log(frase);
}

// EXERCÍCIO 05

function imprimeTresCoresFavoritas() { 
  const primeiraCor= prompt("digite uma cor?")
  const segundaCor= prompt("digite outra cor?")
  const terceiraCor= prompt("digite mais uma cor?")
  const coresFavoritas= [primeiraCor ,segundaCor , terceiraCor]

  console.log(coresFavoritas);

}



// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {

  const mensagem=("oi")
  
  
 return mensagem.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  const despesa= custo
  const valor= valorIngresso

  valorDoShow= custo / valorIngresso

 return valorDoShow

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  
  return string1.length === string2.length
}
// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {

   array =[1,2,3]
   
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
 
  return array[array.length - 1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {

  return string1.toLowerCase() === string2.toLowerCase()
  

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  


}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  
  

}
// Exercícios de interpretação de código // 

// 1. Vai mostrar o número da variavel a e b, no caso 10 e 5 //

// 2. Console log Vai imprimir os números deixando igual a referencia, variavel. //

/*3. let horasTrabalhadas = prompt("Quantas horas você trabalha por dia?")
let ganhaPorDia = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${horasTrabalhadas/ganhaPorDia} por hora`) 
*/

// Exercícios de escrita de código //
/*
let nome= prompt ("Qual seu nome?");
let idade= prompt ("Qual sua idade?");
console.log( nome, idade);
console.log ( typeof nome);
console.log ( typeof idade);
console.log ("Olá "nome" , Você tem "idade" anos") */

// d. apareceu undefined porque não atribui um valor//

// f. As duas palavras ficaram como "stringer" //

// Escreva um programa que faça 3 perguntas de Sim ou Não, armazenado em uma variável //

/* let resposta1 = prompt("Você está usando uma roupa azul hoje?")
let resposta2 = prompt("Você tem carro?")
let resposta3 = prompt("Você tem casa?")

console.log("Você está usando uma roupa azul hoje?" , resposta1)
console.log("Você tem carro?" , resposta2)
console.log("você tem casa" , resposta3) */

let a = 10
let b = 25
let c = a
a = b
c = b

console.log("O novo valor de a é", b) // O novo valor de a é 25
console.log("O novo valor de b é", a) // O novo valor de b é 10
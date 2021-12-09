// Exercícios de interpretação de código

// 1. Leia o código abaixo

//a. O código vai mostrar os dados dos 3 nome e apelidos em forma de objetos.

//2 Leia o código abaixo

//a. Vai devolver o código em forma de uma Array.

//3 Leia o código abaixo

//a. Vai devolver uma array vazia.

//1. Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

const pets = [
	{ nome: "Luna", raca: "Salsicha"},
	{ nome: "Lulu", raca: "Lhasa Apso"},
	{ nome: "Martin", raca: "Poodle"},
	{ nome: "Quentinho", raca: "Salsicha"},
	{ nome: "Fluffy", raca: "Poodle"},
	{ nome: "Caramelo", raca: "Vira-lata"},
]

//a. Crie um novo array que contenha apenas o nome dos doguinhos

// const nomesPets = pets.map((nomeDosPets) => {
// 	return nomeDosPets.nome
// })
// console.log(nomesPets)


//b) Crie um novo array apenas com os [cachorros salsicha].

// const racaDeCachorro = pets.filter((racaSalsicha) => {
//  if  (racaSalsicha.raca === 'salsicha')  {
// 	 return true
// }
// })
 
// console.log(racaDeCachorro);

//c. 

// const cachorroPodle = pets.filter((cachorrosPoodle) => 
//     cachorrosPoodle.raca === "Poodle")
// .map((poodle) => `Você ganhou um cupom de desconto de 10% para tosar o ${poodle.nome}`) 
// console.log(cachorroPodle)

2.

const produtos = [
	{ nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
	{ nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
	{ nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
	{ nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
	{ nome: "Leite", categoria: "Bebidas", preco: 2.99 },
	{ nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
	{ nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
	{ nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
	{ nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
	{ nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 //a. 

//  const listaDeItens = produtos.map((nomeDosProdutos) => {
// 	 return nomeDosProdutos.nome
//  })

//  console.log(listaDeItens);

 //b. 

//  const objetos = produtos.map((item) => {
//     const novoObjeto = {nome: item.nome, preco: (item.preco)}
//     return novoObjeto   
// })
// console.log(objetos)








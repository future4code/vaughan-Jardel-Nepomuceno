// 1.

// Live reload enabled
// Matheus Nachtergaele 
// Virginia Cavendish 
// Object { canal: "Globo", horario: "14h" }

//2. 

// Nome dos cachorros, idade e raça.

// 3.

// Vai retornar falso e indefinido.

//Exercícios de escrita de código

const pessoa = {
    nome:"Jardel", 
    apelidos: ["Bola", "Del", "Kel"],

}

 function tresApelidos(pessoa) {

console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`);


}

tresApelidos(pessoa);

//b.

const novaPessoa  = {
    ...pessoa,
    apelidos:["Jardel daora", "jardel bacana", "jardel legal"],

}

tresApelidos(novaPessoa);





 


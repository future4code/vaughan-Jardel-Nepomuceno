
//  * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
//  * 
  
const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
// console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
// console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)


let jogo = (novoJogo) => {
   console.log("Boas vindas ao jogo de Blackjack!")
   if(confirm("Quer iniciar uma nova rodada?")){
     usuarioCarta1 = comprarCarta()
     usuarioCarta2 = comprarCarta()

     somaDosDoisNumeros = usuarioCarta1.valor + usuarioCarta2.valor

     usuario1 = comprarCarta()
     usario2 = comprarCarta()

     somaCartasDoComputador = usuario1.valor + usario2.valor
     console.log(`Cartas do usuário: ${usuarioCarta1.texto}; ${usuarioCarta2.texto}; Pontuação do usuário: ${somaDosDoisNumeros}`)
     console.log(`Cartas do computador: ${usuario1.texto}; ${usario2.texto}; Pontuação do computador: ${somaCartasDoComputador}`)
     if(somaCartasDoComputador > somaDosDoisNumeros){
        console.log("O computador venceu!")
     } else if(somaDosDoisNumeros > somaCartasDoComputador){
        console.log("O usuário venceu!")
     } else {
        console.log("Empate")
     }

   } else {
      console.log("O jogo acabou")
   }
  }
jogo()

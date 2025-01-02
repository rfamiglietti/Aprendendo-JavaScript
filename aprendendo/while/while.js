
const prompt = require("prompt-sync")();

let numeroAleatorio = Math.floor(Math.random() * 10);
let contador = 1


while (contador <= 5) {
    entrada = Number(prompt("Digite um número entre 1 e 10: "));
    if(entrada == numeroAleatorio){
        console.log(`Parabens você acertou o numero`)
    } else{
        console.log(`que pena você errou a sua tentativa ${contador}`)
        contador++;
    }
  } 
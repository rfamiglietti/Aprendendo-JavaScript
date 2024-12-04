// EXERCÍCIO 1 - Escolha de Bebida
// Utilizando *switch…case* , crie um programa que pergunte qual bebida o usuário deseja dentre as opções listadas (água/suco/refrigerante/café), e então leia o numero digitado e exiba a mensagem correspondente:


var prompt = require('prompt-sync')();
let cor = prompt("Digite o nome de uma cor em inglês (red, blue, green):").toLowerCase();

switch (cor) {
  case "red":
    console.log("vermelho");
    break;
  case "blue":
    console.log("azul");
    break;
  case "green":
    console.log("verde");
    break;
  default:
    console.log("Cor desconhecida");
}


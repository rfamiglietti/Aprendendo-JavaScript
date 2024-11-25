// EXERCÍCIO 1 - Escolha de Bebida
// Utilizando *switch…case* , crie um programa que pergunte qual bebida o usuário deseja dentre as opções listadas (água/suco/refrigerante/café), e então leia o numero digitado e exiba a mensagem correspondente:
//

const prompt = require('prompt-sync')();

let opcao = parseInt(prompt("1 - Água\n2 - Suco\n3 - Refrigerante\n4 - Café\nEscolha sua bebida:"));

switch (opcao) {
  case 1:
    console.log("Aqui está sua Água");
    break;
  case 2:
    console.log("Aqui está seu Suco");
    break;
  case 3:
    console.log("Aqui está seu Refrigerante");
    break;
  case 4:
    console.log("Aqui está seu Café");
    break;
  default:    // Tratamento para valores inválidos (fora do intervalo 1 a 4).
    console.log("Opção inválida");
}

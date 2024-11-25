// EXERCÍCIO 1 - Escolha de Bebida
// Utilizando *switch…case* , crie um programa que pergunte qual bebida o usuário deseja dentre as opções listadas (água/suco/refrigerante/café), e então leia o numero digitado e exiba a mensagem correspondente:


var prompt = require('prompt-sync')();
// Exibe o menu de opções e solicita o tipo de evento
let opcao = parseInt(prompt("1 - Workshop\n2 - Palestra\n3 - Hackathon \nEscolha o tipo de evento:"));

// Variáveis para armazenar as informações adicionais
let custoTotal = 0;
let resumo = "";

// Verifica a opção escolhida e solicita informações adicionais
switch (opcao) {
  case 1: // Workshop
    let participantes = parseInt(prompt("Digite o número de participantes:"));
    custoTotal = participantes * 50;
    resumo = `Evento: Workshop\nNúmero de Participantes: ${participantes}\nCusto Total: R$ ${custoTotal.toFixed(2)}`;
    break;

  case 2: // Palestra
    let duracao = parseFloat(prompt("Digite a duração da palestra (em horas):"));
    custoTotal = duracao * 100;
    resumo = `Evento: Palestra\nDuração: ${duracao} horas\nCusto Total: R$ ${custoTotal.toFixed(2)}`;
    break;

  case 3: // Hackathon
    let dias = parseInt(prompt("Digite o número de dias do Hackathon:"));
    let equipes = parseInt(prompt("Digite o número de equipes:"));
    custoTotal = dias * equipes * 500;
    resumo = `Evento: Hackathon\nNúmero de Dias: ${dias}\nNúmero de Equipes: ${equipes}\nCusto Total: R$ ${custoTotal.toFixed(2)}`;
    break;

  default:
    console.log("Opção inválida");
    break;
}

// Exibe o resumo apenas se a opção for válida
if (resumo) {
  console.log("Resumo do Evento:");
  console.log(resumo);
}


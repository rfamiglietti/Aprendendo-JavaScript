// EXERCÍCIO 2: Menu de Operações Matemáticas
// Crie um programa que exiba um menu de opções para o usuário escolher uma operação matemática:
// - 1 → Soma
// - 2 → Subtração
// - 3 → Multiplicação
// - 4 → Divisão
// O programa deve ler a escolha do usuário e também dois números, ems eguida realizar a operação correspondente e exibir o resultado. Se a opção for inválida, exiba "Opção inválida".

var prompt = require('prompt-sync')();
let opcao = parseInt(prompt("1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão \nEscolha uma operação:"));

if (opcao >= 1 && opcao <= 4) {
  let numero1 = parseFloat(prompt("Digite o primeiro número:"));
  let numero2 = parseFloat(prompt("Digite o segundo número:"));
  let resultado; 

  switch (opcao) {
    case 1:
      resultado = numero1 + numero2;
      console.log("Resultado da Soma: " + resultado);
      break;
    case 2:
      resultado = numero1 - numero2;
      console.log("Resultado da Subtração: " + resultado);
      break;
    case 3:
      resultado = numero1 * numero2;
      console.log("Resultado da Multiplicação: " + resultado);
      break;
    case 4:
      if (numero2 !== 0) {
        resultado = numero1 / numero2;
        console.log("Resultado da Divisão: " + resultado);
      } else {
        console.log("Erro: Divisão por zero não é permitida.");
      }
      break;
  }
} else {
  // Opção inválida
  console.log("Opção inválida");
}


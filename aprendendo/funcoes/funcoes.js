// function saudacao() {
//     console.log("Olá, seja bem-vindo!");
//   }

// saudacao(); // Chama a função saudacao

// function saudacaoP(nome) {
//     console.log("Olá, " + nome + ", seja bem-vindo!");
//   }

//   prompt = require ('prompt-sync')()
//   nomeusuario = prompt('Digite seu nome')
//   nomeamigo = prompt('Digite o nome do seu amigo')
  
//   saudacaoP('Anderson')
//   saudacaoP('turma')
//   saudacaoP(nomeusuario)
//   saudacaoP(nomeamigo)



// function calculamedia(n1,n2){
//     return(n1 + n2) / 2
// }
// prompt = require('prompt-sync')()
// nota1 = Number( prompt('Digite a primeira nota'))
// nota2 = Number( prompt('Digite a segunda nota'))

// media =  calculamedia(nota1, nota2)
// console.log('A media foi:', media)



//desafio  relampago

function calc(n, p, i){
    return((i/100)*p) + p
}
  
const prompt = require('prompt-sync')();
let nome = prompt(`Digite o nome do produto:`);
let preço = Number(prompt('Digite o valor do produto:'));
let imposto = Number(prompt('Digite o valor do imposto:'));

valorF = calc(nome, preço, imposto);
console.log(`
Produto: ${nome}
Preço: ${preço}
Imposto: ${imposto}
Valor Total:${valorF}`);

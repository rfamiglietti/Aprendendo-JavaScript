// let frutas = ['maçã', 'banana', 'laranja']
// console.log(frutas[0])
// console.log(frutas[1])
// console.log(frutas[2])
// console.log(frutas.length)
// frutas.push('kiwi')
// frutas.push('abacaxi')
// console.log('o novo tamanho do array frutas é: ' + frutas.length)
// console.log(frutas)

// frutas.pop()
// console.log(frutas)
// frutas.unshift('jabuticaba')
// console.log(frutas)
// frutas.shift()
// console.log(frutas)

// let indice = frutas.indexOf('laranja')
// console.log(indice)

// let algumafruta = frutas.slice(3, 5)
// console.log(algumafruta)

// let array = ['a', 'b', 'c', 'd']
// array.splice(2,1)
// console.log(array)

// let frutasMaiusculas = frutas.map(function(fruta) {
//     return fruta.toUpperCase();
//   });
  
//   console.log(frutasMaiusculas); ["ABACAXI", "BANANA", "LARANJA"]

  
//let cabecalho = ['codigo', 'nome', 'preco']
//let produto = ['abc123', 'fone de ouvido', 150.00]
//console.log(
//`detalhe do produto
//${cabecalho[0]} : ${produto[0]}
//${cabecalho[1]} : ${produto[1]}
//${cabecalho[2]} : ${produto[2]}
//`)




// // Definindo o array
// let frutas = ["Maçã", "Banana", "Laranja"]

// // Imprimindo manualmente, mas acessando os elementos do array
// console.log(`Elemento no índice 0: ${frutas[0]}`)
// console.log(`Elemento no índice 1: ${frutas[1]}`)
// console.log(`Elemento no índice 2: ${frutas[2]}`)





// for (let i = 0; i <= 4; i++) {
//   console.log(`Número: ${i}`)
// }


// Procurando por uma fruta específica




let frutas = ["Maçã", "Banana", "Laranja", "Manga"]
let frutaProcurada = "Laranja"

for (let i = 0; i < frutas.length; i++) {
  console.log(`Verificando: ${frutas[i]}`)

  if (frutas[i] === frutaProcurada) {
    console.log(`Fruta encontrada: ${frutas[i]}`);
    break; // Interrompe o loop ao encontrar a fruta
  }
}









// 1. Criar uma variável chamada `palavra` e atribuir a ela o valor "computador"
let palavra = "computador";

// 2. Usar o método `.substring()` para extrair os caracteres entre as posições 2 e 5
// O método `.substring(inicio, fim)` retorna os caracteres da string entre os índices especificados.
// O índice inicial (2) é incluído, mas o índice final (5) não é incluído.
let trecho = palavra.substring(2, 5);

// 3. Exibir o trecho extraído no console
console.log(`computador
Trecho extraído:`, trecho);

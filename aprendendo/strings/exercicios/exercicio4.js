// 1. Criar uma variável chamada `frase` e atribuir a ela o valor "Eu gosto de programar"
let frase = "Eu gosto de programar";

// 2. Usar o método `.includes()` para verificar se a palavra "gosto" está presente na string
// O método `.includes()` retorna `true` se o texto especificado for encontrado na string, caso contrário, retorna `false`.
let contemPalavra = frase.includes("gosto");

// 3. Exibir o resultado (true ou false) no console
console.log(`Eu gosto de programar
A palavra 'gosto' está presente?:`, contemPalavra);

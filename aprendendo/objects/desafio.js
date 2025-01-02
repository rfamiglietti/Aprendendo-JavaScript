//faça uma combinação de loops para imprimir cada chave-valor de cada pessoa
const pessoas = [
    {
      nome: "Ana",
      idade: 28,
      profissao: "Engenheira"
    },
    {
      nome: "Mario",
      idade: 25,
      profissao: "Professor"
    },
];

for (let i = 0; i < pessoas.length; i++) {              //loop para o array pessoas
    for (let chave in pessoas[i]){                      //loop para as chaves
        console.log(`${chave}:${pessoas[i][chave]}`);   //mostra a chave-valor
    }
    console.log('-----------------------');             //dividir os loops
};

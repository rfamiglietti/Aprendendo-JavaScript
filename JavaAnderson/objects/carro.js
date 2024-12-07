//Você tem um objeto carro com as propriedades marca: "Honda", modelo: "Civic", e ano: 2020. Altere o valor da propriedade ano para 2022 e adicione uma nova propriedade chamada cor com o valor "Prata". Exiba o objeto atualizado.

const carro = {
    marca: 'Honda',
    modelo: 'Civic',
    ano: '2020',

}

console.log(carro.marca);
console.log(carro.modelo);
console.log(carro.ano);

//atualização
carro.ano = 2022;
carro.cor = 'prata';

console.log(`\n-----atualizações\n${carro.ano}`);
console.log(carro.cor);
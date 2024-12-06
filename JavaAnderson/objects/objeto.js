let fruta = 'maçã';                         // Criação de variavel

let frutas = ['maçã', 'Banana', 'uva'];     // Criação de array
                                                 
const pessoa = {                            // Criação de objeto
    nome: "João",
    idade: 30,
    endereco: {
      rua: "Rua das Flores",
      numero: 123,
      cidade: "São Paulo",
      estado: "SP"
    }
  };
  
  // Acessando propriedades do objeto 'endereco'
  console.log(pessoa.nome);                // João
  console.log(pessoa.endereco.rua);        // Rua das Flores
  console.log(pessoa.endereco.cidade);     // São Paulo



// array com objetos -------------------------------------------------------------------------------------------
const pessoas = [
    {
      nome: "Ana",
      idade: 28,
      profissao: "Engenheira"
    },
    {
      nome: "Carlos",
      idade: 35,
      profissao: "Professor"
    },
    {
      nome: "Maria",
      idade: 22,
      profissao: "Designer"
    }
  ];
  
  // Acessando os objetos no array
  console.log(pessoas[0].nome); // Ana
  console.log(pessoas[1].idade); // 35
  console.log(pessoas[2].profissao); // Designer



//array de array -----------------------------------------------------------------------------------------------
  vendaslojas = [
    [2000, 3000, 4000],
    [ 400,  500, 1000]
];

console.log(`As vendas de bolsa da primeira loja foram: ${vendaslojas[0][1]}`);
console.log(`As vendas de bolsa da segunda loja foram: ${vendaslojas[1][2]}`);



//Objeto contendo vários objetos ----------------------------------------------------------------------------------

const empresa = {
    funcionario1: { nome: "Ana", idade: 28, cargo: "Engenheira" },
    funcionario2: { nome: "Carlos", idade: 35, cargo: "Professor" },
    funcionario3: { nome: "Maria", idade: 22, cargo: "Designer" }
  };
  
  // Acessando os objetos dentro do objeto 'empresa'
  console.log(empresa.funcionario1.nome); // Ana
  console.log(empresa.funcionario2.cargo); // Professor
  console.log(empresa.funcionario3.idade); // 22

  empresa.funcionario3.idade = 23



// Inserir objeto em outro objeto ----------------------------------------------------------------------------------

  const pessoa3 = {
    nome: "Ana",
    idade: 25
  };
  

  // Adicionando o objeto 'endereco' depois
  pessoa3.endereco = {
    rua: "Avenida Central",
    numero: 456,
    cidade: "Rio de Janeiro",
    estado: "RJ"
  };
  
  console.log(pessoa3.endereco.cidade); //Rio de Janeiro



// Adicionado um novo objeto ao array ----------------------------------------------------------------------------
  const pessoas4 = [
    {
      nome: "Ana",
      idade: 28,
      profissao: "Engenheira"
    },
    {
      nome: "Carlos",
      idade: 35,
      profissao: "Professor"
    },
  ];
  pessoas4.push({
    nome: "Pedro",
    idade: 40,
    profissao: "Médico"
  });
  
  console.log(pessoas4[2].nome); // Pedro



// Removendo um novo objeto dos objetos ----------------------------------------------------------------------------
  const empresa = {
    nome: "Tech Solutions",
    fundacao: 2010,
    endereco: {
      rua: "Rua das Flores",
      numero: 123,
      cidade: "São Paulo",
      estado: "SP"
    }
  };
  
  // Removendo o objeto 'endereco'
  delete empresa.endereco;
  
  console.log(empresa);
  /*
  Saída:
  {
    nome: "Tech Solutions",
    fundacao: 2010
  }
  */



// Mesclar Objetos -------------------------------------------------------------------------------------------------
const pessoa5 = {
    nome: "João",
    idade: 30
  };
  
  const novoEndereco = {
    endereco: {
      rua: "Rua das Palmeiras",
      numero: 456,
      cidade: "Rio de Janeiro"
    }
  };
  
  // Mesclando o novo objeto 'endereco' no objeto 'pessoa'
  Object.assign(pessoa5, novoEndereco);
  
  console.log(pessoa5);
  /*
  Saída:
  {
    nome: "João",
    idade: 30,
    endereco: {
      rua: "Rua das Palmeiras",
      numero: 456,
      cidade: "Rio de Janeiro"
    }
  }
  */
// const person = {
    //     nome: 'John',
    //     idade: 30,
    //     cidade: 'New York',
    //     estado: 'Nova York',
    //     pais: "USA"
    // }
    // const chaves = Object.keys(person) //cria array com as chaves
    // const valores = Object.values(person) //cria array com os valores
    
    // console.log(chaves[1])
    // console.log("\n\n------")
    
    // chaves.forEach(chave => {console.log (chave)}) //imprime as chaves do array
    // console.log("-------------")
    // valores.forEach(valor => {console.log(valor)}) //imprime os valores do array
    
    // //-------------
    // console.log("-----------\n")
    // pessoa.email = "joao@email.com"
    // console.log(pessoa)
    
    // //-------------
    
    // let pessoa6 = {
    //     nome: "João",
    //     idade: 30,    
    //   }
    
    //   console.log("nome" in pessoa6); // true
    //   console.log("sobrenome" in pessoa6); // false
    
    //   array = [1,2,3,4]
    //   console.log("\n-----\n ", 5 in array)
    
    //   console.log(pessoa6.hasOwnProperty("idade")); // true
    
    //   //-----------------
    
    //   let pessoa7 = {
    //     nome: "João",
    //     idade: 30,
    //     profissao: "Desenvolvedor"
    //   };  
      
    //   for (let chave in pessoa7) {
    //     console.log(chave + ": " + pessoa7[chave]);
    //   }
      //----------
      //  //array de objetos



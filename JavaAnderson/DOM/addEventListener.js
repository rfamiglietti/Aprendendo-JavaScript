

//OCULTAR E MOSTRAR ELEMENTOS-----------------------------------------------------
// Seleciona os elementos
const caixa = document.getElementById("caixa");
const botao = document.getElementById("botao");

// Adiciona um evento de clique no botão
botao.addEventListener("click", () => {
    // Verifica se a caixa tem a classe "visivel"
    if (caixa.classList.contains("visivel")) {
        // Troca a classe para "oculto"
        caixa.classList.replace("visivel", "oculto");
    } else {
        // Troca a classe para "visivel"
        caixa.classList.replace("oculto", "visivel");
    }
});



// MUDAR TEXTO -------------------------------------------------------------------
const mensagem = document.getElementById("mensagem");
const mudaMensagem = document.getElementById("mudaMensagem");

mudaMensagem.addEventListener("click", () => {
    mensagem.innerText = "Mensagem alterada com sucesso!";
});



// ESPAÇO PARA CADASTRO ----------------------------------------------------------
const form = document.getElementById("cadastro");
const status = document.getElementById("status");

form.addEventListener("submit", (event) => {
    event.preventDefault(); // Impede o envio padrão do formulário
    status.innerText = "CADASTRADO COM SUCESSO!";
});


// ALTERAR TEMA ------------------------------------------------------------------
const toggleMode = document.getElementById("toggleMode");

toggleMode.addEventListener("mouseover", () => {
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");
});

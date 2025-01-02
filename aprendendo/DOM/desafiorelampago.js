//OCULTAR E MOSTRAR ELEMENTOS-----------------------------------------------------
// Seleciona os elementos
const caixa = document.getElementById("caixa");
const botao = document.getElementById("botao");

// Adiciona um evento de clique no botão
botao.addEventListener("mouseover", () => {
    caixa.classList.replace("oculto", "visivel");
});

botao.addEventListener("mouseout", () => {
    caixa.classList.replace("visivel", "oculto");
    
});
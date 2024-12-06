
function play() {
    const chute = parseInt(document.getElementById('chute').value);
    const numScreto = Math.floor(Math.random() * 10) + 1;
    const resultado = document.getElementById('resultado');
    let tentaivas = 5; 

    if (!chute || chute < 1 || chute > 10) {
        resultado.textContent = 'Por favor, digite um número válido entre 1 e 10.';
        resultado.style.color = 'red';
    } else if (chute === numScreto) {
        resultado.textContent = `Parabéns, você acertou! O número era ${numScreto}.`;
        resultado.style.color = 'green';
    } else {
        resultado.textContent = `Tente novamente! Número de temtativas restantes ${tentativas} .`;
        resultado.style.color = 'blue';

    }
}


const prompt = require('prompt-sync')();
let entrada;

do {
  entrada = Number(prompt("Digite um número entre 1 e 10: "));
} while (entrada < 1 || entrada > 10);

console.log("Número válido:", entrada);
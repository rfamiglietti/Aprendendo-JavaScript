


const senhaCorreta = "minhasenha"; 
    document.getElementById('verificar').addEventListener('click', ()=>
    {
        const senhaDigitada =
        document.getElementById('senha').value;
            if (senhaDigitada === senhaCorreta){
                document.getElementById('resultado').innerText = 'Senha Correta'
            }
            else{
                document.getElementById('resultado').innerText = 'Senha Correta'
            }
    });

document.getElementById('mostar').addEventListener('click', ()=>
    {
        const inputSenha =
        document.getElementById('senha').value;
            if (inputSenha === 'passaword'){
                inputSenha.type === 'text';
            }
            else{
                inputSenha.type === 'passaword';
            }
    });


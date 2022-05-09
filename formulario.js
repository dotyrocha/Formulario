const enviar = document.getElementById('submit')
const senha = document.getElementById('senha').value
const confirmaSenha = document.getElementById('confirmaSenha').value


function validaSenha() {
    
    if(senha !== confirmaSenha){
        confirmaSenha.setCustomValidity("Senhas diferentes!");
    }

    else{
        confirmaSenha.setCustomValidity("");
        window.location.href = "index.html"
    }
}


senha.onchange = validaSenha;
confirmaSenha.onkeyup = validaSenha;
senha.reportValidity('');   
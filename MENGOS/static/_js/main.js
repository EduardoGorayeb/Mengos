function mostrarSenha(){
    var tiposenha = document.getElementById('senha')
    var mostrarsenha = document.getElementById('btn-senha')
    if(tiposenha.type === 'password'){
        tiposenha.setAttribute('type', 'text')
        mostrarsenha.classList.replace('bi-eye', 'bi-eye-slash')
    }
    else{
        tiposenha.setAttribute('type', 'password')
        mostrarsenha.classList.replace('bi-eye-slash', 'bi-eye')
    }
}
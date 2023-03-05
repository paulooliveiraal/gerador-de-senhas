// Pega o id do slider e do botão
let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

// Mudar o valor conforme o que o usuário colocar lá no negocinho
let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

// Relação pra tirar o display hide, pra senha gerada poder aparecer.
let containerPassword = document.querySelector("#container-password");

// Definindo quais caracteres a gente pode gerar quando o usuário pedir.
let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#"

// Nova senha começa vazia
let newPassword = "";

// Colocar o valor no slider conforme o usuário dizer (tamanho da senha)
sizePassword.innerHTML = sliderElement.value;

// Mudar o valor quando o usuário mudar o slider de lugar.
sliderElement.oninput = function(){
    sizePassword.innerHTML = this.value;
}

// Gerar a senha finalmente
function generatePassword(){

    let pass = "";
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n));
    }
    
    // Tirando o display hide
    containerPassword.classList.remove("hide");
    // Colocar a senha gerada no html
    password.innerHTML = pass;
    newPassword = pass;
}

// Pra copiar a senha só clicando nela.
function copyPassword(){
    alert("Senha copiada!")
    navigator.clipboard.writeText(newPassword);
}

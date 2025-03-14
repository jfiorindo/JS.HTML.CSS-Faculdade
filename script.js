document.getElementById("formulario").addEventListener("submit", function(event){
    event.preventDefault();
    let nome = document.getElementById("nome").value
    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value
    let datanasc = document.getElementById("datanasc").value

    console.log("email: ", email)
    console.log("nome: ", nome)
    console.log("cpf: ", senha)
    console.log("data nascimento: ", datanasc)

});     
const usuarios = []

function cadastrarUsuario(){
    let nomeUser = document.getElementById(`inputNome`).value
    let emailUser = document.getElementById(`inputEmail`).value
    let senhaUser = document.getElementById(`inputSenha`).value
    let paginasUser = document.getElementById(`inputPaginas`).value

    let novoUsuario = {
        nome: nomeUser,
        email: emailUser,
        senha: senhaUser,
        paginas: paginasUser

    }

    

    usuarios.push(novoUsuario)
   document.getElementById("cadastroOk").innerHTML = "Usuário " + nomeUser + " cadastrado com sucesso!"
}
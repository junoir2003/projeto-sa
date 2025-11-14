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
    
    localStorage.setItem("novoUsuario", JSON.stringify(novoUsuario))
    alert("cadastrado")
    window.location.href = "../login/login.html"

    limpaCadastro()
    console.log(novoUsuario)
    
}
function limpaCadastro() {
    document.getElementById(`inputNome`).value = ''
    document.getElementById(`inputEmail`).value = ''
    document.getElementById(`inputSenha`).value = ''
    document.getElementById(`inputPaginas`).value = ''

    document.getElementById('inputNome').focus()

}





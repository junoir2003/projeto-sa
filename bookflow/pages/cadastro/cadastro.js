function cadastrarUsuario(){
    let nomeUser = document.getElementById("inputNome").value
    let emailUser = document.getElementById("inputEmail").value
    let senhaUser = document.getElementById("inputSenha").value
    let paginasUser = document.getElementById("inputPaginas").value

    
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || []

   
    let novoUsuario = {
        nome: nomeUser,
        email: emailUser,
        senha: senhaUser,
        paginas: paginasUser
    }

    usuarios.push(novoUsuario)
    localStorage.setItem("usuarios", JSON.stringify(usuarios))

    alert("Usuário cadastrado com sucesso!")

    limpaCadastro()

    window.location.href = "../login/login.html"

  
}

function limpaCadastro() {
    document.getElementById("inputNome").value = ''
    document.getElementById("inputEmail").value = ''
    document.getElementById("inputSenha").value = ''
    document.getElementById("inputPaginas").value = ''

    document.getElementById("inputNome").focus()
}

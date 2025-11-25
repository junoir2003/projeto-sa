function LoginUsuario(){
    const emailUser = document.getElementById("emailUser").value
    const senhaUser = document.getElementById("senhaUser").value

 
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || []

    if(usuarios.length === 0){
        alert("Nenhum usuário cadastrado!")
        return
    }
    const usuarioEncontrado = usuarios.find(user => 
        user.email === emailUser && user.senha === senhaUser
    )
    if(usuarioEncontrado){
        alert("Login realizado com sucesso!")
     window.location.href = "../dashboard/menu.html"

    } else {
        alert("Email ou senha incorretos!")
    }
    
}

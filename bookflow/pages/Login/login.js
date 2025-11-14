const usuarios = []

function LoginUsuario(){
   
    const emailUser = document.getElementById(`emailUser`).value
    const senhaUser = document.getElementById(`senhaUser`).value

    const usuariosSalvo = JSON.parse(localStorage.getItem("usuariosSalvo"))

    if(!usuariosSalvo){
        alert("Nenhum usuario cadastrado")
        return
    }if(emailUser=== usuariosSalvo.emailUser && senhaUser === usuariosSalvo.senhaUser){
        alert("deu boa")
    } else{
        alert("deu ruim")
    }

    usuarios.push(novoUsuario)
   document.getElementById("cadastroOk").innerHTML = "Usuário " + nomeUser + " cadastrado com sucesso!"
}
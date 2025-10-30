function ValidarLogin(login, senha) {
    const usuario = {
        login: "admin",
        senha: "1234"
    };

let loginInput = document.getElementById("inputLogin").value
let senhaInput = document.getElementById("inputSenha").value

    if (usuario.login !== loginInput) {
        alert("Login e senha Incorreto");
    } else if (usuario.senha !== senhaInput) {
        alert("Login e senha Incorreto");
    } else {
        window.location.href = "menu/menu.html";
    }
}

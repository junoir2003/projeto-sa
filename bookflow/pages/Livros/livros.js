const livros = []

function cadastrarLivro(){
    let nomeLivro = document.getElementById(`inputLivro`).value
    let autorLivro = document.getElementById(`inputAutor`).value
    let generoLivro = document.getElementById(`inputGenero`).value
    let paginasLivro = document.getElementById(`inputPaginas`).value

    let novoLivro = {
        nome: nomeLivro,
        autor: autorLivro,
        genero: generoLivro,
        paginas: paginasLivro
    }

    livros.push(novoLivro)
   document.getElementById("cadastroOk").innerHTML = "O " + autorLivro + "é: " + generoLivro 
}
       

const livros = []

function cadastrarLivro(event) {
    event.preventDefault()
    let nomeLivro = document.getElementById(`inputLivro`).value
    let autorLivro = document.getElementById(`inputAutor`).value
    let generoLivro = document.getElementById(`inputGenero`).value
    let paginasLivro = document.getElementById(`inputPaginas`).value

    const novoLivro = {
        nome: nomeLivro,
        autor: autorLivro,
        genero: generoLivro,
        paginas: paginasLivro
    }

    livros.push(novoLivro)
    limpaLivro()
    console.log(livros)
    
    mostrarOsLivros()
}

function limpaLivro() {
    document.getElementById(`inputLivro`).value = ''
    document.getElementById(`inputAutor`).value = ''
    document.getElementById(`inputGenero`).value = ''
    document.getElementById(`inputPaginas`).value = ''

    document.getElementById('inputLivro').focus()

}

function mostrarOsLivros() {
    document.getElementById('listasLivros').innerHTML = ''
    for (let i = 0; i < livros.length; i++) {
        console.log(livros)
        document.getElementById('listasLivros').innerHTML += `
        <div class="card"> <h3> ${livros[i].nome}</h3> 
        <p>Autor: ${livros[i].autor}</p>
        <p>Autor: ${livros[i].genero}/<p>
        <p>Autor: ${livros[i].paginas}</p>
        </div>
        `
    }
}


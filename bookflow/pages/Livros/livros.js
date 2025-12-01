let livros = JSON.parse(localStorage.getItem("livros")) || [];

function cadastrarLivro() {
    

    let nome = document.getElementById("inputLivro").value;
    let autor = document.getElementById("inputAutor").value;
    let genero = document.getElementById("inputGenero").value;
    let paginas = document.getElementById("inputPaginas").value;

    let novoLivro = {
        id:Date.now(),
        nome: nome,
        autor: autor,
        genero: genero,
        paginas: paginas
    };

    livros.push(novoLivro);

    localStorage.setItem("livros", JSON.stringify(livros));

    limpaLivro();
    mostrarOsLivros();
}

function limpaLivro() {
    document.getElementById("inputLivro").value = "";
    document.getElementById("inputAutor").value = "";
    document.getElementById("inputGenero").value = "";
    document.getElementById("inputPaginas").value = "";

    document.getElementById("inputLivro").focus();
}

function mostrarOsLivros() {
    livros = JSON.parse(localStorage.getItem('livros')) || []
    document.getElementById("listasLivros").innerHTML = '';
for(let i=0; i<livros.length; i++){
 
        document.getElementById("listasLivros").innerHTML += `
            <div class="card">
            <p>ID: ${livros[i].id}</p>
                <h3>${livros[i].nome}</h3>
                <p>Autor: ${livros[i].autor}</p>
                <p>Gênero: ${livros[i].genero}</p>
                <p>Páginas: ${livros[i].paginas}</p>
                 <button onclick="editarLivro(${livros[i].id})">📝</button>
            </div>
        `;

}
   
}
function editarLivro(id){
    //console.log(id);
    livros = JSON.parse(localStorage.getItem('livros')) || []

    for(let i=0; i<livros.length; i++){
        if(livros[i].id == id){
            console.log(livros[i]);
            document.getElementById('inputLivro').value = livros[i].nome
            document.getElementById('inputAutor').value = livros[i].autor
            document.getElementById('inputGenero').value = livros[i].genero
            document.getElementById('inputPaginas').value = livros[i].paginas
            idEditando = livros[i].id
        }
    }
    
}

function salvaLivro(){
    livros = JSON.parse(localStorage.getItem('livros')) || []
    for(let i=0; i<livros.length; i++){
        if(livros[i].id == idEditando){
            console.log(livros[i]);
            livros[i].nome = document.getElementById('inputLivro').value
            livros[i].autor = document.getElementById('inputAutor').value
             livros[i].genero = document.getElementById('inputGenero').value
              livros[i].paginas = document.getElementById('inputPaginas').value
        }
    }
    localStorage.setItem("livros", JSON.stringify(livros))
    mostrarOsLivros()
    alert("Alterado com muito sucesso")
    limpaLivro()
    idEditando = 0
}
function editar(id){
    for(let i=0; i<livros.length; i++){
        if(livros[i].id == id){
            console.log(livros[i]);

        }
    }
    
}

function navegar() {
    window.location.href = "../Dashboard/menu.html";
}
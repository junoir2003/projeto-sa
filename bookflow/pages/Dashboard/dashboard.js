
function carregarDashboard() {

    let livros = JSON.parse(localStorage.getItem("livros")) || [];

    
    const lista = document.getElementById("listaLivros");
    lista.innerHTML = "";

    livros.forEach(livro => {
        let li = document.createElement("li");
        li.textContent = `${livro.nome} - ${livro.paginas} páginas`;
        lista.appendChild(li);
    });


    let totalLivros = livros.length;

    
    let totalPaginas = livros.reduce((acc, livro) => acc + Number(livro.paginas), 0);

    document.getElementById("totalLivros").textContent = totalLivros;
    document.getElementById("totalPaginas").textContent = totalPaginas;

    
    document.getElementById("diasNecessarios").textContent = 0;
    document.getElementById("faltamPaginas").textContent = 0;
}


function calcular() {
    let paginasPorDia = Number(document.getElementById("paginasPorDia").value);

    let livros = JSON.parse(localStorage.getItem("livros")) || [];
    let totalPaginas = livros.reduce((acc, livro) => acc + Number(livro.paginas), 0);

    if (paginasPorDia <= 0) {
        alert("Digite um valor válido para páginas por dia!");
        return;
    }

    let dias = Math.ceil(totalPaginas / paginasPorDia);

    document.getElementById("diasNecessarios").textContent = dias;
    document.getElementById("faltamPaginas").textContent = totalPaginas;
}


carregarDashboard();

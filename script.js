// Função para carregar os dados do LocalStorage
function carregarDados() {
    // Carregar número de curtidas
    const curtidasSalvas = localStorage.getItem("curtidas");
    if (curtidasSalvas) {
        curtidas = parseInt(curtidasSalvas);
        document.getElementById("curtidasCount").innerText = `Curtidas: ${curtidas}`;
    }

    // Carregar os comentários
    const comentariosSalvos = localStorage.getItem("comentarios");
    if (comentariosSalvos) {
        comentarios = JSON.parse(comentariosSalvos);
        exibirComentarios();
    }
}

// Função para curtir
function curtir() {
    curtidas++;
    localStorage.setItem("curtidas", curtidas);  // Salva as curtidas no LocalStorage
    document.getElementById("curtidasCount").innerText = `Curtidas: ${curtidas}`;
}

// Função para adicionar comentário
function adicionarComentario(event) {
    event.preventDefault();  // Impede o envio do formulário

    const comentarioTexto = document.getElementById("comentarioTexto").value;
    if (comentarioTexto.trim()) {
        // Adiciona o comentário à lista
        comentarios.push(comentarioTexto);
        localStorage.setItem("comentarios", JSON.stringify(comentarios));  // Salva os comentários no LocalStorage

        // Exibe o novo comentário
        exibirComentarios();

        // Limpa o campo de comentário
        document.getElementById("comentarioTexto").value = "";
    }
}

// Função para exibir os comentários
function exibirComentarios() {
    const listaComentarios = document.getElementById("listaComentarios");
    listaComentarios.innerHTML = "";  // Limpa a lista antes de adicionar

    comentarios.forEach(comentario => {
        const novoComentario = document.createElement("div");
        novoComentario.classList.add("comentario");
        novoComentario.innerText = comentario;
        listaComentarios.appendChild(novoComentario);
    });
}

// Carregar os dados ao carregar a página
document.addEventListener("DOMContentLoaded", carregarDados);

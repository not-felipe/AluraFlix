var listaFilmes = [
  "https://upload.wikimedia.org/wikipedia/pt/thumb/c/cd/Whiplash_em_busca_da_perfeicao.png/240px-Whiplash_em_busca_da_perfeicao.png",
  "https://upload.wikimedia.org/wikipedia/pt/3/3a/Interstellar_Filme.png",
  "https://upload.wikimedia.org/wikipedia/pt/3/3a/About_Time.jpg",
];

for (var i = 0; i < listaFilmes.length; i++) {
  document.write("<img src=" + listaFilmes[i] + ">");
}

function novoFilme() {
  var urlFilme = document.getElementById("submit-movie").value;
  if (listaFilmes.includes(urlFilme)) {
    alert("Imagem já adicionada");
  } else {
    listaFilmes.push(urlFilme);
    document.getElementById("filmes").innerHTML = "";
    for (var i = 0; i < listaFilmes.length; i++) {
      document.getElementById("filmes").innerHTML += "<img src=" + listaFilmes[i] + ">";
    }
  }
}

const promessa = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/moviefinder/filmes')
promessa.then(renderizarFilmes);

function renderizarFilmes(filmes) {

    const arrayFilmes = filmes.data;
    const conteudo = document.querySelector(".movies");
    
    for (let i = 0; i < arrayFilmes.length; i++) {
        conteudo.innerHTML += `
        <div class="movie">
            <img src="${arrayFilmes[i].imagem}">
            <div class="title">${arrayFilmes[i].titulo}</div>
            <button onclick="comprar(${arrayFilmes[i].id}, '${arrayFilmes[i].titulo}')">
            Comprar
            <ion-icon name="cart-outline"></ion-icon>
            </button>
        </div>
        `;
    }
}

let nome;
let assentos;
let filmeComprado;

function comprar(idFilme, tituloFilme) {
    nome = prompt("Qual seu nome?");
    assentos = prompt("Quantos ingressos você deseja?");
    filmeComprado = tituloFilme;

    const dados = {nome: nome, quantidade: assentos};

    const promessa = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/moviefinder/filmes/${idFilme}/ingresso`, dados);
    promessa.catch(tratarErro);
    promessa.then(tratarAcerto);
}

function tratarErro() {
    alert("Os ingressos para este filme estão esgotados!");
}

function tratarAcerto() {
    alert(`${nome} comprou ${assentos} ingressos para o filme ${filmeComprado}!`);
}
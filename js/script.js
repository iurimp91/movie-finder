const promessa = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/moviefinder/filmes')
promessa.then(renderizarFilmes);

function renderizarFilmes(filmes) {

    const arrayFilmes = filmes.data;
    console.log(arrayFilmes);
    const conteudo = document.querySelector(".movies");
    
    for (let i = 0; i < arrayFilmes.length; i++) {
        conteudo.innerHTML += `
        <div class="movie">
            <img src="${arrayFilmes[i].imagem}">
            <div class="title">${arrayFilmes[i].titulo}</div>
            <button onclick="comprar(${arrayFilmes[i].id})">
            Comprar
            <ion-icon name="cart-outline"></ion-icon>
            </button>
        </div>
        `;
    }
}

let nome;
let assentos;

function comprar(idFilme) {
    nome = prompt("Qual seu nome?");
    assentos = prompt("Quantos ingressos você deseja?");

    const dados = {nome: nome, quantidade: assentos};

    const promessa = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/moviefinder/filmes/${idFilme}/ingresso`, dados);
    promessa.catch(tratarErro);
    promessa.then(tratarAcerto);
}

function tratarErro() {
    alert("Os ingressos para este filme estão esgotados!");
}

function tratarAcerto() {
    alert(`${nome} comprou ${assentos} ingressos para o filme!`);
}
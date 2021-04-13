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
            <button>
            Comprar
            <ion-icon name="cart-outline"></ion-icon>
            </button>
        </div>
        `;
    }
}
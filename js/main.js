const checkboxFilmesFavoritos = document.getElementById("favoritos");

checkboxFilmesFavoritos.addEventListener("click", exibirFilmes);

function exibirFilmes() {
  const exibirFilmesNaTela = document.createElement("div");
  exibirFilmesNaTela.innerHTML = `
  <section class="movies">
      <div class="movies-box-infos">
        <img
          src="images/avengers-endgame.svg"
          alt="Imagem do Filme Avengers Endgame (2019)"
          class="movies-image"
        />
        <div class="movies-box-title">
          <h3 class="title-movie">Avengers Endgame (2019)</h3>
          <div class="movies-box-fav">
            <div class="note-movie">
              <img src="images/star.svg" alt="Icone de uma estrela" />
              <p>9.4</p>
            </div>
            <div class="fav-movie">
              <img src="images/heart.svg" alt="Icone de um coração" />
              <p>Favoritar</p>
            </div>
          </div>
        </div>
      </div>
      <div class="movies-box-description">
        <p class="description-movie">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
    </section>
  `;
}

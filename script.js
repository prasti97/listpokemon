function getPokemon() {
  function fetchPokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        createPokemon(data);
      });
  }
  function fetchPokemons(number) {
    for (let i = 1; i <= number; i++) {
      fetchPokemon(i);
    }
  }
  function createPokemon(pokemon) {
    pokemonContainer = document.querySelector('.pokemon-Container');

    const card = document.createElement('div');
    card.classList.add('card');

    const box = document.createElement('div');
    box.classList.add('box');

    const content = document.createElement('div');
    content.classList.add('content');

    const h2 = document.createElement('h2');
    h2.setAttribute('id', 'nomer');
    h2.innerHTML = pokemon.id;

    const h3 = document.createElement('h3');
    h3.setAttribute('id', 'nama');
    h3.innerHTML = pokemon.name;

    const gambar = document.createElement('img');
    gambar.src = pokemon.sprites.front_default;

    const tipe = document.createElement('span');
    const types = pokemon.types[0].type.name;
    tipe.innerHTML = `Type : ${types}`;

    const base = document.createElement('p');
    base.innerHTML = `Base Experience : ${pokemon.base_experience}`;

    const wh = document.createElement('p');
    wh.innerHTML = `Weight : ${pokemon.weight}kg | Height : ${pokemon.height}m`;

    pokemonContainer.appendChild(card);
    card.appendChild(box);
    box.appendChild(content);
    content.appendChild(gambar);
    content.appendChild(h2);
    content.appendChild(h3);
    content.appendChild(base);
    content.appendChild(wh);
    content.appendChild(tipe);

    card.onmouseover = function () {
      if (types == 'grass') {
        box.style.background = 'linear-gradient(45deg, #50f058, #25882a)';
      } else if (types == 'fire') {
        box.style.background = 'linear-gradient(45deg, #ec530b, #eb1919)';
      } else if (types == 'water') {
        box.style.background = 'linear-gradient(45deg, #7da5ee, #283cf1)';
      } else if (types == 'bug') {
        box.style.background = 'linear-gradient(45deg, #7e7f81, #47474e)';
      } else if (types == 'normal') {
        box.style.background = 'linear-gradient(45deg, #f1d18b, #d4ae45)';
      } else if (types == 'poison') {
        box.style.background = 'linear-gradient(45deg, #f18be3, #850e6b)';
      } else if (types == 'electric') {
        box.style.background = 'linear-gradient(45deg, #ebf838, #f4f802)';
      } else {
        box.style.background = 'linear-gradient(45deg, #c47a26, #7e3206)';
      }
    };

    card.onmouseout = function () {
      box.style.background = '#21272c';
    };
  }
  fetchPokemons(30);
}

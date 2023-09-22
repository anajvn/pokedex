const detailCard = {}

// See the detail card, by changing the inner HTML of the page
detailCard.pokemonDetailedCard = (id) => {
    pokeApi.getPokemons(id-1, 1)
    .then((pokemons) => {
        contentHtml.style.padding = '0'
        contentHtml.style.backgroundColor = '#f6f8fc' 
        const cardHtml = pokemons.map( pokemon => `
        <header id="card-header" class="${pokemon.type}">
            <h1 id="card-title" class="name">${pokemon.name}</h1>
            <img id="card-image"src="${pokemon.photo}">
        </header>
        
        <div id="card-info">
            <ol id="card-items">
                <li> 
                    Height: <span> ${pokemon.height} cm</span>
                </li>
                <li> 
                    Weight: <span> ${pokemon.weight} kg</span>
                </li>
                <li> 
                    Types: ${pokemon.types.map((type) => `<span class="items">${type}</span>`).join(', ')}
                </li> 
                <li> 
                    Abilities: ${pokemon.abilities.map((ability) => `<span class="items">${ability}</span>`).join(', ')}
                </li>   
            </ol>
        </div>

        <div class="detail-card">
            <button type="button" onclick="returnButton(${id})" >
                &#8592;
            </button>
        </div>
    `)
        contentHtml.innerHTML = cardHtml
    })
}

// Function to return the configs of the main page
function returnButton(id) {
    contentHtml.style.padding = '1rem'
    contentHtml.style.backgroundColor = 'lightgoldenrodyellow'
    contentHtml.innerHTML = mainContent

    // Return to the point where the user was before seeing the card
    window.scrollTo(0, findPosition( document.getElementById(id)))
}

function findPosition(obj) {
    var currenttop = 0;
    if (obj.offsetParent) {
      do {
        currenttop += obj.offsetTop;
      } while ((obj = obj.offsetParent));
      return [currenttop];
    }
}
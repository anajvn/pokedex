const contentHtml = document.getElementById('content')
// Contain the content HTML to be used when returning from a detail card
let mainContent = ""

// Amount of pokemons being added to the page
const limit = 20;
// Start number of the pokemon being added to the page
let offset = 0;

// Load more pokemons to the main page
function loadPokemonItens(offset, limit){
    pokeApi.getPokemons(offset, limit)
    .then((pokemons) => {
        const pokemonList = document.getElementById('pokemonList')
        const listItems = pokemons.map( pokemon => `
        <li class="pokemon ${pokemon.type}" id="${pokemon.number}" onclick="detailCard.pokemonDetailedCard(${pokemon.number})">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>
            
            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>

                <img src="${pokemon.photo}"
                alt=${pokemon.name}>
            </div>
        </li>
    `).join('')
        pokemonList.innerHTML += listItems
        mainContent = contentHtml.innerHTML
    })
}

// Runs as the program opens
loadPokemonItens(offset, limit)

// Runs when clicked
function loadMoreButton(){
    offset += limit
    loadPokemonItens(offset, limit) 
}

/* Code constraining the limit of cards 
const maxRecords = 11;
loadMoreButton.addEventListener('click', () => {
    offset += limit

    const qtdRecordNextPage = offset + limit

    if(qtdRecordNextPage >= maxRecords){
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }

})
*/

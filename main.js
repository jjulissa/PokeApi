const pokemons = "https://pokeapi.co/api/v2/pokemon/?limit=10"
const containerPokemons = document.querySelector("#containerPokemons")

const getUrl = (url) => {
    return fetch(url).then(res => res.json())
}

getUrl(pokemons)
.then(data => data.results.map(e => {return getUrl(e.url)}))
.then(res => Promise.all(res))
.then(data => data.forEach((e) => {
    const div = document.createElement('div')
    console.log(e);
    div.innerHTML = `
        <div style="margin:0.4rem; border: 1px solid black; text-align:center; display: flex; flex-direction: column;" class="containerPokemon">
            <p>${e.id}</p>
            <p>${e.name}</p>
            <img width="130px" src="${e.sprites.front_default}" alt="${e.name}">
            <button onclick="removeCard(event)" class="btn-eliminar">Eliminar</button>
            <a href="./detalle.html?id=${e.id}">VER DETALLE</a>
        </div>`

        containerPokemons.append(div)
}));

function removeCard(event) { 
    event.target.parentElement.parentElement.remove()
}
    








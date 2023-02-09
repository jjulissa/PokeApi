const queryString = window.location.search
const url = new URLSearchParams(queryString)
const pokemon = url.get('id') 

fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then(res => res.json())
    .then(data => {
        const div = document.createElement('div')
        console.log(data);
        div.innerHTML = `
        <div style="margin:0.4rem; border: 1px solid black; text-align:center; display: flex; flex-direction: column;" class="containerPokemon">
            <p>${data.id}</p>
            <p>${data.name}</p>
            <img width="130px" src="${data.sprites.front_default}" alt="${data.name}">
            <p>Weight: ${data.weight}</p>
            <p>Height: ${data.height}</p>
            <p>Ability 1: ${data.abilities[0].ability.name}</p>
            <p>Ability 2: ${data.abilities[1].ability.name}</p>
        </div>
        <a href="./index.html">HOME</a>
        `

        containerPokemon.append(div)
    });
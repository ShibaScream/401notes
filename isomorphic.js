require('isomorphic-fetch')
const POKEMONPATH = 'http://pokeapi.co/api/v2/pokemon/'
const ABILITYPATH = 'http://pokeapi.co/api/v2/ability/'

// fetch('http://pokeapi.co/api/v2/pokemon/123')
//   // note this part!
//   // you are returning a promise which allows you to chain the .then()
//   .then(res => res.json())
//   .then(data => {
//     console.log(data)
//   })
//   .catch(err => {
//     console.error(err)
//   })

function handlePokemon (pokemon, next) {
  pokemon.forEach(id => {
    fetch(`${POKEMONPATH}${id}`)
      .then(res => res.json())
      .then(data => next(data))
      .catch(err => console.log(err))
  })
}

function printPokemonAbilitiesDetail (pokemon) {
  pokemon.abilities.forEach(slot => {
    fetch(slot.ability.url)
      .then(res => res.json())
      .then(data => {
        console.log('______________________________________________________\n\n')
        console.log(data.effect_entries)
        console.log('______________________________________________________\n\n')
      })
      .catch(err => console.log(err))
  })
}

handlePokemon([4], printPokemonAbilitiesDetail)

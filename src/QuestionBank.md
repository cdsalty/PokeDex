This exercise lets you pratice using React components and properties.
Create a pokemon application (a “pokedex”) that displays an interface...

PART I
To create the pokedex, you should use 3 components:

App:    This should just render a single Pokedex.
(It’s common for the top-level app to not have direct logic in it, but to render the top application object and this will becomes useful when you build sites that compose several different parts together.)

Pokecard:   Shows a single Pokemon, with their name, image, and type.


Pokedex:    Is provided, via props, an array of objects describing different pokemon, and renders a series               of Pokecard components.

Use the defaultProps feature of Pokecard to provide a default list of Pokemon characters to show. Use this list for a set of defaults:
[
  {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
  {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
  {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
  {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
  {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
  {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
  {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
  {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
]

image source should be: https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png.


On Pokecard.js, 
const POKE_API = https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png
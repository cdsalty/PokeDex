import React, { Component } from 'react';
import Pokedex from './Pokedex'

class Pokegame extends Component {
    static defaultProps = {     // Data that was provided to serve as the default Prop data 
        pokemonKey: [
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
            {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
            {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
        ]
    };

    render() {
        let hand1 = [];
        let hand2 = [ ...this.props.pokemonKey]; // an array that contains the contents of the pokemonKey array
        
        // WRITE WHILE LOOP NOW... 
        // takes everything stored inside the this.props.name array, createsa an entirely new array of the same exact information
        while (hand1.length < hand2.length){
            // what needs to happen? pick random index, set it equal to a random index 
            let randomIndex = Math.floor(Math.random() * hand2.length); // create a variable, called randIndex and then assign it a random index position based off the hand 2 length
                        // (round down),(a random number),(between 0 & however many pokemons are left) in hand2
            // let randomPokemon = hand2.splice(0, 0, randomIndex);
            let randomPokemon = hand2.splice(randomIndex, 1)[0];
            // console.log(randomPokemon);
            hand1.push(randomPokemon);
        }
        // console.log(hand1);
        // console.log(hand2);

        return (
            <div>
                <Pokedex pokemonKey = {hand1} />
                <Pokedex pokemonKey = {hand2} />
            </div>
        );
    }
}

export default Pokegame;
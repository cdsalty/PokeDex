import React, { Component } from 'react';
import Pokecard from './Pokecard';  // Because we call on it under h1 title returned
import './Pokedex.css';

class Pokedex extends Component {

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
        return (
            <div className="Pokedex">
              <h1>Pokedex!!!</h1>
              <p>Total Experience: {this.props.exp}</p>
              <p>{this.props.isWinner ? 'Winner' : 'Loser'}</p>
              <div className = "Pokedex-cards">
                {this.props.pokemonKey.map((p) => (
                    // render a Pokecard by mapping over and producing a card with the id, name, type and experience
                    <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
                    // will loop through all pokemonKey's (all eight)
                ))}
              </div>
            </div>
        );
    }
}

export default Pokedex;
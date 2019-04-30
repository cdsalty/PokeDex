import React, { Component } from 'react';

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
        let hand2 = [ ...this.props.pokemonKey];
        
        // WRITE WHILE LOOP NOW... 
        // zac note: so when you do let hand2= […this.props.name] it is taking 
        // everything stored inside the this.props.name array, and creating an entirely new array of 
        // the same exact information

        return (
            <div>
                <h1>Sanity Check</h1>
            </div>
        );
    }
}

export default Pokegame;
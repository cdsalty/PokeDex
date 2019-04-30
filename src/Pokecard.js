import React, { Component } from 'react';
import './Pokecard.css';

// Create API to pull the images from: 
// (https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png/)
//          ** removed ${id}.png and assigned to our props since this determines the image to display
// const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

//Need a function that makes the id 3 digits long. 
// My thinking
// Need a function that takes in an id and if the id isn't three characters, it will add one or two zeros;
    // function must check if 3 digits, if not, add 0 and then check if three digits, repeat, done.
    // used padToThree function:
let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3): number);
                // if number is less than 999 do this else return number; call padToThree in the imgSrc
                    // imgSrc = `${padToThree(this.props.id)}` returns a string that constains the proper number of zeros required

    

class Pokecard extends Component {
    render() {
        // let imgSrc = `${POKE_API}${this.props.id}.png`;
        let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`;
        // now that our imgSrc is defined, we need to call on it below.
        return (
            <div className="Pokecard">
              <h1 className = "Pokecard-title">{this.props.name}</h1>
              <img src={imgSrc} alt={this.props.name} />
              <div className = "Pokecard-data">Type: {this.props.type}</div>
              <div className = "Pokecard-data">EXP: {this.props.exp}</div>
            </div>
        );
    }
}

export default Pokecard;
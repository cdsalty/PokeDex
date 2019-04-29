import React, { Component } from 'react';
import './Pokecard.css';

// Create API to pull the images from: 
// (https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png/)
//          ** removed ${id}.png and assigned to our props since this determines the image to display
const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
    

class Pokecard extends Component {
    render() {
        let imgSrc = `${POKE_API}${this.props.id}.png`;
        // now that our imgSrc is defined, we need to call on it below.
        return (
            <div className="Pokecard">
              <h1>{this.props.name}</h1>
              <img src={imgSrc} alt={this.props.name} />
              <div>Type: {this.props.type}</div>
              <div>EXP: {this.props.exp}</div>
            </div>
        );
    }
}

export default Pokecard;
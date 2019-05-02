import React, { Component } from 'react';
//import Pokecard from './Pokecard'; // replaced by Pokedex, the higher level component.
// import Pokedex from './Pokedex';  // replaced by Pokegame;
import Pokegame from './Pokegame';
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        {/* replaced Pokecard below with a plain <Pokedex />
        <Pokecard id={4} name="Charmander" type="fire" exp={62} /> */}
        <Pokegame />
        {/* <Pokegame /> */}
      </div>
    );
  }
}

export default App;

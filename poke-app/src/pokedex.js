import React from 'react';
import Pokecard from "./pokecard";
import './pokedex.css';




const Pokedex = (props) => {
    let winMes = null;
    if(props.isWinner){
        winMes = <p className='Pokedex-winner'>This deck wins!</p>
    }
    return (
    <div className="Pokedex">
      <h2 className="Pokedex-title">Pokedex</h2>
      <div className="Pokedex-cards">
        {props.pokemon.map(p => (
          <Pokecard
            id={p.id}
            name={p.name}
            type={p.type}
            exp={p.base_experience}
          />
        ))}
      </div>
      <h4>Total experience: {props.exp}</h4>
      {winMes}
    </div>
    )
}

export default Pokedex;
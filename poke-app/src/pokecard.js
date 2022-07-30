import React from 'react';
import './pokecard.css';


const pokeApi = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

const Pokecard = ({ id, name, type, exp }) => {
    const url = `${pokeApi}${id}.png`

    return (
        <div className="Pokecard">
            <div className="Pokecard-title">{ name }</div>
            <img className="Pokecard-image" src={url}/>
            <div className="Pokecard-data">Type: { type }</div>
            <div className="Pokecard-data">EXP: { exp }</div>
        </div>
    )
}

export default Pokecard;











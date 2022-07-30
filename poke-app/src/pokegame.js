import React from 'react';
import Pokedex from "./pokedex";

const Pokegame = (props) =>{
    let p1 = [];
    let p2 = [...props.pokemon];

    while(p1.length < p2.length){
        let idx = Math.floor(Math.random() * p2.length);
        let transfer = p2.splice(idx, 1)[0];
        p1.push(transfer)
    }

    let exp1 = p1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
    let exp2 = p2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);

    return (
        <div>
            <Pokedex pokemon={p1} exp={exp1} isWinner={exp1 > exp2} />
            <Pokedex pokemon={p2} exp={exp2} isWinner={exp2 > exp1} />
        </div>
    )
}


Pokegame.defaultProps = {
    pokemon: [
      { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
      { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
      { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
      { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
      { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
      { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
      { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
      { id: 133, name: "Eevee", type: "normal", base_experience: 65 }
    ]
  };

export default Pokegame;
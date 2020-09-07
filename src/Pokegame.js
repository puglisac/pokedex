import { choice} from "./helpers";
import pokemon from "./pokemon";
import Pokedex from './Pokedex'
import React from "react";
const shuffle = [];
for (let i = 0; i < 8; i++) {
    const random = choice(pokemon)
    shuffle.push(random);
    pokemon.splice(pokemon.indexOf(random), 1);
}
const hand1 = shuffle.splice(0,4);
const hand2 = shuffle.splice(0,4);

function totalExp(hand){
    let total=0
    for(let p of hand){
        total += Number(p.base_experience)
    }
    return total;
}

const Pokegame = () => (
    <>
    <div>
        <h1>Hand 1</h1>
        <Pokedex pokemon={hand1} exp={totalExp(hand1)} isWinner = {totalExp(hand1)>totalExp(hand2)}/>
    </div>
    <div>
        <h1>Hand 2</h1>
        <Pokedex pokemon={hand2} exp={totalExp(hand2)} isWinner = {totalExp(hand2)>totalExp(hand1)}/>
    </div>
    </>
)
export default Pokegame;
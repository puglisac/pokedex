import Pokecard from "./Pokecard";
import React from "react";
const Pokedex = ({ pokemon, exp, isWinner }) => (
	<div>
		{pokemon.map((p) => (
			<Pokecard
				key={p.id}
				name={p.name}
				type={p.type}
				base_experience={p.base_experience}
				image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`}
			/>
		))}
		<p>Total EXP: {exp}</p>
		<p>This hand {isWinner ? "wins!" : "loses."}</p>
	</div>
);
export default Pokedex;

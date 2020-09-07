import React from "react";
import "./Pokecard.css";
const Pokecard = (props) => (
	<div className="Pokecard">
		<h2>{props.name}</h2>
		<img src={props.image} alt={props.name} />
		<p>Type: {props.type}</p>
		<p>EXP: {props.base_experience}</p>
	</div>
);
export default Pokecard;

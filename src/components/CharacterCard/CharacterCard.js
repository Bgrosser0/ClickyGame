import React from "react";
import "./CharacterCard.css";

const CharacterCard = props => (
  <div className="card" onClick={props.handleGuess}>
    <div className="img-container">
      <img alt={props.name} src={props.image} onClick={() => props.chooseCharacter(props.id)}/>
    </div>
  </div>
);

export default CharacterCard;

//SHUFFLE CALL
// onClick={() => props.shuffle(props.id)}

//HANDLE GUESS CALL
// onClick={() => props.handleGuess(props.id)} 
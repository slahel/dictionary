import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <div>{props.meaning.partOfSpeech}</div>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>{definition.definition}</p>
          </div>
        );
      })}
    </div>
  );
}

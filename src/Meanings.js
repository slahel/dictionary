import React from "react";
import Synonyms from "./Synonyms";
import { FaBookOpen } from "react-icons/fa";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4>
        <FaBookOpen /> {props.meaning.partOfSpeech}
      </h4>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div>
              {definition.definition}
              <br />
              <em className="Example">{definition.example}</em>
              <br />
              <Synonyms synonyms={definition.synonyms} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

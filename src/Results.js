import React from "react";
import Meaning from "./Meanings";

export default function Results(props) {
  // console.log(props.results);
  if (props.results) {
    return (
      <div className="Results">
        <h3>{props.results.word}</h3>
        <p className="phonetic">{props.results.phonetic}</p>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}

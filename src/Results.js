import React from "react";
import Meaning from "./Meanings";
import "./Results.css";

export default function Results(props) {
  console.log(props.results);
  if (props.results) {
    return (
      <div className="Results">
        <h2>{props.results.word}</h2>
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

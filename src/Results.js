import React from "react";
import Meaning from "./Meanings";
import "./Results.css";

export default function Results(props) {
  console.log(props.results);
  if (props.results) {
    return (
      <div className="Results">
        <h2>{props.results.word}</h2>
        <div className="phonetic">
          <span>
            <a href={props.results.phonetics[0].audio} target="_blank">
              🔈{" "}
            </a>
          </span>
          <span>{props.results.phonetics[0].text}</span>
        </div>
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

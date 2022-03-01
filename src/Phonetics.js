import React from "react";

export default function Phonetics(props) {
  console.log(props.phonetic);
  if (props.phonetic.audio) {
    return (
      <div>
        <a
          href={props.phonetic.audio}
          target="_blank"
          rel="noopener noreferrer"
        >
          🔈
        </a>
        <span>{props.phonetic.text}</span>
      </div>
    );
  } else {
    return null;
  }
}

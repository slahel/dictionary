import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  let [searchWord, setSearchWord] = useState(null);
  let [results, setResults] = useState(null);
  function getResponse(response) {
    //console.log(response.data[0]);
    //console.log(response.data[0].meanings);
    setResults(response.data[0]);
  }
  function handleSearcWord(event) {
    setSearchWord(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    // api from: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`;
    axios.get(apiUrl).then(getResponse);
  }
  return (
    <div className="dictionary">
      <form onSubmit={handleSubmit}>
        <input type="search" onChange={handleSearcWord}></input>
        <input className="btn" type="submit"></input>
      </form>
      <Results results={results} />
    </div>
  );
}

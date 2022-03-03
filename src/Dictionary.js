import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./App.css";
import { RiSearchEyeFill } from "react-icons/ri";

export default function Dictionary() {
  let [searchWord, setSearchWord] = useState("welcome");
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function getResponse(response) {
    //console.log(response.data[0]);
    //console.log(response.data[0].meanings);
    setResults(response.data[0]);
  }
  function handleSearchWord(event) {
    setSearchWord(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    Search();
  }
  function load() {
    setLoaded(true);
    Search();
  }

  function Search() {
    // api from: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`;
    axios.get(apiUrl).then(getResponse);
  }
  if (loaded) {
    return (
      <div className="dictionary">
        <header>
          <h1>
            <RiSearchEyeFill />
            {"  "}
            Dictionary
          </h1>
          <form onSubmit={handleSubmit}>
            <input
              className="searchBar"
              type="search"
              placeholder="Suggested words: hello, table, sun,..."
              onChange={handleSearchWord}
            ></input>
            <input className="btn" type="submit"></input>
          </form>
        </header>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return ``;
  }
}

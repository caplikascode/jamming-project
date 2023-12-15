import React from 'react';
import './SearchBar.css';
import { useState } from "react";

function SearchBar(props) {
  
  const [term, setTerm] = useState("");

  function passTerm() {
    props.onSearch(term);
  }
  
  function handleTermChange({ target }) {
    setTerm(target.value);
  }

  return (
      <div className="SearchBar">
        <input
        placeholder="Enter A Song, Album, or Artist"
        onChange={handleTermChange}
      />
        <button className="SearchButton" onClick={passTerm}>Search</button>
      </div>
    );
}

export default SearchBar;
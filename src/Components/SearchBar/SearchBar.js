import React from 'react';
import './SearchBar.css';

function SearchBar(props) {
    return (
      <div className="SearchBar">
        <input placeholder="Enter a song, Album or, Artist"></input>
         <button className="SearchButton">Search</button>
      </div>
    );
}

export default SearchBar;
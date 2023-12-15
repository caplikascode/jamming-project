import React from 'react';
import  './SearchResults.css';
import Tracklist from '../Tracklist/Tracklist';

function SearchResults(props) {
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        {/*<!-- tracklist component --> */}
       <Tracklist 
       userSearchResults={props.userSearchResults}
       onAdd={props.onAdd} 
       isRemoval={false}
       />
      </div>
    )
}

export default SearchResults;
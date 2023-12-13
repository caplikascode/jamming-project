import React from 'react';
import  './SearchResults.css';
import Tracklist from '../Tracklist/Tracklist';

function SearchResults(props) {
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        {/*<!-- tracklist component --> */}
       <Tracklist userSearchResults={props.userSearchResults} />
      </div>
    )
}

export default SearchResults;
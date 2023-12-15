import React from 'react';
import './Playlist.css';
import Tracklist from '../Tracklist/Tracklist';


function Playlist(props) {

    function handleNameChange({ target }) {
        props.onNameChange(target.value);
    }
    
    return (
      <div className="Playlist">
        <input defaultValue={"New Playlist"} onChange={handleNameChange}></input>
        {/* Add a tracklist component */}
        <Tracklist 
        userSearchResults={props.playlistTracks}
        onRemove={props.onRemove}
        isRemoval={true}
        />
        <button className="Playlist-save" onClick={props.onSave}>Save to spotify</button>
      </div>
    );
  
}

export default Playlist;
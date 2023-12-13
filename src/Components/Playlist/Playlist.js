import React from 'react';
import './Playlist.css';
import Tracklist from '../Tracklist/Tracklist';


function Playlist(props) {
    return (
      <div className="Playlist">
        <input defaultValue={"New Playlist"}></input>
        {/* Add a tracklist component */}
        <Tracklist userSearchResults={props.playlistTracks}/>
        <button className="Playlist-save">Save to spotify</button>
      </div>
    );
  
}

export default Playlist;
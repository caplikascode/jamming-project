import React from 'react';
import './Playlist.css';

class Playlist extends React.Component {
  render() {
    return (
      <div className="Playlist">
        <input defaultValue={"New Playlist"}></input>
        {/* Add a tracklist component */}
        <button className="Playlist-save">Save to spotify</button>
      </div>
    );
  }
}

export default Playlist;
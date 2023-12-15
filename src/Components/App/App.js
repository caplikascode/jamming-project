import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import { useState } from 'react';
import { Spotify } from "../util/Spotify";


function App() {
     
 const [searchResults, setSearchResults] = useState([
    {
      name:  "example track name 1",
      artist: "example track artist  1",
      album: "example track album 1",
      id: 1
    },
    {
      name:  "example track name 2",
      artist: "example track artist 2",
      album: "example track album 2",
      id: 2
    },
 ]);
 const [playlistName, setPlaylistName] = useState("Example Playlist Name");
 const [playlistTracks, setPlaylistTracks] = useState([
  {
    name: "Example Playlist Name 1",
    artist: "Example Playlist Artist 1",
    album: "Example Playlist Album 1",
    id: 11,
  },
  {
    name: "Example Playlist Name 2",
    artist: "Example Playlist Artist 2",
    album: "Example Playlist Album 2",
    id: 22,
  },
  {
    name: "Example Playlist Name 3",
    artist: "Example Playlist Artist 3",
    album: "Example Playlist Album 3",
    id: 33,
  },
]);

function addTrack(track) {
  const existingTrack = playlistTracks.find((t) => t.id === track.id);
  const newTrack = playlistTracks.concat(track);
  if (existingTrack) {
    console.log("Track already exists");
  } else {
    setPlaylistTracks(newTrack);
  }
}

function removeTrack(track) {
  const existingTrack = playlistTracks.filter((t) => t.id !== track.id);
  setPlaylistTracks(existingTrack);
}

function updatePlaylistName(name) {
  setPlaylistName(name)
}

function savePlaylist() {
  const trackURIs = playlistTracks.map((track) => track.uri);
  Spotify.savePlaylist(playlistName, trackURIs).then(() => {
    updatePlaylistName("New Playlist");
    setPlaylistTracks([]);
})
}

function search(term) {
  Spotify.search(term).then((result) => setSearchResults(result));
  console.log(term);
}
  
  return (
       <div>
          <h1>
             Ja<span className="Highlight">mm</span>ing
          </h1>
        <div className="App">
            <SearchBar 
            onSearch={search}
            />
          <div className="App-playlist">
            <SearchResults 
            userSearchResults={searchResults}
            onAdd={addTrack}
            />
            
            <Playlist 
            playlistName={playlistName} 
            playlistTracks={playlistTracks}
            onRemove={removeTrack}
            onNameChange={updatePlaylistName}
            onSave={savePlaylist}
            />
          </div> 
        </div>
        </div>
     );
}

export default App;

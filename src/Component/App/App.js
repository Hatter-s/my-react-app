import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from '../Navbar/Navbar';
import Spotify from '../../utility/spotify/Spotify';
import Artist from '../Artist/Artist';

function App() {
  const [ artist, setArtist] = useState({});
  // first render
  useEffect(() => {
    Spotify.getArtist().then(result => {setArtist(result)});
  }, [])

  return (
    <div className="App">
      <Navbar />
      <Artist artist={artist}/>
      <button
        className='btn btn-outline-dark'
        onClick={Spotify.getArtistAlbum}
      >
        Click here
      </button>
      <Outlet />
    </div>
  );
}

export default App;

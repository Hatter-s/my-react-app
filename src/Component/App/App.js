import { useState, useEffect } from 'react';
import './App.css';
import Navbar from '../Navbar/Navbar';
import Spotify from '../../utility/spotify/Spotify';
import Artist from '../Artist/Artist';
import Albums from '../Albums/Albums';

function App() {
  const [ artist, setArtist] = useState({});
  const [albums, setAlbums] = useState([]);
  // first render
  useEffect(() => {
    Spotify.getArtist().then(result => {setArtist(result)});
    Spotify.getArtistAlbum().then(result => {setAlbums(result)});
  }, [])

  return (
    <div className="App">
      <Navbar />
      <Artist artist={artist}/>
      <Albums albums={albums}/>

      <button
        className='btn btn-outline-dark'
        onClick={Spotify.getArtistAlbum}
      >
        Click here
      </button>
    </div>
  );
}

export default App;

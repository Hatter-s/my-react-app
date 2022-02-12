import { useState, useEffect } from 'react';

import Album from "../Album/Album";
import '../Albums/Albums.css';
import Spotify from "../../utility/spotify/Spotify";

export default function AlbumsIndex() {
  const [albums, setAlbums] = useState([]);
  
  useEffect(()=> {
    Spotify.getArtistAlbum().then(result => setAlbums(result))
  }, [])

  return (
    <div className="container" id="albums">
      {albums.map(album => <Album album={album} key={album.id}/>)}
    </div>
  )
}
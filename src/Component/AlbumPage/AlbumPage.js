import Spotify from "../../utility/spotify/Spotify";
import { useEffect, useState } from "react";
import Track from "../Track/Track";

export default function AlbumPage() {
  let url = window.location.href;
  let albumID = url.split('/')[4];
  let [album, setAlbum] = useState({});
  useEffect(()=> {
    Spotify.getAlbum(albumID).then(result => setAlbum(result));
  }, []);

  return (
    <div className="album-page bg-secondary p-1">
      <img src={album.image} alt=""/>
      <h2>{album.name}</h2>
      <div className="status d-flex justify-content-around">
        <p>Release Date: {album.releaseDate}</p>
        <p>Album Type: {album.albumType}</p>
        <p>Popularity: {album.popularity}</p>
      </div>
      <h3>tracks</h3>
      {album.tracks ?album.tracks.map(track => <Track key={track.id} id={track.id}/>) : <p>Loading...</p>}
    </div>
  )
}
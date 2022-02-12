import { useState, useEffect } from "react";
import Spotify from "../../utility/spotify/Spotify";

export default function Track(props){
  let [name, setName] = useState('');
  useEffect(()=> {
    Spotify.getTrack(props.id).then(result => setName(result));
  }, [props.id]);

  return (
    <div>
      <h3>{name}</h3>
    </div>
  )
}
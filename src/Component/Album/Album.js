import { Link } from 'react-router-dom';
import './Album.css';

export default function Album(props) {
  return (
    <div className="container-fuild" id="album">
      <img src={props.album.image} alt=""/>
      <Link to={`/albums/${props.album.id}`}><h2>{props.album.name}</h2></Link>
      <div className="status">
        <p>Album Group:{props.album.albumType}</p>
        <p>Release date: {props.album.releaseDate}</p>
      </div>
    </div>
  )
}
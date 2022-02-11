import './Album.css';

export default function Album(props) {
  return (
    <div className="container-fuild" id="album">
      <img src={props.album.image} alt=""/>
      <h2>{props.album.name}</h2>
      <div className="status">
        <p>Album Group:{props.album.albumType}</p>
        <p>Release date: {props.album.releaseDate}</p>
      </div>
    </div>
  )
}
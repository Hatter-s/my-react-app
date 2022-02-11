import './Artist.css'

export default function Artist(props) {
  return (
    <div className="" id="artist">
      <img src={props.artist.image} alt=""/>
      <h1>{props.artist.name}</h1>
      <div className="container-fuild" id="status">
        <p>Followers: {props.artist.followers}</p>
        <p>Genres: {props.artist.genres}</p>
        <p>Popularity: {props.artist.popularity}</p>
      </div>
    </div>
  )
}
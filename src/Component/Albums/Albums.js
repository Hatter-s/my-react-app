import Album from "../Album/Album"
import './Albums.css'

export default function Albums(props) {
  return (
    <div className="container" id="albums">
      {props.albums.map(album => <Album album={album} key={album.id}/>)}
    </div>
  )
}
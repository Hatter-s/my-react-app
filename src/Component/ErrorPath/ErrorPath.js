import { Link } from "react-router-dom"

export default function ErorrPath() {
  return (
    <main>
      <h1>This url don't exist</h1>
      <p>Try one some link:</p>
      <Link to="/search">Search</Link>
      <Link to="/albums">Albums</Link>
    </main>
  )
}
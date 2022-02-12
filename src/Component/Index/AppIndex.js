import { Link } from "react-router-dom"

export default function AppIndex() {
  return (
    <div className="container fuild">
      <h1>Please Choose action</h1>
      <Link to="/albums" className="btn btn-outline-success me-5">Albums</Link>
      <Link to="/search" className="btn btn-outline-warning">Search</Link>
    </div>
  )
}
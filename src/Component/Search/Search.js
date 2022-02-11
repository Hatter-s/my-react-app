export default function Search () {
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className="container d-flex">
      <input
        className="form-control"
        type="text"
      />
      <input
        type="submit"
        onSubmit={handleSubmit}
        className="btn btn-outline-dark"
      />
    </div>
  )
}
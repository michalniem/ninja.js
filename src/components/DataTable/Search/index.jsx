function Index({ value, onSearch }) {
  return (
    <div className="p-b-1">
      <input
        type="search"
        value={value}
        className="form-control"
        placeholder="Søg brugere"
        onChange={onSearch} />
    </div>
  )
}

export default Index

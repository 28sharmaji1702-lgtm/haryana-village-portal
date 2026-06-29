import "../styles/SearchBar.css";

function SearchBar({ search, setSearch }) {
  return (
    <div className="search-section">
      <label className="section-title">
        Search Village
      </label>

      <div className="search-box">
        <span className="search-icon">
          🔍
        </span>

        <input
          type="text"
          placeholder="Search village..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
            }
          }}
        />
      </div>
    </div>
  );
}

export default SearchBar;
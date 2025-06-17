const SearchBar = ({ query, setQuery }) => (
  <input
    type="text"
    placeholder="Search contacts..."
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    className="p-2 border rounded w-full mb-4"
  />
);

export default SearchBar;

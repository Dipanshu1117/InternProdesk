import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from './MovieCards';

const SearchResults = ({ query }) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const API_KEY = 'f7334b7e0647a4d975f4eb2e0ad92446';
    const fetchSearch = async () => {
      try {
        const res = await axios.get("https://api.themoviedb.org/3/search/movie", {
          params: {
            api_key: API_KEY,
            query: query,
          },
        });
        setResults(res.data.results || []);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    if (query.trim()) fetchSearch();
  }, [query]);

  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold mb-2">Search Results</h2>
      <div className="flex gap-4 overflow-x-auto pb-2">
        {results.length ? (
          results.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;

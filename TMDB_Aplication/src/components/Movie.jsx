import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCards from './MovieCards';


const Movie = ({ title, endpoint }) => {
  const [movies, setMovies] = useState([]);
  const API_KEY =import.meta.env.VITE_APP_TMDB_API_KEY;
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/${endpoint}`, {
      params: { api_key: API_KEY }
    }).then(res => setMovies(res.data.results));
    
  }, [endpoint]);

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-3">{title}</h2>
      <div className="flex space-x-4 overflow-x-scroll scrollbar-hide">
        {movies.map(movie => (
          <MovieCards key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Movie;

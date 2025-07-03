import React from "react";

const MovieCard = React.memo(({ movie }) => {
  if (!movie) return null;

  const {
    title = "No title",
    poster_path,
    vote_average = 0,
    release_date = "N/A",
  } = movie;

  return (
    <div className="w-36 flex-shrink-0 bg-gray-800 rounded p-2">
      <div className="relative">
        {poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${poster_path}`}
            alt={title}
            className="rounded"
          />
        ) : (
          <div className="w-full h-40 bg-gray-700 flex items-center justify-center text-xs">
            No Image
          </div>
        )}
        <span className="absolute top-1 left-1 bg-green-600 text-white text-xs px-1 rounded-full">
          {Math.round(vote_average * 10)}
        </span>
      </div>
      <div className="text-sm mt-1">
        <p className="font-medium truncate">{title}</p>
        <p className="text-gray-400 text-xs">{release_date}</p>
      </div>
    </div>
  );
});

export default MovieCard;

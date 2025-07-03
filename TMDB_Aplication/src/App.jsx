import React, { useState, Suspense, lazy } from "react";

const Movie = lazy(() => import("./components/Movie"));
const SearchResults = lazy(() => import("./components/SearchResults"));

function App() {
  const [query, setQuery] = useState("");

  return (
    <div>
      <div className="flex items-center justify-center bg-cyan-950 w-full h-[80px]">
         <input
          type="text"
          placeholder="Search movie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-150 p-2 rounded bg-gray-500 text-white font-bold placeholder-gray-400 outline-none"
         />
      </div>

    <div className="bg-gray-900 min-h-screen text-white p-4">
     
      

      <Suspense fallback={<p className="text-gray-300 mt-4">Loading...</p>}>
        {query.trim() ? (
          <SearchResults query={query} />
        ) : (
          <>
           <Movie title="Popular" endpoint="movie/popular" />
           <Movie title="Top Rated" endpoint="movie/top_rated" />
           <Movie title="Upcoming" endpoint="movie/upcoming" />
           <Movie title="NowPlaying" endpoint="movie/now_playing" />
          </>
        )}
      </Suspense>
    </div>
    </div>
  );
}

export default App;











 
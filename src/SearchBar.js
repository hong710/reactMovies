import React from "react";
import MovieList from "./MovieList";

function SearchBar({ movies }) {
  
  return (
    <>
    <div className="input-group">
      <div className="form-outline">
        <input
          id="search-focus"
          type="search"
          className="form-control"
          placeholder="Search"
        />
      </div>
    </div>
    <MovieList movies={movies}/>
    </>
  );
}

export default SearchBar;

import React from "react";
import FavoritesItem from "./FavoritesItem";

function Favorites({ movies }) {
  const displayFavoriteMovie = movies
    .filter((movie) => movie.favorite)
    .map((movie) => <FavoritesItem key={movie.id} movie={movie} />);

  return <div>{displayFavoriteMovie}</div>;
}
export default Favorites;

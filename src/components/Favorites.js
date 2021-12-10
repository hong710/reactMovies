import React from "react";
import FavoritesItem from "./FavoritesItem";
import {Link} from "react-router-dom";


function Favorites({ movies }) {
  const displayFavoriteMovie = movies
    .filter((movie) => movie.favorite)
    .map((movie) => <FavoritesItem key={movie.id} movie={movie} />);

  return(
    <div>
      <div className="container">
        <div className="row">
            <div className="col-12">
              <Link to="/movie-list">
                <button type="button" className="btn btn-sm btn-dark float-end mt-5">Back Home</button>
              </Link>
					</div>

        </div>
        
      </div>
      {displayFavoriteMovie}
    </div>
    )
}
export default Favorites;

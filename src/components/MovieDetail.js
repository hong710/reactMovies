import React from "react";
import { useParams, Link } from "react-router-dom";

function MovieDetail({ movies, handleAddToFavorites }) {
  const params = useParams();
  console.log(params);
  const movie = movies.find((movie) => movie.id === parseInt(params.movieId));
  console.log(movie);

  if (!movie) {
    return null;
  }
  return (
    <div className="movie-details">
      <div className="col">
        <div className="card shadow-sm">
          <img src={movie["movie-image"]} alt={movie.title} />

          <div className="card-body">
            <p className="card-text">{movie.title}</p>
            <p className="card-text">{movie.description}</p>
            <p className="card-text">{movie["running-time"]}</p>
            <div className="d-flex justify-content-between align-items-center">
                <Link to="/favorites">
              <div className="btn-group">
                <button type="button" className="btn btn-sm btn-primary" onClick={() => handleAddToFavorites(movie)}>
                ➕ Add To Favorites!
                </button>
              </div>
              </Link>
              <Link to="/movie-list">
              <div className="btn-group">
                <button type="button" className="btn btn-sm btn-primary">
                  Back to Movie List
                </button>
              </div>
              </Link>
              <small className="text-danger">⭐{movie.score}</small>
              <small className="text-danger">{movie.rating}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;

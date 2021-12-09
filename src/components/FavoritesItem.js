import React from "react";
import { Link } from "react-router-dom";

function FavoritesItem ({ movie }) {
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
                <Link to="/movie-list">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-primary">
                    Back to Movie List
                  </button>
                </div>
                </Link>
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-primary">
                  ✔️ Added to Favorites!
                  </button>
                </div>
                <small className="text-danger">⭐{movie.score}</small>
                <small className="text-danger">{movie.rating}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default FavoritesItem
import React from "react";
import {Link} from "react-router-dom";

function MovieItem({ movie }) {


    return (
        <div className="col">
            <div className="card shadow-sm">
            <img src={movie["movie-image"]} alt={movie.title} />

                <div className="card-body">
                    <p className="card-text">
                        {movie.title}
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                        <Link to="/more-detail">
                            <button
                                type="button"
                                className="btn btn-sm btn-primary"
                            >
                                More details
                            </button>
                            </Link>
                        </div>
                        <small className="text-danger">⭐{movie.score}</small>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieItem;

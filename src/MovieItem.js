import React from "react";

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
                            <button
                                type="button"
                                className="btn btn-sm btn-primary"
                            >
                                More details
                            </button>
                        </div>
                        <small className="text-danger">⭐{movie.score}</small>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieItem;

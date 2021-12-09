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
		<div className="container movie-details">
			<div className="jumbotron">
				<div className="row">
					<div className="col-3">
						<img
							className="mx-auto d-block detail-img"
							src={movie["movie-image"]}
							alt=""
						/>
					</div>
					<div className="col-7">
						<h1 className="display-6 text-warning">{movie.title}</h1>
						<hr className="my-4" />
						<h5>
							<b>Overview</b>
						</h5>
						<p className="lead">{movie.description}</p>
						<div className="btn-group">
							<span className="btn btn-sm btn-primary">
								Genre: {movie.genre}
							</span>
							<span className="btn btn-sm btn-warning">
								Rating : {movie.rating}
							</span>
							<span className="btn btn-sm btn-info">
								Length : {movie["running-time"]}
							</span>
							<span className="btn btn-sm btn-danger">
								Score : {movie.score}
							</span>
						</div>
						<Link to="/favorites">
							<div className="mt-4">
								<button
									type="button"
									className="btn btn-sm btn-success"
									onClick={() => handleAddToFavorites(movie)}
								>
									{" "}
									<i class="bi bi-plus-lg"></i> {" "} Add To Favorites!
								</button>
							</div>
						</Link>
					</div>
					<div className="col-2">
						<Link to="/movie-list">
							<button type="button" className="btn btn-sm btn-dark">
								Back Home
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MovieDetail;

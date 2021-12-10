import React from "react";

function FavoritesItem ({ movie }) {
    return (
      <div className="container movie-details">
			<div className="jumbotron">
				<div className="row">
					<div className="col-4">
						<img className="mx-auto d-block detail-img" src={movie['movie-image']} alt="" />
					</div>
					<div className="col-8">
						<h1 className="display-6 text-warning">{movie.title}</h1>
						<hr className="my-4" />
						<h5><b>Overview</b></h5>
						<p className="lead">{movie.description}</p>
						<div className="btn-group">
							<span className="btn btn-sm btn-primary">Genre: {movie.genre}</span>
							<span className="btn btn-sm btn-warning">Rating : {movie.rating}</span>
							<span className="btn btn-sm btn-info">Length : {movie['running-time']}</span>
							<span className="btn btn-sm btn-danger">Score : {movie.score}</span>
						</div>
							<div className="mt-4">
								<button type="button" className="btn btn-sm btn-success">
                <i class="bi bi-check-lg"></i> Added To Favorites!
								</button>						
							</div>				
					</div>
				</div>
			</div>
		</div>
    )
}

export default FavoritesItem
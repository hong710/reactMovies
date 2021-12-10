import React from "react";
import { Link } from "react-router-dom";

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
      //   <div className="movie-details">
      //   <div className="col">
      //     <div className="card shadow-sm">
      //       <img src={movie["movie-image"]} alt={movie.title} />
  
      //       <div className="card-body">
      //         <p className="card-text">{movie.title}</p>
      //         <p className="card-text">{movie.description}</p>
      //         <p className="card-text">{movie["running-time"]}</p>
      //         <div className="d-flex justify-content-between align-items-center">
      //           <Link to="/movie-list">
      //           <div className="btn-group">
      //             <button type="button" className="btn btn-sm btn-primary">
      //               Back to Movie List
      //             </button>
      //           </div>
      //           </Link>
      //           <div className="btn-group">
      //             <button type="button" className="btn btn-sm btn-primary">
      //             ✔️ Added to Favorites!
      //             </button>
      //           </div>
      //           <small className="text-danger">⭐{movie.score}</small>
      //           <small className="text-danger">{movie.rating}</small>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>
    )
}

export default FavoritesItem
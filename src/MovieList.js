import React, { useEffect, useState } from "react";
import MovieItem from "./MovieItem";

const CONTAINER_SIZE = 8;

function MovieList({ moviesToDisplay, handleMoreDetailClick }) {
    const [pageSize, setPageSize] = useState(CONTAINER_SIZE);

    //   const [startMovie, setStartMovie] = useState(0);
    useEffect(() => {
        setPageSize(CONTAINER_SIZE);
    }, [moviesToDisplay]);

    function handleLoadMoreClick() {
        setPageSize(pageSize + CONTAINER_SIZE)
    }

    //   const limitMovieRow = moviesToDisplay.slice(
    //     startMovie,
    //     CONTAINER_SIZE + startMovie
    //   );
    const movieElements = moviesToDisplay.slice(0, pageSize).map((movie) => {
        return <MovieItem handleMoreDetailClick={handleMoreDetailClick} key={movie.id} movie={movie} />;
    });

    return (
        <>
            <div className="main-section">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
                        {movieElements}
                    </div>
                    {pageSize > moviesToDisplay.length ? null : (
                        <div className="col-md-12 text-center">
                            <button
                                type="button"
                                className="btn btn-secondary load-more"
                                onClick={handleLoadMoreClick}
                            >
                                Load More
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
export default MovieList;

import React,{useState} from "react";
import MovieItem from "./MovieItem";

const CONTAINER_SIZE = 6
function MovieList({ movies }) {

    const [startMovie, setStartMovie] = useState(0)

    function handleLoadMoreClick () {
        console.log(movies.length-startMovie);
        if ( movies.length-startMovie > CONTAINER_SIZE){
            setStartMovie(CONTAINER_SIZE + startMovie)
        }else{
            setStartMovie(0);
        }
    }

    const limitMovieRow = movies.slice(startMovie, CONTAINER_SIZE + startMovie);
    const displayMovies = limitMovieRow.map(movie => {
        return <MovieItem key={movie.id} movie={movie} />
    })
    return (
        <>
        <div className="main-section">
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {displayMovies}
                </div>
                <div className="col-md-12 text-center">
                    <button type="button" className="btn btn-secondary load-more" onClick = {handleLoadMoreClick}>Load More</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default MovieList;



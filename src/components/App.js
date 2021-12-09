import React, { useEffect, useState } from "react";
import "../App.css";
import Header from "./Header";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
import { BrowserRouter, Route } from "react-router-dom";
import MovieDetail from "./MovieDetail";
import Favorites from "./Favorites";
import MovieForm from "./MovieForm";
import CarouselDisplay from "./Carousel";

const API = "http://localhost:8002/movies";

function App() {
  const [movies, setMovies] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  const moviesToDisplay =
    inputValue === ""
      ? movies
      : movies.filter((movie) => {
          return movie.title.toLowerCase().includes(inputValue.toLowerCase());
        });

  useEffect(() => {
    fetch(API)
      .then((resp) => resp.json())
      .then((data) => setMovies(data));
  }, []);

  function handleAddToFavorites(currentMovie) {
    setMovies(
      movies.map((movie) =>
        movie.id === currentMovie.id ? { ...movie, favorite: true } : movie
      )
    );
  }

  console.log(movies);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main>
          <Route path="/movie-list">
            <MovieForm />
            <CarouselDisplay carouselMovies={movies}/>
            <SearchBar
              handleInputChange={handleInputChange}
              inputValue={inputValue}
            />
            <MovieList moviesToDisplay={moviesToDisplay} />
          </Route>
          <Route path={`/movie-detail/:movieId`}>
            <MovieDetail
              handleAddToFavorites={handleAddToFavorites}
              movies={movies}
            />
          </Route>
          <Route path="/favorites">
            <Favorites movies={movies} />
          </Route>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;

// handleMoreDetailClick={handleMoreDetailClick}

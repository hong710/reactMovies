import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
import { BrowserRouter, Route } from "react-router-dom";

// import Carousel from "./Carousel";

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

  return (
    <BrowserRouter>
        <div className="App">
          <Route path="/">
            <Header />
          </Route>
          <main>
            {/* <Carousel carouselMovies={movies}/> */}
            <Route path="/search">
              <SearchBar
                handleInputChange={handleInputChange}
                inputValue={inputValue}
              />
            </Route>
            <Route path="/movie-list">
              <MovieList moviesToDisplay={moviesToDisplay} />
            </Route>
          </main>
        </div>
    </BrowserRouter>
  );
}

export default App;

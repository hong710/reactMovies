import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";

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
    <div className="App">
      <Header />
      <main>
        {/* <Carousel carouselMovies={movies}/> */}

        <SearchBar
          handleInputChange={handleInputChange}
          inputValue={inputValue}
        />
        <MovieList moviesToDisplay={moviesToDisplay} />
      </main>
    </div>
  );
}

export default App;

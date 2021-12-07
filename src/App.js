import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import Carousel from "./Carousel";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";

const API = "http://localhost:3000/movies"

function App() {
  const { movies, setMovies } = useState([])
  useEffect(() => {
    fetch(API)
    .then(resp => resp.json())
    .then(data => console.log(data))
  })
  return (
    <div className="App">
      <Header />
      <main>
        <Carousel />
        <SearchBar />
        <MovieList movies={movies}/>
      </main>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import SearchBar from "./SearchBar";
// import Carousel from "./Carousel";

import MovieList from "./MovieList";

const API = "http://localhost:8002/movies"

function App() {
  const [movies, setMovies] = useState([])
 
  

  useEffect(() => {
    fetch(API)
    .then(resp => resp.json())
    .then(data => setMovies(data))
  }, [])



  return (
    <div className="App">
      <Header />
      <main>
        {/* <Carousel carouselMovies={movies}/> */}
        
        <SearchBar movies={movies}/>
      </main>
    </div>
  );
}

export default App;

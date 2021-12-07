import React from 'react';
import './App.css';
import Header from './Header';
import Carousel from './Carousel';
// import SearchBar from ' ./SearchBar';
// import MovieList from ' ./MovieList';


function App() {

  return (
    <div className="App">
      <Header />
      <main>
        <Carousel/>
        {/* <SearchBar/>
        <MovieList /> */}

      </main>
    </div>
  );
}

export default App;

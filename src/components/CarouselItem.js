import React from "react";

//topCarouselMovies is array with 5 elements
function CarouselItem({ carouselMovie }) {
  console.log(carouselMovie["movie-image"]);
  return (
    <div className="img-wrapper">
        <img className="carousel-img"
          src={carouselMovie["backdrop"]}
          alt={carouselMovie.title}
        /> 
        <h3 className="carousel-title">{carouselMovie.title}</h3>
    </div>     
  );
}

export default CarouselItem;

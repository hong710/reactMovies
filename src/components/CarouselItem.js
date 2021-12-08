import React from "react";

//topCarouselMovies is array with 5 elements
function CarouselItem({ carouselMovie }) {
  console.log(carouselMovie["movie-image"]);
  return (
      <div style={{ height: "600px"}} className="carousel-item active">
        <img
          src={carouselMovie["movie-image"]}
          className="d-block w-100"
          alt={carouselMovie.title}
        />
      </div>
  );
}

export default CarouselItem;

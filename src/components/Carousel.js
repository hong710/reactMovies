import React from "react";
import CarouselItem from "./CarouselItem";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


function CarouselDisplay({ carouselMovies }) {

  const top7 = carouselMovies.slice(0,7);
  const displayCarousel7 = top7.map(carouselMovie => {
    return <CarouselItem carouselMovie={carouselMovie} />
  })

  return (
      <div className="container">
        <div className="carousel-wrapper ">
            <Carousel infiniteLoop autoPlay>
                {displayCarousel7}
            </Carousel>
        </div>
      </div>

  )
}

export default CarouselDisplay;

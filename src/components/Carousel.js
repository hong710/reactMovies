import React from "react";
import CarouselItem from "./CarouselItem";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


function CarouselDisplay({ carouselMovies }) {

  const top5 = carouselMovies.slice(0,5);
  const displayCarousel5 = top5.map(carouselMovie => {
    return <CarouselItem carouselMovie={carouselMovie} />
  })

  return (
      <div className="container">
        <div className="carousel-wrapper ">
            <Carousel infiniteLoop autoPlay>
                {displayCarousel5}
            </Carousel>
        </div>
      </div>

  )
}

export default CarouselDisplay;

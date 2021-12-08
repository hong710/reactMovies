import React from "react";

//topCarouselMovies is array with 5 elements
function CarouselItem({ topCarouselMovies}) {
    console.log(topCarouselMovies["movie-image"])
    return (
        <>
            <div className="carousel-item active">
                <img src={topCarouselMovies[0]["movie-image"]} className="d-block w-100" alt={topCarouselMovies[0].title} />
            </div>

            <div className="carousel-item ">
                <img src={topCarouselMovies[1]["movie-image"]} className="d-block w-100" alt={topCarouselMovies[1].title} />
            </div>

            <div className="carousel-item ">
                <img src={topCarouselMovies[2]["movie-image"]} className="d-block w-100" alt={topCarouselMovies[2].title} />
            </div>

            <div className="carousel-item ">
                <img src={topCarouselMovies[3]["movie-image"]} className="d-block w-100" alt={topCarouselMovies[3].title} />
            </div>

            <div className="carousel-item ">
                <img src={topCarouselMovies[4]["movie-image"]} className="d-block w-100" alt={topCarouselMovies[4].title} />
            </div>
        </>
        
)}


            export default CarouselItem
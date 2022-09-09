import React, { useEffect, useState } from "react";
import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
    )
      .then((res) => res.json())
      .then((data) => setPopularMovies(data.results));
  }, []);

  return (
    <div className="poster">
      <Carousel
        showThumbs={false}
        autoPlay={true}
        transitionTime={3}
        infiniteLoop={true}
        showStatus={false}
      >
        {popularMovies.map((movie) => (
          <Link style={{textDecoration:"none", color:"white"}} to={``}>  
   <div className="posterImage">
    <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt={movie.name} />
   </div>
   <div className="posterImage__overlay">

   </div>
   </Link>
))}
      </Carousel>
    </div>
  );
};

export default Home;

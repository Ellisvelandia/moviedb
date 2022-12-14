import React, {useEffect, useState} from "react";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import "./Card.css";
import { Link } from "react-router-dom";



const Cards = ({movie}) => {

const [isLoading, setLoading] = useState(true)

useEffect(() => {
  setTimeout(() => {
    setLoading(false)
  }, 1500);
}, [])


  return( 
  <>
  {
    isLoading ?
    <div className="cards">
      <SkeletonTheme color="#202020" highlightColor="#444">
        <Skeleton height={300} duration={2}/>
      </SkeletonTheme>
    </div>
    :
    <Link to={`movie/${movie.id}`} style={{textDecoration:"none", color:"white"}}>
     <div className="cards">
     <img className="cards__img" src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`} alt={movie.name} />
     <div className="cards__overlay">
     <div className="cards__title">{movie?movie.original_title:""}</div>
     <div className="cards__runtime">{movie?movie.release_date:""}
     <span className="card_rating">{movie?movie.vote_average:""}<i className="fas fa-star" /> </span>
     </div>

     <div className="cards__description">{movie?movie.original_title:""}</div>

     </div>
     </div>
    </Link>
  }
  </>
  )
};

export default Cards;

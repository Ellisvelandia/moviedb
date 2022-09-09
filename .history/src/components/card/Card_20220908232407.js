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
    <><>/</>
  }
  </>
  )
};

export default Card;

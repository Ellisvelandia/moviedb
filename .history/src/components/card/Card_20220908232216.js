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
      <SkeletonTheme>
        <Skeleton hei/>
      </SkeletonTheme>
    </div>
  }
  </>
  )
};

export default Card;

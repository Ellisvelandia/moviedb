import { getDefaultNormalizer } from "@testing-library/react";
import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Cards from "../card/Card";
import "./MovieList.css";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const {type} = useParams()

  useEffect(() => {
   getDefaultNormalizer()
  }, [type])

  return (
    <div>MovieList</div>
  )
}

export default MovieList
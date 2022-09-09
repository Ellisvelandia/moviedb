import React, {useEffect} from "react";
import "./Home.css";

const Home = () => {

  const [PopularMovies, setPopularMovies] = useState([])

  useEffect(() => {
   fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
   .then(res => res.json())
   .then(data => console.log(data))
  }, [])

  return(
    <div>Home Page</div>
  )
};

export default Home;

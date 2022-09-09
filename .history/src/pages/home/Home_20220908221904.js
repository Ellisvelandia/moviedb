import React, {useEffect} from "react";
import "./Home.css";

const Home = () => {

  useEffect(() => {
   fetch("")
   .then(res => res.json)
  }, [])

  return(
    <div>Home Page</div>
  )
};

export default Home;

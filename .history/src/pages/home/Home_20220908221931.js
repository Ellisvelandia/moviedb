import React, {useEffect} from "react";
import "./Home.css";

const Home = () => {

  useEffect(() => {
   fetch("")
   .then(res => res.json())
   .then(data => console.log(data))
  }, [])

  return(
    <div>Home Page</div>
  )
};

export default Home;

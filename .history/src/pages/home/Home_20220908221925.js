import React, {useEffect} from "react";
import "./Home.css";

const Home = () => {

  useEffect(() => {
   fetch("")
   .then(res => res.json())
   .then(data => console.log)
  }, [])

  return(
    <div>Home Page</div>
  )
};

export default Home;

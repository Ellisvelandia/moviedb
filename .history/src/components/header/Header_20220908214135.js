import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
<div className='headerLeft'>
<Link to="/"> <img  className='header__icon' src="" alt="" /> </Link>
<Link to="/movies/popular">Popular</Link>
<Link to="/movies/top_rated">Top Rated</Link>
<Link to="/movies/upcoming">Popular</Link>
</div>
    </div>
  )
}

export default Header
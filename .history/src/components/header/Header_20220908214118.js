import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
<div className='headerLeft'>
<Link to="/"> <img  className='header__icon' src="" alt="" /> </Link>
<Link to="/movies/popular">Popular</Link>
<Link to="/movies/top">Popular</Link>
<Link to="/movies/popular">Popular</Link>
</div>
    </div>
  )
}

export default Header
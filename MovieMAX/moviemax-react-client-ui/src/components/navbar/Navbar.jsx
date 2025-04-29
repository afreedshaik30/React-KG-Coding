import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className='navbar'>
        <h1>MovieMAX</h1>
        <div className='navbar-links'>

            <a href='#popular'>Popular🔥</a>
            <a href='#top_rated'>Top rated🌟</a>
            <a href='#upcoming'>Upcoming 🍿</a>
        </div>
    </nav>
  )
}

export default Navbar
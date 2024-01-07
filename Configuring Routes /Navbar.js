Link in REACT ROUTER DOM

import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';
function Navbar() {
  return (
    <div>
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
        </nav>
    </div>
  )
}

export default Navbar

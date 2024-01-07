import React from 'react'
import { NavLink } from 'react-router-dom';
import '../App.css';
function Navbar() {


  // nav a.active {font-size:50px} in App.css (Optional way to add CSS in the element)

    const styleNav = ({isActive}) => {
        return {
            fontWeight : isActive ? 'bold' : 'normal',
            textDecoration : isActive ? 'none' : 'underline',
            fontSize : '50px',
            margin: '0 20px' ,
            color : 'crimson'
        }
    }

  return (
    <div>
        <nav>
            <NavLink  style ={styleNav}  to='/'>Home</NavLink>
            <NavLink style={styleNav} to='/about'>About</NavLink>
        </nav>
    </div>
  )
}

export default Navbar

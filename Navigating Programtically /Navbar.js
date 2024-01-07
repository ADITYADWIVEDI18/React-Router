import React from 'react'
import { NavLink } from 'react-router-dom';
import '../App.css';
function Navbar() {

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

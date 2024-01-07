import React from 'react'
import { Link,Outlet } from 'react-router-dom'
import '../App.css';
function Product() {
  return (
    <>
    <div><input type='search' placeholder='Search here...' /></div>
    <nav className='navy'>
        <Link to='features'>Featured</Link>
        <Link to='new'>New</Link>
    </nav>
    <Outlet/>
    </>
  )
}

export default Product
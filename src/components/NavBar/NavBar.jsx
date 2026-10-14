import React from 'react'
import {Link}from 'react-router'

function NavBar() {
  return (
    <nav>
    <div>
        
  <Link to='/'>Homepage</Link>
        <Link to='/products'>Products</Link>
        <Link to='/new-product'>New Products</Link>

    </div>
    </nav>
  )
}

export default NavBar
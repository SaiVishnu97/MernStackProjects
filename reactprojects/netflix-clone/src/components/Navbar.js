import React from 'react'
import { BrowserRouter,NavLink } from 'react-router-dom'
import '../Styling/navbar.css'

function Navbar() {
  return (
    <div className="navbar">
  <div className="navbar-brand"><img width="200px" height="100px" src="https://i.pcmag.com/imagery/reviews/05cItXL96l4LE9n02WfDR0h-5.fit_scale.size_760x427.v1582751026.png"/></div>
    
  <div className="navbar-links">
    <BrowserRouter>
        <NavLink className="navbar-link">TV Shows</NavLink>
        <NavLink className="navbar-link">Movies</NavLink>
        <NavLink className="navbar-link">Recently Added</NavLink>
        <NavLink className="navbar-link">My wishlist</NavLink>
    </BrowserRouter>
    </div>
    </div>
  )
}

export default Navbar
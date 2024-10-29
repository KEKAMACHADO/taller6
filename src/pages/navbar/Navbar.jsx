import React, {useState} from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <nav>
      <Link to="/Home" className="title">
      🐾 Huellas de amor
      </Link>
      <div className="menu" onClick={() => {
        setMenuOpen(!menuOpen)
      }}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open": ""}>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/cats">Cat</NavLink>
        </li>
        <li>
          <NavLink to="/dogs">Dogs</NavLink>
        </li>
      </ul>
    </nav>
    
  )
}

export default Navbar;
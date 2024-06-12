import React from 'react'
import { Link } from 'react-router-dom'
import '../Header/Header.css'
import logo from '../../assets/logo.png'

const Header = () => {
  return (
    <header className="header">
        <img src={logo} alt="Logo" className="logo" />
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
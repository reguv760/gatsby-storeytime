import React from 'react'
import { Link } from 'gatsby'
import Navbar from './Navbar'

const Header = props => (
  <header id="header" className="alt">
    <Link to="/" className="logo">
      <strong>Forty</strong> <span>by HTML5 UP</span>
    </Link>
    <Navbar />
  </header>
)

export default Header

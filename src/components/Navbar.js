import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

// custom components
import DrawerToggleButton from './sidedrawer/DrawerToggleButton'

const NavbarStyles = styled.header`
  position: fixed;
  width: 100%;
  background: #521751;
  height: 56px;
  z-index: 200;

  .navbar {
    display: flex;
    height: 100%;
    align-items: center;

    .nav-logo {
      margin-left: 1rem;
    }

    .nav-logo a {
      text-decoration: none;
      font-size: 1.5rem;
      padding: 0 1rem;
    }

    .spacer {
      flex: 1;
    }

    @media (max-width: 768px) {
      .nav-items {
        display: none;
      }
    }

    .nav-items ul {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
    }

    .nav-items li {
      padding: 0 0.5rem;
    }

    .nav-items a {
      text-decoration: none;
    }

    .nav-items a:hover,
    .nav-items a:active {
     color: red;
    }
  }
}
`

const ToggleButton = styled.div`
  .toggle-button {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 24px;
    width: 30px;
    background: transparent;
    border: none;
    box-shadow: none;
    cursor: pointer;

    @media (min-width: 769px) {
      display: none;

      .nav-logo {
        margin-left: 0;
      }
    }

    &:focus {
      outline: none;
    }

    .toggle-button-line {
      width: 30px;
      height: 2px;
      background: #fff;
    }
  }
`

const Navbar = props => (
  <NavbarStyles>
    <nav className="navbar">
      <ToggleButton className="nav-toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </ToggleButton>
      <div className="nav-logo">
        <Link to="/">Storeytime Online</Link>
      </div>
      <div className="spacer" />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/singers">The Singers</Link>
          </li>
          <li>
            <Link to="/videos">Videos</Link>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
          <li>
            <Link to="/donate">Donate</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  </NavbarStyles>
)

export default Navbar

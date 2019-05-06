import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

// custom components
import DrawerToggleButton from './sidedrawer/DrawerToggleButton'

const NavbarStyles = styled.header`
  position: fixed;
  width: 100%;
  height: 100px;
  background: #fff;
  z-index: 200;

  .navbar {
    display: flex;
    height: 100%;
    align-items: center;

    .nav-logo {
      margin: 1rem 3rem
    }

    .nav-logo a {
      text-decoration: none;
      font-size: 1.5rem;
      padding: 0 1rem;
    }
    .nav-logo a:hover {
      opacity:0.75
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
      margin: 1rem;
      padding: 0;
      display: flex;
    }

    .nav-items li {
      margin: 0.5rem
      padding: 0 0.5rem;
    }

    .nav-items a {
      text-decoration: none;
      color:#0f0f0f;
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

const Navbar = props => {
  return (
    <NavbarStyles>
      <nav className="navbar">
        <ToggleButton className="nav-toggle-button">
          <DrawerToggleButton click={props.drawerClickHandler} />
        </ToggleButton>
        <div className="nav-logo">
          <Link to="/">
            <img
              src={`${props.companyLogo}`}
              alt={`${props.companyName}`}
              style={{ width: '50%' }}
            />
          </Link>
        </div>
        <div className="spacer" />
        <div className="nav-items">
          <ul>
            <li>
              <Link to="/singers/" activeStyle={{ color: '#00aaff' }}>
                The Singers
              </Link>
            </li>
            <li>
              <Link to="/testimonials/" activeStyle={{ color: '#00aaff' }}>
                Testimonials
              </Link>
            </li>
            <li>
              <Link to="/videos/" activeStyle={{ color: '#00aaff' }}>
                Videos
              </Link>
            </li>
            <li>
              <Link to="/events/" activeStyle={{ color: '#00aaff' }}>
                Events
              </Link>
            </li>
            <li>
              <Link to="/donate/" activeStyle={{ color: '#00aaff' }}>
                Donate
              </Link>
            </li>
            <li>
              <a href="#contact-form">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </NavbarStyles>
  )
}

export default Navbar

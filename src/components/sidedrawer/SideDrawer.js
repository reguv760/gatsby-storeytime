import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const SideDrawerContainer = styled.nav`
  height: 100%;
  background: #fff;
  box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 50%;
  max-width: 300px;
  z-index: 250;
  transform: translateX(-100%);
  transition: transform 0.3s ease-out;
  h1 {
    color: #0f0f0f;
    padding: 1rem;
    border-bottom: 1px solid #0f0f0f;
  }
  @media (min-width: 769px) {
    display: none;
  }
  &.open {
    transform: translateX(0);
  }
  ul {
    height: 100%;
    list-style: none;
    display: flex;
    flex-direction: column;
    // justify-content: center;
  }
  li {
    &:hover,
    &:active {
      background-color: #0f0f0f;
      color: #fff;
    }
  }
  a {
    color: #0f0f0f;
    text-decoration: none;
    font-size: 1.2rem;
    display: block;
    padding: 0.5rem;
  }
`
const SideDrawer = props => {
  const { show } = props
  let drawerClasses = 'side-drawer'
  if (show) {
    drawerClasses = 'side-drawer open'
  }

  return (
    <SideDrawerContainer className={drawerClasses}>
      <h1>Storeytime Online</h1>
      <ul>
        {/* <li>
          <Link to="/about-us/" activeStyle={{ color: '#6699ff' }}>
            About Us
          </Link>
        </li> */}
        <li>
          <Link to="/singers/" activeStyle={{ color: '#6699ff' }}>
            The Singers
          </Link>
        </li>
        <li>
          <Link to="/videos/" activeStyle={{ color: '#6699ff' }}>
            Videos
          </Link>
        </li>
        <li>
          <Link to="/events/" activeStyle={{ color: '#6699ff' }}>
            Events
          </Link>
        </li>
        <li>
          <Link to="/donate/" activeStyle={{ color: '#6699ff' }}>
            Donate
          </Link>
        </li>
        <li>
          <a href="#contact-form">Contact</a>
        </li>
      </ul>
    </SideDrawerContainer>
  )
}

export default SideDrawer

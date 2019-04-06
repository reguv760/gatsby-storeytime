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
    color: #521751;
    padding: 1rem;
    border-bottom: 1px solid #521751;
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
      background-color: #521751;
      color: #fff;
    }
  }
  a {
    color: #521751;
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
        <li>
          <Link to="/about-us">About Us</Link>
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
    </SideDrawerContainer>
  )
}

export default SideDrawer

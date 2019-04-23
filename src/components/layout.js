import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

// custom styles
import '../assets/scss/main.scss'

// custom components
import Navbar from './Navbar'
import SideDrawer from './sidedrawer/SideDrawer'
import Backdrop from './backdrop/Backdrop'
import Contact from './Contact'
import { Footer } from './footer/'

export const LayoutTemplate = ({ footerData, children, backdrop }) => {
  return (
    <>
      <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
      <SideDrawer show={sideDrawerOpen} />
      <div id="wrapper" style={{ height: '100%' }}>
        {backdrop}
        {children}
        <Contact />
        <Footer />
      </div>
    </>
  )
}

//define custom data object from graphQL
LayoutTemplate.propTypes = {
  footerData: PropTypes.object,
}

class Layout extends React.Component {
  state = {
    sideDrawerOpen: false,
  }

  // NOTE: bad practice --> this.setState({sideDrawerOpen: !this.state.sideDrawerOpen});
  // with the way that React batch updates
  // you are not guaranteed the state changed whenever {sideDrawerOpen: !this.state.sideDrawerOpen} the next time
  // Better Way: Pass a function to setState and in that function
  // you will receive the `prevState` as an argument to that function
  // This is passed to the function by React
  drawerToggleClickHandler = () => {
    this.setState(prevState => ({ sideDrawerOpen: !prevState.sideDrawerOpen }))
  }

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false })
  }

  render() {
    const { children } = this.props
    const { sideDrawerOpen } = this.state

    const { markdownRemark: post } = data

    console.log(post)

    let backdrop

    if (sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }

    return <LayoutTemplate backdrop={backdrop} children={children} />
  }
}

//assign frontmatter content as a data prop
Layout.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default Layout

export const layoutQuery = graphql`
  query LayoutTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "footer-component" } }) {
      frontmatter
    }
  }
`

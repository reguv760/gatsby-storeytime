import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
// custom styles
import '../assets/scss/main.scss'

// custom components
import Navbar from './Navbar'
import SideDrawer from './sidedrawer/SideDrawer'
import Backdrop from './backdrop/Backdrop'
import Contact from './Contact'
import { Footer } from './footer/'

//use staticquery for layout!!!

export const LayoutTemplate = ({
  currentPage,
  bg,
  isDrawerOpen,
  drawToggle,
  contactEnabled,
}) => (
  <StaticQuery
    query={graphql`
      query layoutTemplate {
        markdownRemark(frontmatter: { templateKey: { eq: "index" } }) {
          frontmatter {
            socialIcons {
              socialEnabled
              socialLink
            }
            designedBy
            designLink
          }
        }
      }
    `}
    render={data => (
      <>
        <Navbar drawerClickHandler={drawToggle} />
        <SideDrawer show={isDrawerOpen} />
        <div id="wrapper" style={{ height: '100%' }}>
          {bg}
          {currentPage}

          {contactEnabled && <Contact />}
          <Footer
            footerData={data.markdownRemark.frontmatter.socialIcons}
            designedBy={data.markdownRemark.frontmatter.designedBy}
            designLink={data.markdownRemark.frontmatter.designLink}
          />
        </div>
      </>
    )}
  />
)

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
    const { sideDrawerOpen, contactEnabled } = this.state

    let backdrop

    if (sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }

    return (
      <LayoutTemplate
        currentPage={children}
        bg={backdrop}
        isDrawerOpen={sideDrawerOpen}
        drawToggle={this.drawerToggleClickHandler}
        contactEnabled={this.props.contactEnabled}
      />
    )
  }
}

export default Layout

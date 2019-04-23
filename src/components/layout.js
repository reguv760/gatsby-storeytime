import React from 'react'

// custom styles
import '../assets/scss/main.scss'

// custom components
import Navbar from './Navbar'
import SideDrawer from './sidedrawer/SideDrawer'
import Backdrop from './backdrop/Backdrop'
import Contact from './Contact'
import { Footer } from './Footer'

export const LayoutTemplate = ({
  bg,
  children,
  sideDrawer,
  drawToggle,
  footerData,
  copyrightData,
}) => {
  return (
    <>
      <Navbar drawerClickHandler={drawToggle} />
      <SideDrawer show={sideDrawer} />
      <div id="wrapper" style={{ height: '100%' }}>
        {bg}
        {children}
        <Contact />
        <Footer footerData={footerData} copyrightData={copyrightData} />
      </div>
    </>
  )
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

    const footerData = this.props.footerData
    const copyrightData = this.props.copyrightData

    let backdrop

    if (sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }

    return (
      <LayoutTemplate
        children={children}
        bg={backdrop}
        sideDrawer={sideDrawerOpen}
        drawToggle={this.drawerToggleClickHandler}
        footerData={footerData}
        copyrightData={copyrightData}
      />
    )
  }
}

export default Layout

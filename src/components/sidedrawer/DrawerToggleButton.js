import React from 'react'

const DrawerToggleButton = props => (
  <button className="toggle-button" onClick={props.click}>
    <div className="toggle-button-line" style={{ backgroundColor: '#666' }} />
    <div className="toggle-button-line" style={{ backgroundColor: '#666' }} />
    <div className="toggle-button-line" style={{ backgroundColor: '#666' }} />
  </button>
)

export default DrawerToggleButton

import React, { Component } from 'react'
import logo from './logo.svg'

class Logo extends Component {
  render () {
    return (
      <img src={logo} alt='Logo' style={{'width': '80px'}} />
    )
  }
}

export default Logo

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Menu from './Menu/Menu'
import Logo from './Logo/Logo'
import Hamburger from './Hamburger/Hamburger'
import Member from './Member/Member'
import $ from 'jquery'

class Header extends Component {
  componentDidMount () {
    $('#Hamburger').on('click', function () {
      console.log('hamburger')
    })
  }
  render () {
    let logState = true
    return (
      <header>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <div className='container'>
            <Link to='/' className='navbar-brand'>
            <Logo/> Home
            </Link>
            <div className='collapse navbar-collapse'>
              <Menu/>
              <Member logined={logState} />
            </div>
          </div>
        </nav>
        <Hamburger/>
      </header>
    )
  }
}

export default Header

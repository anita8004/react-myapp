import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Menu extends Component {
  render () {
    return (
      <ul className='navbar-nav justify-content-center mr-auto'>
        <li className='nav-item'>
          <NavLink to='/about/' className='nav-link' activeClassName='active'>
            About
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to='/contact/' className='nav-link' activeClassName='active'>
            Contact
          </NavLink>
        </li>
      </ul>
    )
  }
}

export default Menu

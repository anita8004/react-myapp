import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Login extends Component {
  render () {
    const {username} = this.props
    return (
      <ul className='nav justify-content-center'>
        <li className='nav-item'>
          Hello~ {username}
        </li>
      </ul>
    )
  }
}

Login.propTypes = {
  username: PropTypes.string.isRequired
}


export default Login

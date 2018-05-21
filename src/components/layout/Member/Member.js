import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Login from './LoginIn'
import Logout from './Logout'


class Member extends Component {
  render () {
    const {logined} = this.props
    let memberContent
    if (logined) {
      memberContent = <Login username='Anita' />
    } else {
      memberContent = <Logout />
    }
    return (
      <div>
        {memberContent}
      </div>
    )
  }
}

Member.propTypes = {
  logined: PropTypes.bool
}

Member.defaultProps = {
  logined: false
}

export default Member

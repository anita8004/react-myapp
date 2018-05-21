import React, { Component } from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import Page1 from './AboutPage01'
import Page2 from './AboutPage02'

class About extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <BrowserRouter>
        <div>
          <h2>About Page</h2>
          <Link className="btn btn-primary mr-3" to={`${this.props.match.url}/page1`}>Page1</Link>
          <Link className="btn btn-primary mr-3" to={`${this.props.match.url}/page2`}>Page2</Link>
          <hr />
          <Route path={`${this.props.match.url}/page1`} component={Page1} />
          <Route path={`${this.props.match.url}/page2`} component={Page2} />
        </div>
      </BrowserRouter>
    )
  }
}

export default About

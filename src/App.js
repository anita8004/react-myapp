import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import './Style/App.css'
import Home from './components/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

// export default App

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className='App' id='wrapper'>
          <Header />
          <div className='main py-5'>
            <div className='container'>
              {/* http://localhost:3000 */}
              <Route exact path='/' component={Home} />
              {/* http://localhost:3000/about */}
              <Route path='/about/:topic?' component={About} />
              {/* http://localhost:3000/contact */}
              <Route path='/contact' component={Contact} />
            </div>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

export default App

import React, { Component } from 'react'

class Form extends Component {
  constructor (props) {
    super(props)
    this.state = {name: '', age: ''}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange (evt) {
    this.setState({[evt.target.name]: evt.target.value})
  }
  handleSubmit (evt) {
    evt.preventDefault()
    console.log(this.state)
  }
  render () {
    return (
      <form className='form contactForm' onSubmit={this.handleSubmit}>
        <div className='form-group'>
          <label htmlFor='formName' className='form-label'>
            Name:
          </label>
          <input
            type='text'
            id='formName'
            name='name'
            value={this.state.name}
            onChange={this.handleChange}
            className='form-control' />
        </div>
        <div className='form-group'>
          <label htmlFor='formAge' className='form-label'>
            Age:
          </label>
          <input
            type='number'
            id='formAge'
            name='age'
            value={this.state.age}
            onChange={this.handleChange}
            className='form-control' />
        </div>
        <div className="form-group">
          <button className="btn btn-info" type="submit">Submit</button>
        </div>
      </form>
    )
  }
}

export default Form

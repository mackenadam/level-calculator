import React from 'react'

export class Register extends React.Component {
  state = {
    newUser: {
      email: '',
      password: '',
      password2: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      newUser: {
        ...this.state.newUser,
        [event.target.name]: event.target.value
      }
    })
  }

  handleSubmit = () => {
    alert("You did a submit!")
  }

  render () {
    return (
      <div className='register'>
        <h1>Register</h1>
        <input type="text" placeholder="Email" name="email" onChange={this.handleChange} value={this.state.newUser.email} />
        <input type="password" placeholder="Password" name="password" onChange={this.handleChange} value={this.state.newUser.password} />
        <input type="password" placeholder="Re-enter password" name="password2" onChange={this.handleChange} value={this.state.newUser.password2} />
        <input type="submit" value="Login" onClick={this.handleSubmit} />
        <p>Already have an account? Click here to login!</p>
      </div>
    )
  }
}
import React from 'react'

export class Login extends React.Component {
  state = {
    user: {
      email: '',
      password: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      user: {
        ...this.state.user,
        [event.target.name]: event.target.value
      }
    })
  }

  handleSubmit = () => {
    alert("You did a submit!")
  }

  render () {
    return (
      <div className='login'>
        <h1>Login</h1>
        <input type="text" placeholder="Email" name="email" onChange={this.handleChange} value={this.state.user.email} />
        <input type="text" placeholder="Password" name="password" onChange={this.handleChange} value={this.state.user.password} />
        <input type="submit" value="Login" onClick={this.handleSubmit} />
        <p>New around here? Click here to register!</p>
      </div>
    )
  }
}
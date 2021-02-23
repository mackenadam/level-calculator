import React from 'react'

export class Login extends React.Component {
  state = {
    user: {
      username: null,
      password: null
    }
  }

  handleChange = (event) => {
    this.setState({
      user: {
        ...user,
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
        <input type="text" placeholder="Username" name="username" onChange={this.handleChange} />
        <input type="text" placeholder="Password" name="password" onChange={this.handleChange} />
        <input type="submit" value="Login" onClick={this.handleSubmit} />
        <p>New around here? Click here to register!</p>
      </div>
    )
  }
}
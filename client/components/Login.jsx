import React from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../actions'

class Login extends React.Component {
  state = {
    user: {
      username: '',
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
    const isCompleted = Object.values(this.state.user).every(input => input !== '')
    if (isCompleted) {
      this.props.dispatch(loginUser(this.state.user))
      this.setState({
        user: {
          username: '',
          email: '',
          password: ''
        }
      })
    } else {
      alert("Uh oh you forgot a login field. Please make sure everything is filled out.")
    }
  }

  render () {
    return (
      <div className='login'>
        <h1>Login</h1>
        <input type="text" placeholder="Username" name="username" onChange={this.handleChange} value={this.state.user.username} />
        <input type="text" placeholder="Email" name="email" onChange={this.handleChange} value={this.state.user.email} />
        <input type="text" placeholder="Password" name="password" onChange={this.handleChange} value={this.state.user.password} />
        <input type="submit" value="Login" onClick={this.handleSubmit} />
        <p>New around here? Click here to register!</p>
      </div>
    )
  }
}

export default connect()(Login)
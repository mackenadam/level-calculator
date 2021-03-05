import React from 'react'
import { connect } from 'react-redux'
import { registerUser } from '../actions'

class Register extends React.Component {
  state = {
    newUser: {
      username: '',
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
    const isCompleted = Object.values(this.state.newUser).every(input => input !== '')
    const passwordsMatch = this.state.newUser.password === this.state.newUser.password2
    if (isCompleted && passwordsMatch) {
      this.props.dispatch(registerUser(this.state.newUser))
      this.setState({
        newUser: {
          username: '',
          email: '',
          password: '',
          password2: ''
        }
      })
    } else {
      alert("Uh oh, you forgot to enter a registration field! Please make sure everything is filled out and your passwords match.")
    }
  }

  render () {
    return (
      <div className='register'>
        <h1>Register</h1>
        <input type="text" placeholder="Username" name="username" onChange={this.handleChange} value={this.state.newUser.username} />
        <input type="text" placeholder="Email" name="email" onChange={this.handleChange} value={this.state.newUser.email} />
        <input type="password" placeholder="Password" name="password" onChange={this.handleChange} value={this.state.newUser.password} />
        <input type="password" placeholder="Re-enter password" name="password2" onChange={this.handleChange} value={this.state.newUser.password2} />
        <input type="submit" value="Register" onClick={this.handleSubmit} />
        <p>Already have an account? Click here to login!</p>
      </div>
    )
  }
}

export default connect()(Register)
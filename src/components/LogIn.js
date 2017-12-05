import React from 'react'
import { Redirect } from 'react-router'

class LogIn extends React.Component {

    state= {
      username: '',
      password: ''
    }

    handleSubmit = (e) => {
      e.preventDefault()
      console.log("in handle submit")
      this.props.loginUser(this.state)
    }

    handleChange = (e) => {
      const name = e.target.name
      const value = e.target.value
      this.setState({[name]: value})
    }

  render() {

    return (
      <div className="login-div">
        <form onSubmit={this.handleSubmit}>
          <input type="text" className="login" value={this.state.username} name="username" placeholder="username" onChange={this.handleChange} />
          <input type="password" className="login" value={this.state.password} name="password" placeholder="password" onChange={this.handleChange}/>
          <input type="submit" value="Sign In" className="submit-button" />
        </form>
      </div>
    )
  }
}

export default LogIn

import React from 'react'
import LogInForm from './LogInForm.js'
import { Redirect } from 'react-router'

class LogIn extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
			username: '',
			password: ''
		}
	}

	handleSubmit = (e) => {
		e.preventDefault()
		console.log('at least this part works', this.state.email, this.state.pass)

	}

	handleUsernameChange = (e) => {
		this.setState({
			email: e.target.value
		})
	}

	handlePassChange = (e) => {
		this.setState({
			pass: e.target.value
		})
	}

  render() {

    return (
      <div className="list-container">
        <LogInForm handleSubmit={this.handleChange} handlePassChange={this.handlePassChange} handleUsernameChange={this.handleUsernameChange}/>
      </div>
    )
  }
}

export default LogIn

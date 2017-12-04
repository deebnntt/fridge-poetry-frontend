import React from 'react'
import LogInForm from './LogInForm.js'
import { Redirect } from 'react-router'

class LogIn extends React.Component {

  constructor(props) {
    super(props)
      this.state = {
        loggedIn: false
      }
  }

  componentDidMount() {
	}

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      loggedIn: true
    })
  }
  render() {

    return (
      <div className="list-container">
        <LogInForm handleSubmit={this.handleChange}/>
        {this.state.loggedIn ? <Redirect push to="/playground" /> : null}
      </div>
    )
  }
}

export default LogIn

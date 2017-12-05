import React from 'react'
import { Link } from 'react-router-dom'

class LogInForm extends React.Component {

  render() {

    return (
      <div className="login-div" onSubmit={this.props.handleSubmit}>
          <input type="text" className="login" placeholder="email" onChange={this.props.handleUsernameChange} />
          <input type="password" className="login" placeholder="password" onChange={this.props.handlePassChange}/>
          <Link to="/playground"><input type="submit" value="Sign In" className="submit-button" /></Link>
      </div>
    )
  }
}

export default LogInForm

import React from 'react'
import { Link } from 'react-router-dom'

class LogInForm extends React.Component {

  render() {

    return (
      <div className="login-div">
          <input type="text" className="login" placeholder="email" />
          <input type="text" className="login" placeholder="password" />
          <Link to="/playground"><input type="submit" value="Sign In" className="submit-button" /></Link>
      </div>
    )
  }
}

export default LogInForm

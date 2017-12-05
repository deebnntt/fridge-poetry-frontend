import React from 'react'
import { loginUser } from '../actions/users'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

class LogIn extends React.Component {

    state= {
      username: '',
      password: ''
    }

    handleSubmit = (e) => {
      e.preventDefault()
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
        <h1 className="logo-login">mag.NET</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" className="login" value={this.state.username} name="username" placeholder="username" onChange={this.handleChange} />
          <input type="password" className="login" value={this.state.password} name="password" placeholder="password" onChange={this.handleChange}/>
          <input type="submit" value="Sign In" className="submit-button" />
        </form><br />
        <Link to="/signup" className="detail-link">SIGN UP</Link>
      </div>
    )
  }
}

const mapStateToProps= (state) => {
  return {
    currentUser: state.user.currentUser
  }
}

function mapDispatchToProps(dispatch){
  return ({
    loginUser: (params) => dispatch(loginUser(params)),
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn)

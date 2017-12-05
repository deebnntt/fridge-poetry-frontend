import React from 'react'
import { connect } from 'react-redux'
import { signupUser } from '../actions/users'
import { Redirect } from 'react-router'

class SignUp extends React.Component {

    state= {
      username: '',
      password: ''
    }

    handleSubmit = (e) => {
      e.preventDefault()
      console.log("in handle submit")
      this.props.signupUser(this.state)
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
          <input type="submit" value="Sign Up" className="submit-button" />
        </form>
        {this.props.currentUser.id ? <Redirect push to="/playground" /> : null}
      </div>
    )
  }
}

const mapStateToProps= (state) => {
  console.log(state)
  return {
    currentUser: state.user.currentUser
  }
}

function mapDispatchToProps(dispatch){
  return ({
    signupUser: (params) => dispatch(signupUser(params)),
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)

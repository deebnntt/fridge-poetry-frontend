import React from 'react'
import { Redirect } from 'react-router'
import { loginUser } from '../actions/users'
import { connect } from 'react-redux'

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

const mapStateToProps= (state) => {
  console.log(state)
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

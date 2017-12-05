import React from 'react'
import LogIn from './LogIn.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loginUser } from '../actions/users'
import { Redirect } from 'react-router'

class Home extends React.Component {

  render() {
    return(
      <div>
        <LogIn loginUser={this.props.loginUser} />
        {this.state.currentUser ? <Redirect push to="/playground" /> : null}
      </div>
    )
  }
}

const mapStateToDispatch = (state) => {
  return {
    currentUser: state.user.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loginUser
  }, dispatch)
}

export default connect(mapStateToDispatch, mapDispatchToProps)(Home)

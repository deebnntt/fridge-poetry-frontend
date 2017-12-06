import React from 'react'
import LogIn from './LogIn.js'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

class Home extends React.Component {


  render() {
    console.log(this.props.currentUser.id);
    return(
      <div>
      {this.props.currentUser.id ? <Redirect to="/playground"/> : null}
        <LogIn />
      </div>
    )
  }
}

const mapStateToProps= (state) => {
  return {
    currentUser: state.user.currentUser,
    isLoggedIn: state.user.justLoggedIn
  }
}

export default connect(mapStateToProps)(Home)

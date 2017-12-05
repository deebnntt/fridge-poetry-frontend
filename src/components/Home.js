import React from 'react'
import LogIn from './LogIn.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Redirect } from 'react-router'

class Home extends React.Component {


  render() {
    return(
      <div>
        <LogIn />
        {this.props.currentUser.id ? <Redirect push to="/playground" /> : null}
      </div>
    )
  }
}

const mapStateToProps= (state) => {
  return {
    currentUser: state.user.currentUser
  }
}

export default connect(mapStateToProps)(Home)

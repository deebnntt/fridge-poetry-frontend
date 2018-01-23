import React, { Component } from 'react'
import { Route } from "react-router-dom"
import { connect } from "react-redux"
import PoemShow from './PoemShow.js'
import { fetchCurrentUser } from "../../actions/users.js"

class ShowContainer extends React.Component {

  componentDidMount() {
    this.props.fetchPoems()
    if (!this.props.currentUser.id) {
      this.props.fetchCurrentUser()
    }
	}

  render() {
    return (
        <div>
          <PoemShow poem={this.props.currentPoem}/>
        </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.user.currentUser
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCurrentUser: () => {
      dispatch(fetchCurrentUser());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowContainer)

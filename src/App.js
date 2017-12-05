import React, { Component } from 'react';
import './App.css';
import CreateContainer from './components/CreateContainer.js'
import PoemShow from './components/PoemShow.js'
import ListContainer from './components/ListContainer.js'
import { BrowserRouter as Router } from "react-router-dom"
import { Route, withRouter } from "react-router-dom"
import NavBar from "./components/NavBar.js"
import LogIn from './components/LogIn.js'
import { getAUser } from './actions/users.js'
import { connect } from 'react-redux'

class App extends Component {

  componentDidMount() {
    const userObj = {
      "username": "danielle",
      "password": "db"
    }
    this.props.getAUser(userObj)
  }

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <div className="app-body">
            <Route exact path='/' component={LogIn} />
            <Route exact path='/list' component={ListContainer}/>
            <Route exact path='/playground' component={CreateContainer}/>
            <Route exact path='/poems/:id' component={PoemShow}/>
          </div>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getAUser: (userParams) => {
      dispatch(getAUser(userParams))
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

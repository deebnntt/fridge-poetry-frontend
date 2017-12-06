import React, { Component } from 'react';
import './App.css';
import CreateContainer from './components/Create/CreateContainer.js'
import PoemShow from './components/Show/PoemShow.js'
import ListContainer from './components/List/ListContainer.js'
import CommunityContainer from './components/Community/CommunityContainer.js'
import Home from './components/Home.js'
import SignUp from './components/SignUp.js'
import NavBar from "./components/NavBar.js"
import { BrowserRouter as Router } from "react-router-dom"
import { Route } from "react-router-dom"
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

class App extends Component {

  state = {
    user: {}
  }

  render() {

    return (
      <Router>
        <div className="App">
          {this.props.currentUser.id ? <NavBar /> : null}
          <div className="app-body">
          {!localStorage.getItem("jwtToken") ? <Redirect to="/login"/> : null}
            <Route exact path="/login" component={Home} />
            <Route exact path='/signup' component={SignUp} />
            <Route exact path='/list' component={ListContainer}/>
            <Route exact path='/playground' component={CreateContainer}/>
            <Route exact path='/poems/:id' component={PoemShow}/>
            <Route exact path='/community' component={CommunityContainer}/>
          </div>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.user.currentUser,
    loggedIn: state.user.loggedIn
  };
}

export default connect(mapStateToProps)(App)

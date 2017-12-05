import React, { Component } from 'react';
import './App.css';
import CreateContainer from './components/CreateContainer.js'
import PoemShow from './components/PoemShow.js'
import ListContainer from './components/ListContainer.js'
import { BrowserRouter as Router } from "react-router-dom"
import { Route } from "react-router-dom"
import NavBar from "./components/NavBar.js"
import { connect } from 'react-redux'
import authorize from './components/authorize'
import Home from './components/Home.js'
import SignUp from './components/SignUp.js'

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
            <Route exact path='/' component={Home} />
            <Route exact path='/signup' component={SignUp} />
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
    currentUser: state.user.currentUser
  };
}

export default connect(mapStateToProps)(App)

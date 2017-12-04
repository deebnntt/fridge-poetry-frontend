import React, { Component } from 'react';
import './App.css';
import CreateContainer from './components/CreateContainer.js'
import PoemShow from './components/PoemShow.js'
import ListContainer from './components/ListContainer.js'
import { BrowserRouter as Router } from "react-router-dom"
import { Route } from "react-router-dom"
import NavBar from "./components/NavBar.js"
import LogIn from './components/LogIn.js'

class App extends Component {
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

export default App;

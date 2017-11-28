import React, { Component } from 'react';
import './App.css';
import CreateContainer from './components/CreateContainer.js'
import PoemShow from './components/PoemShow.js'
import ListContainer from './components/ListContainer.js'
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar.js"

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path='/list' component={ListContainer}/>
          <Route exact path='/' component={CreateContainer}/>
          <Route exact path='/poems/:id' component={PoemShow}/>
        </div>
      </Router>
    );
  }
}

export default App;

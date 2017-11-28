import React, { Component } from 'react';
import './App.css';
import CreateContainer from './components/CreateContainer.js'
import PoemShow from './components/PoemShow.js'
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path='/' exact component={CreateContainer}/>
          <Route path='/poems/:id' exact component={PoemShow}/>
        </div>
      </Router>
    );
  }
}

export default App;

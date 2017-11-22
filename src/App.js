import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CreateContainer from './CreateContainer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CreateContainer />
      </div>
    );
  }
}

export default App;

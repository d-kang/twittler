import React, { Component } from 'react';
import Hello from './Hello'
import Button from './Button'

import logo from '../logo.svg';
import '../css/App.css';
import { streams } from '../data_generator'

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Hello className="welcome-message"></Hello>
        <Button  />
      </div>
    );
  }
}

export default App;
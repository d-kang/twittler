import React, { Component } from 'react';
import Hello from './Hello'
import Button from './Button'



import logo from '../logo.svg';
import '../css/App.css';
import { streams } from '../data_generator';



class App extends Component {
  helloButton() {
      alert('Hello!');
  }
  renderTweets() {
    return streams.home.map(function(home) {
      return <div>@ {home.user}: {home.message} {String(home['created_at']).slice(17,24)}</div>
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Twittler</h2>
        </div>

        <Hello className="welcome-message"></Hello>
        <Button/>
        {/* <h1 className="tweets">{this.renderTweets()}</h1> */}
      </div>
    );
  }
}

export default App;

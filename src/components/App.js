import React, { Component } from 'react';
import Hello from './Hello'
import Button from './Button'
import Header from './Header'



import '../css/App.css';
import { streams } from '../data_generator';



class App extends Component {
  helloButton() {
      alert('Hello!');
  }
  getInitialState() {
    return {count: 1}
  }
  addTweet() {
    this.setState({count: this.state.count + 1})
  }
  renderTweets() {
    return streams.home.map(function(home, i) {
      return (
        <div>
        <li key={"tweet" + i}>  @ <span className="username" user={home.user}>{home.user}</span>: {home.message} {String(home['created_at']).slice(17,24)}
      </li>
        </div>
      )
    })
  }

  render() {
    return (
      <div className="App">
        <Header />

        {/* <Hello className="welcome-message"></Hello> */}
        <Button id="main-button"/>
        <div className="tweets">{this.renderTweets()}</div>
      </div>
    );
  }
}

export default App;

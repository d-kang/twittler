import React from 'react';

import Button from './Button'
import { streams } from '../data_generator';
class Article extends React.Component {
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
      <div>
        <Button id="main-button"/>
        <div className="tweets">{this.renderTweets()}</div>
      </div>
    );
  }
}


export default Article;

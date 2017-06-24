import React from 'react';
import AddTweetForm from './AddTweetForm'
import { streams } from '../data_generator';

export default class ArticleList extends React.Component {
  constructor(props) {
    super(props)
    this.state = { streams }
    this.renderTweets = this.renderTweets.bind(this)
    this.userTweet = this.userTweet.bind(this)
  }

  updateStreams() {
    this.setState( {streams} );
  }
  userTweet(e) {
    e.preventDefault();
    console.log('this (userTweet)', this)
    // this.setState({userName: this.state.streams.users[this.userSpan.id]})
    console.log(this.state.streams.users[this.userSpan.id]);
    console.log(this.userSpan.id)
  }
  renderTweets(messages) {
    var self = this;
    return messages.home.map(function(home, i) {
      return (
        <div key={i}>
          @ <span onClick={self.userTweet} ref={input=>self.userSpan = input} className={'username ' + home.user} id={home.user}>{home.user}</span>: {home.message} {home['created_at'].toLocaleTimeString()}
        </div>
      )
    })
  }

  render() {
    return (
      <div className="streams">
        <AddTweetForm />
          {this.renderTweets(this.state.streams)}
      </div>
    );
  }
}

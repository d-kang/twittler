import React from 'react';
import AddTweetForm from './AddTweetForm'
import { streams } from '../data_generator';
class ArticleList extends React.Component {
  constructor(props) {
    super(props)
    this.state = { streams }
    this.renderTweets = this.renderTweets.bind(this)
  }

  componentDidMount() {
    this.timerID = setInterval( () => this.updateStreams(), 1000 );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  updateStreams() {
    this.setState( {streams} );
  }

  renderTweets(messages) {
    return messages.home.map(function(home, i) {
      return (
        <div key={"tweet_" + i}>
          @ <span className={'username ' + home.user}>{home.user}</span>: {home.message} {home['created_at'].toLocaleTimeString()}
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

export default ArticleList;

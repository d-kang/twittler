import React from 'react';
import AddTweetForm from './AddTweetForm'

class ArticleList extends React.Component {
  constructor(props) {
    super(props)
    this.renderTweets = this.renderTweets.bind(this)
  }

  renderTweets(messages) {
    return messages.home.map(function(home, i) {
      return (
        <div key={"tweet_" + i}>
          @ <span className="username">{home.user}</span>: {home.message} {home['created_at'].toLocaleTimeString()}
        </div>
      )
    })
  }

  render() {
    return (
      <div className="streams">
        <AddTweetForm />
          {this.renderTweets(this.props.messages)}
      </div>
    );
  }
}

export default ArticleList;

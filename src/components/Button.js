import React from 'react';
import { streams } from '../data_generator'


class Button extends React.Component {
  helloButton(event) {
    event.preventDefault();
    console.log(streams.home[0].message)
  }
  renderTweets() {
    return streams.home.map(function(home) {
      return <div>@ {home.user}: {home.message} {String(home['created_at']).slice(17,24)}</div>
    })
  }
  render() {
    return (
      <div>
        <button onClick={(e) => this.helloButton(e)}>Render Tweets</button>;
        <div className="allTweets">{this.renderTweets()}</div>
      </div>
    )

  }
}

export default Button


// streams.home[0].message

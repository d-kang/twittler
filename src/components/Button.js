import React from 'react';
import { streams } from '../data_generator'


class Button extends React.Component {
  helloButton(event) {
    event.preventDefault();
    console.log(streams.home[0].message)
  }
  renderTweets(e) {
    e.preventDefault();
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

        <form onClick={(e) => this.renderTweets(e)} name="" action="index.html" method="post">
          <input type="text" name="" value="" placeholder="what's happening?"/>
          <input type="submit" name="" value="Render Tweets" />
        </form>
      </div>
    )

  }
}

export default Button

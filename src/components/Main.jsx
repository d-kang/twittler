import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './App.jsx';

import FriendsList from './FriendsList.jsx';
import Other from './Other.jsx';
import { streams } from '../data_generator';


export const Comments = () => (
  <div className="welcome">
    <h1>Welcome!</h1>
  </div>
);


// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /friendslist
// and /other routes will match any pathname that starts
// with /friendslist or /other. The / route will only match
// when the pathname is exactly the string "/"

 // <Route path="/comments" component={() => (<Comments myProp="value" />)}/>

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      streams,
    };
    this.all = this.all.bind(this);
    this.get = this.get.bind(this);
    this.renderTweets = this.renderTweets.bind(this);
  }
  all() {
    return this.state.streams.home;
  }
  get(id) {
    const isUser = u => u.user === id;
    return this.home.find(isUser);
  }
  renderTweets(messages, user = 'home') {
    const tweetList = messages[user];
    return tweetList.map((msg, i) => (
      <div key={i}>
        @<span
          ref={(input) => { this.userSpan = input; }}
          className={`username ${msg.user}`}
          id={msg.user}
        >{msg.user}</span>
        : {msg.message} {msg.created_at.fromNow()}
      </div>
    ),
  );
  }
  render() {
    return (
      <main className="App-header">
        <Switch>
          <Route
            exact
            path="/"
            component={() => (
              <App
                streams={this.state.streams}
                renderTweets={this.renderTweets}
              />
            )}
          />
          <Route
            path="/friendslist"
            component={() => (
              <FriendsList
                streams={this.state.streams}
                all={this.all}
                get={this.get}
                renderTweets={this.renderTweets}
              />
            )}
          />
          <Route
            path="/other"
            component={() =>
              <Other myProp={this.state} />}
          />
          <Route
            path="/comments"
            component={Comments}
          />
        </Switch>
      </main>
    );
  }
}

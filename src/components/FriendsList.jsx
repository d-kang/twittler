import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { StreamsAPI } from '../index';
import Header from './Header.jsx';
import Welcome from './Welcome.jsx';
// The FullFriendsList iterates over all of the players and creates
// a link to their profile page.

const FullFriendsList = props => (
  <div>
    <Welcome />
    <ul>
      {
        props.all().reduce((acc, u) => {
          if (acc.indexOf(u.user) === -1) {
            acc.push(u.user);
          }
          return acc;
        }, [])
        .map((u, i) => (
          <li key={i}>
            <Link to={`/friendslist/${u}`}>{u}</Link>
          </li>
        ))
      }
    </ul>
  </div>
);
// The Player looks up the player using the number parsed from
// the URL's pathname. If no player is found with the given
// number, then a "player not found" message is displayed.
// Player => Player
// player => player

export const Friend = props => {
  const friend = StreamsAPI.get(props.match.params.number);
  const date = new Date(JSON.parse(JSON.stringify(friend.created_at)));
  if (!friend) {
    return <div>Sorry, but the friend was not found</div>
  }
  return (
    <div>
      <h1 className="welcome">@{friend.user}</h1>
      {
        StreamsAPI.all().reduce((acc, u, i) => {
          if (u.user === friend.user) {
            const msg = <h4 key={i}>Message: {u.message} Time: {date.toLocaleTimeString()}</h4>;
            acc.push(msg);
          }
          return acc;
        }, [])
      }
      <Link to="/friendslist">Back</Link>
    </div>
  );
};

// The Roster component matches one of two different routes
// depending on the full pathname
export const FriendsList = props => (
  <div>
    <Header />
    <Switch>
      <Route
        exact path="/friendslist"
        component={() =>
          <FullFriendsList
            streams={props.streams}
            all={props.all}
            get={props.get}
          />
        }
      />
      <Route
        path="/friendslist/:number"
        component={Friend}
      />
    </Switch>
  </div>
);

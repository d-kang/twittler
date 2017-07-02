import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header.jsx';
import FullFriendsList from './FullFriendsList.jsx';
import Friend from './Friend.jsx';


// The Roster component matches one of two different routes
// depending on the full pathname
const FriendsList = props => (
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

export default FriendsList;

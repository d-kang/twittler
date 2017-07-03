import React from 'react';
import { Link } from 'react-router-dom';
import Welcome from './Welcome.jsx';

// The FullFriendsList iterates over all of the players and creates
// a link to their profile page.

const FullFriendsList = props => (
  <div>
    <Welcome />
    {/* {<p>FullFriendsList</p>} */}
    <ul>
      {console.log('FullFriendsList', {props})}
      {
        props.all().reduce((acc, u) => {
          if (acc.indexOf(u.user) === -1) {
            acc.push(u.user);
          }
          return acc;
        }, [])
        .map((u, i) => (
          <li className="fullFriendsList" key={i}>
            <Link to={`/friendslist/${u}`}>{u}</Link>
          </li>
        ))
      }
    </ul>
  </div>
);

export default FullFriendsList;

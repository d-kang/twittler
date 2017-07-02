import React from 'react';
import { Link } from 'react-router-dom';
// The Friend looks up the friend using the number parsed from
// the URL's pathname. If no friend is found with the given
// number, then a "friend not found" message is displayed.
import moment from 'moment';
const Friend = (props) => {
  console.log({props})
  const m = moment()
  console.log(m.fromNow())
  // props.streams.get()
  const username = props.route.match.params.number;
  // const userTweets = props.streams.users[username];
  const userTweets = props.streams.users;
  console.log({userTweets})
  // props.route.match.params.number;
  // const userTweets = props.streams.users.douglascalhoun;
  const result = props.renderTweets(userTweets, username);
  console.log({result})

  return (
    <div>
      <p>Friend</p>
      <h1 className="welcome">@{username}</h1>
      {
        result
      }
      <Link to="/friendslist">Back</Link>
    </div>
  );
}

export default Friend;

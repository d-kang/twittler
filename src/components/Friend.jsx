import React from 'react';
import { Link } from 'react-router-dom';
import { StreamsAPI } from '../index';
// The Friend looks up the friend using the number parsed from
// the URL's pathname. If no friend is found with the given
// number, then a "friend not found" message is displayed.

const Friend = (props) => {
  console.log({props})

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

// const Friend = (props) => {
//   console.log({props})
//   const friend = StreamsAPI.get(props.match.params.number);
//   const date = new Date(JSON.parse(JSON.stringify(friend.created_at)));
//   // if (!friend) {
//   //   return <div>Sorry, but the friend was not found</div>
//   // }
//   const result = StreamsAPI.all().reduce((acc, u, i) => {
//     if (u.user === friend.user) {
//       const msg = <h4 key={i}>Message: {u.message} Time: {date.toLocaleTimeString()}</h4>;
//       acc.push(msg);
//     }
//     return acc;
//   }, []);
//   return (
//     <div>
//       <p>Friend</p>
//       <h1 className="welcome">@{friend.user}</h1>
//       {
//         result
//       }
//       <Link to="/friendslist">Back</Link>
//     </div>
//   );
// };
//
// export default Friend;

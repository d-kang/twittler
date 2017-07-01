import React from 'react';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';
import { StreamsAPI } from '../index'
import Header from './Header'
// The FullFriendsList iterates over all of the players and creates
// a link to their profile page.
export const FullFriendsList = () => (
  <div>
    <ul>
      {
        StreamsAPI.all().reduce((acc, u) => {
          if (acc.indexOf(u.user) === -1){
            acc.push(u.user)
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
)


// The Player looks up the player using the number parsed from
// the URL's pathname. If no player is found with the given
// number, then a "player not found" message is displayed.
// Player => Player
// player => player
export const Friend = (props) => {
  console.log(props)
  const friend = StreamsAPI.get( props.match.params.number )
  // const friend = StreamsAPI.all()[0]
  console.log({friend})
  const date = new Date( JSON.parse( JSON.stringify(friend['created_at']) ) )
  if (!friend) {
    return <div>Sorry, but the friend was not found</div>
  }

  return (
    <div>
      <h1>@{friend.user}</h1>
      {/*<h2>Message: {friend.message} Time: {date.toLocaleTimeString()}</h2>*/}
      {
        StreamsAPI.all().reduce((acc, u, i) => {
          console.log(u.user, friend.user)
          if (u.user === friend.user) {
            var msg = <h4 key={i}>Message: {u.message} Time: {date.toLocaleTimeString()}</h4>
            acc.push(msg);
          }
          return acc;
        }, [])
      }
      <Link to='/friendslist'>Back</Link>
    </div>
  )
}





// The Roster component matches one of two different routes
// depending on the full pathname
export const FriendsList = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path='/friendslist' component={FullFriendsList}/>
      <Route path='/friendslist/:number' component={Friend}/>
    </Switch>

  </div>
)

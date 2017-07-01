import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Header from './components/Header';
import './css/index.css';

import { BrowserRouter } from 'react-router-dom';


import { HashRouter, Switch, Route, Link } from 'react-router-dom';
// const { HashRouter, Switch, Route, Link } = ReactRouterDOM

  // A simple data API that will be used to get the data for our
  // components. On a real website, a more robust data fetching
  // solution would be more appropriate.


  // sample data
  const StreamsAPI = {
    "home": [
      { user: "mracus", message: " installed your system #sf", created_at: "2017-06-23T17:26:37.538Z" },
      { user: "douglascalhoun", message: "just formulated my cat but only i know how", created_at: "2017-06-23T17:26:37.538Z" },
      { user: "sharksforcheap", message: "ask me how i navigated my life #techlife", created_at: "2017-06-23T17:26:37.538Z" },
      { user: "mracus", message: "efficiently overhauled this belief system #sxsw", created_at: "2017-06-23T17:26:37.538Z" },
      { user: "shawndrost", message: "last night i systematized a belief system #magic", created_at: "2017-06-23T17:26:37.538Z" },
      { user: "douglascalhoun", message: " built my koolaid ", created_at: "2017-06-23T17:26:37.538Z" },
      { user: "mracus", message: "a ninja enjoyed your worm #magic", created_at: "2017-06-23T17:26:37.538Z" },
      { user: "douglascalhoun", message: " formulated a future but only i know how", created_at: "2017-06-23T17:26:37.538Z" },
      { user: "sharksforcheap", message: "just overhauled the big life #magic", created_at: "2017-06-23T17:26:37.538Z" },
      { user: "douglascalhoun", message: "completely debugged an entire pony #techlife", created_at: "2017-06-23T17:26:37.538Z" },
      { user: "douglascalhoun", message: " invented this worm ", created_at: "2017-06-23T17:26:37.538Z" }
    ],
    all: function() { return this.home },
    get: function(id) {
      const isUser = u => u.user === id;
      return this.home.find(isUser);
    }
  }

  // The FullFriendsList iterates over all of the players and creates
  // a link to their profile page.
  const FullFriendsList = () => (
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
  const Friend = (props) => {
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



          // StreamsAPI.all().reduce((acc, u) => {
          //   if (acc.indexOf(u.user) === -1){
          //     acc.push(u.user)
          //   }
          //   return acc;
          // }, [])
          // .map((u, i) => (
          //   <li key={i}>
          //     <Link to={`/roster/${u}`}>{u}</Link>
          //   </li>
          // ))


  // The Roster component matches one of two different routes
  // depending on the full pathname
  const FriendsList = () => (
    <div>
      <Header />
      <Switch>
        <Route exact path='/friendslist' component={FullFriendsList}/>
        <Route path='/friendslist/:number' component={Friend}/>
      </Switch>

    </div>
  )

  const Other = () => (
    <div>
      <Header />
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  )

  const Home = () => (
    <div>
      <h1>Welcome to Twittler!</h1>
    </div>
  )

  // The Main component renders one of the three provided
  // Routes (provided that one matches). Both the /roster
  // and /other routes will match any pathname that starts
  // with /roster or /other. The / route will only match
  // when the pathname is exactly the string "/"
const Main = () => (
    <main className="App-header">
        <Switch>
          <Route exact path='/' component={App}/>
          <Route path='/friendslist' component={FriendsList}/>
          <Route path='/other' component={Other}/>
        </Switch>
      {/* </div> */}
    </main>
  )

  ReactDOM.render((
        <HashRouter>
          <Main />
        </HashRouter>
      ), document.getElementById('root'))

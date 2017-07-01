import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Header from './components/Header';
import './css/index.css';

import { BrowserRouter } from 'react-router-dom';

import { FullFriendsList, Friend, FriendsList  } from './components/FriendsList'
import { Other } from './components/Other'

import { HashRouter, Switch, Route, Link } from 'react-router-dom';
// const { HashRouter, Switch, Route, Link } = ReactRouterDOM

// A simple data API that will be used to get the data for our
// components. On a real website, a more robust data fetching
// solution would be more appropriate.

// sample data
export const StreamsAPI = {
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

export const Comments = () => (
  <div className='welcome'>
    <h1>Welcome!</h1>
  </div>
)


// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /friendslist
// and /other routes will match any pathname that starts
// with /friendslist or /other. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main className="App-header">
    <Switch>
      <Route exact path='/' component={() => <App />}/>
      <Route path='/friendslist' component={() => <FriendsList />} />
      <Route path='/other' component={() => <Other myProp="hi"/>}/>
      <Route path="/comments" component={() => (<Comments myProp="value" />)}/>
    </Switch>
  </main>
)

ReactDOM.render((
  <HashRouter>
    <Main />
  </HashRouter>
), document.getElementById('root'))

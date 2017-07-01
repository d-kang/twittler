import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './css/index.css';

import { FriendsList } from './components/FriendsList'


import { Other } from './components/Other'
import { streams } from './data_generator';
import { HashRouter, Switch, Route} from 'react-router-dom';

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

 // <Route path="/comments" component={() => (<Comments myProp="value" />)}/>

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      streams
    }
    this.all = this.all.bind(this)
    this.get = this.get.bind(this)
  }
  all() {
    return this.state.streams.home
  }
  get(id) {
    const isUser = u => u.user === id;
    return this.home.find(isUser)
  }
  render() {
    return (
      <main className="App-header">
        <Switch>
          <Route exact path='/' component={() => <App streams={this.state.streams} />}/>
          <Route path='/friendslist' component={() => <FriendsList streams={this.state.streams} all={this.all} get={this.get}/>} />
          <Route path='/other' component={ () => <Other myProp={this.state} />}/>
          <Route path="/comments" component={Comments}/>

        </Switch>
      </main>
    )
  }
}


ReactDOM.render((
  <HashRouter>
    <Main />
  </HashRouter>
), document.getElementById('root'))

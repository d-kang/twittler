import React from 'react';
import AddTweetForm from './AddTweetForm'
import { streams } from '../data_generator';
export default class ArticleList extends React.Component {
  constructor(props) {
    super(props)
    this.state = { streams }
    this.renderTweets = this.renderTweets.bind(this)
    this.userTweet = this.userTweet.bind(this)
  }

  updateStreams() {
    this.setState( {streams} );
  }
  userTweet(e) {
    e.preventDefault();
    console.log('this (userTweet)', this)
    // this.setState({userName: this.state.streams.users[this.userSpan.id]})
    console.log(this.state.streams.users[this.userSpan.id]);
    console.log(this.userSpan.id)
  }
  renderTweets(messages) {
    var self = this;
    return messages.home.map(function(home, i) {
      return (
        <div key={i}>
          @ <span onClick={self.userTweet} ref={input=>self.userSpan = input} className={'username ' + home.user} id={home.user}>{home.user}</span>: {home.message} {home['created_at'].toLocaleTimeString()}
        </div>
      )
    })
  }

  render() {
    return (
      <div className="streams">
        <AddTweetForm />
          {this.renderTweets(this.state.streams)}
      </div>
    );
  }
}


// streams.home is an array of tweet objects
//
//
// streams.users is an object with each user as a property
// streams.users.mracus is an array of tweet objects

// this.state.streams =  {
//   "home": [
//     {
//       "user": "mracus",
//       "message": " installed your system #sf",
//       "created_at": "2017-06-23T17:26:37.538Z"
//     },
//     {
//       "user": "douglascalhoun",
//       "message": "just formulated my cat but only i know how",
//       "created_at": "2017-06-23T17:26:37.538Z"
//     },
//     {
//       "user": "sharksforcheap",
//       "message": "ask me how i navigated my life #techlife",
//       "created_at": "2017-06-23T17:26:37.538Z"
//     },
//     {
//       "user": "mracus",
//       "message": "efficiently overhauled this belief system #sxsw",
//       "created_at": "2017-06-23T17:26:37.538Z"
//     },
//     {
//       "user": "shawndrost",
//       "message": "last night i systematized a belief system #magic",
//       "created_at": "2017-06-23T17:26:37.538Z"
//     },
//     {
//       "user": "douglascalhoun",
//       "message": " built my koolaid ",
//       "created_at": "2017-06-23T17:26:37.538Z"
//     },
//     {
//       "user": "mracus",
//       "message": "a ninja enjoyed your worm #magic",
//       "created_at": "2017-06-23T17:26:37.538Z"
//     },
//     {
//       "user": "douglascalhoun",
//       "message": " formulated a future but only i know how",
//       "created_at": "2017-06-23T17:26:37.538Z"
//     },
//     {
//       "user": "sharksforcheap",
//       "message": "just overhauled the big life #magic",
//       "created_at": "2017-06-23T17:26:37.538Z"
//     },
//     {
//       "user": "douglascalhoun",
//       "message": "completely debugged an entire pony #techlife",
//       "created_at": "2017-06-23T17:26:37.538Z"
//     },
//     {
//       "user": "douglascalhoun",
//       "message": " invented this worm ",
//       "created_at": "2017-06-23T17:26:37.538Z"
//     }
//   ],
//   "users": {
//     "shawndrost": [
//       {
//         "user": "shawndrost",
//         "message": "last night i systematized a belief system #magic",
//         "created_at": "2017-06-23T17:26:37.538Z"
//       }
//     ],
//     "sharksforcheap": [
//       {
//         "user": "sharksforcheap",
//         "message": "ask me how i navigated my life #techlife",
//         "created_at": "2017-06-23T17:26:37.538Z"
//       },
//       {
//         "user": "sharksforcheap",
//         "message": "just overhauled the big life #magic",
//         "created_at": "2017-06-23T17:26:37.538Z"
//       }
//     ],
//     "mracus": [
//       {
//         "user": "mracus",
//         "message": " installed your system #sf",
//         "created_at": "2017-06-23T17:26:37.538Z"
//       },
//       {
//         "user": "mracus",
//         "message": "efficiently overhauled this belief system #sxsw",
//         "created_at": "2017-06-23T17:26:37.538Z"
//       },
//       {
//         "user": "mracus",
//         "message": "a ninja enjoyed your worm #magic",
//         "created_at": "2017-06-23T17:26:37.538Z"
//       }
//     ],
//     "douglascalhoun": [
//       {
//         "user": "douglascalhoun",
//         "message": "just formulated my cat but only i know how",
//         "created_at": "2017-06-23T17:26:37.538Z"
//       },
//       {
//         "user": "douglascalhoun",
//         "message": " built my koolaid ",
//         "created_at": "2017-06-23T17:26:37.538Z"
//       },
//       {
//         "user": "douglascalhoun",
//         "message": " formulated a future but only i know how",
//         "created_at": "2017-06-23T17:26:37.538Z"
//       },
//       {
//         "user": "douglascalhoun",
//         "message": "completely debugged an entire pony #techlife",
//         "created_at": "2017-06-23T17:26:37.538Z"
//       },
//       {
//         "user": "douglascalhoun",
//         "message": " invented this worm ",
//         "created_at": "2017-06-23T17:26:37.538Z"
//       }
//     ]
//   }
// }

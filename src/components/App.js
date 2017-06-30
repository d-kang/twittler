import React from 'react';
import Header from './Header'
import ArticleList from './ArticleList'
import Footer from './Footer'
import { streams } from '../data_generator';
import '../css/App.css';
import AddTweetForm from './AddTweetForm';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      streams,
      mracus: [],
      date: new Date()
    };
    this.renderTweets = this.renderTweets.bind(this)
    this.foo = this.foo.bind(this)
  }
  componentDidMount() {

    // this.timerID = setInterval( () => this.setState({
    //   date: new Date()
    // }), 1000 );
  }

  renderTweets(messages) {
    // debugger;
   return messages.home.map((msg, i) => {
     return (
       <div key={i}>

         @ <span onClick={this.userTweet} ref={input=>this.userSpan = input} className={'username ' + msg.user} id={msg.user}>{msg.user}</span>: {msg.message} {msg['created_at'].toLocaleTimeString()}
       </div>
     )
   })
  }
  foo(a) {
    var msg = this.state.streams.users.mracus.reduce( (acc ,item) => {acc.push(item.message); return acc}, [])
    console.log(msg)
    var copy = this.state.mracus.slice()
    this.setState({
      mracus: [...copy, ...msg]
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <AddTweetForm streams={this.props.streams}/>
        <ArticleList streams={this.state.streams} renderTweets={this.renderTweets}/>
        {
          // this.state.streams.home.map( (msg, i) =>  <ArticleList streams={this.state.streams} renderTweets={this.renderTweets}/>)
        }
        <Footer date={this.state.date}/>
        <button onClick={this.foo}>new Button</button>
        <ul>
          {
            this.state['mracus'].map((msg, i)=><li key={i}>{msg}</li>)
          }
          {this.state.streams.home.filter((msg) => msg.user === 'mracus')
          .map((msg, i) => <li key={i}>@ {msg.user}: {msg.message} {msg['created_at'].toLocaleTimeString()}</li>)}
        </ul>
      </div>
    );
  }
}

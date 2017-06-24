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
      date: new Date()
    };
    this.renderTweets = this.renderTweets.bind(this)
  }
  componentDidMount() {

    this.timerID = setInterval( () => this.setState({
      date: new Date()
    }), 1000 );
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
      </div>
    );
  }
}

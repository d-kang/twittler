import React from 'react';
import Header from './Header'
import ArticleList from './ArticleList'
import Clock from './Clock'
import Footer from './Footer'

import '../css/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: [0]
    };
    this.addMessage = this.addMessage.bind(this);
  }

  addMessage(e) {
    e.preventDefault()
    // console.log('addMessage clicked', this)
    // console.log('this.state', this.state)
    var data = {
      "user": "heyitwiz",
      "message": "javascript #omg",
      "created_at": new Date()
    }
    this.setState({foo: this.state.foo.concat(data.user)})
  }

  render() {
    return (
      <div className="App">
        <Header />
        <button onClick={this.addMessage}>Add Message</button>
        <ArticleList />
        <p>
        </p>
        <Clock />
        <Footer />
      </div>
    );
  }
}

export default App;

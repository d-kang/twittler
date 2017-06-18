import React from 'react';
import Header from './Header'
import ArticleList from './ArticleList'
import Footer from './Footer'
import { streams } from '../data_generator';
import '../css/App.css';

const hi = () => console.log()
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      streams,
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
    console.log('this.streams', JSON.stringify(this.state.streams, null, 2));
    return (
      <div className="App">
        <Header />
        <button onClick={this.addMessage}>Add Message</button>
        <ArticleList messages={this.state.streams}/>
        <p>
          {this.state.foo}
        </p>
        <Footer />
      </div>
    );
  }
}

export default App;

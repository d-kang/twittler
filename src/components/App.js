import React from 'react';
import Header from './Header'
import ArticleList from './ArticleList'
import Clock from './Clock'
import Footer from './Footer'
import { streams } from '../data_generator';
import '../css/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      streams
    };
    this.addMessage = this.addMessage.bind(this);
  }

  addMessage(e) {
    e.preventDefault()
  }

  render() {
    return (
      <div className="App">
        <Header />
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

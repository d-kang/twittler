import React, { Component } from 'react';
import Header from './Header'
import ArticleList from './ArticleList'
import Footer from './Footer'
import { streams } from '../data_generator';
import '../css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      streams
    }
  }
  render() {
    return (
      <div className="App">
        <Header />
        <ArticleList messages={this.state.streams}/>
        <Footer />
      </div>
    );
  }
}

export default App;

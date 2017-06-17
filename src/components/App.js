import React, { Component } from 'react';
import Hello from './Hello'
import Header from './Header'
import ArticleList from './ArticleList'
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ArticleList />
      </div>
    );
  }
}

export default App;

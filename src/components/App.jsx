import React from 'react';
import Header from './Header.jsx';
import ArticleList from './ArticleList.jsx';
import Footer from './Footer.jsx';
import '../css/App.css';
import AddTweetForm from './AddTweetForm.jsx';
import Welcome from './Welcome.jsx';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
    this.foo = this.foo.bind(this);
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(), 1000);
  }
  tick() {
    this.setState({
      date: new Date(),
    });
  }
  foo() {
    const msg = this.state.streams.users.mracus
    .reduce((acc, item) => {
      acc.push(item.message);
      return acc;
    }, []);

    const copy = this.state.mracus.slice();
    this.setState({
      mracus: [...copy, ...msg],
    });
  }



  render() {
    return (
      <div className="App">
        <Header />
        <Welcome />
        <AddTweetForm streams={this.props.streams} />
        <ArticleList streams={this.props.streams} renderTweets={this.props.renderTweets} />
        <Footer date={this.state.date} />
      </div>
    );
  }
}

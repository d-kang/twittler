import React from 'react';

export default class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {date: new Date()};
    this.formatedDate = this.formatedDate.bind(this)
  }

  formatedDate() {
    return <h2>It is {this.state.date.toLocaleTimeString()}.</h2>;
  }

  componentDidMount() {
    this.timerID = setInterval( () => this.tick(), 1000 );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h4>{this.formatedDate()}</h4>
       </div>
    );
  }
}

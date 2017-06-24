import React from 'react';

export default class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {date: new Date()};
    this.formatedDate = this.formattedDate.bind(this)
  }

  formattedDate() {
    return <h2>It is {this.state.date.toLocaleTimeString()}.</h2>;
  }

  componentDidMount() {
    this.timerID = setInterval( () => this.setState({
      date: new Date()
    }), 1000 );
  }

  render() {
    return (
      <div>
        {this.formattedDate()}
       </div>
    );
  }
}

import React from 'react';

export default class Clock extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.date.toLocaleTimeString()}.</h2>
       </div>
    );
  }
}

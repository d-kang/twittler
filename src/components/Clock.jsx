import React from 'react';

const Clock = props => (
  <div>
    <h2>{props.date.toLocaleTimeString()}.</h2>
  </div>
);

export default Clock;

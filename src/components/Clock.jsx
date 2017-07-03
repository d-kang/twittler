import React from 'react';

const Clock = props => (
  <div>
    <span id="clock">{props.date.toLocaleTimeString()}.</span>
  </div>
);

export default Clock;

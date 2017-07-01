import React from 'react';

export const Clock = props =>
      <div>
        <h2>{props.date.toLocaleTimeString()}.</h2>
        {/* {console.log(this.props.date.toLocaleTimeString())} */}
       </div>

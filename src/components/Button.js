import React from 'react';
import { streams } from '../data_generator'


class Button extends React.Component {
  helloButton(event) {
    event.preventDefault();
    console.log(streams.home[0].message)
  }
  render() {
    return (
      <div>
        <button onClick={(e) => this.helloButton(e)}>Render Tweets</button>;
      </div>
    )

  }
}

export default Button

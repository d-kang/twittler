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

        <form onClick={(e) => this.helloButton(e)} name="" action="index.html" method="post">
          <input type="text" name="" value="" placeholder="what's happening?"/>
          <input type="submit" name="" value="Render Tweets" />
        </form>
      </div>
    )

  }
}

export default Button

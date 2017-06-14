import React from 'react';
import { streams } from '../data_generator'


class Button extends React.Component {
  helloButton(event) {
    event.preventDefault();
    console.log(streams.users)
  }
  render() {
    return <button onClick={(e) => this.helloButton(e)}>Say Hello</button>;
  }
}


function HelloButton() {
  function handleClick() {
    alert('Hello!');
  }
  return <Button onClick={handleClick} />;
}

export default HelloButton;

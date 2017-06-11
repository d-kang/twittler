import React from 'react';

class Button extends React.Component {
  helloButton(event) {
    event.preventDefault();
    alert('hello')
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

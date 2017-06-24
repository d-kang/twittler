import React from 'react';
import logo from '../logo.svg';


class Header extends React.Component {
  render() {
    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="navbar">
          <a href="" className="nav 1">Friends</a>
          <a href="" className="nav 2">Timeline</a>
          <a href="" className="nav 3">Todo</a>
        </div>
      </div>
    )
  }
}

export default Header;

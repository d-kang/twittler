import React from 'react';
import logo from '../logo.svg';

import { Link } from 'react-router-dom';
class Header extends React.Component {
  // <div className="App-header">
  //   <img src={logo} className="App-logo" alt="logo" />
  //   <div className="navbar">
  //     <a href="" className="nav 1">Friends</a>
  //     <a href="" className="nav 2">Timeline</a>
  //     <a href="" className="nav 3">Todo</a>
  //   </div>
  // </div>



  render() {
    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="navbar">
            <a className="nav 1"><Link to='/' >Home</Link></a>
            <a className="nav 2"><Link to='/friendslist' >Friends List</Link></a>
            <a className="nav 3"><Link to='/schedule' >Schedule</Link></a>
        </div>
      </div>
    )
  }
}

export default Header;

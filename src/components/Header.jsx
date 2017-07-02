import React from 'react';
import logo from '../logo.svg';

import { Link } from 'react-router-dom';

const Header = () => (
  <div className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <div className="navbar">
      <Link to="/" className="nav 1">Home</Link>
      <Link to="/friendslist" className="nav 2">Friends List</Link>
      <Link to="/other" className="nav 3">Other</Link>
      <Link to="/comments" className="nav 3">Comments</Link>
    </div>
  </div>
);

export default Header;

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import './css/index.css';
import Main from './components/Main.jsx';


ReactDOM.render((
  <HashRouter>
    <Main />
  </HashRouter>
), document.getElementById('root'));

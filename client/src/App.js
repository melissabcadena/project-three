import React from 'react';
import './App.css';

import Home from './pages/Home';
import Menu from './pages/Menu';
import MyOrder from './pages/MyOrder';
import History from './pages/History';
import Signup from './pages/Signup';
import Login from './pages/Login';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import { ThemeProvider } from '@chakra-ui/core';

import Home from './pages/Home';
import Menu from './pages/Menu';
import MyOrder from './pages/MyOrder';
import History from './pages/History';
import Signup from './pages/Signup';
import Login from './pages/Login';


function App() {
  return (
    
    <div className="App">
      <Home></Home>
      <Menu></Menu>
      <MyOrder></MyOrder>
      <History></History>
      <Signup></Signup>
      <Login></Login>
    </div>
  );
}

export default App;

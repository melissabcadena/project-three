import React from 'react';
import { ThemeProvider } from '@chakra-ui/core';
import customTheme  from '../src/theme/theme';

//import Home from './pages/Home';
import Menu from './pages/Menu';
// import MyOrder from './pages/MyOrder';
// import History from './pages/History';
// import Signup from './pages/Signup';
// import Login from './pages/Login';


function App() {
  return (
    <ThemeProvider theme={customTheme}>
      {/* <Home/> */}
      <Menu/>
    </ThemeProvider>
    
  );
}

export default App;

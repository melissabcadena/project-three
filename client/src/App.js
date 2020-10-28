import React from 'react';

// UI
import { ThemeProvider } from '@chakra-ui/core';
import customTheme  from '../src/theme/theme';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {ApolloProvider} from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { StoreProvider } from './utils/GlobalState';

import Home from './pages/Home';
import Menu from './pages/Menu';
import MyOrder from './pages/MyOrder';
import History from './pages/History';
import Signup from './pages/Signup';
import Login from './pages/Login';

import Nav from './components/Nav';
import Footer from './components/Footer'

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem('id_token')
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}`: ''
      }
    })
  },
  uri: '/graphql',
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <StoreProvider>
            <ThemeProvider theme={customTheme}>
              <Nav />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/menu" component={Menu} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/cart" component={MyOrder} />
                <Route exact path="/profile" component={History} />
              </Switch>
              <Footer />
            </ThemeProvider>
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>
    
  );
}

export default App;
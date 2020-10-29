import React from 'react';
import { Box, Flex, Heading, Link as CLink } from '@chakra-ui/core';
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';

function Nav() {
  if (Auth.loggedIn()) {
    return (
      <Flex
        bg='brown.1'
        w='100%'
        justifyContent='space-between'
        alignItems='center'>
        <Flex flexDirection='row' justifyContent='center' alignItems='center'>
          <Heading as='h1' pl={3} color='white.2'>
            {'<br> for Java ☕'}
          </Heading>
        </Flex>
        <Box pr={3}>
          <Link to='/'>
            <CLink px={2} color='white.2'>
              Home
            </CLink>
          </Link>
          <Link px={2} color='white.2' to='/menu'>
            <CLink px={2} color='white.2'>
              Menu
            </CLink>
          </Link>
          <Link px={2} color='white.2' to='/order'>
            <CLink px={2} color='white.2'>
              Cart
            </CLink>
          </Link>
          <Link px={2} color='white.2' to='/profile'>
            <CLink px={2} color='white.2'>
              Profile
            </CLink>
          </Link>
          <Link px={2} color='white.2' to='/' onClick={() => Auth.logout()}>
            <CLink px={2} color='white.2'>
              Logout
            </CLink>
          </Link>
        </Box>
      </Flex>
    );
  } else {
    return (
      <Flex
        bg='brown.1'
        w='100%'
        justifyContent='space-between'
        alignItems='center'>
        <Flex flexDirection='row' justifyContent='center' alignItems='center'>
          <Heading as='h1' pl={3} color='white.2'>
            <Link color='white.2' href='/'>
              {'<br> for Java ☕'}
            </Link>
          </Heading>
        </Flex>
        <Box pr={3}>
        <Link to='/'>
            <CLink px={2} color='white.2'>
              Home
            </CLink>
          </Link>
          <Link px={2} color='white.2' to='/menu'>
            <CLink px={2} color='white.2'>
              Menu
            </CLink>
          </Link>
          <Link px={2} color='white.2' to='/order'>
            <CLink px={2} color='white.2'>
              Cart
            </CLink>
          </Link>
          <Link px={2} color='white.2' to='/signup'>
            <CLink px={2} color='white.2'>
              Signup
            </CLink>
          </Link>
          <Link px={2} color='white.2' to='/login'>
            <CLink px={2} color='white.2'>
              Login
            </CLink>
          </Link>
        </Box>
      </Flex>
    );
  }
}

export default Nav;
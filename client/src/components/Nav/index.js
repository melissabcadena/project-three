import React from 'react';
import { Box, Flex, Link, Heading } from "@chakra-ui/core";
import Auth from "../../utils/auth"; 

function Nav() {

  if(Auth.loggedIn()) {
    return (<Flex
      bg="brown.1"
      w="100%"
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex flexDirection="row" justifyContent="center" alignItems="center">
        <Heading as="h1" pl={3} color="white.2">
          {"<br> for Java ☕"}
        </Heading>
      </Flex>
      <Box pr={3}>
        <Link px={2} color="white.2" href="/">
          Home
        </Link>
        <Link px={2} color="white.2" href="/menu">
          Menu
        </Link>
        <Link px={2} color="white.2" href="/order">
          Cart
        </Link>
        <Link px={2} color="white.2" href="/profile">
          Profile
        </Link>
        <Link px={2} color="white.2" href="/" onClick={() => Auth.logout()}>
          Logout
        </Link>
      </Box>
    </Flex>
  );
    } else { 

    return (
      <Flex
        bg="brown.1"
        w="100%"
        justifyContent="space-between"
        alignItems="center"
      >
        <Flex flexDirection="row" justifyContent="center" alignItems="center">
          <Heading as="h1" pl={3} color="white.2">
          <Link color="white.2" href="/">
            {"<br> for Java ☕"}
            </Link>
          </Heading>
        </Flex>
        <Box pr={3}>
          <Link px={2} color="white.2" href="/">
            Home
          </Link>
          <Link px={2} color="white.2" href="/menu">
            Menu
          </Link>
          <Link px={2} color="white.2" href="/cart">
            Cart
          </Link>
          <Link px={2} color="white.2" href="/login">
            Login
          </Link>
          <Link px={2} color="white.2" href="/signup">
            Signup
          </Link>
        </Box>
      </Flex>
    );
  }
}


export default Nav;
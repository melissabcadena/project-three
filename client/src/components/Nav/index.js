import React from 'react';
import { Box, Flex, Link, Heading } from "@chakra-ui/core";

const NavLink = ({ children, ...props }) => (
    <Link px={2} color="white.2" {...props}>
      {children}
    </Link>
);
  

const MenuItems = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Text>
);

    return (
        <Flex
        bg="brown.1"
        w="100%"
        justifyContent="space-between"
        alignItems="center"
        >
        <Flex flexDirection="row" justifyContent="center" alignItems="center">
          <Heading as="h1" pl={3} color="white.2">
            {"<br> for Java"}
          </Heading>
        </Flex>
        <Box pr={3}>
          <NavLink>Home</NavLink>
          <NavLink>Menu</NavLink>
          <NavLink>Cart</NavLink>
          <NavLink>Signup</NavLink>
        </Box>
      </Flex>
    );


export default Nav;
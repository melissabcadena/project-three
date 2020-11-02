import React from "react";
import { Link } from "react-router-dom";
import { ThemeProvider, Box, Heading, Image, Flex } from '@chakra-ui/core';
import theme from '../theme/theme';

const NoMatch = () => {
  return (

    <ThemeProvider theme={theme}>
      <Flex width="full" textAlign="center" justifyContent="center" minHeight='100vh' wrap='wrap'>
      <Box p={5}>
        <Heading as='h1'>Sorry, the page that you are looking for is not here</Heading>
        <Image src="./images/sad_puppy.jpg" alt="coffee banner" rounded="1rem" shadow="2xl" />
        <Heading as='h3'>
        <Link to="/menu">
          ← Back to Menu
        </Link>
        </Heading>
      </Box>
      </Flex>
    </ThemeProvider>

  );
};

export default NoMatch;

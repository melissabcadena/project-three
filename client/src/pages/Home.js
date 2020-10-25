import React from 'react';
import { ThemeProvider, Box } from '@chakra-ui/core';
import theme  from '../theme/theme';


const Home = () => {
    return (
        <ThemeProvider theme={theme}>
        <Box bg="brown.1" w="100%" p={4} color="white">
            Brand Name
        </Box>
        <div>
            Home Page
        </div>
        </ThemeProvider>
    );
};


export default Home;
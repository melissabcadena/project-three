import React from 'react';
import { ThemeProvider } from '@chakra-ui/core';
import theme  from '../theme/theme';
import Nav from '../components/Nav';


const Home = () => {
    return (
        <ThemeProvider theme={theme}>
        <Nav/>
        <div>
            Home Page
        </div>
        </ThemeProvider>
    );
};


export default Home;
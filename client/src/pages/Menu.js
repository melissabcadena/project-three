import React from 'react';
import { ThemeProvider, Flex, Box, Image, Stack, Heading, Button, Link, Text} from '@chakra-ui/core';
import theme  from '../theme/theme';

import Nav from '../components/Nav';
import Footer from '../components/Footer';


const Menu = () => {
    return (
        <ThemeProvider theme={theme}>
            <Nav/>


            <Footer/>
        </ThemeProvider>
    );
};


export default Menu;
import React from 'react';
import { ThemeProvider, Flex, Box, Image, Stack, Heading, Button, Link, Text} from '@chakra-ui/core';
import theme  from '../theme/theme';

import Nav from '../components/Nav';
import Footer from '../components/Footer';
import DrinkCard from '../components/DrinkCard';


const Menu = () => {
    return (
        <ThemeProvider theme={theme}>
            <Nav/>
            <Box w={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 12, md: 0 }}>
                <DrinkCard/>
            </Box>
            <Footer/>
        </ThemeProvider>
    );
};


export default Menu;
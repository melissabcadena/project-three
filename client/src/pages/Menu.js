import React from 'react';
import { ThemeProvider, Flex, Box, Image, Stack, Heading, Button, Link, Text, Grid} from '@chakra-ui/core';
import theme  from '../theme/theme';

import Nav from '../components/Nav';
import Footer from '../components/Footer';
import DrinkCard from '../components/DrinkCard';


const Menu = () => {
    return (
        <ThemeProvider theme={theme}>
            <Nav/>

            <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                <DrinkCard/>
                <DrinkCard/>
                <DrinkCard/>
            </Grid>

            
            <Footer/>
        </ThemeProvider>
    );
};


export default Menu;
import React from 'react';
import { ThemeProvider, Flex, Box, Image, Stack, Heading, Button, Link, Text, Grid} from '@chakra-ui/core';
import theme  from '../theme/theme';

import DrinkCard from '../components/DrinkCard';


const Menu = () => {
    return (
        <ThemeProvider theme={theme}>

            <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                <DrinkCard/>
                <DrinkCard/>
                <DrinkCard/>
            </Grid>

        </ThemeProvider>
    );
};


export default Menu;
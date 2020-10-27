import React from 'react';
import { ThemeProvider, Flex, Box, Image, Stack, Heading, Button, Link, Text} from '@chakra-ui/core';
import theme  from '../theme/theme';

const History = () => {
    return (
        <ThemeProvider theme={theme}>
            <Nav/>
            <Footer/>
        </ThemeProvider>
    );
};


export default History;
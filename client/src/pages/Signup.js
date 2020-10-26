import React from 'react';
import {ThemeProvider, Input, InputGroup, Stack, Button, FormControl, Divider, Flex, Box, Heading } from '@chakra-ui/core';
import theme  from '../theme/theme';

import Nav from '../components/Nav';
import Footer from '../components/Footer';


const Signup = () => {
    return (
        <ThemeProvider theme={theme}>
            <Nav/>
            <Flex  width="full" align="center" justifyContent="center" minHeight='100vh'>
                <Box textAlign="center">
                    <Heading>Signup</Heading>
                </Box>
                <Box>
                    <form action='submit'>
                        <Stack spacing={3}>
                            <FormControl isRequired>
                                <InputGroup>
                                    <Input type="name" placeholder="Name"/>
                                </InputGroup>
                            </FormControl>
                            <Divider/>
                            <FormControl isRequired>
                                <InputGroup>
                                    <Input type="email" placeholder="Email"/>
                                </InputGroup>
                            </FormControl>
                            <Divider/>
                            <FormControl isRequired>
                                <InputGroup>
                                    <Input type="password" placeholder="Password"/>
                                </InputGroup>
                            </FormControl>
                            <Divider/>
                            <Button type="submit" size="xl">Sign up</Button>
                        </Stack>
                    </form>
                </Box>
            </Flex>
            
            <Footer/>
        </ThemeProvider>
    );
};


export default Signup;
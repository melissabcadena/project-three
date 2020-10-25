import React from 'react';
import {
    Flex,
    Box,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Button,
    ThemeProvider
} from '@chakra-ui/core';
import theme  from '../theme/theme';

import Nav from '../components/Nav';
import Footer from '../components/Footer';


const Login = () => {
    return (
        <ThemeProvider theme={theme}>
            <Nav/>
            <Flex width="full" align="center" justifyContent="center" minHeight='100vh'>
            <Box px={4} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg" textAlign="center">
                <Box textAlign="center">
                    <Heading>Login</Heading>
                </Box>
                <Box my={4} textAlign="left">
                    <form>

                        <FormControl>
                            <FormLabel isRequired>Email</FormLabel>
                            <Input type="email" placeholder="test@test.com" size="lg"/>
                        </FormControl>
                        <FormControl mt={6}>
                            <FormLabel isRequired>Password</FormLabel>
                            <Input type="password" placeholder="*******" size='lg'/>
                        </FormControl>
                        <Button width="full" mt={4} type="submit" size='xl'>
                        Log In
                        </Button>
                    </form>
                </Box>
            </Box>
            </Flex>
            <Footer/>
        </ThemeProvider>

    );
};


export default Login;
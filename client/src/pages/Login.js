import React from 'react';
import {
    Flex,
    Box,
    Heading,
    FormControl,
    FormLabel,
    InputGroup,
    Input,
    Button,
    Stack,
    ThemeProvider
} from '@chakra-ui/core';
import theme  from '../theme/theme';

const Login = () => {
    return (
        <ThemeProvider theme={theme}>
            <Flex width="full" align="center" justifyContent="center" minHeight='100vh'>
                <Box textAlign="left">
                <Heading textAlign="center">Login</Heading>
                    <form action="submit">
                        <Stack spacing= {4}>
                        <FormControl isRequired>
                            <InputGroup>
                                <FormLabel>Email</FormLabel>
                                <Input type="email" placeholder="your email" aria-label="email "size="lg"/>
                            </InputGroup>
                        </FormControl>
                        <FormControl isRequired>
                            <InputGroup>
                                <FormLabel>Password</FormLabel>
                                <Input type="password" placeholder="*******" aria-label="password" size="lg"/>
                            </InputGroup>
                        </FormControl>
                        <Button width="full" type="submit"  size='xl'>
                            Log In
                        </Button>
                        </Stack>
                    </form>
                </Box>
               
            </Flex>
        </ThemeProvider>

    );
};


export default Login;
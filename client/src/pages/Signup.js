import React from 'react';
import { ThemeProvider, Input, InputGroup, Stack, Button, FormControl, Divider, Flex, Box, Heading, FormLabel } from '@chakra-ui/core';
import theme from '../theme/theme';

const Signup = () => {
  return (
    <ThemeProvider theme={theme}>
      <Flex width="full" align="center" justifyContent="center" minHeight='100vh'>
        <Box textAlign="left">
          <Heading textAlign="center">Signup</Heading>
          <form action='submit'>
            <Stack spacing={4}>
              <FormControl isRequired>
                <InputGroup>
                  <FormLabel>First Name</FormLabel>
                  <Input type="first name" placeholder="first name" aria-label="first name " size="lg" />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <InputGroup>
                  <FormLabel>Last Name</FormLabel>
                  <Input type="last name" placeholder="last name" aria-label="last name " size="lg" />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <InputGroup>
                  <FormLabel>Email</FormLabel>
                  <Input type="email" placeholder="your email" aria-label="email" size="lg" />
                </InputGroup>
              </FormControl>
   
              <FormControl isRequired>
                <InputGroup>
                  <FormLabel>Password</FormLabel>
                  <Input type="password" placeholder="*******" aria-label="password" size="lg" />
                </InputGroup>
              </FormControl>
          
              <Button type="submit" size="xl">Sign up</Button>
            </Stack>
          </form>
        </Box>
      </Flex>
    </ThemeProvider>
  );
};


export default Signup;
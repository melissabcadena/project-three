import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";

import { ThemeProvider, Input, InputGroup, Stack, Button, FormControl, Flex, Box, Heading, FormLabel } from '@chakra-ui/core';
import theme from '../theme/theme';

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async event => {
    event.preventDefault();
    console.log({
      email: formState.email, password: formState.password,
      firstName: formState.firstName, lastName: formState.lastName
    })
    const mutationResponse = await addUser({
      variables: {
        email: formState.email, password: formState.password,
        firstName: formState.firstName, lastName: formState.lastName
      }
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = event => {
    const { name, value } = event.target;
    console.log(event.target.type);
    setFormState({
      ...formState,
      [name]: value
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Flex width="full" align="center" justifyContent="center" minHeight='100vh'>
        <Box textAlign="left">
          <Heading textAlign="center">Signup</Heading>
          <form onSubmit={handleFormSubmit} action='submit'>
            <Stack spacing={4}>
              <FormControl isRequired>
                <InputGroup>
                  <FormLabel>First Name</FormLabel>
                  <Input onChange={handleChange} name="firstName" id="firstName" type="first name" placeholder="first name" aria-label="first name " size="lg" py="4"/>
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <InputGroup>
                  <FormLabel>Last Name</FormLabel>
                  <Input onChange={handleChange} name="lastName" id="lastName" type="last name" placeholder="last name" aria-label="last name " size="lg" py="4"/>
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <InputGroup>
                  <FormLabel>Email</FormLabel>
                  <Input onChange={handleChange} name="email" id="email" type="email" placeholder="your email" aria-label="email" size="lg" py="4"/>
                </InputGroup>
              </FormControl>
   
              <FormControl isRequired>
                <InputGroup>
                  <FormLabel>Password</FormLabel>
                  <Input onChange={handleChange} name="password" id="pwd" type="password" placeholder="*******" aria-label="password" size="lg" py="4"/>
                </InputGroup>
              </FormControl>
          
              <Button type="submit" size="xl" 
                borderRadius="8px"
                py="4"
                px="4"
                lineHeight="1" >Sign up</Button>
            </Stack>
          </form>
        </Box>
      </Flex>
    </ThemeProvider>
  );
};


export default Signup;
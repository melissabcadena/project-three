import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";

import 'bootstrap/dist/css/bootstrap.min.css';

import {
    Button,
    Container,
    Row,
    Col,
    Form,
    Card
} from 'react-bootstrap';


function SignupStrap(props) {
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

  return(
    <Container fluid>
      <Row className="justify-content-md-center">
        <Col/>
        <Col>
          <Card style={{width:'18rem'}}>
            <Card.Body>
              <Form onSubmit={handleFormSubmit} action='submit'>
                  <Form.Group controlId="formFirst">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control type="firstname" name="firstName" isRequired onChange={handleChange}/>
                  </Form.Group>

                  <Form.Group controlId="formLast">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control type="lastname" name="lastName" isRequired onChange={handleChange}/>
                  </Form.Group>

                  <Form.Group controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" isRequired onChange={handleChange}/>
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" isRequired onChange={handleChange}/>
                  </Form.Group>

                  <Button variant="dark" type="submit" block>
                    Signup
                  </Button>
              </Form>
            </Card.Body>

          </Card>
        </Col>
        <Col/>
      </Row>
    </Container>
  )
}


// const Signup = () => {
//   const [formState, setFormState] = useState({ email: '', password: '' });
//   const [addUser] = useMutation(ADD_USER);

//   const handleFormSubmit = async event => {
//     event.preventDefault();
//     console.log({
//       email: formState.email, password: formState.password,
//       firstName: formState.firstName, lastName: formState.lastName
//     })
//     const mutationResponse = await addUser({
//       variables: {
//         email: formState.email, password: formState.password,
//         firstName: formState.firstName, lastName: formState.lastName
//       }
//     });
//     const token = mutationResponse.data.addUser.token;
//     Auth.login(token);
//   };

//   const handleChange = event => {
//     const { name, value } = event.target;
//     console.log(event.target.type);
//     setFormState({
//       ...formState,
//       [name]: value
//     });
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <Flex width="full" align="center" justifyContent="center" minHeight='100vh'>
//         <Box textAlign="left">
//           <Heading textAlign="center">Signup</Heading>
//           <form onSubmit={handleFormSubmit} action='submit'>
//             <Stack spacing={4}>
//               <FormControl isRequired>
//                 <InputGroup>
//                   <FormLabel>First Name</FormLabel>
//                   <Input onChange={handleChange} name="firstName" id="firstName" type="first name" placeholder="first name" aria-label="first name " size="lg" py="4"/>
//                 </InputGroup>
//               </FormControl>
//               <FormControl isRequired>
//                 <InputGroup>
//                   <FormLabel>Last Name</FormLabel>
//                   <Input onChange={handleChange} name="lastName" id="lastName" type="last name" placeholder="last name" aria-label="last name " size="lg" py="4"/>
//                 </InputGroup>
//               </FormControl>
//               <FormControl isRequired>
//                 <InputGroup>
//                   <FormLabel>Email</FormLabel>
//                   <Input onChange={handleChange} name="email" id="email" type="email" placeholder="your email" aria-label="email" size="lg" py="4"/>
//                 </InputGroup>
//               </FormControl>
   
//               <FormControl isRequired>
//                 <InputGroup>
//                   <FormLabel>Password</FormLabel>
//                   <Input onChange={handleChange} name="password" id="pwd" type="password" placeholder="*******" aria-label="password" size="lg" py="4"/>
//                 </InputGroup>
//               </FormControl>
          
//               <Button type="submit" size="xl" 
//                 borderRadius="8px"
//                 py="4"
//                 px="4"
//                 lineHeight="1" >Sign up</Button>
//             </Stack>
//           </form>
//         </Box>
//       </Flex>
//     </ThemeProvider>
//   );
// };


export default SignupStrap;
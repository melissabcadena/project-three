import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { LOGIN } from "../utils/mutations"
import Auth from "../utils/auth";

import 'bootstrap/dist/css/bootstrap.min.css';

import {
    Button,
    Container,
    Row,
    Col,
    Form,
    Card
} from 'react-bootstrap';


function LoginStrap(props) {
    const [formState, setFormState] = useState({ email: '', password: '' })
    const [login, { error }] = useMutation(LOGIN);
  
    const handleFormSubmit = async event => {
      event.preventDefault();
      try {
          console.log(formState.email)
          console.log(formState.password)
        const mutationResponse = await login({ variables: { email: formState.email, password: formState.password } })
        const token = mutationResponse.data.login.token;
        Auth.login(token);
      } catch (e) {
        console.log(e)
      }
    };
  
    const handleChange = event => {
      const { name, value } = event.target;
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
                  <Form.Group controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" isRequired onChange={handleChange}/>
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" isRequired onChange={handleChange}/>
                  </Form.Group>
                  {
                    error ? <div>
                        <p className="error-text" >The provided credentials are incorrect</p>
                    </div> : null
                  }   
                  <Button variant="dark" type="submit" block>
                    Login
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

// const Login = () => {

//     const [formState, setFormState] = useState({ email: '', password: '' })
//     const [login, { error }] = useMutation(LOGIN);
  
//     const handleFormSubmit = async event => {
//       event.preventDefault();
//       try {
//           console.log(formState.email)
//           console.log(formState.password)
//         const mutationResponse = await login({ variables: { email: formState.email, password: formState.password } })
//         const token = mutationResponse.data.login.token;
//         Auth.login(token);
//       } catch (e) {
//         console.log(e)
//       }
//     };
  
//     const handleChange = event => {
//       const { name, value } = event.target;
//       setFormState({
//         ...formState,
//         [name]: value
//       });
//     };
    
//     return (
//         <ThemeProvider theme={theme}>
//             <Flex width="full" align="center" justifyContent="center" minHeight='100vh'>
//                 <Box textAlign="left">
//                 <Heading textAlign="center">Login</Heading>
//                     <form action="submit" onSubmit={handleFormSubmit}>
//                         <Stack spacing= {4}>
//                         <FormControl isRequired>
//                             <InputGroup>
//                                 <FormLabel>Email</FormLabel>
//                                 <Input onChange={handleChange} name="email" type="email" placeholder="your email" aria-label="email "size="lg" py="4"/>
//                             </InputGroup>
//                         </FormControl>
//                         <FormControl isRequired>
//                             <InputGroup>
//                                 <FormLabel>Password</FormLabel>
//                                 <Input onChange={handleChange} name="password" type="password" placeholder="*******" aria-label="password" size="lg" py="4"/>
//                             </InputGroup>
//                         </FormControl>
//                         {
//                             error ? <div>
//                             <p className="error-text" >The provided credentials are incorrect</p>
//                           </div> : null
//                         }
//                         <Button width="full" type="submit"  size='xl' 
//                             variantColor="primary"
//                             borderRadius="8px"
//                             py="4"
//                             px="4"
//                             lineHeight="1">
//                             Log In
//                         </Button>
//                         </Stack>
//                     </form>
//                 </Box>
               
//             </Flex>
//         </ThemeProvider>

//     );
// };


export default LoginStrap;
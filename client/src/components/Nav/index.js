import React from 'react';
import Auth from '../../utils/auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'

import {
  Navbar,
  Nav
} from 'react-bootstrap';


function NavStrap(props) {

  if(Auth.loggedIn()){
    return (
      <Navbar bg="dark" variant='dark' expand="lg">
        <Navbar.Brand as={Link} to="/">{'<br> for Java ☕'}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/menu">Menu</Nav.Link>
            <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
            <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
            <Nav.Link as={Link} to="/" onClick={() => Auth.logout()}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }else {
    return (
      <Navbar bg="dark" variant='dark' expand="lg">
        <Navbar.Brand as={Link} to="/">{'<br> for Java ☕'}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/menu">Menu</Nav.Link>
            <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
            <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
  
}

// function Nav() {
//   if (Auth.loggedIn()) {
//     return (
//       <Flex
//         bg='brown.1'
//         w='100%'
//         justifyContent='space-between'
//         alignItems='center'>
//         <Flex flexDirection='row' justifyContent='center' alignItems='center'>
//           <Heading as='h1' pl={3} color='white.2'>
//             {'<br> for Java ☕'}
//           </Heading>
//         </Flex>
//         <Box pr={3}>
//           <Link to='/'>
//             <CLink px={2} color='white.2'>
//               Home
//             </CLink>
//           </Link>
//           <Link px={2} color='white.2' to='/menu'>
//             <CLink px={2} color='white.2'>
//               Menu
//             </CLink>
//           </Link>
//           <Link px={2} color='white.2' to='/order'>
//             <CLink px={2} color='white.2'>
//               Cart
//             </CLink>
//           </Link>
//           <Link px={2} color='white.2' to='/profile'>
//             <CLink px={2} color='white.2'>
//               Profile
//             </CLink>
//           </Link>
//           <Link px={2} color='white.2' to='/' onClick={() => Auth.logout()}>
//             <CLink px={2} color='white.2'>
//               Logout
//             </CLink>
//           </Link>
//         </Box>
//       </Flex>
//     );
//   } else {
//     return (
//       <Flex
//         bg='brown.1'
//         w='100%'
//         justifyContent='space-between'
//         alignItems='center'>
//         <Flex flexDirection='row' justifyContent='center' alignItems='center'>
//           <Heading as='h1' pl={3} color='white.2'>
//             <Link color='white.2' href='/'>
//               {'<br> for Java ☕'}
//             </Link>
//           </Heading>
//         </Flex>
//         <Box pr={3}>
//         <Link to='/'>
//             <CLink px={2} color='white.2'>
//               Home
//             </CLink>
//           </Link>
//           <Link px={2} color='white.2' to='/menu'>
//             <CLink px={2} color='white.2'>
//               Menu
//             </CLink>
//           </Link>
//           <Link px={2} color='white.2' to='/order'>
//             <CLink px={2} color='white.2'>
//               Cart
//             </CLink>
//           </Link>
//           <Link px={2} color='white.2' to='/signup'>
//             <CLink px={2} color='white.2'>
//               Signup
//             </CLink>
//           </Link>
//           <Link px={2} color='white.2' to='/login'>
//             <CLink px={2} color='white.2'>
//               Login
//             </CLink>
//           </Link>
//         </Box>
//       </Flex>
//     );
//   }
// }

export default NavStrap;
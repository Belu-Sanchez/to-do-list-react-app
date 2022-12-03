import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

const NavBar = ( ) => {

  
    return (
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <button onClick={() => changePage("Login")}>Login button</button> */}
            <NavLink to="/Login">Tasks</NavLink>
            <NavLink to="#link">Profile</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
  };
  
export { NavBar };
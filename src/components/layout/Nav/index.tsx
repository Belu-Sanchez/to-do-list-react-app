import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const NavBar= () => {
    return (
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">To-Do list</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Notes</Nav.Link>
            <Nav.Link href="#link">Pomodoro Timer</Nav.Link>
            <NavDropdown title="Daily Plan" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">To do</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              Work in progress
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Done</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
              Today's focus
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
  };
  
export { NavBar };
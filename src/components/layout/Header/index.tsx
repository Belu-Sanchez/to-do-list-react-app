import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import { NavBar } from "../Nav";
import './style.scss'

const Header = () => {
    return (
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="logo">To-Do list</Navbar.Brand>
    
          <NavBar />

      </Container>
    </Navbar>
    );
  };
  
  export { Header };
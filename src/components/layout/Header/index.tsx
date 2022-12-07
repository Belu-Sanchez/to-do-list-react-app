import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import { NavBar } from "../Nav";
import './style.scss'

const Header = () => {
    return (
      <Navbar className="header-style" expand="lg">
      <Container>
        <Navbar.Brand className="logo">To-Do list</Navbar.Brand>
    
          <NavBar />

      </Container>
    </Navbar>
    );
  };
  
  export { Header };
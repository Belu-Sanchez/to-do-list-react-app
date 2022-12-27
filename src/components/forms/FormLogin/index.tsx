import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { NavLink } from 'react-router-dom';
import { Button, Input } from '../index';
import { FC } from "react";

import './style.scss';



const LoginForm = () => {
  return (
    <Container> 
      <Form className="form-login">
        <h3>Please login to your account.</h3>
        <Input id='email' label='Username' name='email' placeholder='Enter email' type='email' controlId='formBasicEmail'/>
        <Input id='password' label='Password' name='password' placeholder='Password' type='password' controlId='formBasicPassword'/>
        
        <NavLink to="/Home"> 
        <Button variant='color' type="submit" >Submit</Button>
        </NavLink>
        <div>
          <Button variant='forgot' type="button">Forgot Password?</Button>
        </div>
        <div>
          <Button variant='color' type="button">Sing Up"</Button>
        </div>
      </Form>
    </Container>
  );
}
  
export { LoginForm };
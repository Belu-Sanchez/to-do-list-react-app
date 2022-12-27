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
        <Button className='color' type="submit" text="Submit"/>
        </NavLink>
        <div>
          <Button className='forgot' type="button" text="Forgot Password?"/>
        </div>
        <div>
          <Button className='color' type="button" text="Sing Up"/>
        </div>
      </Form>
    </Container>
  );
}
  
export { LoginForm };
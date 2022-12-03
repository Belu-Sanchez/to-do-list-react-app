import { FC } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './style.scss'



function Login(){
    return (
        <Container> 
        <Form className="form-login">
        <Form.Group className="mb-3" controlId="formBasicEmail">
       <h3>
       Please login to your account.
          </h3>
          <Form.Label>Username</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
      
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
     <button className="button-submit" type="submit">Submit</button>
     <div>
      <button className="button-forgot">Forgot Password?</button>
      
     </div>
     <div>
     <button className="button-sing-up">Sing Up</button>
      
     </div>
      </Form>
      </Container>
    );
}
  
export { Login };
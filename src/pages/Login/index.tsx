import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { NavLink } from 'react-router-dom';
import { LoginForm } from '../../components/forms'
import './style.scss'



function Login(){
  return (
    <>
     <div className="dashboard-style">
            <div className="wrapper"> 
                <div className="logo-home">To-Do list
                </div>
                <div>
                <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"> 
                <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"/> 
                <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                </svg>
                </div>
            </div>
            <div className="buttons"> 
            <LoginForm />
            </div>
        </div> 
        </>
  );
}
  
export { Login };
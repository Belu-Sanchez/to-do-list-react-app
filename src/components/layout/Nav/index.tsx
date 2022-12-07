import { NavLink } from 'react-router-dom';
import './style.scss'

const NavBar = ( ) => {

  
    return (
      <div className="btn-nav">
        <NavLink to="/Task">Tasks</NavLink>
        <NavLink to="/Category">Category</NavLink>
        <NavLink to="/Profile">Profile</NavLink>
      </div>
    );
  };
  
export { NavBar };
import { NavLink } from 'react-router-dom';
import './style.scss'

const NavBar = ( ) => {
    return (
      <div className="btn-nav">
        <NavLink to="/tasks">Tasks</NavLink>
        <NavLink to="/categories">Categories</NavLink>
        {/* <NavLink to="/profile">Profile</NavLink> */}
        <NavLink to="/users">Users</NavLink>

      </div>
    );
  };
  
export { NavBar };
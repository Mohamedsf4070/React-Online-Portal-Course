import { NavLink } from "react-router-dom";
import "./edit.css";
//import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <div className="main">
    <nav>
    {/*<Link to='/'>Home</Link>
     <Link to='about'>About</Link>*/}
   
      
        <NavLink to='about' className="button1">About</NavLink>
        <NavLink to='users' className="button2">User</NavLink>
        <NavLink to='contact' className="button3">Contact</NavLink>
      </nav>
    </div>
    );
}

export default Navbar;
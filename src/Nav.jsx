import React from 'react'
import { navLinks } from './components/navbar/utils/NavDB'
import { NavLink ,Link} from 'react-router-dom';

const Nav = () => {
  return (
 <div>
  <Link to='/Dashboard'>Dashboard</Link>
 </div>
  );
}

export default Nav
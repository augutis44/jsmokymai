import './NavLinks.css';
import logo from '../../assets/logo.svg'

import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <>
      <div className='brand'>
        <NavLink to='/'>
          <img src={logo} />
        </NavLink>
      </div>

      <ul className='nav-links'>
        <li>
          <NavLink to='/'>
            <div className='nav-link-text'>
              Home
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to='/about-us'>
            About us
          </NavLink>
        </li>
        <li>
          <NavLink to='/booking'>
            Bookings
          </NavLink>
        </li>
        <li>
          <NavLink to='/what-to-do'>
            What to do?
          </NavLink>
        </li>
        <li>
          <NavLink to='/contacts'>
            Contacs
          </NavLink>
        </li>
      </ul>
    </>
  )
}

export default NavLinks
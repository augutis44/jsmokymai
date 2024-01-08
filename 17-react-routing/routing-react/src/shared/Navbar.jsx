import { NavLink } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="brand">
        <NavLink to='/'>Statytojas A</NavLink>
      </div>

      <ul className="links">
        <li>
          <NavLink to='/'>Pradzia</NavLink>
        </li>
        <li>
          <NavLink to='/services'>Paslaugos</NavLink>
        </li>
        <li>
          <NavLink to='/about-us'>Apie mus</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
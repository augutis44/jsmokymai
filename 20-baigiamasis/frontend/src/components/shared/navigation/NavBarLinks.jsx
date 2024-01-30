import { FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const NavBarLinks = () => {
  return (
    <div className="text-white text-xl flex justify-between items-center">
      <NavLink to='/'>
        <FaHome className="text-3xl"/>
      </NavLink>

      {/* <ul>
        <li className="inline-block list-none pl-5">
          <NavLink>
            <div>
              Log out
            </div>
          </NavLink>
        </li>
      </ul> */}
    </div>
  )
}

export default NavBarLinks
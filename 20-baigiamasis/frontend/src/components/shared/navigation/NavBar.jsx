import { FaHome } from "react-icons/fa";
import NavBarLinks from "./NavBarLinks";

const NavBar = () => {
    return (
        <div className="bg-purple-600 text-white flex justify-between items-center px-5 py-5">
            <div>
                <FaHome className="text-xl"/>
            </div>
            <div>
                <NavBarLinks />
            </div>
        </div>
    )
}

export default NavBar
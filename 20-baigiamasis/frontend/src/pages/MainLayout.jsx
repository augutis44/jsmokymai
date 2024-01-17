import { Outlet } from "react-router-dom";
import NavBar from "../components/shared/navigation/NavBar";

const MainLayout = () => {
    return (
        <>
            <NavBar />
            <div>
                <Outlet />
            </div>
        </>
    )
}

export default MainLayout
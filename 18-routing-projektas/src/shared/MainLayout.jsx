import Footer from "./footer/Footer";
import Navbar from "./navigation/Navbar";

import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <div>
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default MainLayout
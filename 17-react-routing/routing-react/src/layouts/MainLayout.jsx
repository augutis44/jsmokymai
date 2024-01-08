import { Outlet } from "react-router-dom";

import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <div className="page-content">
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default MainLayout
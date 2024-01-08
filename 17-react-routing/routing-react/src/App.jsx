import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import ServicePage from "./pages/ServicePage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        {/* <Route path="/sistema" element={<DashboardLayout />}></Route> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App

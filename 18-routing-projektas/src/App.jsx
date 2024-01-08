import Landing from "./components/landingPage/Landing";
import AboutUs from "./components/about-us/AboutUs";
import Bookings from "./components/bookings/Bookings";
import WhatToDo from "./components/what-to-do/WhatToDo";
import Contacts from "./components/contacts/Contacts";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./shared/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route path='/' element={<Landing />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/booking' element={<Bookings />} />
          <Route path='/what-to-do' element={<WhatToDo />} />
          <Route path='/contacts' element={<Contacts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

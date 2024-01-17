import AddEmployee from "./pages/AddEmployee";
import Home from "./pages/Home";
import { Routes, Route } from 'react-router-dom';
import MainLayout from "./pages/MainLayout";
import EditEmployee from "./pages/EditEmployee";

function App() {

  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/addEmployee" element={<AddEmployee />} />
        <Route path="/editEmployee/:id" element={<EditEmployee />} />
      </Route>
    </Routes>
  )
}

export default App

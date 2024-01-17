import AddEmployee from "./pages/AddEmployee";
import Home from "./pages/Home";
import { Routes, Route } from 'react-router-dom';
import MainLayout from "./pages/MainLayout";
import DeleteModal from "./components/home/DeleteModal";

function App() {

  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/addEmployee" element={<AddEmployee />} />
      </Route>
    </Routes>
  )
}

export default App

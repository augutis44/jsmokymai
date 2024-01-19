import AddEmpForm from "../components/addEmployee/AddEmpForm";
import { NavLink } from "react-router-dom";
import { FaCircleArrowLeft } from "react-icons/fa6";

const AddEmployee = () => {


  return (
    <div className="my-6 border-solid border-2 m-auto w-[800px] shadow-lg shadow-purple-100 font-font-regular">
      <div className="bg-purple-900 py-3 px-5 text-white text-2xl flex justify-between items-center">
        <p>Add New Employee</p>

        <NavLink to='/'>
          <div className="bg-green-600 hover:bg-green-700 py-2 px-4 border-2 border-green-800 rounded-md text-lg text-white flex gap-2 items-center">
            <FaCircleArrowLeft className="text-white"/> Back
          </div>
        </NavLink>
      </div>

      <div className="px-12 py-5">
        <AddEmpForm />
      </div>
    </div>
  )
}

export default AddEmployee
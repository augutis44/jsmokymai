import { NavLink } from "react-router-dom";
import { FaCirclePlus } from "react-icons/fa6";
import TableContent from "./TableContent";
import SearchBar from "../searchBar/SearchBar";
import { useState } from "react";

const HomeTable = ({ employees, fetchEmployees }) => {
    const [results, setResults] = useState(employees);

    return (

        <div className="my-6 border-solid border-2 m-auto w-[1200px] shadow-lg shadow-purple-100 font-font-regular rounded-md overflow-hidden">
            <div className="bg-purple-900 px-5 py-3 flex justify-between items-center">
                <p className="text-white text-2xl">Manage Employees</p>

                <SearchBar setResults={setResults}/>

                <NavLink to='/addEmployee'>
                    <div className="bg-green-600 hover:bg-green-700 py-2 px-4 border-2 border-green-800 rounded-md text-lg text-white flex items-center gap-2">
                        <FaCirclePlus className="text-white" /> Add employee
                    </div>
                </NavLink>
            </div>
            <div className="p-5 h-[75vh] overflow-y-scroll">
                <table className="border w-full table-auto">
                    <thead>
                        <tr className="text-left border-b-4 bg-gray-100">
                            <th className="py-2 pl-4">First Name</th>
                            <th className="py-2">Last Name</th>
                            <th className="py-2">Email</th>
                            <th className="py-2">Departament</th>
                            <th className="py-2">Location</th>
                            <th className="py-2 pr-4">Actions</th>
                        </tr>
                    </thead>
                    <TableContent employees={results} fetchEmployees={fetchEmployees} />
                </table >
            </div >
        </div >
    )
}

export default HomeTable
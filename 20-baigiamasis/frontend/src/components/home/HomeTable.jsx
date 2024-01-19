import { NavLink } from "react-router-dom";
import { FaCirclePlus } from "react-icons/fa6";
import TableContent from "./TableContent";
import SearchBar from "../searchBar/SearchBar";
import { useEffect, useState } from "react";
import TableHeaders from "./TableHeaders"
import TableHeadresSorting from "./TableHeadresSorting"

const HomeTable = ({
    employees,
    fetchEmployees,
    setFilter,
    filter,
    searchValue,
    setSearchValue
}) => {

    return (

        <div className="my-6 border-solid border-2 m-auto w-[1200px] shadow-lg shadow-purple-100 font-font-regular rounded-md overflow-hidden">
            <div className="bg-purple-900 px-5 py-3 flex justify-between items-center">
                <p className="text-white text-2xl">Manage Employees</p>

                <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />

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
                            {/* sukurti kiekvienam th komponenta su savo state order, kad paspaudus pasikeistu i 1 arba -1. pradzioj bus nieko
                            reikia sitam komponente funkcijos, kuri refreintu kitu komponentu state (headeriu) */}
                            <TableHeadresSorting styles="pl-4" setFilter={setFilter} filter={filter} name="firstName">
                                First Name
                            </TableHeadresSorting>
                            <TableHeadresSorting setFilter={setFilter} filter={filter} name="lastName">
                                Last Name
                            </TableHeadresSorting>
                            <TableHeadresSorting setFilter={setFilter} filter={filter} name="email">
                                Email
                            </TableHeadresSorting>
                            <TableHeadresSorting setFilter={setFilter} filter={filter} name="departament">
                                Departament
                            </TableHeadresSorting>
                            <TableHeadresSorting setFilter={setFilter} filter={filter} name="location">
                                Location
                            </TableHeadresSorting>
                            <TableHeaders styles="pr-4">
                                Actions
                            </TableHeaders>
                        </tr>
                    </thead>
                    <TableContent employees={employees} fetchEmployees={fetchEmployees} />
                </table >
            </div >
        </div >
    )
}

export default HomeTable
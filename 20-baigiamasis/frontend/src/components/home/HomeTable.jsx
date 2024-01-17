import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { IoMdEye } from "react-icons/io";

const HomeTable = ({ employees }) => {

    return (

        <div className="my-12 border-solid border-2 m-auto w-[1200px] shadow-lg shadow-purple-100">
            <div className="bg-purple-600 p-5 text-white text-xl">
                <p>Manage Employees</p>
            </div>
            <div className="p-5">
                <table className="border w-full table-auto">
                    <thead>
                        <tr className="text-left border-b-4">
                            <th className="py-4 pl-4">First Name</th>
                            <th className="py-4">Last Name</th>
                            <th className="py-4">Email</th>
                            <th className="py-4">Address</th>
                            <th className="py-4">Phone</th>
                            <th className="py-4 pr-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee, i) =>
                            <tr key={i} className="border-b-2 hover:bg-purple-50">
                                <td className="py-4 pl-4">{employee.firstName}</td>
                                <td className="py-4">{employee.lastName}</td>
                                <td className="py-4">{employee.email}</td>
                                <td className="py-4">{employee.address}</td>
                                <td className="py-4">{employee.phone}</td>
                                <td className="py-4 pr-4 flex gap-2">
                                    <IoMdEye />
                                    <MdEdit />
                                    <MdDelete />
                                </td>
                            </tr>
                        )}
                    </tbody >
                </table >
            </div >
        </div >
    )
}

export default HomeTable
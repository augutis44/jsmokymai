import { MdEdit } from "react-icons/md";
import DeleteModal from "./DeleteModal";
import ViewModal from "./ViewModal";
import { Link } from "react-router-dom";

const TableContent = ({ employees, fetchEmployees }) => {
    return (
        <tbody>
            {
                employees.map((employee, i) =>
                    <tr key={i} className="border-b-2 hover:bg-purple-50">
                        <td className="py-4 pl-4">{employee.firstName}</td>
                        <td className="py-4">{employee.lastName}</td>
                        <td className="py-4">{employee.email}</td>
                        <td className="py-4">{employee.departament}</td>
                        <td className="py-4">{employee.location}</td>
                        <td className="py-4 flex gap-3">
                            <ViewModal employeeId={employee._id} />
                            <Link to={`/editEmployee/${employee._id}`} >
                                <MdEdit className="text-xl text-yellow-500" />
                            </Link>
                            <DeleteModal employeeId={employee._id} fetchEmployees={fetchEmployees} />
                        </td>
                    </tr>
                )
            }
        </tbody>
    )
}

export default TableContent
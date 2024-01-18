
import TableContent from "./TableContent";

const HomeTable = ({ employees, fetchEmployees }) => {

    return (

        <div className="my-12 border-solid border-2 m-auto w-[1200px] shadow-lg shadow-purple-100 font-font-regular">
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
                            <th className="py-4">Departament</th>
                            <th className="py-4">Location</th>
                            <th className="py-4 pr-4">Actions</th>
                        </tr>
                    </thead>
                    <TableContent employees={employees} fetchEmployees={fetchEmployees} />
                </table >
            </div >
        </div >
    )
}

export default HomeTable
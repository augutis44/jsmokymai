import { IoMdEye } from "react-icons/io";
import axios from "axios";
import { useState, useEffect } from "react";

const ViewModal = ({ employeeId }) => {

    const [employee, setEmployee] = useState({});
    const [loading, setLoading] = useState(false);
    const [viewModalOpen, setViewModalOpen] = useState(false);

    const closeModal = () => {
        setViewModalOpen(false);
    }

    useEffect(() => {
        setLoading(true);
        axios
            .get(`http://localhost:5555/employees/${employeeId}`)
            .then((response) => {
                setEmployee(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    return (
        <>
            <button onClick={() => setViewModalOpen(true)}>
                <IoMdEye className="text-xl text-blue-600" />
            </button>

            {viewModalOpen &&
                <div className="fixed z-10 overflow-auto pt-[10%] top-0 left-0 w-full h-full bg-slate-200 bg-opacity-50">
                    <div className="bg-white m-auto p-3 w-[650px] shadow-xl shadow-slate-300 rounded-md border-2 border-slate-700">

                        <button
                            onClick={closeModal}
                            className="pb-2 px-2 text-2xl float-end font-bold text-purple-600 hover:text-purple-700"
                        >
                            x
                        </button>

                        <div className="p-6">
                            <div className="flex items-center">
                                <img
                                    src={`/images/${employee.image}`}
                                    alt="employee photo"
                                    className="w-[150px] h-[150px] border rounded-full object-cover"
                                />

                                <div className="pl-16 text-3xl">
                                    <div>{employee.firstName} {employee.lastName}</div>
                                    <div>{employee.departament}, {employee.location}</div>
                                </div>
                            </div>

                            <div className="pt-5 text-xl">
                                <div>Email: {employee.email}</div>
                                <div>Adress: {employee.address}</div>
                                <div>Phone Number: {employee.phone}</div>
                            </div>
                        </div>


                    </div>
                </div>
            }
        </>
    )
}

export default ViewModal
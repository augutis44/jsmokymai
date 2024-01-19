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
        if (viewModalOpen) {
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
        }
    }, [viewModalOpen]);

    return (
        <>
            <button onClick={() => setViewModalOpen(true)}>
                <IoMdEye className="text-xl text-blue-600" />
            </button>

            {viewModalOpen &&
                <div className="fixed z-10 overflow-auto pt-[10%] top-0 left-0 w-full h-full bg-slate-200 bg-opacity-50">
                    <div className="bg-white m-auto p-3 w-[700px] shadow-xl shadow-slate-300 rounded-md">

                        <button
                            onClick={closeModal}
                            className="pb-2 px-2 text-2xl float-end font-bold text-purple-600 hover:text-purple-700"
                        >
                            x
                        </button>

                        <div className="p-6 flex items-center">
                            <img
                                src={`/images/${employee.image}`}
                                alt="employee photo"
                                className="w-[200px] h-[250px] border-2 border-gray-300 object-cover rounded-lg"
                            />

                            <div className="pl-12">
                                <div className="text-4xl">
                                    <div>{employee.firstName} {employee.lastName}</div>
                                    <div>{employee.departament}, {employee.location}</div>
                                </div>
                                <div className="pt-5 text-xl">
                                    <div><span className="font-bold">Email:</span> {employee.email}</div>
                                    <div><span className="font-bold">Adress:</span> {employee.address}</div>
                                    <div><span className="font-bold">Phone Number:</span> {employee.phone}</div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            }
        </>
    )
}

export default ViewModal
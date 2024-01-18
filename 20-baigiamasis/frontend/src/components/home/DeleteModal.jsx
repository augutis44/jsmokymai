import { useState } from "react";
import axios from "axios";
import { MdDelete } from "react-icons/md";

const DeleteModal = ({ employeeId, fetchEmployees }) => {
    const [loading, setLoading] = useState(false);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);

    const onClose = () => {
        setDeleteModalOpen(false);
    }

    const deleteHandler = () => {
        setLoading(true);

        axios
            .delete(`http://localhost:5555/employees/${employeeId}`)
            .then(() => {
                setLoading(false);
                onClose();
                fetchEmployees();
            })
            .catch((error) => {
                setLoading(false);
                alert('An error happened, please check Console');
                console.log(error);
                onClose();
            });
    }

    return (
        <>
            <button onClick={() => setDeleteModalOpen(true)}>
                <MdDelete className="text-xl text-red-600" />
            </button>

            {deleteModalOpen &&
                <div className="fixed z-10 overflow-auto pt-[10%] top-0 left-0 w-full h-full bg-slate-200 bg-opacity-50">
                    <div className="bg-white m-auto p-9 border w-[400px] shadow-xl shadow-slate-300 rounded-md">
                        <div className="text-2xl">Delete Confirmation</div>
                        <div className="text-xl pt-4 pb-6">Are you sure you want to delete?</div>
                        <div>
                            <button
                                onClick={onClose}
                                className=" py-2 px-4 border-2 border-slate-500 hover:bg-slate-200 rounded-md"
                            >
                                CANCEL
                            </button>
                            <button
                                onClick={deleteHandler}
                                className="bg-red-500 hover:bg-red-600 py-2 px-4 border-2 border-red-700 rounded-md ml-4 text-white"
                            >
                                OK
                            </button>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default DeleteModal
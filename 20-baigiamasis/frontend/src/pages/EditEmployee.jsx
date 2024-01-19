import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import { FaCircleArrowLeft } from "react-icons/fa6";


const EditEmployee = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [departament, setDepartament] = useState('');
    const [location, setLocation] = useState('');
    const [image, setImage] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        axios
            .get(`http://localhost:5555/employees/${id}`)
            .then((response) => {
                const { data } = response;
                setFirstName(data.firstName);
                setLastName(data.lastName);
                setEmail(data.email);
                setAddress(data.address);
                setPhone(data.phone);
                setDepartament(data.departament);
                setImage(data.image);
                setLocation(data.location);

                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                alert('An error happened, please check Console');
                console.log(error);
            });
    }, []);

    const submitHandler = (event) => {
        event.preventDefault();

        const data = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            address: address,
            phone: phone,
            departament: departament,
            location: location,
            image: image
        }

        setLoading(true);

        axios
            .put(`http://localhost:5555/employees/${id}`, data)
            .then(() => {
                setLoading(false);
                navigate('/');
            })
            .catch((error) => {
                setLoading(false);
                alert('An error happened, please check Console');
                console.log(error);
            });
    }

    return (
        <div className="my-6 border-solid border-2 m-auto w-[800px] shadow-lg shadow-purple-100">
            <div className="bg-purple-900 px-5 py-3 text-white text-2xl flex justify-between items-center">
                <p>Edit Employee</p>

                <NavLink to='/'>
                    <div className="bg-green-600 hover:bg-green-700 py-2 px-4 border-2 border-green-800 rounded-md text-lg text-white flex gap-2 items-center">
                        <FaCircleArrowLeft className="text-white" /> Back
                    </div>
                </NavLink>
            </div>

            <div className="px-12 py-5">
                <form action="#" onSubmit={submitHandler} className="text-xl">
                    <div className="pb-5 flex justify-between">
                        <label htmlFor="firstNameInput" className="">First Name</label>
                        <input
                            type="text"
                            id="firstNameInput"
                            className="border-2 border-slate-300 w-[450px] box-border p-2 rounded-sm"
                            value={firstName}
                            onChange={(event) => setFirstName(event.target.value)}
                        />
                    </div>

                    <div className="pb-5 flex justify-between">
                        <label htmlFor="lastNameInput" className="">Last Name</label>
                        <input
                            type="text"
                            id="lastNameInput"
                            className="border-2 border-slate-300 w-[450px] box-border p-2 rounded-sm"
                            value={lastName}
                            onChange={(event) => setLastName(event.target.value)}
                        />
                    </div>

                    <div className="pb-5 flex justify-between">
                        <label htmlFor="emailInput" className="">Email</label>
                        <input
                            type="text"
                            id="emailInput"
                            className="border-2 border-slate-300 w-[450px] box-border p-2 rounded-sm"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>

                    <div className="pb-5 flex justify-between">
                        <label htmlFor="addressInput" className="">Address</label>
                        <input
                            type="text"
                            id="addressInput"
                            className="border-2 border-slate-300 w-[450px] box-border p-2 rounded-sm"
                            value={address}
                            onChange={(event) => setAddress(event.target.value)}
                        />
                    </div>

                    <div className="pb-5 flex justify-between">
                        <label htmlFor="phoneNumberInput" className="">Phone Number</label>
                        <input
                            type="text"
                            id="phoneNumberInput"
                            className="border-2 border-slate-300 w-[450px] box-border p-2 rounded-sm"
                            value={phone}
                            onChange={(event) => setPhone(event.target.value)}
                        />
                    </div>

                    <div className="pb-5 flex justify-between">
                        <label htmlFor="departamentInput" className="">Departament</label>
                        <input
                            type="text"
                            id="departamentInput"
                            className="border-2 border-slate-300 w-[450px] box-border p-2 rounded-sm"
                            value={departament}
                            onChange={(event) => setDepartament(event.target.value)}
                        />
                    </div>

                    <div className="pb-5 flex justify-between">
                        <label htmlFor="locationInput" className="">Location</label>
                        <input
                            type="text"
                            id="locationInput"
                            className="border-2 border-slate-300 w-[450px] box-border p-2 rounded-sm"
                            value={location}
                            onChange={(event) => setLocation(event.target.value)}
                        />
                    </div>

                    <div className="pb-5 flex justify-between">
                        <label htmlFor="imageInput" className="">Image</label>
                        <input
                            type="file"
                            id="imageInput"
                            className="w-[450px] rounded-sm"
                            onChange={(event) => setImage(event.target.value)}
                        />
                    </div>

                    <div className="flex justify-end">
                        <button type="submit" className="bg-green-500 py-2 px-4 border rounded-md text-white"> SUBMIT </button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default EditEmployee
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddEmpForm = () => {
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

    const submitHandler = () => {
        console.log("New employee added");

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
            .post(`http://localhost:5555/employee`, data)
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
        <form action="#" onSubmit={submitHandler} className="text-xl">
            <div className="pb-5 flex justify-between">
                <label htmlFor="firstNameInput" className="">First Name</label>
                <input
                    type="text"
                    id="firstNameInput"
                    className="border w-[450px] box-border p-2 rounded-sm"
                    onChange={(event) => setFirstName(event.target.value)}
                />
            </div>

            <div className="pb-5 flex justify-between">
                <label htmlFor="lastNameInput" className="">Last Name</label>
                <input
                    type="text"
                    id="lastNameInput"
                    className="border w-[450px] box-border p-2 rounded-sm"
                    onChange={(event) => setLastName(event.target.value)}
                />
            </div>

            <div className="pb-5 flex justify-between">
                <label htmlFor="emailInput" className="">Email</label>
                <input
                    type="text"
                    id="emailInput"
                    className="border w-[450px] box-border p-2 rounded-sm"
                    onChange={(event) => setEmail(event.target.value)}
                />
            </div>

            <div className="pb-5 flex justify-between">
                <label htmlFor="addressInput" className="">Address</label>
                <input
                    type="text"
                    id="addressInput"
                    className="border w-[450px] box-border p-2 rounded-sm"
                    onChange={(event) => setAddress(event.target.value)}
                />
            </div>

            <div className="pb-5 flex justify-between">
                <label htmlFor="phoneNumberInput" className="">Phone Number</label>
                <input
                    type="number"
                    id="phoneNumberInput"
                    className="border w-[450px] box-border p-2 rounded-sm"
                    onChange={(event) => setPhone(event.target.value)}
                />
            </div>

            <div className="pb-5 flex justify-between">
                <label htmlFor="departamentInput" className="">Departament</label>
                <input
                    type="text"
                    id="departamentInput"
                    className="border w-[450px] box-border p-2 rounded-sm"
                    onChange={(event) => setDepartament(event.target.value)}
                />
            </div>

            <div className="pb-5 flex justify-between">
                <label htmlFor="locationInput" className="">Location</label>
                <input
                    type="text"
                    id="locationInput"
                    className="border w-[450px] box-border p-2 rounded-sm"
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
                <button type="submit" className="bg-green-400 py-2 px-4 border rounded-md"> SUBMIT </button>
            </div>
        </form>
    )
}

export default AddEmpForm
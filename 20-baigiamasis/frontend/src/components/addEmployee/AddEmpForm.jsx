import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// const defaultForm = {
//     firstName: '',
//     lastName: '',
//     // ....
// }

// const initialValues = {
//     firstName: '',
//     lastName: '',
//     email: '',
//     address: '',
//     phone: '',
//     departament: '',
//     location: '',
//     image: ''
// }

const AddEmpForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [departament, setDepartament] = useState('');
    const [location, setLocation] = useState('');
    const [image, setImage] = useState(null);
    // const [form, setForm] = useState(defaultForm);
    const [loading, setLoading] = useState(false);
    // const [formValues, setFormValues] = useState(initialValues);
    // const [formErrors, setFormErrors] = useState({});
    // const [isSubmit, setIsSubmit] = useState(false);

    const navigate = useNavigate();

    // const changeHandler = (event) => {
    //     const { name, value } = event.target;
    //     setFormValues({ ...formValues, [name]: value });
    // }

    // const changeImageHandler = (event) => {
    //     const { name, files } = event.target;
    //     setFormValues({ ...formValues, [name]: files[0] });
    // }

    // const validate = (values) => {
    //     const errors = {}
    //     const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    //     if (!values.firstName) {
    //         errors.firstName = 'First name is required!'
    //     }
    //     if (!values.lastName) {
    //         errors.lastName = 'Last name is required!'
    //     }
    //     if (!values.email) {
    //         errors.email = 'Email is required!'
    //     } else if (!emailRegex.test(values.email)) {
    //         errors.email = 'This is not a valid email format!'
    //     }
    //     if (!values.address) {
    //         errors.address = 'Phone number is required!'
    //     }
    //     if (!values.phone) {
    //         errors.phone = 'Phone number is required!'
    //     }
    //     if (!values.departament) {
    //         errors.departament = 'Departament is required!'
    //     }
    //     if (!values.location) {
    //         errors.location = 'Location is required!'
    //     }
    //     if (!values.image) {
    //         errors.image = 'Image is required!'
    //     }

    //     return errors;
    // }

    const submitHandler = (event) => {
        event.preventDefault();

        // setFormErrors(validate(formValues));

        // setIsSubmit(true);

        // console.log(formValues);

        const formData = new FormData();
        // formData.append('firstName', formValues.firstName);
        // formData.append('lastName', formValues.lastName);
        // formData.append('email', formValues.email);
        // formData.append('address', formValues.address);
        // formData.append('phone', formValues.phone);
        // formData.append('departament', formValues.departament);
        // formData.append('location', formValues.location);
        // formData.append('image', formValues.image);

        formData.append('firstName', firstName);
        formData.append('lastName', lastName);
        formData.append('email', email);
        formData.append('address', address);
        formData.append('phone', phone);
        formData.append('departament', departament);
        formData.append('location', location);
        formData.append('image', image);

        setLoading(true);
        axios
            .post(`http://localhost:5555/employee`,
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            )
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

    // useEffect(() => {
    //     console.log(formErrors);

    //     if (Object.keys(formErrors).length === 0 && isSubmit) {
    //         console.log(formValues);
    //     }
    // }, [])

    return (
        <>
            {/* <pre>{JSON.stringify(formValues, undefined, 2)}</pre> */}
            <form onSubmit={submitHandler} className="text-xl">
                <div className="pb-5 flex justify-between">
                    <label htmlFor="firstNameInput" className="">First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        id="firstNameInput"
                        className="border-2 border-slate-300 w-[450px] box-border p-2 rounded-sm"
                        // value={formValues.firstName}
                        // onChange={changeHandler}
                        onChange={(event) => setFirstName(event.target.value)}

                    />
                </div>
                {/* <p className="text-red-500 text-end">{formErrors.firstName}</p> */}

                <div className="pb-5 flex justify-between">
                    <label htmlFor="lastNameInput" className="">Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        id="lastNameInput"
                        className="border-2 border-slate-300 w-[450px] box-border p-2 rounded-sm"
                        // value={formValues.lastName}
                        // onChange={changeHandler}
                        onChange={(event) => setLastName(event.target.value)}

                    />
                </div>
                {/* <p className="text-red-500 text-end">{formErrors.lastName}</p> */}

                <div className="pb-5 flex justify-between">
                    <label htmlFor="emailInput" className="">Email</label>
                    <input
                        type="text"
                        name="email"
                        id="emailInput"
                        className="border-2 border-slate-300 w-[450px] box-border p-2 rounded-sm"
                        // value={formValues.email}
                        // onChange={changeHandler}
                        onChange={(event) => setEmail(event.target.value)}

                    />
                </div>
                {/* <p className="text-red-500 text-end">{formErrors.email}</p> */}

                <div className="pb-5 flex justify-between">
                    <label htmlFor="addressInput" className="">Address</label>
                    <input
                        type="text"
                        name="address"
                        id="addressInput"
                        className="border-2 border-slate-300 w-[450px] box-border p-2 rounded-sm"
                        // value={formValues.address}
                        // onChange={changeHandler}
                        onChange={(event) => setAddress(event.target.value)}

                    />
                </div>
                {/* <p className="text-red-500 text-end">{formErrors.address}</p> */}

                <div className="pb-5 flex justify-between">
                    <label htmlFor="phoneNumberInput" className="">Phone Number</label>
                    <input
                        type="text"
                        name="phone"
                        id="phoneNumberInput"
                        className="border-2 border-slate-300 w-[450px] box-border p-2 rounded-sm"
                        // value={formValues.phone}
                        // onChange={changeHandler}
                        onChange={(event) => setPhone(event.target.value)}

                    />
                </div>
                {/* <p className="text-red-500 text-end">{formErrors.phone}</p> */}

                <div className="pb-5 flex justify-between">
                    <label htmlFor="departamentInput" className="">Departament</label>
                    <input
                        type="text"
                        name="departament"
                        id="departamentInput"
                        className="border-2 border-slate-300 w-[450px] box-border p-2 rounded-sm"
                        // value={formValues.departament}
                        // onChange={changeHandler}
                        onChange={(event) => setDepartament(event.target.value)}
                    />
                </div>
                {/* <p className="text-red-500 text-end">{formErrors.departament}</p> */}

                <div className="pb-5 flex justify-between">
                    <label htmlFor="locationInput" className="">Location</label>
                    <input
                        type="text"
                        name="location"
                        id="locationInput"
                        className="border-2 border-slate-300 w-[450px] box-border p-2 rounded-sm"
                        // value={formValues.location}
                        // onChange={changeHandler}
                        onChange={(event) => setLocation(event.target.value)}
                    />
                </div>
                {/* <p className="text-red-500 text-end">{formErrors.location}</p> */}

                <div className="pb-5 flex justify-between">
                    <label htmlFor="imageInput" className="">Image</label>
                    <input
                        type="file"
                        name="image"
                        id="imageInput"
                        className="w-[450px] rounded-sm"
                        // encType="multipart/form-data"
                        // value={formValues.image}
                        // onChange={changeImageHandler}
                        onChange={(event) => setImage(event.target.files[0])}

                    />
                </div>
                {/* <p className="text-red-500 text-end">{formErrors.image}</p> */}

                <div className="flex justify-end">
                    <button type="submit" className="bg-green-600 hover:bg-green-700 border-2 border-green-800 py-2 px-4 rounded-md text-white"> Submit </button>
                </div>
            </form>
        </>
    )
}

export default AddEmpForm
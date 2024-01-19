import express from "express";
import { Employee } from "../models/employeeModel.js";
import multer from "multer";

const router = express.Router();

//For image uploading
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../frontend/public/images')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now();
        cb(null, uniqueSuffix + file.originalname)
    }
})

const upload = multer({ storage: storage })

//Create new employee
router.post('/', upload.single("image"), async (req, res) => {
    console.log(req);

    const imageName = req.file.filename;

    try {
        const newEmployeeObj = {
            id: req.body.id,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            address: req.body.address,
            phone: req.body.phone,
            departament: req.body.departament,
            location: req.body.location,
            image: imageName,
            dateOfJoining: req.body.dateOfJoining
        }

        const newEmployee = await Employee.create(newEmployeeObj);

        return res.status(201).send(newEmployee);

    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

//Get all employees
router.post('/get', async (req, res) => {
    try {

        const { filter, searchValue } = req.body;

        const { fieldName = 'firstName', order = 1 } = filter;

        const allEmployees = await Employee
            .find(
                {
                    $or: [{ 'firstName': { $regex: '^' + searchValue, $options: 'i' } },
                    { 'lastName': { $regex: '^' + searchValue, $options: 'i' } }]
                }
            )
            .sort({ [fieldName]: order })

        // .filter((employee) => {
        //     const firstNameMatch = employee &&
        //         employee.firstName &&
        //         employee.firstName.toLowerCase().startsWith(searchValue);

        //     const lastNameMatch = employee &&
        //         employee.lastName &&
        //         employee.lastName.toLowerCase().startsWith(searchValue);

        //     return firstNameMatch || lastNameMatch
        // });

        return res.status(200).json(allEmployees);

    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

//reikia requeste objekto filter. jame butu feald name ir orderis (asc, desc). .find padarytu find ir sortinima

//Get employee by ID
router.get('/:id', async (req, res) => {
    try {

        const { id } = req.params;

        const employee = await Employee.findById(id);

        return res.status(200).json(employee);

    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

//Update employee
router.put('/:id', async (req, res) => {
    try {

        const { id } = req.params;

        const result = await Employee.findByIdAndUpdate(id, req.body);

        if (!result) {
            return response.status(404).json({ message: "Employee not found" })
        }

        return res.status(200).send({ message: "Employee updated" })

    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

//Delete employee
router.delete('/:id', async (req, res) => {
    try {

        const { id } = req.params;

        const result = await Employee.findByIdAndDelete(id);

        if (!result) {
            return response.status(404).json({ message: "Employee not found" })
        }

        return res.status(200).send({ message: "Employee deleted" })

    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

export default router;
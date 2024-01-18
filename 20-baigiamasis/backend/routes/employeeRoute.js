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

    const imageName = req.file.filename

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
router.get('/', async (req, res) => {
    try {
        const alleEployees = await Employee.find({});

        return res.status(200).json(alleEployees);

    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

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
import express from "express";
import { Employee } from "../models/employeeModel.js";

const router = express.Router();

router.post('/', async (req, res) => {
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
            image: req.body.image,
            dateOfJoining: req.body.dateOfJoining
        }

        const newEmployee = await Employee.create(newEmployeeObj);

        return res.status(201).send(newEmployee);

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const alleEployees = await Employee.find({});

        return res.status(200).json(alleEployees);

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {

        const { id } = req.params;

        const employee = await Employee.findById(id);

        return res.status(200).json(employee);

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

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
        response.status(500).send({ message: error.message });
    }
});

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
        response.status(500).send({ message: error.message });
    }
});

export default router;
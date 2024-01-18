import mongoose from "mongoose";

const employeeSchema = mongoose.Schema(
    {
        employeeId: String,
        firstName: String,
        lastName: String,
        email: String,
        address: String,
        phone: String,
        departament :String,
        location: String,
        image: String,
    }
);

export const Employee = mongoose.model('employee', employeeSchema);
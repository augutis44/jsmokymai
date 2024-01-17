import express from "express";
import mongoose from "mongoose";
import { PORT, MONGO_DB_URL } from "./config.js";
import employeeRoute from "./routes/employeeRoute.js";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(
    cors({
        origin: 'http://localhost:5555',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type'],
    })
);

app.use('/employee', employeeRoute);

mongoose
    .connect(MONGO_DB_URL)
    .then(() => {
        console.log("App connected to database");
        app.listen(PORT, () => {
            console.log(`App connected to port ${PORT}`);
        })
    }).catch((error) => {
        console.log(error);
    })



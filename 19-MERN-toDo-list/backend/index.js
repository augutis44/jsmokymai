import express from "express";
import { PORT, MONGO_DB_URL } from "./config.js";
import mongoose from "mongoose";
import toDoItemRoute from "./routes/toDoItemRoute.js";
import cors from 'cors';

const app = express();

app.use(express.json());

// app.use(cors());

app.use(
    cors({
        origin: 'http://localhost:5555',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type'],
    })
);

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Welcome to the MERN Stack');
});

app.use('/toDoItem', toDoItemRoute);

mongoose.connect(MONGO_DB_URL)
    .then(() => {
        console.log('App connected to database');

        app.listen(PORT, () => {
            console.log(`App is listening to port ${PORT}`);
        })
    })
    .catch((error) => {
        console.log(error);
    })

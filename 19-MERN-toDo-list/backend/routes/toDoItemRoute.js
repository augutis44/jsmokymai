import express from "express";
import { toDoItem } from "../models/toDoItemModel.js";

const router = express.Router();

//Route to save a new toDo item
router.post('/', async (request, response) => {
    try {
        const newToDoItemObj = {
            priority: request.body.priority,
            dueDate: request.body.dueDate,
            description: request.body.description,
            title: request.body.title,
            responsiblePerson: request.body.responsiblePerson,
            inProgress: request.body.inProgress,
            done: request.body.done
        }

        const newTodoItem = await toDoItem.create(newToDoItemObj);

        return response.status(201).send(newTodoItem);

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//Route to get all todo items from database
router.get('/', async (request, response) => {
    try {
        const todoItems = await toDoItem.find({});

        return response.status(200).json(todoItems);

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//Route to get one todo item from database
router.get('/:id', async (request, response) => {
    try {

        const { id } = request.params;

        const todoItem = await toDoItem.findById(id);

        return response.status(200).json(todoItem);

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//Route to update a toDo item
router.put('/:id', async (request, response) => {
    try {

        const { id } = request.params;

        const result = await toDoItem.findByIdAndUpdate(id, request.body);

        if (!result) {
            return response.status(404).json({ message: "to do item not found" });
        }

        return response.status(200).send({ message: "Item updated successfully" });

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//Route to delete one todo item from database
router.delete('/:id', async (request, response) => {
    try {

        const { id } = request.params;

        const result = await toDoItem.findByIdAndDelete(id);

        console.log(result);

        if (!result) {
            return response.status(404).json({ message: "to do item not found" });
        }

        return response.status(200).send({ message: "Item deleted successfully" });

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;

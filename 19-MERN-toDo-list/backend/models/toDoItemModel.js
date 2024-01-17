import mongoose from "mongoose";

const toDoItemSchema = mongoose.Schema(
    {
        priority: String,
        dueDate: Date,
        description: String,
        title: String,
        responsiblePerson: String,
        inProgress: Boolean,
        done: Boolean
    }
);
0

export const toDoItem = mongoose.model('toDoItem', toDoItemSchema);
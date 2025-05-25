import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todos",
    initialState: [{
        "id": Date.now(),
        "name": "Tarea 1",
        "description": "Descripcion de la tarea 1",
        "dueDate": "2023-10-01"
    }],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload);
            fetch("http://localhost:3001/tasks/addTask", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "391734"
                },
                body: JSON.stringify(action.payload)
            }).catch((error) => {
                console.error("Error:", error);
            });
        },
        initAddTodo: (state, action) => {
            state.push({
                "id": Date.now(),
                "name": action.payload.name,
                "description": action.payload.description,
                "dueDate": action.payload.dueDate
            });
        },
        removeTodo: (state, action) => {
            const index = state.findIndex((todo) => todo.id === action.payload);
            if (index !== -1) {
                state.splice(index, 1);
                fetch(`http://localhost:3001/tasks/removeTask/${action.payload}`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "391734"
                    }
                }).catch((error) => {
                    console.error("Error:", error);
                });
            }
        }
    }
});

export const { addTodo, initAddTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
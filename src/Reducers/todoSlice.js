import { createSlice } from "@reduxjs/toolkit";


export const addTodoAsync = (todo) => {
    return async (dispatch) => {
        try {
            const response = await fetch("http://localhost:3001/tasks/addTask", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "391734"
                },
                body: JSON.stringify(todo)
            });
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            dispatch(addTodo(data));
        } catch (error) {
            console.error("Error:", error);
        }
    };
}

const todoSlice = createSlice({
    name: "todos",
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload);
        },
        initAddTodo: (state, action) => {
            state.push(action.payload);
        },
        removeTodo: (state, action) => {
            const index = state.findIndex(todo => todo._id === action.payload);
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

export const { addTodo, initAddTodo, removeTodo, getTodos } = todoSlice.actions;
export default todoSlice.reducer;
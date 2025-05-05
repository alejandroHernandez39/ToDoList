import { createSlice } from "@reduxjs/toolkit";

const goalSlice = createSlice({
  name: "goals",
    initialState: {
        "name": "Meta 1",
        "description": "Descripcion de la meta 1",
        "dueDate": "2023-10-01"
    },
    reducers: {
        addGoal: (state, action) => {
            state.todos.push(action.payload);
        },
        removeGoal: (state, action) => {
            state.todos = state.todos.filter((_, index) => index !== action.payload);
        }
    }
});

export const { addGoal, removeGoal, editGoal } = goalSlice.actions;
export default goalSlice.reducer;
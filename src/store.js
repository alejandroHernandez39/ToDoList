import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./Reducers/todoSlice";
import goalReducer from "./Reducers/goalSlice";

const store = configureStore({
    reducer: {
        todos: todoReducer,
        goals: goalReducer,
    }
});

export default store;
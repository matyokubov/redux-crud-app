import { todoReducer } from "./reducer"
import { configureStore } from "@reduxjs/toolkit"

const store = configureStore({
    reducer: {
        todos: todoReducer      // State 'todos'
    }
});

export { store }
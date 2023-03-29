import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const todos = createSlice({
    name: "my_todos",
    initialState,
    reducers: {
        add: (state, action) => {
            state.push({id: state.length, count: 0, completed: "no", ...action.payload})
        },
        remove: (state, action) => {
            return state.filter(({id}) => id!==action.payload)
        },
        update: (state, action) => {
            state = state.map((todo) => {
                if(todo.id === action.payload.id) {
                    return {...todo, title: action.payload.title}
                } else {
                    return todo
                }
            })
            console.log("updated", state);
        }
    }
})

export const todoActions = todos.actions // actionsGroupName // => useAction( 'todoActions' )
export const todoReducer = todos.reducer // state, functions
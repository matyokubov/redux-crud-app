import { createSlice } from "@reduxjs/toolkit";

const initialState = [{id: 0, title: "shopping"}]

const todos = createSlice({
    name: "my_todos",
    initialState,
    reducers: {
        add: (state, action) => {
            state.push({id: state.length+1, count: 0, ...action.payload})
        },
        remove: (state, action) => {
            return state.filter(({id}) => id!==action.payload)
        }
    }
})

export const todoActions = todos.actions // actionsGroupName // => useAction( 'todoActions' )
export const todoReducer = todos.reducer // state, functions
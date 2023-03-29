import React, { useReducer, useRef } from "react";
import { useAction } from "../../hooks/action"

const reducer = (state, action) => {
    switch(action.type) {
        case "inputMode":
            return {
                inputMode: {
                    readOnly: action.payload.readOnly,
                    style: {
                        border: "none",
                        backgroundColor: "#fff"
                    } ? action.payload.readOnly :
                    {
                        border: "1px solid red",
                        backgroundColor: "#777"
                    }
                }
            }
        case "updateData":
            alert(action.payload); // instead of update function
            return {
                inputMode: {
                    readOnly: true,
                    style: {
                        border: "0",
                        backgroundColor: "#fff"
                    }
                }
            }
        default:
            return {
                ...state
            }
    }
}

const TodoItem = ({title, id}) => {
    console.log("todo item");
    const { remove } = useAction("todoActions")
    const [ state, dispatch] = useReducer(reducer, {
        inputMode: {
            readOnly: true,
            style: {
                border: "0",
                backgroundColor: "#fff"
            }
        }
    })
    console.log(state);
    const todo = useRef()
    return (
        <div>
            <input type="text" name="todo" defaultValue={title} ref={todo} readOnly={state.inputMode.readOnly} style={{...state.inputMode.style}}/>
            {
                !state.inputMode.readOnly && <>
                    <button onClick={() => dispatch({type: "updateData", payload: todo.current.value})}>Save</button>
                    <button>Cancel</button>
                </>
            }
            <button onClick={() => state.inputMode.readOnly && dispatch({type: "inputMode", payload: {readOnly: false}})}>Edit</button>
            <button onClick={() => remove(id)}>Remove</button>
        </div>
    )
}

export default TodoItem;
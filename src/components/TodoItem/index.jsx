import React, { useReducer, useRef } from "react";
import { useSelector } from "react-redux";
import { useAction } from "../../hooks/action"

const TodoItem = ({id, title, completed}) => {
    console.log("todo item");
    const { remove, update } = useAction("todoActions")
    const storeState = useSelector((state) => state.todos)
    console.log(storeState);
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
                update({id, title: action.payload}) // from ID
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
    const [ state, dispatch] = useReducer(reducer, {
        inputMode: {
            readOnly: true,
            style: {
                border: "0",
                backgroundColor: "#fff"
            }
        }
    })
    const isCompleted = {
        yes: {
            color: "#0f0"
        },
        no: {
            color: "#f00"
        }
    }
    const cancel = () => {
        dispatch({type: "inputMode", payload: {readOnly: true}})
        // todo.current = title
        document.getElementById("todo").value = title
    }
    console.log(state);
    const todo = useRef()
    return (
        <div>
            <input type="text" id="todo" name="todo" defaultValue={title} ref={todo} readOnly={state.inputMode.readOnly} style={{...state.inputMode.style, ...isCompleted[completed]}}/>
            {
                !state.inputMode.readOnly && <>
                    <button onClick={() => dispatch({type: "updateData", payload: todo.current.value})}>Save</button>
                    <button onClick={cancel}>Cancel</button>
                </>
            }
            <button onClick={() => state.inputMode.readOnly && dispatch({type: "inputMode", payload: {readOnly: false}})}>Edit</button>
            <button onClick={() => remove(id)}>Remove</button>
        </div>
    )
}

export default TodoItem;
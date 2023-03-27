import React from "react";
import { useAction } from "../../hooks/action"

const TodoItem = ({title, id}) => {
    console.log("todo item");
    const { remove } = useAction("todoActions")
    return (
        <div>
            {title} <button onClick={() => remove(id)}>Remove</button>
        </div>
    )
}

export default TodoItem;
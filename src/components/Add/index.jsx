import React, { useRef } from "react";
import { useAction } from "../../hooks/action"
// import { actions } from "../../redux/reducer";

const Add = () => {
    console.log("add item");
    const title = useRef("No title")
    const action = useAction("todoActions")
    return (
        <div>
            <input type="text" ref={title}/>
            <button onClick={() => action.add({title: title.current.value})}>Add</button>
        </div>
    )
}

export default Add;
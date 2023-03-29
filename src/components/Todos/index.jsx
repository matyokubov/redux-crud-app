import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "../TodoItem";

const Todos = () => {
    console.log("todos");
    const todos = useSelector((state) => state.todos)
    return (
        <div>
            {
                todos.length!==0 ? <ul>
                        {
                            todos.map((item) => <li key={item.id}>
                                <TodoItem id={item.id} title={item.title} completed={item.completed}/>
                            </li>)
                        }
                    </ul> :
                <h1>No todos</h1>
            }
        </div>
    )
}

export default Todos;
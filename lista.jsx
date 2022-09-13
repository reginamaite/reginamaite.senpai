import React from "react";

const Lista = (props) =>{
    return(
        <ul id="lista-tareas">
        {props.todoList.map((item, key) => {
            return <li className="list-group-item" key={key}>{item.tarea}
            {item.prioridad}</li>
        })}
    </ul>
)
}
export default Lista;
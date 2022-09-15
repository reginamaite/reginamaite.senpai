import React from "react";

const Lista = (props) =>{
    return(
        <ul id="lista-tareas">
        {props.todoList.map((item, key) => {
            return <li className={"list-group-item " + item.prioridad} key={key}>{item.tarea} <span className="feather">x</span></li>
        })}
    </ul>
)
}
export default Lista;
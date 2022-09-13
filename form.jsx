import React from "react";
import Priority from "./priority";

const Form = (props) =>{
    return(
      <form action="javascript:void(0);">
        <input id="tarea" type="text" name="tarea" placeholder="Descripción de la tarea"/>
        <Priority></Priority>
        <button id="agregar" type="button" onClick={props.pepe}>Agregar!</button>
    </form>
    )
}

export default Form;
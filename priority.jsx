import React from "react";

const Priority = () =>{
    return(
        <select name="prioridad" id="prioridad">
            <option value="" disabled selected>Prioridad</option>
            <option value="prioridad-baja">baja</option>
            <option value="prioridad-media">media</option>
            <option value="prioridad-alta">alta</option>
        </select>
    )
}

export default Priority;
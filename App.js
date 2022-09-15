import './App.css';
import React, { useState } from 'react';
import Form from './Components/form/form';
import Lista from './Components/lista';

function App() {
  const [lista, setLista] = useState([{tarea:"Pasear al perro",prioridad:" prioridad media"}])
  const agregarTarea = (() => {
    let input = document.getElementById("tarea")
    let prioridad = document.getElementById("prioridad")
    setLista([...lista, {tarea:input.value, prioridad:prioridad.value}])
});

  return (
    <React.Fragment>
      <main>
        <h1>Lista de tareas!</h1>
        <Form
        pepe={agregarTarea}></Form>
        <h3>Tareas</h3>
        <Lista todoList={lista}></Lista>

        <p className="tips">Tip: Pueden borrar tareas clickeando en ellas</p>
      </main>
    </React.Fragment>

  );
}

export default App;

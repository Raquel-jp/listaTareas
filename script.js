"use strict";

// date
const dateNumber = document.getElementById("dateNumber");
const dateText = document.getElementById("dateText");
const dateMonth = document.getElementById("dateMonth");
const  dateYear = document.getElementById("dateYear");

//task container

const taskContainer = document.getElementById("taskContainer");
console.log(taskContainer);

//funcion para obtener la fecha:

const setDate = () =>{
    const date = new Date();
    dateNumber.textContent = date.toLocaleString('es', { day: 'numeric'});
    dateText.textContent = date.toLocaleString('es', { weekday: 'long' });
    dateMonth.textContent =date.toLocaleString('es',  { month: 'short'});
    dateYear.textContent = date.toLocaleString('es', { year: 'numeric'});

};

const addNewTask = event => {
    event.preventDefault();
    const { value } = event.target.taskText;
    if(!value) return; //con esto impedimos tareas vacias q ponga el usuario.
    
    const task = document.createElement('div');
    task.classList.add('task', 'roundBorder');
    task.addEventListener('click', changeTaskState);
    task.textContent = value;
    taskContainer.prepend(task); //con prepend lo añadimos al principio de la lista.

    event.target.reset(); //resetear el form para que nos quede limpio el imput.
};
const changeTaskState = event => {
    event.target.classList.toogle('done');
}
const order = () => {
    const done = [];
    const toDo = [];
    taskContainer.childNodes.forEach( el =>{
        el
    })
}



setDate();
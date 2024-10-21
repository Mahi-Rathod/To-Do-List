const container = document.querySelector(".container");

const headingContainer = document.createElement("div");
headingContainer.classList.add("heading-container");

const heading = document.createElement("h1");
heading.innerText = "To-Do List";

headingContainer.appendChild(heading);
container.appendChild(headingContainer);

//Container for the Add new Task

const addNewTaskForm = document.createElement("form");
addNewTaskForm.classList.add("add-new-task");

container.appendChild(addNewTaskForm);

const inputForTask = document.createElement("input");
inputForTask.type = "text";
inputForTask.placeholder = "Add your task here";
inputForTask.required = true;
addNewTaskForm.appendChild(inputForTask);

const date = document.createElement("input");
date.type = "date";
date.required = true;
addNewTaskForm.appendChild(date);

const time = document.createElement("input");
time.required = true;
time.type = "time";

addNewTaskForm.appendChild(time);

const addTaskBtn = document.createElement("button");
addTaskBtn.innerText = "Add Task";
addTaskBtn.type = 'submit';

addNewTaskForm.appendChild(addTaskBtn);

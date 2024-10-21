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
inputForTask.name = "description";
inputForTask.placeholder = "Add your task here";
inputForTask.required = true;
addNewTaskForm.appendChild(inputForTask);

const date = document.createElement("input");
date.type = "date";
inputForTask.name = "date";
date.required = true;
addNewTaskForm.appendChild(date);

const time = document.createElement("input");
time.required = true;
time.type = "time";
inputForTask.name = "time";
addNewTaskForm.appendChild(time);

const addTaskBtn = document.createElement("button");
addTaskBtn.innerText = "Add Task";
addTaskBtn.type = "submit";

addNewTaskForm.appendChild(addTaskBtn);

//

addNewTaskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = addNewTaskForm.children;
  const description = formData[0].value;
  const date = formData[1].value;
  const time = formData[2].value;
  const allTasks = JSON.parse(localStorage.getItem("Tasks")) || [];
  let id = (allTasks.length == 0) ? 0 : allTasks[allTasks.length-1].Id+1;
  const newTask = {
    Id: id,
    Description: description,
    Date: date,
    Time: time,
  };


  allTasks.push(newTask);

  localStorage.setItem("Tasks", JSON.stringify(allTasks));
  loadPage();
});

const taskContainer = document.createElement("div");
taskContainer.classList.add("task-container");
container.appendChild(taskContainer);

const loadPage = () => {
    taskContainer.innerHTML = "";
  const allTasks = JSON.parse(localStorage.getItem("Tasks")) || [];
  console.log(allTasks);

  if (allTasks.length === 0) {
    const emptyContainer = document.createElement("h1");
    emptyContainer.classList.add("empty-container");
    emptyContainer.innerText = "No Tasks";
    taskContainer.appendChild(emptyContainer);
  } else {
    allTasks.forEach((task) => {
      const Description = task.Description;
      const Date = task.Date;
      const Time = task.Time;
      const timeArray = Time.split(":");
      let TimeString =
        String(
          Number(timeArray[0]) % 12 === 0 ? 12 : Number(timeArray[0]) % 12
        ) +
        ":" +
        timeArray[1];

      if (Number(timeArray[0]) < 12) {
        TimeString = TimeString + " AM";
      } else {
        TimeString = TimeString + " PM";
      }

      console.log(TimeString);
      const todo = document.createElement("div");
      todo.classList.add("todo");
      taskContainer.appendChild(todo);  

      const timeAndDescriptionContainer = document.createElement("div");
      timeAndDescriptionContainer.classList.add("time-description-container");

      todo.appendChild(timeAndDescriptionContainer);

      const todoDescription = document.createElement("p");
      todoDescription.classList.add("todo-description");
      todoDescription.innerHTML = `${Description} at <span style='font-weight:bold'>${TimeString}</span>`;
      timeAndDescriptionContainer.appendChild(todoDescription);
      
    //   const todoTime = document.createElement("h3");
    //   todoTime.classList.add("todo-description");
    //   todoTime.innerText = TimeString;
      
    //   timeAndDescriptionContainer.appendChild(todoTime);

      const buttonsContainer = document.createElement("div");

      const editToDo = document.createElement("button");
      editToDo.innerText = "Edit";
      buttonsContainer.appendChild(editToDo);

      const deleteToDo = document.createElement("button");
      deleteToDo.innerText = "Delete";
      buttonsContainer.appendChild(deleteToDo);

      todo.appendChild(buttonsContainer);
    });
  }
};

loadPage();

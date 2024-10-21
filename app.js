const container = document.querySelector(".container");

const headingContainer = document.createElement("div");
headingContainer.classList.add("heading-container");

const heading = document.createElement("h1");
heading.innerText = "To-Do List";

headingContainer.appendChild(heading);
container.appendChild(headingContainer);
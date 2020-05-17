import "./style.css";

//selectors

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deletecheck);

//functions

function addTodo(event) {
  //preventing
  event.preventDefault();

  //to-do div

  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  // create li

  const newTodo = document.createElement("li");
  newTodo.classList.add("todo-item");
  newTodo.innerText = todoInput.value;
  todoDiv.appendChild(newTodo);

  //complete button

  const completedButton = document.createElement("button");
  completedButton.classList.add("complete-btn");
  completedButton.innerHTML = "<i class='fas fa-check'></i>";

  todoDiv.appendChild(completedButton);

  //trash button

  const trashButton = document.createElement("button");
  trashButton.classList.add("trash-btn");
  trashButton.innerHTML = "<i class='fas fa-trash'></i>";

  todoDiv.appendChild(trashButton);

  //append to todo list

  todoList.appendChild(todoDiv);

  //clearing input value

  todoInput.value = "";
}

function deletecheck(e) {
  const item = e.target;

  //delete todo

  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.remove();
  }

  //check mark

  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

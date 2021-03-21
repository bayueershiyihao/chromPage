const todoInput = document.querySelector(".todoInput");
const todoList = document.querySelector(".todoList");
const formSubmit = document.querySelector(".form-submit");

const TODOS_LS = "toDos";
let toDos = [];
let idNumbers = 1;

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function deleteToDo(e) {
  const i = e.target;
  const btn = i.parentNode;
  const li = btn.parentNode;
  todoList.removeChild(li);

  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDos();
}

function paintToDo(text) {
  const li = document.createElement("li");
  const deleteBtn = document.createElement("button");
  const newId = idNumbers;
  idNumbers += 1;

  deleteBtn.innerHTML = `<i class="fas fa-trash-alt item__delete"></i>`;
  deleteBtn.addEventListener("click", deleteToDo);
  li.setAttribute("class", "item");
  li.innerHTML = `<span class="item-text">${text}</span>`;
  li.id = newId;

  li.appendChild(deleteBtn);
  todoList.appendChild(li);
  li.scrollIntoView({ block: "center" });
  const toDoObj = {
    text: text,
    id: newId,
  };

  toDos.push(toDoObj);
  saveToDos();
}

function submitHandler(e) {
  e.preventDefault();
  const value = todoInput.value;
  if (value != "") {
    paintToDo(value);
  }

  todoInput.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);

  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach((toDos) => {
      paintToDo(toDos.text);
    });
  }
}

function init() {
  formSubmit.addEventListener("submit", submitHandler);
  loadToDos();
}

init();

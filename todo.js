const container = document.getElementById("todo-flex");
const todoform = document.getElementById("todo");
const add = document.querySelector("button");
const form = document.querySelector(" #todo-container form");

// const form = document.querySelector('form')
// form.addEventListener('submit', (e)=>{
// e.preventDefaul
// console.log(e.target);

// })

const todos = [
  {
    id: "1",
    name: "first todo",
    priority: "high",
    createdAt: " 04-10-203",
    deadline: " 04-11-2023 ",
    done: false,
  },
  {
    id: "2",
    name: "second todo",
    priority: "meduim",
    createdAt: " 05-10-2023",
    deadline: " 07-10-2023",
    done: false,
  },
  {
    id: "3",
    name: "third todo",
    priority: "low",
    createdAt: " 06-10-203",
    deadline: " 7-11-203",
    done: false,
  },
  // {
  //   id: '1',
  //   namee:  'first todo',
  //   priority: 'hight',
  //   createdAt: " 10-10-2023 10:00",
  //   deadline: " 10-10-2023 10:00",
  //   done: 'false'
  // },
];

function markToDoAsDone(index) {
  todos[index].done = !todos[index].done;
  renderTodos();
  animateTodoOutAndDelete(index);
}

function animateTodoOutAndDelete(index) {
  setTimeout(() => {
    if (todos[index].done) {
      todos[index].deleted = true;
      renderTodos();
      setTimeout(() => {
        todos.splice(index, 1);
        renderTodos();
      }, 3500);
    }
  }, 3000);
}

function renderTodo(todos, index) {
  return `<div id="todo-flex" ${todos.deleted ? "deleted" : ""}>
  <input type="checkbox" onchange="markToDoAsDone(${index})" ${
    todos.done ? "checkbox" : ""} />
  <div class="details">
  <div class="flex">
    <p class="flex">${todos.name}</p>
    <p class="time">${todos.createdAt}</p>
  </div>
  <div class="flex">
    <p class="priority">${todos.priority}</p>
    <p class="time">Before: ${todos.deadline}</p>
  </div>
  </div>
  </div>`;
}

function renderTodos() {
  const html = todos.map(renderTodo).join("");
  container.innerHTML = html;
}

renderTodos();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newTodo = {
    name: e.target.todo.value,
    priority: e.target.priority.value,
    createdAt: new Date().toUTCString().slice(0, 19),
    deadline: e.target.deadline,
    id: Date.now(),
  };

  todos.push(newTodo);
  renderTodos();
});

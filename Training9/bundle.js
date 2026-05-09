// helper.ts
function createTaskElement(task) {
  const li = document.createElement("li");
  li.textContent = task.title;
  if (task.completed) {
    li.style.textDecoration = "line-through";
  }
  return li;
}
function generateId() {
  return Math.floor(Math.random() * 1e4);
}

// main.ts
var taskList = document.getElementById("taskList");
var addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", () => {
  const newTask = {
    id: generateId(),
    title: `Task ${generateId()}`,
    completed: false
  };
  const li = createTaskElement(newTask);
  taskList.appendChild(li);
});
for (let i = 0; i < 3; i++) {
  const task = {
    id: generateId(),
    title: `Starter task ${i + 1}`,
    completed: false
  };
  taskList.appendChild(createTaskElement(task));
}

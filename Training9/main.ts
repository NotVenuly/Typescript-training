import { Task } from "./types";
import { createTaskElement, generateId } from "./helper";

const taskList = document.getElementById("taskList") as HTMLUListElement;
const addBtn = document.getElementById("addBtn") as HTMLButtonElement;

addBtn.addEventListener("click", () => {
    const newTask: Task = {
        id: generateId(),
        title: `Task ${generateId()}`,
        completed: false
    };

    const li = createTaskElement(newTask);
    taskList.appendChild(li);
});

// Add 3 starter tasks
for (let i = 0; i < 3; i++) {
    const task: Task = {
        id: generateId(),
        title: `Starter task ${i + 1}`,
        completed: false
    };
    taskList.appendChild(createTaskElement(task));
}
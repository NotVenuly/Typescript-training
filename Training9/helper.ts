import { Task } from "./types";

export function createTaskElement(task: Task): HTMLLIElement {
    const li = document.createElement("li");
    li.textContent = task.title;
    if (task.completed) {
        li.style.textDecoration = "line-through";
    }
    return li;
}

export function generateId(): number {
    return Math.floor(Math.random() * 10000);
}
"use strict";
let tasks = [
    "Learn typescript",
    "Learn Assembly",
    "Study mathematics",
    "Learn SQL",
    "Enjoy the big payout"
];
const ul = document.getElementById("todoList");
tasks.forEach(task => {
    const item = document.createElement("li");
    item.textContent = task + " ";
    createTaskButtons(item);
    if (ul === null) {
        alert('oops');
    }
    else {
        ul.appendChild(item);
    }
});
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const randomBtn = document.getElementById("addItemBtn");
if (randomBtn === null) {
    alert("oopsy poopsy");
}
else {
    randomBtn.addEventListener("click", () => {
        if (ul === null) {
            alert("oops");
        }
        else {
            const item = document.createElement("li");
            item.textContent = tasks[randomInt(0, tasks.length - 1)];
            createTaskButtons(item);
            ul.appendChild(item);
        }
    });
}
const clearBtn = document.getElementById("clearDoneBtn");
if (clearBtn === null) {
    alert("weeewoo");
}
else {
    clearBtn.addEventListener("click", () => {
        const doneItems = document.querySelectorAll(".done");
        doneItems.forEach(item => {
            item.remove();
        });
    });
}
function createTaskButtons(item) {
    const doneBtn = document.createElement("button");
    doneBtn.textContent = "Done";
    doneBtn.addEventListener("click", () => {
        item.classList.add("done");
    });
    const urgentBtn = document.createElement("button");
    urgentBtn.textContent = "URGENT";
    urgentBtn.addEventListener("click", () => {
        item.classList.toggle("urgent");
    });
    item.appendChild(doneBtn);
    item.appendChild(urgentBtn);
}

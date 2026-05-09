"use strict";
const modalBtn = document.getElementById("openModalBtn");
const overlay = document.getElementById("modalOverlay");
const incr = document.getElementById("incrementBtn");
const decr = document.getElementById("decrementBtn");
const reset = document.getElementById("resetBtn");
const box = document.getElementById("modalBox");
const closeBtn = document.getElementById("modalCloseBtn");
let outsideCounter = document.getElementById("outsideCounter");
let insideCounter = document.getElementById("modalCounter");
let currNumber = 0;
incr.addEventListener("click", () => {
    currNumber += 1;
    insideCounter.textContent = `${currNumber}`;
});
decr.addEventListener("click", () => {
    currNumber -= 1;
    insideCounter.textContent = `${currNumber}`;
});
reset.addEventListener("click", () => {
    currNumber = 0;
    insideCounter.textContent = `${currNumber}`;
});
modalBtn.addEventListener("click", () => {
    OpenModal();
});
closeBtn.addEventListener("click", () => {
    CloseModal();
});
document.addEventListener("keydown", (event) => {
    if ((event.key.toLowerCase() === "escape" || event.key.toLowerCase() === "x") && overlay.classList.contains("visible")) {
        CloseModal();
    }
});
overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
        CloseModal();
    }
});
function OpenModal() {
    currNumber = 0;
    insideCounter.textContent = "0";
    overlay.classList.add("visible");
    overlay.setAttribute("aria-hidden", "false");
}
function CloseModal() {
    overlay.classList.remove("visible");
    overlay.setAttribute("aria-hidden", "true");
    outsideCounter.textContent = insideCounter.textContent;
}

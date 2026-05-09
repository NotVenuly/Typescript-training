"use strict";
const serviceID = "service_67yles2";
const templateID = "template_6npdvwq";
const publicKey = "N64Ik5rCXqdDblZ17";
const form = document.getElementById("emailForm");
const submitBtn = document.getElementById("submitBtn");
const feedback = document.getElementById("feedback");
emailjs.init(publicKey);
form.addEventListener("submit", (event) => {
    event.preventDefault();
    emailjs.sendForm(serviceID, templateID, form)
        .then(() => {
        feedback.textContent = "Thank you for your message!";
        feedback.className = "feedback success";
        form.reset();
    })
        .catch((err) => {
        feedback.textContent = "Failed to send. Try again.";
        feedback.className = "feedback error";
        console.error(err);
    })
        .finally(() => {
        // Re-enable regardless of success or failure
        submitBtn.disabled = false;
        submitBtn.textContent = "Send Email";
    });
});

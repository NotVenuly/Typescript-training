declare const emailjs: {
    init(publicKey: string): void;
    send(serviceId: string, templateId: string, templateParams: any): Promise<any>;
    sendForm(serviceId: string, templateId: string, form: HTMLFormElement): Promise<any>;
};

const serviceID: string = "service_67yles2";
const templateID: string = "template_6npdvwq";
const publicKey: string = "N64Ik5rCXqdDblZ17";

const form = document.getElementById("emailForm") as HTMLFormElement;
const submitBtn = document.getElementById("submitBtn") as HTMLButtonElement;
const feedback = document.getElementById("feedback")!;

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
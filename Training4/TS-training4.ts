interface button{
    html_class: string,
    html_color: string,
    html_label: string
}

const btnContainer = document.getElementById("buttonContainer");
const colorPanel = document.getElementById("colourPanel");
const history = document.getElementById("historyText");
const historyBtn = document.getElementById("resetHistoryBtn");

if (btnContainer === null || colorPanel === null || history === null || historyBtn === null){
    alert("opps");
}else{
    document.addEventListener("keydown", (event) =>{
        if (event.key.toLowerCase() === "r"){
            colorPanel.style.backgroundColor = "white";
            colorPanel.textContent = "reset"
        }
    })
    const buttons = btnContainer.querySelectorAll(".colour-btn");
    buttons.forEach(btn => {
        btn.addEventListener("click", (event) =>{
            if (history.textContent === "History: (none)") {
                history.textContent = "";
            }
            const target = event.target as HTMLElement
            colorPanel.style.backgroundColor = target.dataset.colour!
            colorPanel.textContent = target.dataset.label!
            const item = document.createElement("li")
            item.textContent = target.dataset.label! + " ";
            item.classList.add("history")
            history.appendChild(item);
        });
    });

    historyBtn.addEventListener("click", () =>{
        history.querySelectorAll(".history").forEach(hist => {
            hist.remove();
        })
        history.textContent = "History: (none)";
    })
}

export{}



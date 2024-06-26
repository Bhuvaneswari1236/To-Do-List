const inputBox = document.getElementById("inputbox");
const Listcontainer = document.getElementById("Listcontainer");
function addTask() {
    if (inputBox.value === '') {
        alert("You must write Something!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        Listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
    inputBox.value = "";
    saveData();
}
Listcontainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");

    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);
function saveData() {
    localStorage.setItem("data", Listcontainer.innerHTML);
}
function showTask() {
    Listcontainer.innerHTML = localStorage.getItem("data");
}

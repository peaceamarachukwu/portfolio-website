function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");

    if (taskInput.value === "") {
        alert("Please enter a task.");
        return;
    }

    let li = document.createElement("li");
    li.textContent = taskInput.value;

    li.onclick = function () {
        li.style.textDecoration = "line-through";
    };

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.onclick = function () {
        taskList.removeChild(li);
    };

    li.appendChild(document.createTextNode(" "));
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    taskInput.value = "";
}


function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    if (name == "") {
        alert("Please enter your name.");
        return false;
    }

    if (!email.includes("@")) {
        alert("Please enter a valid email.");
        return false;
    }

    if (isNaN(phone)) {
        alert("Phone number should contain only numbers.");
        return false;
    }

    alert("Message sent successfully!");
    return true;
}
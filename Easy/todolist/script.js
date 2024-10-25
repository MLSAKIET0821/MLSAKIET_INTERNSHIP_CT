let tasks = [];

function addTask() {
    const taskInput = document.getElementById("task-input");
    const taskText = taskInput.value.trim(); 

    if (taskText === "") {
        alert("Please enter a task."); 
        return;
    }

    tasks.push(taskText);

    taskInput.value = "";

    renderTasks();
}

function renderTasks() {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = ""; 

    tasks.forEach((task, index) => {
        const li = document.createElement("li"); 

        li.textContent = task;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = () => deleteTask(index);

        li.appendChild(deleteButton);

        taskList.appendChild(li);
    });
}

function deleteTask(index) {
    tasks.splice(index, 1); 
    renderTasks(); 
}

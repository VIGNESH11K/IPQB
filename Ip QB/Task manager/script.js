const taskForm = document.getElementById("task-form");
const titleInput = document.getElementById("title-input");
const descriptionInput = document.getElementById("description-input");
const dueDateInput = document.getElementById("due-date-input");
const addTaskButton = document.getElementById("add-task-button");
const completedFilter = document.getElementById("completed-filter");
const dueTodayFilter = document.getElementById("due-today-filter");
const taskList = document.getElementById("task-list");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addTask();
});

function addTask() {
    const newTask = {
        title: titleInput.value,
        description: descriptionInput.value,
        dueDate: dueDateInput.value,
        completed: false
    };

    tasks.push(newTask);
    updateTasks();
    clearForm();
}

function updateTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
}

function clearForm() {
    titleInput.value = "";
    descriptionInput.value = "";
    dueDateInput.value = "";
}

function displayTasks() {
    taskList.innerHTML = "";
    
    tasks.forEach((task, index) => {
        const taskItem = document.createElement("li");
        taskItem.innerHTML = `
            <span class="task-title ${task.completed ? 'completed' : ''}">${task.title}</span>
            <span>${task.dueDate}</span>
            <button class="complete-button">${task.completed ? 'Undo' : 'Complete'}</button>
            <button class="remove-button">Remove</button>
        `;
        
        taskItem.querySelector(".complete-button").addEventListener("click", () => toggleComplete(index));
        taskItem.querySelector(".remove-button").addEventListener("click", () => removeTask(index));

        taskList.appendChild(taskItem);
    });
}

function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    updateTasks();
}

function removeTask(index) {
    tasks.splice(index, 1);
    updateTasks();
}

completedFilter.addEventListener("change", displayTasks);
dueTodayFilter.addEventListener("change", displayTasks);

displayTasks();

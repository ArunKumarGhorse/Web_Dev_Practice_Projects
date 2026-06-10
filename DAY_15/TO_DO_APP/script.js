let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

const taskInput = document.getElementById('input');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('task-list');
const clearButton = document.getElementById('clearTasks');
const deleteButtons = document.getElementsByClassName('delete');

function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        let li = document.createElement('li');
        li.innerHTML = `${task} <button onclick="deleteTask(${index})">Delete</button>`;
        taskList.appendChild(li);
    });
}

function addTask() {
    const task = taskInput.value.trim();
    if (task === '') return;
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    taskInput.value = '';
    renderTasks();
}
function deleteTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
}

function clearTasks() {
    tasks = [];
    localStorage.removeItem('tasks');
    renderTasks();
}

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

let editIndex = null;

const taskInput = document.getElementById('input');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('task-list');

function renderTasks() {
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        let li = document.createElement('li');

        li.innerHTML = `
        <span>${task}</span>
    <div>
        <button onclick="editTask(${index})">Edit</button>
        <button onclick="deleteTask(${index})">Delete</button>
    </div>
`;

        taskList.appendChild(li);
    });
}

function addTask() {
    const task = taskInput.value.trim();
    if (task === '') return;

    if (editIndex !== null) {
        tasks[editIndex] = task;
        editIndex = null;
        addTaskButton.textContent = "Add Task";
    } else {
        tasks.push(task);
    }

    localStorage.setItem('tasks', JSON.stringify(tasks));
    taskInput.value = '';
    renderTasks();
}

function editTask(index) {
    taskInput.value = tasks[index];
    editIndex = index;
    addTaskButton.textContent = "Update Task";
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
function tg() {
    document.body.classList.toggle("dark")
}

renderTasks();

window.editTask = editTask;
window.deleteTask = deleteTask;
window.addTask = addTask;
window.clearTasks = clearTasks;
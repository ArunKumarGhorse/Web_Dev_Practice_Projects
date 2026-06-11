let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let editIndex = null;

const taskInput = document.getElementById('input');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('task-list');
const themeBtn = document.getElementById('themeBtn');

function renderTasks() {
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const li = document.createElement('li');

        li.innerHTML = `
            <label style="cursor:pointer;">
                <input type="checkbox" onchange="toggleTask(${index})" ${task.done ? "checked" : ""}>
                <span class="${task.done ? 'done' : ''}">
                    ${task.text}
                </span>
            </label>

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
        tasks[editIndex].text = task;
        editIndex = null;
        addTaskButton.textContent = "+ Add Task";
    } else {
        tasks.push({ text: task, done: false });
    }

    save();
    taskInput.value = '';
    renderTasks();
}

function editTask(index) {
    taskInput.value = tasks[index].text;
    editIndex = index;
    addTaskButton.textContent = "Update Task";
}

function deleteTask(index) {
    tasks.splice(index, 1);
    save();
    renderTasks();
}

function clearTasks() {
    tasks = [];
    localStorage.removeItem('tasks');
    renderTasks();
}

function toggleTask(index) {
    tasks[index].done = !tasks[index].done;
    save();
    renderTasks();
}

function toggleTheme() {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.textContent = "☀️";
    } else {
        themeBtn.textContent = "🌙";
    }
}

function save() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

renderTasks();

window.addTask = addTask;
window.editTask = editTask;
window.deleteTask = deleteTask;
window.clearTasks = clearTasks;
window.toggleTask = toggleTask;
window.toggleTheme = toggleTheme;
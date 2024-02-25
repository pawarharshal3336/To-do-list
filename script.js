// Retrieve tasks from local storage if available
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Function to render tasks
function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task.name;
        if (task.completed) {
            li.classList.add('completed');
        }
        li.addEventListener('click', () => toggleTask(index));
        taskList.appendChild(li);
    });
}

// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskName = taskInput.value.trim();
    if (taskName !== '') {
        tasks.push({ name: taskName, completed: false });
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTasks();
        taskInput.value = '';
    }
}

// Function to toggle task completion
function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
}

// Initial rendering of tasks
renderTasks();

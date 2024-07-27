console.log('Welcome to the To-Do List Project');

// Task array to store tasks
let userTasks = [];

// Function to add a task
function addUserTask() {
    let userTaskInput = document.getElementById('userTask');
    let userTask = userTaskInput.value;

    // Check if the task is not empty
    if (userTask.trim()) {
        userTasks.push(userTask);
        displayUserTasks();
        userTaskInput.value = ''; // Clear the input
    } else {
        alert('Please enter a task');
    }
}

// Function to display tasks
function displayUserTasks() {
    let userTaskList = document.getElementById('userTaskList');
    userTaskList.innerHTML = ''; // Clear existing tasks

    userTasks.forEach((userTask, index) => {
        let li = document.createElement('li');
        li.className = 'task';

        // Task text
        let taskText = document.createElement('span');
        taskText.innerText = userTask;
        li.appendChild(taskText);

        // Remove button
        let removeButton = document.createElement('button');
        removeButton.innerText = 'Remove';
        removeButton.onclick = function() {
            removeUserTask(index);
        };
        li.appendChild(removeButton);

        userTaskList.appendChild(li);
    });
}

// Function to remove a task
function removeUserTask(index) {
    userTasks.splice(index, 1);
    displayUserTasks();
}

// Initial tasks
userTasks = ['Learn JavaScript', 'Build a project'];
displayUserTasks();

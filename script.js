let tasksInput = document.getElementById('task-input');
let tasksList = document.getElementById('tasks-lists');
let addTaskButton = document.getElementById('add');
addTaskButton.addEventListener('click', function() {
    let task = tasksInput.value;
    console.log(task);
    if (task==='') {
        alert('Please enter a task');
    }else{
        let li = document.createElement('li');
        li.textContent = task;
        tasksList.appendChild(li);
        let span = document.createElement('span');
        span.textContent = '\u00D7';
        li.appendChild(span);
        tasksInput.value = '';
        saveTasks();
        
    }
});
tasksList.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        console.log(e.target.classList)
        e.target.classList.toggle('completed');
        saveTasks();
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveTasks();    
    }
});

const saveTasks = () => {
  localStorage.setItem('tasks',tasksList.innerHTML);
}

const loadTasks = () => {
    tasksList.innerHTML = localStorage.getItem('tasks');
}

loadTasks();
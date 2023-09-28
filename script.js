// Get references to HTML elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

// function to create a new task element
function createTaskElement(taskText) {

  // create div and a span elements
  const taskItem = document.createElement('div');
  taskItem.classList.add('task');

  const taskDisplay = document.createElement('span');
  taskDisplay.textContent = taskText;

  // create a checkbox for marking tasks as completed
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.classList.add('task-checkbox');

  //create edit button
  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';

  
  editButton.addEventListener('click', function() {
    // replaces the text content of an element with the content of an input field, effectively allowing the user to edit the text content inline
    const editInput = document.createElement('input');
    editInput.type = 'text';
    editInput.value = taskDisplay.textContent;
    taskItem.replaceChild(editInput, taskDisplay);

    }); // end editButton eventlistener
  
}// end createTaskElement

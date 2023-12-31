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

    //create "Save" button; on click, updates task, replaces input, then hides button
    const saveButton = document.createElement('button');
    saveButton.textContent = 'Save';
    saveButton.addEventListener('click', function() {
      // Update the task text with the edited value
      taskDisplay.textContent = editInput.value;
      taskItem.replaceChild(taskDisplay, editInput);

      // Remove the "Save" button after saving
      taskItem.removeChild(saveButton);
    }); // end saveButton eventlistener

    // append 'saveButton' to 'taskItem'
    taskItem.appendChild(saveButton);

    }); // end editButton eventlistener


  // create "delete" button; on click, removes task from list
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', function() {
    // Remove the task when the "Delete" button is clicked
    taskList.removeChild(taskItem);
  });

  
  // add an event listener to toggle task completion when the checkbox is clicked
  checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
      taskDisplay.classList.add('completed');
    } else {
      taskDisplay.classList.remove('completed');
    }
  }); // end checkbox eventlistener

  // add elements to 'taskItem' and return/save it
  taskItem.appendChild(checkbox);
  taskItem.appendChild(taskDisplay);
  taskItem.appendChild(editButton);
  taskItem.appendChild(deleteButton);

  return taskItem;
  
}// end createTaskElement


// on add task button click, create task element and append it
addTaskButton.addEventListener('click', function() {
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const taskItem = createTaskElement(taskText);
    taskList.appendChild(taskItem);
    taskInput.value = '';
  }
}); // end addTaskButton eventlistener

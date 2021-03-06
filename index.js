// Imports
import './style.css';
import addElem from './src/modules/add-elem.js';
import refreshList from './src/modules/refresh-list.js';

import TaskList from './src/modules/class-task-list.js';

const taskList = new TaskList();

// DOM
const mainContainer = document.querySelector('.list-container');

// HTML skeleton
// Header (Title and input)
mainContainer.innerHTML = `<div class="row">
<i class="fa-solid fa-rotate fa-lg font-awesome-icon"></i>
</div>`;
const inputContainer = addElem('form', [], mainContainer);
const inputText = addElem('input', ['input-add-task'], inputContainer);
inputText.setAttribute('placeholder', 'Add to your list...');
addElem('i', ['fa-solid', 'fa-arrow-right-to-bracket', 'fa-sm', 'font-awesome-icon'], inputContainer);
// Main (list)

const listContainer = addElem('div', [], mainContainer);
// Bottom (button)
const clearBtn = addElem('button', ['button'], mainContainer);
clearBtn.textContent = 'Clear all completed';

// Input
inputContainer.onsubmit = (e) => {
  e.preventDefault();
  taskList.addTask(inputText.value);

  inputContainer.reset();
  refreshList(taskList, listContainer);
};

// clear button
clearBtn.onclick = () => {
  // console.log('clear');
  taskList.clearCompleted();
  refreshList(taskList, listContainer);
};

// On load
refreshList(taskList, listContainer);

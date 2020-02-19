let addBtn = document.getElementById("add-btn");
let clear = document.getElementById("clear-btn");
let items = document.getElementById("items");
let userText = document.getElementById("user-input");

let tasksList = [];
let id = 0;
// load items
let data = localStorage.getItem("TASKS");
if (data) {
  tasksList = JSON.parse(data);
  id = tasksList.length;
  loadList(tasksList); // load the list to the user interface
} else {
  // if data isn't empty
  tasksList = [];
  id = 0;
}

function loadList(array) {
  array.forEach(function(item) {
    addingItem(item.name, item.id, item.trash);
  });
}

// clear the storage
clear.addEventListener("click", function() {
  localStorage.clear();
  location.reload();
});
// add item function
function addingItem(theTask, id, trash) {
  if (trash) {
    return;
  }

  let item = `<p><input type="checkbox" class='complete' id="${id}"></input> 
    ${theTask} 
    <i id="${id}" class="fas fa-trash-alt remove-btn" job='delete'></i></p>`;

  const position = "beforeend";
  items.insertAdjacentHTML(position, item);
}

// add item on click
addBtn.addEventListener("click", function() {
  let theTask = userText.value;
  if (theTask) {
    addingItem(theTask, id, false);
    tasksList.push({
      name: theTask,
      id: id,
      trash: false
    });
    localStorage.setItem("TASKS", JSON.stringify(tasksList));
    id++;
  }
  document.getElementById("user-input").value = "";
});
userText.addEventListener("keyup", function() {
  let theTask = userText.value;
  if (event.keyCode == 13) {
    if (theTask) {
      addingItem(theTask, id, false);
      tasksList.push({
        name: theTask,
        id: id,
        trash: false
      });
      id++;
    }
    document.getElementById("user-input").value = "";
  }
});
// remove to do
function removeToDo(element) {
  element.parentNode.parentNode.removeChild(element.parentNode);
  tasksList[element.id].trash = true;
}
items.addEventListener("click", function(event) {
  const element = event.target; // return the clicked element inside list
  const elementJob = element.attributes.job.value; // complete or delete

  if (elementJob == "delete") {
    removeToDo(element);
  }

  // add item to localstorage ( this code must be added where the LIST array is updated)
  localStorage.setItem("TASKS", JSON.stringify(tasksList));
});

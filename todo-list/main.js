let input = document.querySelector(".input");
let submit = document.querySelector(".add");
let tasksDiv = document.querySelector(".tasks");

// Empty Array To Store The Tasks
let arrayOfTasks = [];

// chech if Theres Tasks in Local Storge
if (localStorage.getItem("tasks")) {
  arrayOfTasks = JSON.parse(localStorage.getItem("tasks"));
}

//Trigger Get Data From Local Storage Function
getDataFormLocalStorge();

// Add Task
submit.addEventListener("click", function (e) {
  e.preventDefault(); // not defoult
  if (input.value !== "") {
    addTaskToArray(input.value); // Add Task To Array of Tasks
    input.value = ""; // Empty The input
  }
});
// click on Task Element
tasksDiv.addEventListener("click", (e) => {
  // Delete Button
  if (e.target.classList.contains("del")) {
    // Remove Task From local Storage
    deleteTaskWith(e.target.parentElement.getAttribute("data-id"));

    // Remove Element Rrom Page
    e.target.parentElement.remove();
  }
  // Task Element
  if (e.target.classList.contains("task")) {
    //Toggle Completed The Task
    toggleStatusTaskWith(e.target.getAttribute("data-id"));
    // Toggle Done Class
    e.target.classList.toggle("done");
  }
});

function addTaskToArray(taskText) {
  // Task Data
  const task = {
    id: Date.now(),
    title: taskText,
    completed: false,
  };
  // push task to array of Tasks
  arrayOfTasks.push(task);
  //Add Tasks To Page
  addElementsToPageFrom(arrayOfTasks);

  //  Add Tasks To Local Storge
  addDataToLocalStorgeFrom(arrayOfTasks);
}

function addElementsToPageFrom(arrayOfTasks) {
  //Empty The Tasks Div
  tasksDiv.innerHTML = "";
  // Looping On Array Of Tasks
  arrayOfTasks.forEach((task) => {
    // Create Main Div
    let div = document.createElement("div");
    div.className = "task";
    // check if Task is Done
    if (task.completed) {
      div.className = "task done";
    }
    div.setAttribute("data-id", task.id);
    div.appendChild(document.createTextNode(task.title));

    //  Create Delete Button
    let span = document.createElement("span");
    span.className = "del";
    // Append Button To Main Div
    span.appendChild(document.createTextNode("Delete"));
    div.appendChild(span);

    // Add Task Div To tasks Container
    tasksDiv.appendChild(div);
  });
}

function addDataToLocalStorgeFrom(arrayOfTasks) {
  window.localStorage.setItem("tasks", JSON.stringify(arrayOfTasks));
}
function getDataFormLocalStorge() {
  let data = window.localStorage.getItem("tasks");
  if (data) {
    let tasks = JSON.parse(data);
    addElementsToPageFrom(tasks);
  }
}

function deleteTaskWith(taskId) {
  // for Explain only
  // for(let i = 0; i< arrayOfTasks.length; i++){
  //    console.log(`${arrayOfTasks[i].id} === ${taskId}`);
  // }
  arrayOfTasks = arrayOfTasks.filter((task) => task.id != taskId);
  addDataToLocalStorgeFrom(arrayOfTasks);
}
function toggleStatusTaskWith(taskId) {
  const numericTaskId = Number(taskId);
  const task = arrayOfTasks.find((item) => item.id === numericTaskId);

  if (task) {
    task.completed = !task.completed;
  }

  addDataToLocalStorgeFrom(arrayOfTasks);
}

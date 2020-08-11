//setting up variables
let input = document.querySelector(".add-task input"),
    plus = document.querySelector(".add-task .plus"),
    tasksContainer = document.querySelector(".task-content"),
    taskCount = document.querySelector(".tasks-count span"),
    completedCount = document.querySelector(".tasks-completed span"),
    finishAll = document.querySelector(".buttons .finish-all"),
    deleteAll = document.querySelector(".buttons .delete-all"),
    taskContent = document.querySelector(".task-content"),
    numOfTask = 0,
    completedTasks = 0;

//focus on input field
window.onload = function() {
  input.focus();
};

//adding a task

plus.onclick = function() {
  //check if input field is empty
  if(input.value === '') {
    swal("no value");
  } else {
    numOfTask++;
    //swal(input.value);
    //remove no tasks message
    let noTaskMsg = document.querySelector(".no-tasks-messag");
    if(document.body.contains(noTaskMsg)) {
      noTaskMsg.remove();
    }


    //put the name of the task in the array of tasks

        //add main span
    let mainSpan = document.createElement("span"),
        //add delete buttons
        deleteButton = document.createElement("span"),
        //create text of main span
        text = document.createTextNode(input.value),
        //create text of delete button
        delText = document.createTextNode("-");

    //add text to main span
    mainSpan.appendChild(text);

    //add class task-box to mainSpan
    mainSpan.className = "task-box";

    //add text to delete button
    deleteButton.appendChild(delText);

    //add class del to deleteButton
    deleteButton.className = "del";

    //add delete button to main span
    mainSpan.appendChild(deleteButton);

    //add the task to tasks container
    tasksContainer.appendChild(mainSpan);

    //empty the input field
    input.value = "";
    input.focus();

    numOfTask++;

    //calculate tasks
    //calculateTasks();

//console.log(mainSpan);

    finishAll.onclick = function () {
      var tasks = Array.from(taskContent.children);
      tasks.forEach((task) => {
        task.classList.add('finished');
        completedTasks++;
      });

      //calculate tasks
      //calculateTasks();
    };

    deleteAll.onclick = function () {
      var tasks = Array.from(taskContent.children);
      tasks.forEach((task) => {
        task.remove();
      });
      numOfTask = 0;
      createNoTasksMsg();

      //calculate tasks
      //calculateTasks();
    };

  }
};


document.addEventListener('click', function (e) {
  if(e.target.className == "del") {
    e.target.parentNode.remove();
    numOfTask--;
    if(tasksContainer.childElementCount == 0) {
      numOfTask = 0;
      createNoTasksMsg();
    }
  }

  if(e.target.classList.contains('task-box')) {
    e.target.classList.toggle('finished');
    completedTasks++;
  }

  //calculate tasks
  //calculateTasks();
});

function createNoTasksMsg() {
  let msgSpan = document.createElement("span"),
      msgText = document.createTextNode("No tasks to show");

  msgSpan.appendChild(msgText);
  msgSpan.className = "no-tasks-messag";
  tasksContainer.appendChild(msgSpan);
}

/*
//function to calculate tasks
function calculateTasks() {

  //calculate all tasks
  taskCount.innerHTML = document.querySelector('.task-content .task-box').length;

  //calculate finished tasks
  completedCount.innerHTML = document.querySelector('.task-content .finished').length;

}
*/

taskCount.innerHTML = numOfTask;
completedCount.innerHTML = completedTasks;

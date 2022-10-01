//displaying tasks
const taskList = document.getElementById("task-list");

//adding tasks
const monthField = document.getElementById("task-month");
const dayField = document.getElementById("task-day");
const yearField = document.getElementById("task-year");
const nameField = document.getElementById("new-task-name");
const catField = document.getElementById("new-task-category");

function addTask() {
  let newTaskMonth = monthField.value;
  let newTaskDay = dayField.value;
  let newTaskYear = yearField.value;
  let newTaskName = nameField.value;
  let newTaskCat = catField.value;
  let newTaskDate = new Date(newTaskYear, newTaskMonth, newTaskDay);
  localStorage.taskDates += newTaskDate.toDateString();

  let newDiv = document.createElement("div");
  newDiv.innerHTML =
    "<table><tr><td class='task-list-date'>" +
    newTaskDate.toDateString() +
    "</td><td style='display:flex'><div class='cat-icon " +
    newTaskCat +
    "-icon'></div>" +
    newTaskName +
    "</td></table>";

  taskList.appendChild(newDiv);
  nameField.value = "";
  console.log(taskList.innerHTML);
}

/*function addDate() {
  console.log("WAAAAAAAAAAAAAA!");

  let dateColor = "white";

  let month = userMonth.value;

  let date = userDate.value;

  let year = userYear.value;

  let userDay = new Date(year, month, date);

  localStorage.userDates += userDay.toDateString() + ", ";

  if (userDay < today) {
    dateColor = "gray";
  }
  usrSubmittedDates.innerHTML +=
    "<li style='color:" + dateColor + "'>" + userDay.toDateString() + "</li>";
}
*/

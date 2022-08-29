let today = new Date();

const dateExample = document.getElementById("date-example");
const hideShowBtn = document.getElementById("hide-show-btn");
const usrDateBtn = document.getElementById("user-date-btn");
const usrSubmittedDates = document.getElementById("user-submitted-dates");
let userMonth = document.getElementById("user-month");
let userDate = document.getElementById("user-day");
let userYear = document.getElementById("user-year");
let dateStringDiv = document.getElementById("date-string-div");
dateStringDiv.textContent = today.toDateString();

let timeStringDiv = document.getElementById("time-string-div");
timeStringDiv.textContent = today.toTimeString();

let toStringDiv = document.getElementById("to-string-div");
toStringDiv.textContent = today.toString();

function toggleExample() {
  if (dateExample.style.visibility === "visible") {
    dateExample.style.visibility = "hidden";
    hideShowBtn.textContent = "SHOW";
  } else {
    dateExample.style.visibility = "visible";
    hideShowBtn.textContent = "HIDE";
  }
}
function addDate() {
  console.log("WAAAAAAAAAAAAAA!");

  let month = userMonth.value;

  let date = userDate.value;

  let year = userYear.value;

  let userDay = new Date(year, month, date);

  usrSubmittedDates.innerText = userDay.toDateString();
}

hideShowBtn.addEventListener("click", toggleExample);
usrDateBtn.addEventListener("click", addDate);
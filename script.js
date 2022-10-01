let today = new Date();

const dateExample = document.getElementById("date-example");
const hideShowBtn = document.getElementById("hide-show-btn");
const usrDateBtn = document.getElementById("user-date-btn");
const usrSubmittedDates = document.getElementById("user-submitted-dates");
const prevSub = document.getElementById("previously-submitted");
const showPrev = document.getElementById("show-previous");
const clearListBtn = document.getElementById("clear-storage");
let userMonth = document.getElementById("user-month");
let userDate = document.getElementById("user-day");
let userYear = document.getElementById("user-year");
let dateStringDiv = document.getElementById("date-string-div");
dateStringDiv.textContent = today.toDateString();

let timeStringDiv = document.getElementById("time-string-div");
timeStringDiv.textContent = today.toTimeString();

let toStringDiv = document.getElementById("to-string-div");
toStringDiv.textContent = today.toString();

prevSub.innerHTML = localStorage.userDates;

function clearStorage() {
  localStorage.userDates = "";
  prevSub.innerHTML = localStorage.userDates;
}

function togglePrevious() {
  if (prevSub.style.display === "none") {
    prevSub.style.display = "block";
    showPrev.textContent = "Hide Previous";
    clearListBtn.style.display = "block";
  } else {
    prevSub.style.display = "none";
    showPrev.textContent = "Show Previous";
    clearListBtn.style.display = "none";
  }
}

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

hideShowBtn.addEventListener("click", toggleExample);
usrDateBtn.addEventListener("click", addDate);

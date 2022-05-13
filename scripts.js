const second = 1000;
const minute = 60 * second;
const hour = 60 * minute;
const day = 24 * hour;

let totalDifference;
let finalDate;
let intervalID;

if (localStorage.getItem("timer")) {
  finalDate = localStorage.getItem("timer");
  intervalID = setInterval(timer, 1000);
}

function start() {
  const date = document.querySelector("input").value;
  finalDate = new Date(date).getTime();
  localStorage.setItem("timer", finalDate);

  intervalID = setInterval(timer, 1000);
}

function timer() {
  let dateNow = new Date().getTime();
  totalDifference = finalDate - dateNow;

  const days = Math.floor(totalDifference / day);
  const hours = Math.floor((totalDifference % day) / hour) + 3;
  const minutes = Math.floor((totalDifference % hour) / minute);
  const seconds = Math.floor((totalDifference % minute) / second);

  document.querySelector(
    "h1"
  ).innerHTML = `${days} d ${hours} h ${minutes} m ${seconds} s`;
}

function stop() {
  document.querySelector("h1").innerText = "⏱️";
  clearInterval(intervalID);
  localStorage.removeItem("timer");
}

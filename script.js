const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const newYears = "1/1/2023";

function countdown() {
  const newYearDate = new Date(newYears);
  const currentDate = new Date();

  const totalSecond = (newYearDate - currentDate) / 1000;

  const days = Math.floor(totalSecond / 3600 / 24);
  const hours = Math.floor(totalSecond / 3600) % 24;
  const minutes = Math.floor(totalSecond / 60) % 24;
  const seconds = Math.floor(totalSecond) % 60;

  daysEl.innerHTML = days;
  hoursEl.innerHTML = hours;
  minsEl.innerHTML = minutes;
  secondsEl.innerHTML = seconds;

  //console.log(days, hours, minutes, seconds);
}

countdown();

setInterval(countdown, 1000);

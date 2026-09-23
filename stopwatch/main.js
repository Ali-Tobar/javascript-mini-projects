let seconds = 0;
let minutes = 0;
let hours = 0;

let timer;

function stopWatch() {
  seconds++;

  if (seconds == 60) {
    seconds = 0;
    minutes++;
  }

  if (minutes == 60) {
    minutes = 0;
    hours++;
  }

  displayTime();
}

function displayTime() {
  let displayHours = hours < 10 ? "0" + hours : hours;
  let displayMinutes = minutes < 10 ? "0" + minutes : minutes;
  let displaySeconds = seconds < 10 ? "0" + seconds : seconds;

  let fullStopwatch =
    displayHours + ":" + displayMinutes + ":" + displaySeconds;

  document.getElementById("stopwatch").textContent = fullStopwatch;
}

let start = document.getElementById("start");

start.addEventListener("click", function () {
  if (timer === undefined) {
    timer = setInterval(stopWatch, 1000);
  }
});

let pause = document.getElementById("Pause");

pause.addEventListener("click", function () {
  clearInterval(timer);
  timer = undefined;
});

let reset = document.getElementById("Reset");

reset.addEventListener("click", function () {
  clearInterval(timer);
  timer = undefined;

  seconds = 0;
  minutes = 0;
  hours = 0;

  displayTime();
});

displayTime();
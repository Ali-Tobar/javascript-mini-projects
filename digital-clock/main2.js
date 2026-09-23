function showClock() {
  let now = new Date();

  
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  hours = hours > 12 ? hours - 12 : hours;
  hours = hours === 0 ? 12 : hours;


  let fullTime = hours + ":" + minutes + ":" + seconds;
  console.log(fullTime);


  document.getElementById("clock").textContent = fullTime;
}


// setInterval(showClock, 1000);
// clearInterval(showClock);


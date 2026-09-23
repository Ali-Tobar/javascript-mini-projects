function clock() {
  let now = new Date();

  let hours = now.getHours();
  let Minutes = now.getMinutes();
  let scound = now.getSeconds();

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (Minutes < 10) {
    Minutes = "0" + Minutes;
  }
  if (scound < 10) {
    scound = "0" + scound;
  }
  
  hours = hours > 12 ? hours - 12 : hours;
  hours = hours === 0 ? 12 : hours;

   let fullTime = hours + ":" + Minutes + ":" + scound ;

  console.log(fullTime);
  document.getElementById("clock").textContent = fullTime;
}
 setInterval(clock, 1000);

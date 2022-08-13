const countDate = new Date("nov 5, 2022 19:00:00").getTime();

function newYears() {
  let now = new Date().getTime();
  let gap = countDate - now;

  let second = 1000;
  let minute = second * 60;
  let hour = minute * 60;
  let day = hour * 24;

  let d = Math.floor(gap / day);
  if (d < 10) {
    d = "0" + d;
  }
  let h = Math.floor((gap % day) / hour);
  if (h < 10) {
    h = "0" + h;
  }
  let m = Math.floor((gap % hour) / minute);
  if (m < 10) {
    m = "0" + m;
  }
  let s = Math.floor((gap % minute) / second);
  if (s < 10) {
    s = "0" + s;
  }

  document.getElementById("days").innerText = d;
  document.getElementById("hours").innerText = h;
  document.getElementById("minutes").innerText = m;
  document.getElementById("seconds").innerText = s;

  days.innertext("d");
}

setInterval(function () {
  newYears();
}, 1000);

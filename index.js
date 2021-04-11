window.onload = function () {
  var seconds = 00;
  var tens = 00;

  console.log(seconds);

  var appendSeconds = document.getElementById("seconds");
  var appendTens = document.getElementById("tens");
  var start = document.getElementById("button-start");
  var stop = document.getElementById("button-stop");
  var reset = document.getElementById("button-reset");

  var Interval;

  start.onclick = function () {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
  };

  stop.onclick = function () {
    clearInterval(Interval);
  };

  reset.onclick = function () {
    clearInterval(Interval);
    tens = 0;
    seconds = 0;
    appendSeconds.innerHTML = "00";
    appendTens.innerHTML = "00";
  };

  function startTimer() {
    tens++;

    if (tens <= 9) appendTens.innerHTML = `0${tens}`;

    if (tens > 9) appendTens.innerHTML = `${tens}`;

    if (tens > 99) {
      seconds++;

      if (seconds < 9) appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
    }

    if (seconds > 9) appendSeconds.innerHTML = seconds;

    console.log(`${seconds}:${tens}`);
  }
};

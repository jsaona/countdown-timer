  const countdown = setInterval(function() {
  const now = new Date().getTime();
  const then = new Date("Feb 21, 2020").getTime();

  const distance = then - now;

  // Time calculations
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result
  displayDay = document.getElementById('days').innerHTML = days;
  displayHour = document.getElementById('hours').innerHTML = hours;
  displayMinutes = document.getElementById('mins').innerHTML = minutes;
  displaySeconds = document.getElementById('secs').innerHTML = seconds;

  // If the count down is finished, text will be displayed
  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById("display-timer").innerHTML = "Time expired";
  }
}, 1000);


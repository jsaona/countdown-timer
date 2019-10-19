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



// Video Modal Variables
const getVideo = document.querySelectorAll('.video-get');
var getModalBoxVid = document.getElementById('video-modal-container');
var getModalVid = document.getElementById('modal-vid');

// Event Listener when Image is Clicked
getVideo.forEach(function (getVideo) {
    getVideo.addEventListener('click', function(event) {

        getModalBoxVid.style.display = 'block';
        getModalVid.src = event.target.dataset.src;
    });
});

// MODAL TOGGLE 
const getModalToggle = document.querySelectorAll('.modal-container__toggle--icon');

// Removes Video Modal Box is Clicked
getModalToggle.forEach(function (getModalToggle) {
    getModalToggle.addEventListener('click', function() {
        getModalBoxVid.style.display = "none";
        getModalVid.src = "";
    });
});

// Removes Video Modal Box whenever a random spot is clicked
window.onclick = function(event) {
    if (event.target == getModalBoxVid) {
        getModalBoxVid.style.display = "none";
        getModalVid.src = "";
    };
};




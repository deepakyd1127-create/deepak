// Countdown + Auto Redirect
// Countdown timer: 60 minutes
let time = 60 * 60; // 60 minutes in seconds
const timerElement = document.getElementById("timer");

function updateTimer() {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
  timerElement.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  if (time > 0) {
    time--;
  }
}

setInterval(updateTimer, 1000);

// Button action
document.getElementById("joinBtn").addEventListener("click", function() {
  fbq('track', 'Lead'); // Pixel Lead event
  window.location.href = "https://t.me/+zt-fhc3n3ywyMWQ1"; // apna channel link yaha daal
});

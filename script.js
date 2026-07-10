let timeLeft = 5;
const timerElement = document.getElementById("timer");

const countdown = setInterval(() => {
  timeLeft--;
  timerElement.textContent = timeLeft;
  if (timeLeft <= 0) {
    clearInterval(countdown);
    window.location.href = "https://t.me/+Yl-HebP3T_gxNDc1";
  }
}, 1000);

// Pixel events for both buttons
document.querySelectorAll(".btn").forEach(button => {
  button.addEventListener("click", () => {
    fbq('track', 'Lead');
  });
});

// Auto redirect after 5 seconds if no button clicked
let redirectLink = "https://t.me/+zt-fhc3n3ywyMWQ1";
let timer = 5;

let countdown = setInterval(() => {
  document.getElementById("timer").innerText = `Redirecting in ${timer} seconds...`;
  timer--;
  if (timer < 0) {
    clearInterval(countdown);
    window.location.href = redirectLink;
  }
}, 1000);

// Track button click with Pixel
document.querySelector(".join-btn").addEventListener("click", () => {
  fbq('track', 'ButtonClick');
});

const toggleBtn = document.getElementById("toggle");
const body = document.getElementById("body");
const clock = document.getElementById("clock");

// Toggle dark/light mode
toggleBtn.addEventListener("click", () => {
  const isDark = body.classList.contains("bg-gray-900");
  if (isDark) {
    body.classList.remove("bg-gray-900", "text-white");
    body.classList.add("bg-gray-100", "text-gray-900");
    clock.classList.remove("bg-gray-800");
    clock.classList.add("bg-white");
  } else {
    body.classList.add("bg-gray-900", "text-white");
    body.classList.remove("bg-gray-100", "text-gray-900");
    clock.classList.add("bg-gray-800");
    clock.classList.remove("bg-white");
  } 
});

// Update clock
function updateClock() {
  const now = new Date();
  /*  const h = String(now.getHours()).padStart(2, "0");
      const m = String(now.getMinutes()).padStart(2, "0");
      const s = String(now.getSeconds()).padStart(2, "0");
      clock.textContent = `${h}:${m}:${s}`; */
  //Shortest Way
  document.getElementById("clock").textContent = now.toLocaleTimeString();
}

setInterval(updateClock, 1000);
updateClock();

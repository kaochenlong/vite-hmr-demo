const el = document.querySelector("#run-mode")
if (el) {
  // Live Server port 5500 by default
  el.textContent = window.location.port == "5500" ? "Live Server" : "Vite"
  el.classList.remove("hidden")
}

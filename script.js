// Add an event listener to the button with id="swap"
document.getElementById("swap").addEventListener("click", swapTheme);

function swapTheme() {
  const app = document.getElementById("app");
  const button = document.getElementById("swap");

  // Check the current theme and toggle classes
  if (app.classList.contains("day")) {
    app.classList.remove("day");
    app.classList.add("night");

    button.classList.remove("button_day");
    button.classList.add("button_night");

    // Optionally update the button text
    button.textContent = "Switch to Light Theme";
  } else {
    app.classList.remove("night");
    app.classList.add("day");

    button.classList.remove("button_night");
    button.classList.add("button_day");

    // Optionally update the button text
    button.textContent = "Switch to Dark Theme";
  }
}

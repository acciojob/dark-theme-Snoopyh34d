document.getElementById("swap").addEventListener("click", swapTheme);

function swapTheme() {
  const app = document.getElementById("app"); // Main element
  const button = document.getElementById("swap"); // Button element

  // Check the current theme and toggle
  if (app.classList.contains("day")) {
    app.classList.remove("day");
    app.classList.add("night");

    button.classList.remove("button_day");
    button.classList.add("button_night");

    // Optional: Change button text
    button.textContent = "Switch to Light Theme";
  } else {
    app.classList.remove("night");
    app.classList.add("day");

    button.classList.remove("button_night");
    button.classList.add("button_day");

    // Optional: Change button text
    button.textContent = "Switch to Dark Theme";
  }
}

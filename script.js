//your code here

document.getElementById("swap").addEventListener("click", swapTheme);

function swapTheme() {
  const app = document.getElementById("app");
  const button = document.getElementById("swap");

  // Toggle the 'night' class on the #app div
  app.classList.toggle("night");

  // Toggle the 'button_night' class on the #swap button
  button.classList.toggle("button_night");

  // Optional: Change button text to indicate the current theme
  if (app.classList.contains("night")) {
    button.textContent = "Switch to Light Theme";
  } else {
    button.textContent = "Switch to Dark Theme";
  }
}

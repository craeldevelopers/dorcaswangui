function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
// Add exit button to close the menu
function addExitButton() {
  const menu = document.querySelector(".menu-links");
  const exitButton = document.createElement("button");
  exitButton.innerHTML = "&#10005;"; // X symbol
  exitButton.classList.add("exit-button");
  exitButton.style.cssText = `
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    color: #dac5a7;
    font-size: 1.5rem;
    cursor: pointer;
  `;
  exitButton.addEventListener("click", toggleMenu);
  menu.insertBefore(exitButton, menu.firstChild);
}

// Call the function to add the exit button
addExitButton();

// Ensure all links are clickable and close the menu when clicked
document.addEventListener('DOMContentLoaded', function() {
  const menuLinks = document.querySelectorAll('.menu-links a');
  menuLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.stopPropagation(); // Prevent the click from bubbling up to parent elements
      const menu = document.querySelector(".menu-links");
      const icon = document.querySelector(".hamburger-icon");
      if (menu.classList.contains("open")) {
        toggleMenu(); // Close the menu after clicking a link
      }
    });
  });
});

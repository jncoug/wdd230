document.querySelector("#year").innerHTML = `&copy; Joseph Harris ${new Date()
  .getFullYear()
  .toString()}, USA`;

document.querySelector(
  "#lastModified"
).textContent = `Last Modified: ${document.lastModified}`;

// hamburger button code
const hamburgerButton = document.querySelector("#hamburger-button");
const nav = document.querySelector("nav");

hamburgerButton.addEventListener("click", () => {
  // Toggle the visibility of the navigation links
  nav.classList.toggle("show");
});

// Select the elements
const paragraph = document.querySelector("#myText");
const button = document.querySelector("#toggleBtn");

// On button click, toggle the highlight class
button.addEventListener("click", function() {
  paragraph.classList.toggle("highlight");
});

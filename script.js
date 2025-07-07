// Toggle the bulb image on click
const bulb = document.getElementById("bulb");
let isOn = false;

bulb.addEventListener("click", function() {
  if (isOn) {
    bulb.src = "https://www.w3schools.com/js/pic_bulboff.gif";
  } else {
    bulb.src = "https://www.w3schools.com/js/pic_bulbon.gif";
  }
  isOn = !isOn;
});

// Change smiley on mouseover and reset on mouseout
const smiley = document.getElementById("smiley");

smiley.addEventListener("mouseover", function() {
  smiley.textContent = "😲";
});

smiley.addEventListener("mouseout", function() {
  smiley.textContent = "🙂";
});

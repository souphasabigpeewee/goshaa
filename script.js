document.addEventListener("DOMContentLoaded", function () {
  var overlay = document.getElementById("overlay");

  overlay.addEventListener("click", function () {
    overlay.style.opacity = "0"; // Set opacity to 0
    setTimeout(function () {
      overlay.style.display = "none"; // Hide the overlay after the transition
      document.body.style.overflow = "auto"; // Restore scrolling
    }, 500); 
  });
});


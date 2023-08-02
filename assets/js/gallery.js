$(document).ready(function() {
  $(".gallery").on("dragstart", function(event) { event.preventDefault(); });

  var gallery = document.querySelector(".gallery");
  var initialX;
  var currentX;

  gallery.addEventListener("touchstart", function(event) {
    var touch = event.touches[0];
    initialX = touch.clientX;
    currentX = initialX;
  });

  gallery.addEventListener("touchmove", function(event) {
    var touch = event.touches[0];
    currentX = touch.clientX;
    var diffX = currentX - initialX;
    gallery.scrollLeft -= diffX;
    initialX = currentX;
  });

  gallery.addEventListener("touchend", function(event) {
    // You can add more snapping behavior or inertia effects here if desired.
  });
});
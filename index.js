function startTrafficSignal() {
  var green = document.getElementById("green");
  var yellow = document.getElementById("yellow");
  var red = document.getElementById("red");

  green.style.opacity = 1;

  setTimeout(function () {
    green.style.opacity = 0.3;
    red.style.opacity = 0.3;
    yellow.style.opacity = 1;
  }, 5000);

  setTimeout(function () {
    green.style.opacity = 0.3;
    red.style.opacity = 1;
    yellow.style.opacity = 0.3;
  }, 7000);

  setTimeout(function () {
    green.style.opacity = 1;
    red.style.opacity = 0.3;
    yellow.style.opacity = 0.3;
  }, 12000);
  var timer = setInterval(function () {
    startTrafficSignal();
  }, 12000);
}
startTrafficSignal();

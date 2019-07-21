let screen = document.getElementById("screen");
function addNum(num) {
  screen.value = screen.value + num;
}
function equal() {
  screen.value = eval(screen.value);
}
function clean() {
  screen.value = "";
}
function back() {
  screen.value = screen.value.substring(0, screen.value.length - 1);
}

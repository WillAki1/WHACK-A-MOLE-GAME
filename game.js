var count = 0;
var timer;

function startGame() {
  count = 0;
  document.getElementById("number").innerHTML = count;

  timer = setInterval(function () {
    count++;
    document.getElementById("number").innerHTML = count;
  }, 1000);
}

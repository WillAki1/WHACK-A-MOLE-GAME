let time = 0;
let score = 0;
let gameTimer = null;
let moleTimer = null;

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

function showRandomMole() {
  holes.forEach((hole) => hole.classList.remove("active"));

  const randomIndex = Math.floor(Math.random() * holes.length);
  holes[randomIndex].classList.add("active");
}

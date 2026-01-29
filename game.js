var count = 0;
var score = 0;
var timer;
var moleTimer;

var holes = document.querySelectorAll(".hole");
var numberBox = document.getElementById("number");
var scoreBox = document.getElementById("score");

function startGame() {
  count = 0;
  score = 0;

  numberBox.innerHTML = count;
  scoreBox.innerHTML = "Score: " + score;

  if (timer) {
    clearInterval(timer);
  }

  if (moleTimer) {
    clearInterval(moleTimer);
  }

  timer = setInterval(function () {
    count = count + 1;
    numberBox.innerHTML = count;
  }, 1000);

  moleTimer = setInterval(function () {
    showRandomMole();
  }, 800);
}

function showRandomMole() {
  var i = 0;

  while (i < holes.length) {
    holes[i].classList.remove("active");
    i = i + 1;
  }

  var randomHole = Math.floor(Math.random() * holes.length);
  holes[randomHole].classList.add("active");
}

var j = 0;
while (j < holes.length) {
  holes[j].onclick = function () {
    if (this.classList.contains("active")) {
      score = score + 1;
      scoreBox.innerHTML = "Score: " + score;
      this.classList.remove("active");
    }
  };
  j = j + 1;
}

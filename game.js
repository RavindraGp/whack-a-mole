let score = 0;
let interval;
let countDownInterval;
const totalTime = 2 * 1000 * 60;
window.addEventListener("load", function () {
  initGame();
});

function initGame() {
  const nodeList = document.querySelectorAll(".mole-new");
  for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].addEventListener("click", function (event) {
      if (event.target.classList.contains("active")) {
        score++;
        setScoreValue(score);
      }
    });
  }
  // document.querySelectorAll(".mole-new").forEach(function(element){
  //   element.addEventListener("click", (event) => {
  //     if (event.target.classList.contains("active")) {
  //       score++;
  //       setScoreValue(score);
  //     }
  //   });
  // });
}

function startGame() {
  setCountDownValue("00:00");
  stopGame();
  countDownTimer();
  //   setTimeout(() => {
  //     stopGame();
  //     alert("GAME OVER");
  //   }, totalTime);
  interval = setInterval(function () {
    const moleElements = document.getElementsByClassName("mole-new");
    const random = parseInt(Math.random() * moleElements.length);
    removeActiveClass();
    moleElements[random].classList.add("active");
  }, 700);
}

function stopGame() {
  if (!!interval) {
    clearInterval(interval);
    clearInterval(countDownInterval);
    interval = null;
    countDownInterval = null;
    removeActiveClass();
  }
}

function resetGame() {
  removeActiveClass();
  score = 0;
  stopGame();
  setScoreValue(0);
  setCountDownValue("00:00");
}

function removeActiveClass() {
  const boxes = document.getElementsByClassName("mole-new");

  for (let i = 0; i < boxes.length; i++) {
    boxes[i].classList.remove("active");
  }
}

function setScoreValue(score) {
  const scoreElement = document.getElementById("score");
  scoreElement.innerHTML = score;
}

function setCountDownValue(count) {
  document.getElementById("timeleft").innerHTML = count;
}

function countDownTimer() {
  // Update the count down every 1 second
  let counter = 1000;
  countDownInterval = setInterval(function () {
    var timeLeft = totalTime - counter;

    var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    setCountDownValue(minutes + ":" + seconds + "s ");
    counter = counter + 1000;
    if (timeLeft < 0) {
      clearInterval(countDownInterval);
      setCountDownValue("00:00");
      alert("GAME OVER");
      stopGame();
    }
  }, 1000);
}

let score = 0;
let interval;
let countDownInterval;
const totalTime = 2 * 1000 * 60;
window.addEventListener("load", () => {
  initGame();
});

initGame = () => {
  document.querySelectorAll(".mole-container").forEach((element) => {
    element.addEventListener("click", (event) => {
      if (event.target.classList.contains("active")) {
        score++;
        setScoreValue(score);
      }
    });
  });
};

startGame = () => {
  setCountDownValue("00:00");
  stopGame();
  countDownTimer();
  //   setTimeout(() => {
  //     stopGame();
  //     alert("GAME OVER");
  //   }, totalTime);
  interval = setInterval(() => {
    const random = parseInt(Math.random() * 8);
    removeActiveClass();
    const moleElements = document.getElementsByClassName("mole-container");
    moleElements[random].classList.add("active");
  }, 700);
};

stopGame = () => {
  if (!!interval) {
    clearInterval(interval);
    clearInterval(countDownInterval);
    interval = null;
    countDownInterval = null;
    removeActiveClass();
  }
};

resetGame = () => {
  removeActiveClass();
  score = 0;
  stopGame();
  setScoreValue(0);
  setCountDownValue("00:00");
};

removeActiveClass = () => {
  const boxes = document.getElementsByClassName("mole-container");

  for (let i = 0; i < boxes.length; i++) {
    boxes[i].classList.remove("active");
  }
};

setScoreValue = (score) => {
  const scoreElement = document.getElementById("score");
  scoreElement.innerHTML = score;
};

setCountDownValue = (count) => {
  document.getElementById("timeleft").innerHTML = count;
};

countDownTimer = () => {
  // Update the count down every 1 second
  let counter = 1000;
  countDownInterval = setInterval(() => {
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
};

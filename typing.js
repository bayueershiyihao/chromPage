const typingGame = document.querySelector(".typingGame");
const answer = document.querySelector(".answer");
const question = document.querySelector(".question");
const typingGameForm = document.querySelector(".typingGame form");
const timer = document.querySelector(".timers");
const score = document.querySelector(".scores");

const typingWords = [
  "옛뿌리",
  "섟",
  "샛검불",
  "널음새",
  "불통거리다",
  "어거리풍년",
  "넌출",
  "허릅숭이",
  "새살거리다",
  "벼리다",
  "복성스럽다",
  "보늬",
  "덜퍽부리다",
  "덧기둥",
  "돌꼇잠",
  "두바퀴굴림",
  "dormant",
  "equivocal",
  "substantive",
];
let pointScore = 0;
let gameTimerSet = 18;
let timerInterval;

function timerCount() {
  timerInterval = setInterval(gameTimer, 1000);
}

function resultGame(text) {
  const random = Math.floor(Math.random() * typingWords.length);
  if (text == question.innerText) {
    question.innerText = typingWords[random];
    pointScore++;
    gameTimerSet += 1;
    gameScore(pointScore);
    if (typingWords.length < 1) {
      gameOver();
    }
  }
  typingWords.splice(random, 1);
}

function submitHandler(e) {
  e.preventDefault();
  const value = answer.value;
  resultGame(value);
  answer.value = "";
}

function gameOver() {
  typingGame.innerHTML = `
    <h1>Time ran out</h1>
    <h4>your final score is ${pointScore}
    <h4><button onclick="location.reload()">Reload</button>`;
}

function gameTimer() {
  gameTimerSet--;
  timer.innerText = gameTimerSet;

  if (gameTimerSet === 0) {
    clearInterval(timerInterval);
    gameOver();
  }
}

function gameScore(value) {
  score.innerText = value;
}

function init() {
  typingGameForm.addEventListener("submit", submitHandler);
}

init();

let computerChoice;
let pcHand;

let scoreboard = {
  wins: 0,
  loses: 0,
  draws: 0,
};

let stats = {
  rock: 0,
  paper: 0,
  scissors: 0,
};

//alert response function

function choice() {
  if (computerChoice === 1) {
    pcHand = 'Rock';
  } else if (computerChoice === 2) {
    pcHand = 'Paper';
  } else if (computerChoice === 3) {
    pcHand = 'Scissors';
  } else pcHand = undefined;
}

// common random number function simplified
function computerNumber() {
  return (computerChoice = Math.floor(Math.random() * 3) + 1);
}
//mega function for roshambo
function result(choice) {
  if (choice == computerChoice) {
    scoreboard.draws = scoreboard.draws + 1;
    alert(`Your opponent also played ${pcHand}, you DRAW.`);
  } else if ((choice == 1 && computerChoice == 2) || (choice == 2 && computerChoice == 3) || (choice == 3 && computerChoice == 2)) {
    scoreboard.loses = scoreboard.loses + 1;
    alert(`Your opponent played ${pcHand}, you LOST!`);
  } else if ((choice == 1 && computerChoice == 3) || (choice == 2 && computerChoice == 1) || (choice == 3 && computerChoice == 1)) {
    scoreboard.wins = scoreboard.wins + 1;
    alert(`Your opponent played ${pcHand}, You WON!`);
  } else {
    alert('no choice selected');
  }
  console.log(`you chose ${choice} and  computer chose ${computerChoice}`);
}

//scoreboard display function

function showScoreboard() {
  getInfo();
  alert(`You currently have ${scoreboard.wins} WINS, ${scoreboard.draws} DRAWS, and ${scoreboard.loses} LOSES.`);
}

//stat functions

function updateStats(selector) {
  if (selector === 1) {
    stats.rock = stats.rock + 1;
  } else if (selector === 2) {
    stats.paper = stats.paper + 1;
  } else if (selector === 3) {
    stats.scissors = stats.scissors + 1;
  }
}
function displayStats() {
  getInfo();
  alert(`You've used ROCK ${stats.rock} times, PAPER ${stats.paper} times, and SCISSORS ${stats.scissors} times.`);
}

//set local function group

function saveInfo() {
  localStorage.setItem('stats', JSON.stringify(stats));
  localStorage.setItem('scores', JSON.stringify(scoreboard));
}

function getInfo() {
  stats = JSON.parse(localStorage.getItem('stats'));
  scoreboard = JSON.parse(localStorage.getItem('scores'));
}

//button press function for refactoring

function buttonPress(buttonNumber) {
  getInfo();
  computerNumber();
  choice();
  result(buttonNumber);
  updateStats(buttonNumber);
  saveInfo();
}

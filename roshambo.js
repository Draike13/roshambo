let computerChoice;
let pcHand;
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
    alert(`Your opponent also played ${pcHand}, you DRAW.`);
  } else if ((choice == 1 && computerChoice == 2) || (choice == 2 && computerChoice == 3) || (choice == 3 && computerChoice == 2)) {
    alert(`Your opponent played ${pcHand}, you LOST!`);
  } else if ((choice == 1 && computerChoice == 3) || (choice == 2 && computerChoice == 1) || (choice == 3 && computerChoice == 1)) {
    alert(`Your opponent played ${pcHand}, You WON!`);
  } else {
    alert('no choice selected');
  }
  console.log(`you chose ${choice} and  computer chose ${computerChoice}`);
}

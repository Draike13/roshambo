let computerChoice;

// common random number function simplified
function computerNumber() {
  return (computerChoice = Math.floor(Math.random() * 3) + 1);
}
//mega function for roshambo
function result(choice) {
  if (choice == 1 && computerChoice == 1) {
    alert('draw');
  } else if (choice == 1 && computerChoice == 2) {
    alert('you lose');
  } else if (choice == 1 && computerChoice == 3) {
    alert('you win');
  } else if (choice == 2 && computerChoice == 1) {
    alert('you win');
  } else if (choice == 2 && computerChoice == 2) {
    alert('draw');
  } else if (choice == 2 && computerChoice == 3) {
    alert('you lose');
  } else if (choice == 3 && computerChoice == 1) {
    alert('you win');
  } else if (choice == 3 && computerChoice == 2) {
    alert('you lose');
  } else if (choice == 3 && computerChoice == 3) {
    alert('draw');
  } else {
    alert('no choice selected');
  }
  console.log(`you chose ${choice} and  computer chose ${computerChoice}`);
}

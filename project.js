// 1. Deposit some money
// 2. Determine number of lines to bet on
// 3. Collect a bet amount
// 4. Spin the slot machine
// 5. Check if the user won
// 6. Give the user their winnings
// 7. Play again

const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOL_COUNT = {
  A: 2,
  B: 4,
  C: 6,
  D: 8,
};

const SYMBOL_VALUES = {
  A: 5,
  B: 4,
  C: 3,
  D: 2,
};

const deposit = () => {
  while (true) {
    const depositAmount = prompt("Enter a deposit amount: ");
    const numberDepositAmount = parseFloat(depositAmount);

    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
      console.log("Invalid Deposit Amount, try again");
    } else return numberDepositAmount;
  }
};

const getNumberOfLines = () => {
  while (true) {
    const lines = prompt("Enter the number of lines to bet on(1-3): ");
    const getNumberOfLines = parseFloat(lines);

    if (
      isNaN(getNumberOfLines) ||
      getNumberOfLines <= 0 ||
      getNumberOfLines > 3
    ) {
      console.log("Invalid Deposit Amount, try again");
    } else return getNumberOfLines;
  }
};

const getBet = (balance, lines) => {
  while (true) {
    const bet = prompt("Enter the total bet: ");
    const getNumberBet = parseFloat(bet);

    if (
      isNaN(getNumberBet) ||
      getNumberBet <= 0 ||
      getNumberBet > balance / lines
    ) {
      console.log("Invalid Bet, try again");
    } else return getNumberBet;
  }
};

const spin = () => {
  const symbols = [];
  for (const [symbol, count] of Object.entries(SYMBOL_COUNT)) {
    for (let i = 0; i < count; i++) {
      symbols.push(symbol);
    }
  }
  console.log(symbols);
};

spin();

let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance, getNumberOfLines);

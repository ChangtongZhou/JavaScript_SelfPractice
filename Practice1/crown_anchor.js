const readline = require('readline');

class Game {
  constructor(totalAmount, sqrs) {
    this.totalAmount = totalAmount;
    this.sqrs = sqrs;
    // Note every new round reset states
    this.states = {"crown": 0, "anchor": 0, "heart": 0, "club": 0, "spade": 0, "diamond": 0};
    this.winAmount = 0;
    this.betAmount = 0;
    this.matchRes = [];
    this.isSufficent = true;
  }

  isValidSquare(sqr) {
    if (!(sqr in this.states)) {
      console.log("Please enter a valid square name! \n");
      return false;
    } else {
      return true;
    }
  }

  betState(sqr, amount) {
    this.betAmount += amount;
    if(this.totalAmount < amount || this.totalAmount < this.betAmount) {
      console.log(`You don't have anough money to bet on ${sqr}, please recharge to continue.`);
      this.isSufficent = false;
    } else {
      this.states[sqr] += amount;
    }
  }

  // Get a random number from 0 to 5
  getRandomInt() {
    return Math.floor(Math.random() * (5 - 0 + 1)) + 0;
  }

  getRandomSquare() {
    // Roll 3 dices
    for (let i = 0; i < 3; i++) {
      var index = this.getRandomInt();
      this.matchRes.push(this.sqrs[index]);
    }
    console.log(`Dice result: ${this.matchRes}`);
    return this.matchRes;
  }

  matchSqr() {
    var found = false;
    var that = this; // resolve scoping problem for the following callback function
    this.matchRes.forEach(function(sqr) {
      if (that.states[sqr] > 0 ) {
        that.winAmount += that.states[sqr];
        found = true;
      }
    });

    // Check if there are matching dices
    if (!found) {
      this.totalAmount -= this.betAmount;
    } else {
      this.totalAmount += this.winAmount;
    }
  }

  getSufficiency() {
    return this.isSufficent;
  }

  getTotalAmount() {
    return this.totalAmount;
  }

  getWinAmount() {
    return this.winAmount;
  }

}

let sqrs = {0: "crown", 1: "anchor", 2: "heart", 3: "club", 4: "spade", 5: "diamond"};
let winAmount = 0;
let totalAmount;

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Welcome to the game of Crown and Anchor!");

// Use Promist to run multiple console prompts and inputs asynchronsly
const getInputTotal = () => {
  return new Promise((resolve, reject) => {
    rl.question("Please enter the total amount of money (cents) you want to bet today. \n", (ans) => {
      var res = Number(ans.trim());
      resolve(res);
    })
  })
}

const getRounds = () => {
  return new Promise((resolve, reject) => {
    rl.question("Please enter the number of rounds you want to play. \n", (ans) => {
      var res = Number(ans.trim());
      resolve(res);
    })
  })
}

const setBetState = () => {
  return new Promise((resolve, reject) => {
    rl.question("Pleas enter a square name and the amount of money you want to bet on it. \n", (ans) => {
      var arr = ans.trim();
      resolve(arr);
    })
  })
}

/**
  Main Tester
*/
const main = async ()=> {
  let totalAmount = await getInputTotal();
  let origin = totalAmount;
  let num = await getRounds();

  for (let i = 0; i < num; i++) {
    let myGame = new Game(totalAmount, sqrs);
    if (totalAmount <= 0) {
      console.log("You don't have anough money for betting, please recharge to continue.");
      break;
    }

    console.log("Round ", i+1);

    let arr = await setBetState();
    let square = arr.split(" ")[0];
    let amount = Number(arr.split(" ")[1]);

    if (!myGame.isValidSquare(square)) break;
    myGame.betState(square, amount);
    if (myGame.getSufficiency() == false) break;

    arr = await setBetState();
    square = arr.split(" ")[0];
    amount = Number(arr.split(" ")[1]);
    if (!myGame.isValidSquare(square)) break;
    myGame.betState(square, amount);
    if (myGame.getSufficiency() == false) break;

    arr = await setBetState();
    square = arr.split(" ")[0];
    amount = Number(arr.split(" ")[1]);
    if (!myGame.isValidSquare(square)) break;
    myGame.betState(square, amount);
    if (myGame.getSufficiency() == false) break;

    myGame.getRandomSquare();
    myGame.matchSqr();
    console.log(`You have bet: ${myGame.betAmount} cents`);
    if (myGame.winAmount > 0) console.log(`You have won: ${myGame.winAmount} cents`);
    else console.log("Opps, you didn't win anything during this round ");

    console.log(`Your current balance is: ${myGame.totalAmount} cents \n`);
    totalAmount = myGame.getTotalAmount();
  }

  if (totalAmount < origin) {
    console.log("Oh no! You have lost ", origin-totalAmount, " cents");
  } else if (totalAmount > origin) {
    console.log("Congrates! You have won ", totalAmount-origin, " cents");
  } else {
    console.log("You didn't gain or lose any money.")
  }
  console.log(`Your balance now is: ${totalAmount} cents \n`);
  console.log("It's the end of your rounds, please try again. \n");

  rl.close();
}

main();

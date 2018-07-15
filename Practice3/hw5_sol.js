
class Card {
  constructor(rank, suit, color) {
    this.rank = rank;
    this.suit = suit;
    this.color = color;
  }
}

class CardGame {
  constructor() {
    this.deck = [];
    this.printDeck1 = [];
    const suits = {'spade': 'black', 'heart': 'red', 'diamond': 'red', 'club': 'black'};
    const ranks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

      for(let suit in suits ){
        for (let i in ranks) {
          let card = new Card(ranks[i], suit, suits[suit]);
          this.deck.push(card);
        }
      }
  }

  // Randomize in each color
  shuffleColor(deck) {
    let shuffledDeck = [], unitDeck = [];
    let i = 0;
    while (i < deck.length) {
      let unitDeck = [];
      while(i === 0 || (i+1) % 13 !== 0) {
        unitDeck.push(deck[i]);
        i++;
      }
      unitDeck.push(deck[i]);
      shuffledDeck.push(...this.shuffleAcross(unitDeck)); //  Array spread concatination
      i++;
    }
    return shuffledDeck;
  }

  // Using Fisher-Yates Shuffle across the given deck
   shuffleAcross(deck) {
     // const {deck} = this; // Object Destructuring
     let len = deck.length, i;
     while (len) {
       i = Math.floor(Math.random() * len--);
       [deck[len], deck[i]] = [deck[i], deck[len]]; // swap between two card
     }
     // return this;
     return deck;
   }


   printFormat1(deck) {
     let output = "";
     for(let i = 0; i < deck.length; i++) {
       if ((i + 1) % 13 === 0){
         output += `${deck[i].rank} of ${deck[i].suit}s.\n`;
       } else {
         output += `${deck[i].rank} of ${deck[i].suit}s, `;
       }
     }
     return output;
   }

   printFormat2(deck) {
     let output = "";
     for(let i = 0; i < deck.length; i++) {
       if ((i + 1) % 13 === 0){
         output += `${deck[i].suit}s - ${deck[i].rank}.\n`;
       } else {
         output += `${deck[i].suit}s - ${deck[i].rank}, `;
       }
     }
     return output;

   }


}

let game = new CardGame();
console.log("Before shuffling: ");
console.log("Print out deck in format 1: ");
console.log(game.printFormat1(game.deck));
console.log("Current deck size: ", game.deck.length, "\n");
console.log("\n");

let colorRandomDeck = game.shuffleColor(game.deck);
console.log("After shuffling among each color/suit: ");
console.log(game.printFormat2(colorRandomDeck));
console.log("Current deck size: ", colorRandomDeck.length, "\n");
console.log("\n");

let myDeck = game.shuffleAcross(game.deck);
console.log("After shuffling across the deck: ");
console.log(game.printFormat2(myDeck));
console.log("Current deck size: ", myDeck.length, "\n");
console.log("\n");

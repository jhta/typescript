const sum = (x:number, y:number):number => x + y

function mult(x:number, y?:number):number|null {
  if (!y) return null
  return x * y
} 

interface IRectangle {
  width:number
  height?:number
}

function getArea({ width, height}:IRectangle):number {
  if (!height) return  width * width
  return width * height
}

//this


interface Card {
  suit: string;
  card: number;
}
interface Deck {
  suits: string[];
  cards: number[];
  createCardPicker(this: Deck): () => Card;
}
let deck: Deck = {
  suits: ["hearts", "spades", "clubs", "diamonds"],
  cards: Array(52),
  // NOTE: The function now explicitly specifies that its callee must be of type Deck
  createCardPicker: function(this: Deck) {
      return () => {
          let pickedCard = Math.floor(Math.random() * 52);
          let pickedSuit = Math.floor(pickedCard / 13);

          return {suit: this.suits[pickedSuit], card: pickedCard % 13};
      }
  }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();


console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
const deck = createDeck();
console.log(deck);



function createDeck() {

    class Card {
        constructor(name, suit, value) {
            this.name = name;
            this.suit = suit;
            this.value = value;
        }
    }
    
    const deck = new Array();
    const suits = ["clubs", "hearts", "dimands", "spades"];
    const faceCards = { ace: 11,jack: 10, queen: 10, king: 10 };
    
    suits.forEach(suit => {
        let value = 2;

        while(value <= 10) {
            deck.push(new Card(`${value}of${suit}`, suit, value) );
            value++;
        }
    
        for(const [key, value] of Object.entries(faceCards)) {
           deck.push(new Card(`${key}of${suit}`, suit, value)); 
        }
    });
    return deck;
}




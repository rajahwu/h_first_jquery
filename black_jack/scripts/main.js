const deck = createDeck();
const usedCards = new Array();
const hand = {
    cards: new Array(),
    current_total: 0,
    sumCardTotal: function () {
        this.current_total = 0;
        this.cards.forEach(card => {
            this.current_total += card.value;
        })
           $("#hdrTotal").html("Total: " + this.current_total);
    }
}
$(document).ready(function() {
    $("#btnDeal").click(function() {
        deal();
        // $(this).toggle();
    })
})

function deal() {
    for (let i = 0; i<2; i++) {
        hit();
    }
}

function hit() {
let good_card = false;
const index = getRandom(52);

if(!usedCards.includes(index)) {
    good_card = true;

    const card = deck[index];
    usedCards.push(index);

    hand.cards.push(card);
    const $d = $("<div>");
    $d.addClass("current_hand")
    .appendTo("#my_hand")
    .fadeIn()
    .fadeIn("slow");

    $("<img>").appendTo($d)
        .attr('src', card.src)
    hand.sumCardTotal()
} while(!good_card);
good_card = false;
}

function getRandom(num) {
return Math.floor(Math.random() * num);
}

function createDeck() {
    class Card {
        constructor(name, suit, value, src) {
            this.name = name;
            this.suit = suit;
            this.value = value;
            this.src = src;
        }
    }
    
    const deck = new Array();
    const suits = ["clubs", "hearts", "diamonds", "spades"];
    const faces = { ace: 11, jack: 10, queen: 10, king: 10 };
    const numbers = ["two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
    
    suits.forEach(suit => {
        let value = 2;

        while(value <= 10) {
            const src = `./images/cards/${capitalize(suit)}/${capitalize(numbers[value - 2])}.jpg`;
            deck.push(new Card(`${value}of${suit}`, suit, value, src));
            value++;
        }
        
        for(const [key, value] of Object.entries(faces)) {
            const src = `./images/cards/${capitalize(suit)}/${capitalize(key)}.jpg`;
            deck.push(new Card(`${key}of${suit}`, suit, value, src)); 
        }
        })

    return deck;
}
        
function capitalize(str) {
    const lower = str.toLowerCase();
    return str.charAt(0).toUpperCase() + lower.slice(1);
}
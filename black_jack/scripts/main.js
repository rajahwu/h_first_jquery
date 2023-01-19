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

           if (this.current_total > 21) {
                $("#btnStick").trigger("click");
                $("#imgResult").attr('src', './images/x2.png');
                $("#hdrResult").html("BUST!").attr('class', 'lose');
           } else if (this.current_total == 21) {
                $("#btnStick").trigger("click");
                $("#imgResult").attr('src', './images/check.png');
                $("#hdrResult").html("BlackJack!").attr('class', 'win');
           } else if (this.current_total < 21 && this.cards.length == 5) { 
                $("#btnStick").trigger("click");
                $("#imgResult").attr('src', './images/check.png');
                $("#hdrResult").html("5 card trick!").attr('class', 'win');
           }
           return this.current_total;
    }
}
$(document).ready(function() {
    $("#btnDeal").click(function() {
        deal();
        $(this).toggle();
        $("#btnHit").toggle();
        $("#btnStick").toggle();
    });
    $("#btnHit").click(function() {
        hit();
    });
    $("#btnStick").click(function() {
        $("hdrResult").html("Stick!").attr('class', 'win');
        $("#result").toggle();
        end();
    });
    $("#btnRestart").click(function() {
        $("#result").toggle();
        $(this).toggle();
        $("#my_hand").empty();
        $("#hdrResult").html('');
        usedCards.length = 0;
        hand.cards.length = 0;
        hand.current_total = 0;

        $("#btnDeal").toggle()
                    .trigger("click");
    })
});

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
} while(!good_card);

good_card = false;
hand.sumCardTotal()
}

function end() {
    $("#btnHit").toggle();
    $("#btnStick").toggle();
    $("#btnRestart").toggle();
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

function getRandom(num) {
    return Math.floor(Math.random() * num);
    }
        
function capitalize(str) {
    const lower = str.toLowerCase();
    return str.charAt(0).toUpperCase() + lower.slice(1);
}
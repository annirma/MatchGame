function CreateDeck() {

    let cardValue = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 0, "J", "Q", "K"];
    let cardSuit = ["S", "D", "C", "H"];

    let deck = [];

    cardValue.forEach(function (value) {
        for (var i = 0; i < cardSuit.length; i++) {
            let theSuit = cardSuit[i];
            let card = value + theSuit;
            deck.push(card);
        }
    }
    );

    return deck;
}

//function randomValue(cardValue, cardSuit) {

//    return cardValue[Math.floor(Math.random() * cardValue.length)] + cardSuit[Math.floor(Math.random() * cardSuit.length)];

//}

let deck = CreateDeck();

function Deal(theDeck) {
    let playerCards = [];
    let computerCards = [];

    for (var i = 0; i < theDeck.length; i++) {
        if (i % 2 == 0)
            playerCards.push(theDeck[i]);
        else
            computerCards.push(theDeck[i]);
    }

    return {
        playerCards: playerCards,
        computerCards: computerCards
    }
}

let dealtCards = Deal(deck);
console.log(dealtCards);

let theGame = {
    score: 0
};

function ComputerDrawsCard(allComputerCards, cardDrawnFunction) {
    setTimeout(function () {
        let theCard = allComputerCards.pop();

        cardDrawnFunction(theCard);

    }, 1500);
}

function PlayerDrawsCard(allPlayerCards, playerDrawnFunction) {
    setTimeout(function () {
        let theCard = allPlayerCards.pop();

        playerDrawnFunction(theCard);

    }, 2500);
}

ComputerDrawsCard(
    dealtCards.computerCards,
    function (theCard) {
        console.log('this is where the card shows up! ' + theCard);
        theGame.currentComputerCard = theCard;
    });

PlayerDrawsCard(
    dealtCards.playerCards,
    function (theCard) {
        console.log('this is where the card shows up! ' + theCard);
        theGame.score += ScoreCards(theCard, theGame.currentComputerCard);
        console.log(theGame.score);
    });


function ScoreCards(card1, card2) {
    let value1 = card1.charAt(0);
    let suit1 = card1.charAt(1);

    let value2 = card2.charAt(0);
    let suit2 = card2.charAt(1);

    if (value1 === value2 || suit1 === suit2) return 1;
    else return -1;
}




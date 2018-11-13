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

function ComputerDrawsCard(allComputerCards) {
    return allComputerCards.pop();
}

let theComputerCard = ComputerDrawsCard(dealtCards.computerCards);

function PlayerDrawsCard(allPlayerCards) {
    return allPlayerCards.pop();
}

let thePlayerCard = PlayerDrawsCard(dealtCards.playerCards);

console.log(theComputerCard);
console.log(thePlayerCard);

function ScoreCards(card1, card2) {
    let value1 = card1.charAt(0);
    let suit1 = card1.charAt(1);

    let value2 = card2.charAt(0);
    let suit2 = card2.charAt(1);

    if (value1 === value2 || suit1 === suit2) return 1;
    else return -1;
}

let score = 0;

for (var i = 0; i < 4; i++) {

    theComputerCard = ComputerDrawsCard(dealtCards.computerCards);
    thePlayerCard = PlayerDrawsCard(dealtCards.playerCards);
    let scoreDelta = ScoreCards(thePlayerCard, theComputerCard);

    score += scoreDelta;

    console.log(scoreDelta);
    console.log("Total score: " + score);

}

//let computerCards = deck.slice(0, 26);
//let playerCards = deck.slice(26, 52);

//playerDeck.forEach(
//    function (item) {
//        console.log(item)
//    }
//);


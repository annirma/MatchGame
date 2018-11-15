
let second = "00";
let minute = "00";
let hour = "00";
let timer = $('time');
let timeCounter = false;
let deck = $('#deck')
let player = $('#player')
let computer = $('#computer')
let discard = $('#discard')
let played = $('#played')
let buttonNewGame = $('.newgame')
let buttonPause = $('.pause')
let deckID;
let playerCard;
let computerCard;
const baseUrl = 'https://deckofcardsapi.com/api/deck/'
let score = 0;
let keepPlaying = true;

deck.hide();
player.hide();
computer.hide();
discard.hide();
played.hide();

$(function () {

    $('.newgame').click(function () {
        $.getJSON(baseUrl + "new/shuffle/")
            .done(function (data) {
                deckID = data.deck_id;
                console.log(deckID);
                timeCounter = true;
                deck.show();
                player.show();
                computer.show();
                discard.show();

                $.getJSON(baseUrl + deckID + "/draw/")
                    .done(function (drawData) {
                        setPlayerCard(drawData.cards[0]);
                       
                        nextComputerCard();

                    });

            });
    });


    $('#player img.card').click(function () {
        let a = playerCard;
        let b = computerCard;
        let charValuePlayer = a.charAt(0);
        let charValueComputer = b.charAt(0);
        let charSuitPlayer = a.charAt(1);
        let charSuitComputer = b.charAt(1);
        console.log(charSuitPlayer);
        if (charValuePlayer == charValueComputer || charSuitPlayer == charSuitComputer) {
            score++;
            $("#score").text(score);
        }
        else {
            score--;
            $("#score").text(score);
        }
    });

    buttonPause.click(function () {
        timeCounter = false;
        keepPlaying = false;
    });

});

function setPlayerCard(card) {
    playerCard = card.code;
    $('#player img.card')
        .attr('src', card.image);
}

function setComputerCard(cardC) {
    computerCard = cardC.code;
    $('#computer img.card')
        .attr('src', cardC.image);
    $('#computer img.card').toggleClass('rotated');

}

function nextComputerCard() {
    setTimeout(function () {
        $.getJSON(baseUrl + deckID + '/draw/')
            .done(function (computerDraw) {
                setComputerCard(computerDraw.cards[0]);
                
                if (keepPlaying) {
                    nextComputerCard();
                }
                else {

                }
                   
            });

    }, 3000);
}


setInterval(function () {
    if (timeCounter == true) {
        second++;
        if (second < 10)
            second = "0" + second;
        if (second % 60 == 0) {
            minute++;
            second = "00";
            if (minute < 10)
                minute = "0" + minute;
            if (minute % 60 == 0) {
                hour++;
                minute = "00";
                if (hour < 10)
                    hour = "0" + hour;
            }
        }
        timer.text(hour + ":" + minute + ":" + second)
    };
}, 1000);




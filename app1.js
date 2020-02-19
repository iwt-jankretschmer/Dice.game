var scores;
var roundScore;
var activePlayer;
var gamePlaying;
var numbere;
var lastThrow1;
var lastThrow2;
var proof;
var sameSix1;
var sameSix2;
init();
////document.querySelector("#current-"+activePlayer).textContent=dice;
////document.querySelector("#current-"+activePlayer).innerHTML="<em>"+dice+"</em>"
////var x= document.querySelector("#score-0").textContent;
console.log(sameSix1, sameSix2);
document.querySelector(".btn-bot-roll").addEventListener("click", function () {
    $(".btn-roll").click();
});
document.querySelector(".btn-roll").addEventListener("click", function () {
    if (gamePlaying) {
        //1.Random number
        var dice1 = Math.floor(Math.random() * 6) + 1;
        console.log(lastThrow1, " ", dice1);
        var dice2 = Math.floor(Math.random() * 6) + 1;
        console.log(lastThrow2, " ", dice2);
        // 2.Display
        var diceDom = document.querySelector(".dice");
        diceDom.style.display = "block";
        diceDom.src = "dice-" + dice1 + ".png";
        var diceDom = document.querySelector(".dice2");
        diceDom.style.display = "block";
        diceDom.src = "dice-" + dice2 + ".png";
        console.log(sameSix1, sameSix2);
        // 3.Update round score if number not 1
        if (dice1 !== 1 && dice2 !== 1 && sameSix1 !== true && sameSix2 !== true) {
            //add score
            roundScore += dice1;
            roundScore += dice2;
            document.querySelector("#current-" + activePlayer).textContent = roundScore.toString();
        }
        else {
            ////nextPlayer();
            nextPlayer();
        }
        var hello = function (lastThrow, currentThrow) {
            return lastThrow == 6 && currentThrow == 6;
        };
        console.log(activePlayer);
        sameSix1 = hello(lastThrow1, dice1);
        sameSix2 = hello(lastThrow2, dice2);
        lastThrow1 = dice1;
        lastThrow2 = dice2;
    }
});
document.querySelector(".btn-hold").addEventListener("click", function () {
    if (gamePlaying) {
        //add current score to global score
        scores[activePlayer] += roundScore;
        //scores[activePlayer]= scores[activePlayer]+roundScore
        //update UI
        document.querySelector("#score-" + activePlayer).textContent =
            scores[activePlayer];
        // Check if player won the Game
        if (scores[activePlayer] >= numbere) {
            document.querySelector("#name-" + activePlayer).textContent = "Winner!";
            document.querySelector(".dice").style.display = "none";
            document
                .querySelector(".player-" + activePlayer + "-panel")
                .classList.add("winner");
            document
                .querySelector(".player-" + activePlayer + "-panel")
                .classList.remove("active");
            gamePlaying = false;
        }
        else {
            //next Player
            nextPlayer();
        }
    }
});
function nextPlayer() {
    //activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    //same as
    if (activePlayer === 0) {
        activePlayer = 1;
    }
    else {
        activePlayer = 0;
    }
    roundScore = 0;
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    document.querySelector(".dice").style.display = "none";
    document.querySelector(".dice2").style.display = "none";
    //document.querySelector(".player-0-panel").classList.remove("active");
    //document.querySelector(".player-1-panel").classList.add("active");
}
document.querySelector(".btn-new").addEventListener("click", init);
function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    document.querySelector(".dice").style.display = "none";
    document.querySelector(".dice2").style.display = "none";
    document.getElementById("score-0").textContent = "0";
    document.getElementById("score-1").textContent = "0";
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";
    document.getElementById("name-0").textContent = "Player 1";
    document.getElementById("name-1").textContent = "Player 2";
    document.querySelector(".player-1-panel").classList.remove("winner");
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.add("active");
    numbere = prompt("Please enter the Point Goal");
}

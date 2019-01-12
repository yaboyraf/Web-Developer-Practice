const randomNumber1 = Math.floor(Math.random() * 6) + 1;

const randomNumber2 = Math.floor(Math.random() * 6) + 1;

const randomDiceImage1 = "images/dice" + randomNumber1/*(1, 6)*/ + ".png";

const image1 = document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage1);

const randomDiceImage2 = "images/dice" + randomNumber2/*(1, 6)*/ + ".png";

const image2 = document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

// function randomNumber(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// };

if (randomDiceImage1 > randomDiceImage2) { //if player 1 wins
    document.querySelector('h1').innerHTML = 'Player 1 wins!'; 
} else if (randomDiceImage1 < randomDiceImage2) { //if player 2 wins
    document.querySelector('h1').innerHTML = 'Player 2 wins!'; 
} else { //it's a draw
    document.querySelector('h1').innerHTML = 'Draw';
}
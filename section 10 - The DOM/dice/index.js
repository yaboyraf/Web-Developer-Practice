//var randomNumber1 = Math.floor(Math.random() * 6) + 1;
const randomDiceImage1 = "images/dice" + randomNumber(1, 6) + ".png";

const image1 = document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage1);

const randomDiceImage2 = "images/dice" + randomNumber(1, 6) + ".png";

const image2 = document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
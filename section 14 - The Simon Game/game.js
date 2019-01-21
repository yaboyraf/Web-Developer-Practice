//3. make an array containing colors
const buttonColors = ['red', 'blue', 'green', 'yellow'];

//5. create an empty array called gamePattern
const gamePattern = [];

//1. make a function called nextSequence
function nextSequence() {
    //2. generate a number between 0 and 3
    const randomNumber = Math.floor(Math.random() * 4);
    //console.log(randomNumber);

    //4. create a variable called randomChosenColor and use randomNumber to select a random color from buttonColors array
    const randomChosenColor = buttonColors[randomNumber];

    //6. add randomChosenColor from step 4 to the end of gamePattern;
    gamePattern.push(randomChosenColor);
    console.log('the color is: ' + randomChosenColor);

};

nextSequence();
//2.3. make an array containing colors
const buttonColors = ['red', 'blue', 'green', 'yellow'];
//2.5. create an empty array called gamePattern
let gamePattern = [];
//4.3. create a new empty array called userClickedPattern
let userClickedPattern = [];

let started = false;
let level = 0;
//7.1 detect kepress to start the game
$(document).keypress(function() {
    if (!started) {
        $('#level-title').text('Level 0' + level);
        nextSequence();
        started = true;
    }
});
//4.1. use JQuery to create a handler function to detect clicks
$('.btn').click(function() {
    //4.2 
    const userChosenColor = $(this).attr('id');
    //4.4. add contents of the variable userChosenColor to the end of the new userClickedPattern
    userClickedPattern.push(userChosenColor);
    //5.1
    playSound(userChosenColor);
    animatePress(userChosenColor);

    console.log('the user pattern is: ' + userClickedPattern);

    checkAnswer(userClickedPattern.length - 1);
});

//2.1. make a function called nextSequence
function nextSequence() {
    userClickedPattern = [];
    level++;
    $('#level-title').text('Level ' + level);
    //2.2. generate a number between 0 and 3
    const randomNumber = Math.floor(Math.random() * 4);
    //2.4. create a variable called randomChosenColor and use randomNumber to select a random color from buttonColors array
    const randomChosenColor = buttonColors[randomNumber];
    //2.6. add randomChosenColor from step 4 to the end of gamePattern;
    gamePattern.push(randomChosenColor);
    console.log('the next color is: ' + randomChosenColor);
    //3.1. use JQuery to select the button with the same id as randomChosenColor
    $('#' + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100); //3.2. flash animation
    //5.4. when user clicks a color, sound will play
    playSound(randomChosenColor);
};

function checkAnswer(currentLevel) {
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if(gamePattern.length === userClickedPattern.length) {
            console.log(`Hey you're pretty good!`);
            setTimeout(function() {
                nextSequence();
            }, 1000);
        }
    } else {
        playSound('wrong');
        $('body').addClass('game-over');
        setTimeout(function() {
            $('body').removeClass('game-over');
        }, 150);
        $('h1').text(`Game Over! Press Any Key to Restart`);

        startOver();
    }
};

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}

//5.2. create a new sound function called playSound that takes in (name)
function playSound(name) {
    //5.3. move the Audio() function from nextSequence
    const audio = new Audio('sounds/' + name + '.mp3');
    audio.play();
};

//6.1. create a function called animatePress that takes in currentColor
function animatePress(currentColor) {
    //6.2. use JQuery to add the .pressed class when a button is pressed
    $('#' + currentColor).addClass('pressed');
    //6.3. use setTimeout to remove the .pressed class after x milliseconds
    setTimeout(function() {
        $('#' + currentColor).removeClass('pressed');
    }, 100);
};

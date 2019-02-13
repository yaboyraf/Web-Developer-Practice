let temp = 65

if(temp >= 60 && temp <= 90) {
    console.log(`it's pretty nice out`)
} else if (temp <= 0 || temp >= 120) {
    console.log(`don't go outside`);
} else {
    console.log(`go anywhere!`);
}

//challenge area
let isGuestOneVegan = true
let isGuestTwoVegan = false

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('only offer vegan dishes')
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('make sure to offer some vegan options')
} else {
    console.log('offer anything on the menu')
}
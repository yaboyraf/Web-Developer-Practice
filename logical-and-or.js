let temp = 65
// logical and operator - true if both sides are true. false otherwise
// logical or operator
if (temp >= 60 && temp <= 90) {
    console.log(`it's pretty nice out`)
} else if (temp >=0 || temp <= 120) {
    console.log(`don't go outside`)
} else {
    console.log(`go out if you want`)
}

// challenge area
let isGuestOneVegan = true
let isGuestTwoVegan = false

// are both vegan? only vegan vegan dishes
// at least one vegan? offer some vegan and non-vegan options
// else, thank god.

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log(`Only offer vegan dishes`)
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log(`Offer some vegan dishes`)
} else {
    console.log(`Thank god`)
}
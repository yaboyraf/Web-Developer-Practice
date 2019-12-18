// let num = 103.941

// console.log(num.toFixed(2))

// console.log(Math.round(num))
// console.log(Math.floor(num))
// console.log(Math.ceil(num))

// let min = 10
// let max = 30
// let randomNum = Math.floor(Math.random() * (max - min + 1)) + min

// console.log(randomNum)

const makeGuess = function(guess){
    const min = 1
    const max = 5
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min

    return guess === randomNum
}

console.log(makeGuess(1))
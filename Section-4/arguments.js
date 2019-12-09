let add = function (a, b, c) {
    return a + b + c
}

let result = add(10, 1, 20)

console.log(result)

// default arguments 
let getScoreText = function (name = 'Anonymous', score = 0) {
    return `Name: ${name}, Score: ${score}`
}

let scoreText = getScoreText('Raf', 100)
console.log(scoreText)

// challenge area - tip calculator

let getTip = function (total, percentage = .2) {
    let convert = percentage * 100
    let totalWithTip = (total * percentage) + total
    return `A bill of $${total} with a ${convert}% tip comes out to $${totalWithTip}`
}

let tip = getTip(100, .20)
console.log(tip)

console.log('Andrew')

// everything below is from a video about template strings. I just watched the video for consistency
// yay studying!
let name = 'Vikram'
let age = 12

console.log(`${name} is ${age} years old and he just learned about template strings`)
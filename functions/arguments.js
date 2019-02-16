//multiple arguments
let add = function (a, b, c) {
   return a + b + c
}

let result = add(10, 1, 5)
console.log(result)

//default arguments 
let getScoreText = function (name = 'Anonymous', score = 0) {
    return 'Name: ' + name + ', Score: ' + score
}

let scoreText = getScoreText(undefined, 100)
console.log(scoreText)

//challenge
//total, tipPercent .2

let getTip = function (total, percentage = .2) {
    return total * percentage
}

let totalWithTip = getTip(56.29, .30)
console.log(totalWithTip)
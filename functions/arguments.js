//multiple arguments
let add = function (a, b, c) {
   return a + b + c
}

let result = add(10, 1, 5)
console.log(result)

//default arguments 
let getScoreText = function (name = 'Anonymous', score = 0) {
    return `Name: ' ${name}, Score: ${score}`
}

let scoreText = getScoreText(undefined, 100)
console.log(scoreText)

//challenge
//total, tipPercent .2
//A 25% tip on $40 would be $10
let getTip = function (total, percentage = .2) {
    let percent = percentage * 100
    let tip = total * percentage
    return `A ${percent}% tip on $${total} would be $${tip}`
}

let totalWithTip = getTip(60)
console.log(totalWithTip)


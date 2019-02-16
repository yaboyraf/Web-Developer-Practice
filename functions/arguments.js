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


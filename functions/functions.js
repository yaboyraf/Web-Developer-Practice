// function - input(argumen), code, output(return value)

let greetUser = function () {
    console.log('hi')
}

greetUser()

let square = function (num) {
    let result = num * num
    return result
}

let value = square(3)
let otherValue = square(10)

console.log(value)
console.log(otherValue)

let convertFahrenheitToCelsius = function(temp) {
    let celsius = (temp - 32) * (5 / 9)
    return celsius
}

let tempOne = convertFahrenheitToCelsius(32)
console.log(tempOne)

let tempTwo = convertFahrenheitToCelsius(60)
console.log(tempTwo)
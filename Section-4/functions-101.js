// Funtion - input (argument), code, output (return value)

let greetUser = function () {
    console.log('Hello')
}

greetUser()
greetUser()

let square = function (num) {
    let result = num * num
    return result
}

let value = square(3)
let otherValue = square(12)

console.log(value)
console.log(otherValue)

// challenge area

// create a function that converts fahrenheit to celsius: convertFahrenheitToCelsius
let convertFahrenheitToCelsius = function (t) {
    let celsius = (t - 32) * 5 / 9

    return celsius
}
// call a couple of times (32 -> 0) (68 -> 20)
let convert1 = convertFahrenheitToCelsius(32)
let convert2 = convertFahrenheitToCelsius(68)


// print converted values
console.log(convert1)
console.log(convert2)
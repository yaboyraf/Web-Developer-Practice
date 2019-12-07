// global scope (convertFahrenheitToCelsius, tempOne, tempTwo)
    // local scope (fahrenheit, celsius)
        // local scope (isFreezing)

let convertFahrenheitToCelsius = function (t) {
    let celsius = (t - 32) * 5 / 9

    if (celsius <= 0) {
        let isFreezing = true
    }

    return celsius
}

let convert1 = convertFahrenheitToCelsius(32)
let convert2 = convertFahrenheitToCelsius(68)


console.log(convert1)
console.log(convert2)

//*this is another refresher on how scope works in js.*/
//*if you somehow forget about lexical order or how js scope works, watch a youtube video on it */
// undefined for variable
let name

name = 'jen'

if (name === undefined) {
    console.log(`there's no name`)
} else {
    console.log(name)
}

// undefined for function arguments 
// undefined as function return default value
let square = function (num) {
    console.log(num)
}

let result = square()

console.log(result)

// null as assigned values
let age = 27

age = null

console.log(age)
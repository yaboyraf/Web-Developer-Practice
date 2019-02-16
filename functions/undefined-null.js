//undefined for variable

let name 

name = 'troy'

if (name === undefined) {
    console.log('it is')
} else {
    console.log(name)
}

//undefined for function arguments
//undefined as function return default value
let square = function (num) {
    console.log(num)
}

let result = square()
console.log(result)

//null as assigned value
let age = 26

age = null

console.log(age)
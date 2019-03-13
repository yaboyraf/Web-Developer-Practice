let name = 'Raf'

// length property
console.log(name.length)

// convert to uppercase
console.log(name.toUpperCase())

// convert to lowercase
console.log(name.toLowerCase())

// includes method
let password = 'acd123asda098'

console.log(password.includes('password'))

// trim
console.log(name.trim())

// challenge area
// isValidPassword
// length is more than 8 - and it doesn't contain the word 'password'

let isValidPassword = function(password) {
    if (password.length > 8 && !password.includes('password')) {
        return true
    } else {
        return false
    }
}

console.log(isValidPassword('asdfs234asd'))
console.log(isValidPassword('abcpassword123'))
console.log(isValidPassword('~fjfj^ska'))


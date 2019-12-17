let name = ' Raf'

// length property
console.log(name.length)

// convert to upper case

console.log(name.toUpperCase())

console.log(name.toLowerCase())

// includes
let password = 'asdasd123123'
console.log(password.includes('password'))

// trim
console.log(name.trim())

// challenge area
// isValidPassword fjfjfjfjfjfjf
// length is more than 8 - and it doesn't contain the word password

const isValidPassword = function(password) {
    if (password.length > 8 && !password.includes('password')) {
        return false
    } 
    return true
}

console.log(isValidPassword('aaaaaaaaaaa'))
console.log(isValidPassword('password123123'))
console.log(isValidPassword('hello?????'))
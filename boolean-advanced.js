let isAccountLocked = false
let userRole = 'admin'

if (isAccountLocked) {
    console.log('Is account locked')
} else if (userRole === 'admin') {
    console.log('Welcome Admin')
} else {
    console.log('Welcome')
}

// challenge area
let temp = 4

// it's freezing outside!
// it's hot outside!
// go for it. it's pretty nice out
if (temp <=45) {
    console.log(`It's freezing outside!`)
} else if (temp >=70) {
    console.log(`It's hot outside!`)
} else {
    console.log(`It's pretty nice out`)
}
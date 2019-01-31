let accountIsLocked = false
let userRole = 'user'

if (accountIsLocked) {
    console.log('Account is locked') 
} else if(userRole === 'admin') {
    console.log('Welcome, admin')
} else {
    console.log('Welcome!')
}
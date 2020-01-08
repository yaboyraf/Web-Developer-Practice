// create an array with five todos
// you have x todos
// print the first and second to last items -> Todo: aklsjdalk

const todo = ['Wake up', 'Go to work', 'Work', 'Go home', 'Go to sleep']

console.log(`You have ${todo.length} todos on your todo list`)
// console.log(`Todo #1: ${todo[0]}`)
// console.log(`Todo #4: ${todo[todo.length - 2]}`)

// array challenge
// delete the third item
// add a new item onto the end
// remove the first item from the list

console.log(todo.splice(2, 1))
console.log(todo.push('Study'))
console.log(todo.shift())
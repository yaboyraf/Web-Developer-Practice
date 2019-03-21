const todos = ['Get dressed', 'go to work', 'do work', 'go home']

// delete the third item
// add a new item in the end
// remove the first from the list

todos.splice(2, 1)
todos.push('go to sleep')
todos.shift(0)

console.log(`You have ${todos.length} todos on your list`)
console.log(todos)
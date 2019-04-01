const todos = ['Wake up', 'Get dressed', 'go to work', 'do work', 'go home']

// delete the third item
// add a new item in the end
// remove the first from the list

todos.splice(2, 1)
todos.push('get coffee')
todos.shift()

console.log(`You have ${todos.length} todos on your list`)

//1. the first item
//2. the second item

todos.forEach(function(todo, index) {
    const num = index + 1
    console.log(`${num}. ${todo}`)
})
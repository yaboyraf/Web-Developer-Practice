//const todos = ['Wake up', 'Get dressed', 'go to work', 'do work', 'go home']

const todos = [{
    text: 'Order cat food',
    completed: true
}, {
    text: 'Clean kitchen',
    completed: false
}, {
    text: 'Buy food',
    completed: true
}, {
    text: 'Do work',
    completed: false
}, {
    text: 'Exercise',
    completed: true
}]

const deleteToDo = function (todos, todoText) {
    const index = todos.findIndex(function (todo) {
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })
    if (index > -1) {
        todos.splice(index, 1)
    }
}

// 1. convert array to an array of objects -> text, completed
// 2. create a function to remove a todo by text value 

deleteToDo(todos, 'buy food!')
console.log(todos)
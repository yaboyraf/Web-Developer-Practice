const todo = [{
  text:'Wake up',
  completed: true
}, {
  text:'Go to work',
  completed: false
}, {
  text:'Work',
  completed: false
}, {
  text:'Go home',
  completed: true
}, {
  text:'Go to sleep',
  completed: false
}]

const deleteTodo = function(todo, todoText) {
  const index = todo.findIndex(function (todo) {
    return todo.text.toLowerCase() === todoText.toLowerCase()
  })
  if (index > -1) {
    todo.splice(index, 1)
  }
}
// 1. convert array to array of objects -> text, completed
// 2. create function to remove a to-do by text value

deleteTodo(todo, 'go to work')
console.log(todo)
  
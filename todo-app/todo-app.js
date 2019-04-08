const todos = [{
    text: 'Order cat food',
    completed: false
}, {
    text: 'Clean kitchen',
    completed: true
}, {
    text: 'Buy food',
    completed: true
}, {
    text: 'Do work',
    completed: false
}, {
    text: 'Exercise',
    completed: false
}]

//looks for incomplete todos
const incompleteTodos = todos.filter(function(todo) {
    return !todo.completed
})

const summary = document.createElement('h3')
summary.textContent = `You have ${incompleteTodos.length} todos left`
document.querySelector('body').appendChild(summary)

todos.forEach(function(todo) {
    const p = document.createElement('p')
    p.textContent = todo.text
    document.querySelector('body').appendChild(p)
})

document.querySelector('#input-1').addEventListener('input', function(e) {
    console.log(e.target.values)
})

// listen for new todo creation
document.querySelector('#add-btn').addEventListener('click', function(ev) {
    ev.target.textContent = 'Todo added!'
})

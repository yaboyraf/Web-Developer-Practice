let todos = []

const filters = {
    searchText: '',
    hideCompleted: false
}

const todoJSON = localStorage.getItem('todos')

if (todoJSON !== null) {
    todos = JSON.parse(todoJSON)
}

const renderTodos = function(todos, filters) {
    let filteredTodos = todos.filter(function(todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed

        return searchTextMatch && hideCompletedMatch
    })

    const incompleteTodos = filteredTodos.filter(function(todo) {
        return !todo.completed
    })

    document.querySelector('#todos').innerHTML = ''
    
    const summary = document.createElement('h3')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    document.querySelector('#todos').appendChild(summary)
    
    filteredTodos.forEach(function(todo) {
        const p = document.createElement('p')
        p.textContent = todo.text
        document.querySelector('#todos').appendChild(p)
    })
}

renderTodos(todos, filters)

document.querySelector('#search-txt').addEventListener('input', function(e){
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#add-todo').addEventListener('submit', function(e) {
    e.preventDefault()
    todos.push({
        text: e.target.elements.text.value,
        completed: false
    })
    localStorage.setItem('todos', JSON.stringify(todos))

    renderTodos(todos, filters)
    e.target.elements.text.value = ''
})

document.querySelector('#hide-complete').addEventListener('change', function(e) {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})


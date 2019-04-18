// wire up button event
// remove todo by id
// save and rerender todos list


const getSavedTodos = function() {
    const todosJSON = localStorage.getItem('todos')

    if (todosJSON !== null) {
        return JSON.parse(todosJSON)
    } else {
        return []
    }
}

const removeTodos = function(id) {
    const todoIndex = todos.findIndex(function(todo) {
        return todo.id === id
    })
    if(todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

const saveTodos = function(todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}

const renderTodos = function(todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed

        return searchTextMatch && hideCompletedMatch
    })

    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })

    document.querySelector('#todos').innerHTML = ''
    document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos))

    filteredTodos.forEach(function (todo) {
        document.querySelector('#todos').appendChild(generateTodoDOM(todo))
    })
}

// set up a root div 
// set up and append a checkbox (set type attribute)
// someNode.setAttribute('type', text)
// set up and append a span (set text)
// set up and append a button

const generateTodoDOM = function (todo) {
    const todoElements = document.createElement('div')
    const checkbox = document.createElement('input')
    const todoText = document.createElement('span')
    const removeButton = document.createElement('button')

    // set up todo checkbox
    checkbox.setAttribute('type', 'checkbox')
    todoElements.appendChild(checkbox)

    // set up todo text
    todoText.textContent = todo.text
    todoElements.appendChild(todoText)

    //set up the remove button
    removeButton.textContent = 'x'
    todoElements.appendChild(removeButton)
    removeButton.addEventListener('click', function() {
        removeTodos(todo.id)
        renderTodos(todos, filters)
        saveTodos(todos)
    })

    return todoElements
}

const generateSummaryDOM = function(incompleteTodos) {
    const summary = document.createElement('h3')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    return summary 
}